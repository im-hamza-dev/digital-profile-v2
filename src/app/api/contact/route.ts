import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getClientIp, isRateLimited } from '@/lib/rate-limit';

const TO_EMAIL = 'scrum.stack@gmail.com';

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again in 15 minutes.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, message, services, budget } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const user = process.env.SMTP_USER ?? process.env.GMAIL_USER;
    const pass = process.env.SMTP_PASS ?? process.env.GMAIL_APP_PASSWORD;

    if (!user || !pass) {
      console.error('Missing SMTP credentials (SMTP_USER/SMTP_PASS or GMAIL_USER/GMAIL_APP_PASSWORD)');
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    const servicesText = Array.isArray(services) ? services.join(', ') : services || 'Not specified';
    const budgetText = budget || 'Not specified';

    await transporter.sendMail({
      from: `"Client: ${name}" <${user}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New contact form: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Services: ${servicesText}`,
        `Budget: ${budgetText}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: [
        '<p><strong>Name:</strong> ' + escapeHtml(name) + '</p>',
        '<p><strong>Email:</strong> <a href="mailto:' + escapeHtml(email) + '">' + escapeHtml(email) + '</a></p>',
        '<p><strong>Services:</strong> ' + escapeHtml(servicesText) + '</p>',
        '<p><strong>Budget:</strong> ' + escapeHtml(budgetText) + '</p>',
        '<p><strong>Message:</strong></p>',
        '<p>' + escapeHtml(message).replace(/\n/g, '<br>') + '</p>',
      ].join(''),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
