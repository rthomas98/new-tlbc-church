// Renders CMS rich-text safely. Plain strings pass through unchanged; any HTML
// from the editor is sanitized to a small allowlist before rendering.
const ALLOWED_TAGS = new Set(['p', 'br', 'strong', 'em', 'b', 'i', 'u', 'h2', 'h3', 'ul', 'ol', 'li', 'a', 'blockquote']);
const VOID_TAGS = new Set(['br']);

function decodeEntities(value: string) {
  return value
    .replace(/&#x([0-9a-f]+);?/gi, (_, hex: string) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);?/g, (_, dec: string) => String.fromCodePoint(Number.parseInt(dec, 10)))
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>');
}

function escapeAttribute(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function isSafeHref(value: string) {
  const decoded = decodeEntities(value).trim();
  const normalized = decoded.replace(/[\u0000-\u001f\s]+/g, '').toLowerCase();

  return (
    decoded.startsWith('/') ||
    decoded.startsWith('#') ||
    normalized.startsWith('https://') ||
    normalized.startsWith('http://') ||
    normalized.startsWith('mailto:') ||
    normalized.startsWith('tel:')
  );
}

function sanitizeTag(rawTag: string) {
  const match = rawTag.match(/^<\/?\s*([a-z0-9]+)/i);
  if (!match) return '';

  const tag = match[1].toLowerCase();
  if (!ALLOWED_TAGS.has(tag)) return '';

  const closing = /^<\//.test(rawTag);
  if (closing) return VOID_TAGS.has(tag) ? '' : `</${tag}>`;
  if (VOID_TAGS.has(tag)) return `<${tag}>`;
  if (tag !== 'a') return `<${tag}>`;

  const hrefMatch = rawTag.match(/\shref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/i);
  const href = hrefMatch?.[1] ?? hrefMatch?.[2] ?? hrefMatch?.[3] ?? '';
  if (!href || !isSafeHref(href)) return '<a>';

  const targetMatch = rawTag.match(/\starget\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/i);
  const target = targetMatch?.[1] ?? targetMatch?.[2] ?? targetMatch?.[3] ?? '';
  const safeTarget = target === '_blank' ? ' target="_blank" rel="noopener noreferrer"' : '';

  return `<a href="${escapeAttribute(decodeEntities(href).trim())}"${safeTarget}>`;
}

function sanitizeHtml(html: string) {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<\/?(script|style|iframe|object|embed|svg|math)[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<[^>]*>/g, sanitizeTag);
}

export default function Prose({
  html,
  className,
  style,
}: {
  html: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const clean = sanitizeHtml(html ?? '');
  return <div className={className} style={style} dangerouslySetInnerHTML={{ __html: clean }} />;
}
