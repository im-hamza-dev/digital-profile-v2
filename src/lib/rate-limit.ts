/**
 * In-memory rate limiter by IP.
 * For serverless/multi-instance deployments, consider Redis (e.g. @upstash/ratelimit).
 */

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 3; // max submissions per window per IP

const store = new Map<string, number[]>();

function prune(timestamps: number[]): number[] {
  const cutoff = Date.now() - WINDOW_MS;
  return timestamps.filter((t) => t > cutoff);
}

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  let timestamps = store.get(ip) ?? [];
  timestamps = prune(timestamps);

  if (timestamps.length >= MAX_REQUESTS) {
    store.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  store.set(ip, timestamps);
  return false;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() ?? 'unknown';
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp.trim();
  return 'unknown';
}
