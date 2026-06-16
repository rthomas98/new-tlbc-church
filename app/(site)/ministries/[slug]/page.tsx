import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageMinistryDetail from '@/components/pages/PageMinistryDetail';
import { getMinistryPageBySlug, getPublishedMinistryPages } from '@/lib/db/queries';

export const dynamic = 'force-dynamic';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const m = await getMinistryPageBySlug(slug);
  if (!m) return { title: 'Ministry · True Light Baptist Church' };
  return {
    title: `${m.name} · True Light Baptist Church`,
    description: `${m.tagline} — ${m.sub}, ${m.schedule} at True Light Baptist Church.`,
  };
}

export default async function MinistryDetailRoute(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const ministry = await getMinistryPageBySlug(slug);
  if (!ministry || !ministry.published) notFound();
  const others = (await getPublishedMinistryPages())
    .filter((m) => m.slug !== ministry.slug)
    .slice(0, 3);
  return <PageMinistryDetail ministry={ministry} others={others} />;
}
