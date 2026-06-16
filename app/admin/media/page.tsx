import MediaLibrary from '@/components/admin/MediaLibrary';

export const dynamic = 'force-dynamic';

export default function MediaPage() {
  return (
    <>
      <div className="admin-head">
        <div>
          <p className="admin-eyebrow">Site</p>
          <h1 className="admin-h1">Media Library</h1>
          <p className="admin-sub">Upload photos once, then reuse their paths in any content form.</p>
        </div>
      </div>
      <MediaLibrary />
    </>
  );
}
