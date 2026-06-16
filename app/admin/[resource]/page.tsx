import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Plus } from 'lucide-react';
import { RESOURCES, isResourceKey } from '@/lib/admin/fields';
import { getResourceRows } from '@/lib/db/admin-queries';
import ResourceTable from '@/components/admin/ResourceTable';
import { FlashToast } from '@/components/admin/Toast';

export const dynamic = 'force-dynamic';

export default async function ResourceListPage({
  params,
  searchParams,
}: {
  params: Promise<{ resource: string }>;
  searchParams: Promise<{ flash?: string }>;
}) {
  const { resource } = await params;
  const { flash } = await searchParams;
  if (!isResourceKey(resource)) notFound();

  const cfg = RESOURCES[resource];
  const rows = (await getResourceRows(resource)) as (Record<string, unknown> & { id: number })[];

  return (
    <>
      <FlashToast flash={flash} />
      <div className="admin-head">
        <div>
          <p className="admin-eyebrow">Content</p>
          <h1 className="admin-h1">{cfg.label}</h1>
          <p className="admin-sub">
            {rows.length} item{rows.length === 1 ? '' : 's'} · drag to reorder · shown live on the website
          </p>
        </div>
        <Link href={`/admin/${resource}/new`} className="btn-admin btn-admin--primary">
          <Plus size={16} /> New {cfg.singular}
        </Link>
      </div>

      <ResourceTable
        resource={resource}
        columns={cfg.listColumns}
        rows={rows}
        singular={cfg.singular}
      />
    </>
  );
}
