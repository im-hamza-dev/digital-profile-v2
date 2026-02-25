'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: '',
    services: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          services: formData.services,
          budget: formData.budget,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(data.error || 'Failed to send message');
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
        budget: '',
        services: [],
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const serviceOptions = ['Design', 'Development', 'Consulting'];

  return (
    <section
      id="contact"
      className="group py-16 sm:py-20 lg:py-[7.5rem] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute top-0 left-1/3 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 relative">
        <div className="  lg:top-24 lg:self-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8"
          >
            Let&apos;s create <br className="hidden sm:block" />{' '}
            <span className="transition-colors group-hover:text-primary">
              something
            </span>{' '}
            <span className="transition-colors group-hover:text-primary">
              amazing
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-muted-foreground text-lg sm:text-xl mb-4 sm:mb-4 leading-relaxed"
          >
            Have a project in mind? Let&apos;s talk about how we can help bring
            your vision to life.
          </motion.p>

          <div className="space-y-1 sm:space-y-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <a
                href="mailto:scrum.stack@gmail.com"
                className="text-foreground text-base sm:text-lg font-semibold hover:text-primary transition-colors"
              >
                scrum.stack@gmail.com
              </a>
            </motion.div>
          </div>
        </div>
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-24">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="bg-background border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-foreground font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-secondary border border-border rounded-lg sm:rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-foreground font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-secondary border border-border rounded-lg sm:rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                    Services Interested In
                  </label>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border transition-all text-sm sm:text-base ${
                          formData.services.includes(service)
                            ? 'bg-primary border-primary text-primary-foreground font-semibold'
                            : 'bg-secondary border-border text-muted-foreground hover:border-primary/50'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-foreground font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-secondary border border-border rounded-lg sm:rounded-xl text-foreground focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
                  >
                    <option value="">Select budget</option>
                    <option value="< $10k">&lt; $10k</option>
                    <option value="$10k - $25k">$10k - $25k</option>
                    <option value="$25k - $50k">$25k - $50k</option>
                    <option value="$50k+">$50k+</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-foreground font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-secondary border border-border rounded-lg sm:rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    placeholder="Share your vision..."
                    required
                  />
                </div>
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 dark:text-green-400 text-sm sm:text-base">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-600 dark:text-red-400 text-sm sm:text-base">
                    {errorMessage ||
                      'Failed to send message. Please try again or contact us directly at scrum.stack@gmail.com'}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer w-full px-6 sm:px-8 py-4 sm:py-5 bg-primary text-primary-foreground font-bold rounded-lg sm:rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="text-xl group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              id="calendly"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="bg-background border border-border rounded-2xl sm:rounded-3xl overflow-hidden"
            >
              <div className="p-4 sm:p-6 border-b border-border">
                <h3 className="text-foreground font-semibold text-lg sm:text-xl">
                  Or book a 30-min call
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mt-1">
                  Pick a time that works for you - no redirect, book on the
                  spot.
                </p>
              </div>
              <div className="min-h-[700px] w-full">
                <iframe
                  title="Book a meeting with Hamza"
                  src="https://calendly.com/hi-hamza-dev/30min"
                  width="100%"
                  height="100%"
                  className="min-h-[700px] w-full border-0"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
