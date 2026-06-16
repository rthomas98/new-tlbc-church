import PageWatch from '@/components/pages/PageWatch';
import { getPublishedSermons } from '@/lib/db/queries';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Watch · True Light Baptist Church',
  description: 'Watch True Light Baptist Church live on Facebook for Sunday worship and Wednesday Bible Study.',
};

export default async function WatchPage() {
  const sermons = await getPublishedSermons();
  return <PageWatch sermons={sermons} />;
}
