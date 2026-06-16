import PageGive from '@/components/pages/PageGive';
import { getPublishedGivingFunds, getPublishedGivingMethods } from '@/lib/db/queries';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Give · True Light Baptist Church',
  description: '100% of every dollar to ministry. Give online, by text, or in person.',
};

export default async function GivePage() {
  const [funds, ways] = await Promise.all([getPublishedGivingFunds(), getPublishedGivingMethods()]);
  return <PageGive funds={funds} ways={ways} />;
}
