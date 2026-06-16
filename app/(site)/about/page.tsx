import PageAbout from '@/components/pages/PageAbout';
import { getPublishedBeliefs, getPublishedLeaders } from '@/lib/db/queries';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'About · True Light Baptist Church',
  description: 'Since 1941 — the same gospel, told plainly. Learn about our history, beliefs, and leadership.',
};

export default async function AboutPage() {
  const [beliefs, leaders] = await Promise.all([getPublishedBeliefs(), getPublishedLeaders()]);
  return <PageAbout beliefs={beliefs} leaders={leaders} />;
}
