import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import { getPublishedMinistryPages, getActiveAnnouncements } from '@/lib/db/queries';

export const dynamic = 'force-dynamic';

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [ministries, announcements] = await Promise.all([
    getPublishedMinistryPages(),
    getActiveAnnouncements(),
  ]);
  return (
    <>
      <AnnouncementBar announcements={announcements} />
      <Header ministries={ministries} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
