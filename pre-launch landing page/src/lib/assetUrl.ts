/**
 * Returns the correct URL for a file in the Next.js public/ directory.
 *
 * In production (NEXT_PUBLIC_ASSET_PREFIX is set), public/ files are uploaded
 * to S3 under  <prefix>/public/<path>  so we redirect there to serve from CDN.
 * In local dev (no prefix), files are served by the Next.js server as usual.
 *
 * Usage:
 *   publicAsset('/herobg2.png')
 *   → 'https://deal360-staging.s3.eu-central-1.amazonaws.com/frontend/app/public/herobg2.png'
 *   → '/herobg2.png'  (local dev)
 */
export function publicAsset(path: string): string {
  const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return prefix ? `${prefix}/public${normalizedPath}` : normalizedPath
}
