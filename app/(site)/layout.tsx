import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getPublishedMinistryPages } from '@/lib/db/queries';

export const dynamic = 'force-dynamic';

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const ministries = await getPublishedMinistryPages();
  return (
    <>
      <Header ministries={ministries} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
