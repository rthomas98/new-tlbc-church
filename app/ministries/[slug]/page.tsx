import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageMinistryDetail from '@/components/pages/PageMinistryDetail';
import { MINISTRIES, getMinistryBySlug } from '@/lib/ministries';

export function generateStaticParams() {
  return MINISTRIES.map(m => ({ slug: m.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const m = getMinistryBySlug(slug);
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
  const ministry = getMinistryBySlug(slug);
  if (!ministry) notFound();
  return <PageMinistryDetail ministry={ministry} />;
}
