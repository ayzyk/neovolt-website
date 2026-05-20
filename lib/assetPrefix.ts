const prefix = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');

/** GitHub Pages: static export does not prefix next/image src; add basePath manually. */
export function withAssetPrefix(src: string): string {
  if (!src) return src;
  if (/^(https?:|data:)/i.test(src)) return src;
  if (!prefix) return src;
  if (src.startsWith(prefix + '/') || src === prefix) return src;
  const path = src.startsWith('/') ? src : `/${src}`;
  return `${prefix}${path}`;
}
