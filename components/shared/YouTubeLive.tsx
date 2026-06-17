import { YOUTUBE_LIVE_EMBED_URL } from './churchLinks';

// Responsive 16:9 YouTube live-stream player. Shows the current broadcast when
// the channel is live, and YouTube's offline placeholder otherwise.
export default function YouTubeLive({ title = 'True Light Baptist Church — Live' }: { title?: string }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        borderRadius: '22px',
        overflow: 'hidden',
        background: '#000',
        boxShadow: '0 18px 40px rgba(30,30,30,0.14)',
      }}
    >
      <iframe
        src={YOUTUBE_LIVE_EMBED_URL}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
      />
    </div>
  );
}
