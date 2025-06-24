/**
 * Constructs a URL by combining a base URL and a path.
 * Handles trailing slashes correctly.
 */
export function constructUrl(base: string, path: string): string {
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}

/**
 * Gets the site URL from environment variables or falls back to a default.
 */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://vannharvest.com';
}
