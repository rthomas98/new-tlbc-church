import PageMinistries from '@/components/pages/PageMinistries';
import { getPublishedMinistryPages } from '@/lib/db/queries';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Ministries · True Light Baptist Church',
  description: 'Nine on-ramps. One family. Find your place at True Light Baptist Church.',
};

export default async function MinistriesPage() {
  const ministries = await getPublishedMinistryPages();
  return <PageMinistries ministries={ministries} />;
}
