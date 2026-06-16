import { notFound } from 'next/navigation';
import AdminForm from '@/components/admin/AdminForm';
import { RESOURCES, isResourceKey } from '@/lib/admin/fields';
import { getResourceRow } from '@/lib/db/admin-queries';

export const dynamic = 'force-dynamic';

function emptyValues(resource: keyof typeof RESOURCES) {
  const values: Record<string, unknown> = {};
  for (const f of RESOURCES[resource].fields) {
    if (f.type === 'checkbox') values[f.name] = f.name === 'published';
    else if (f.type === 'number') values[f.name] = 0;
    else if (f.type === 'stringList' || f.type === 'objectList') values[f.name] = [];
    else if (f.type === 'group') values[f.name] = {};
    else values[f.name] = '';
  }
  return values;
}

export default async function ResourceEditPage({
  params,
}: {
  params: Promise<{ resource: string; id: string }>;
}) {
  const { resource, id } = await params;
  if (!isResourceKey(resource)) notFound();

  const cfg = RESOURCES[resource];
  const isNew = id === 'new';

  let values: Record<string, unknown>;
  let numericId: number | undefined;

  if (isNew) {
    values = emptyValues(resource);
  } else {
    numericId = Number(id);
    if (Number.isNaN(numericId)) notFound();
    const row = await getResourceRow(resource, numericId);
    if (!row) notFound();
    values = row as Record<string, unknown>;
  }

  return (
    <>
      <div className="admin-head">
        <div>
          <h1 className="admin-h1">{isNew ? `New ${cfg.singular}` : `Edit ${cfg.singular}`}</h1>
          <p className="admin-sub">{cfg.label}</p>
        </div>
      </div>
      <div className="admin-card" style={{ padding: 28 }}>
        <AdminForm resource={resource} fields={cfg.fields} values={values} id={numericId} />
      </div>
    </>
  );
}
