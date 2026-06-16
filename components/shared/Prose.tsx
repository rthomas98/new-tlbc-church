import DOMPurify from 'isomorphic-dompurify';

// Renders CMS rich-text safely. Plain strings pass through unchanged; any HTML
// from the editor is sanitized to a small allowlist before rendering.
export default function Prose({
  html,
  className,
  style,
}: {
  html: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const clean = DOMPurify.sanitize(html ?? '', {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'b', 'i', 'u', 'h2', 'h3', 'ul', 'ol', 'li', 'a', 'blockquote'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });
  return <div className={className} style={style} dangerouslySetInnerHTML={{ __html: clean }} />;
}
