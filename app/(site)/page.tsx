import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
import PastorSection from '@/components/home/PastorSection';
import ServicesSection from '@/components/home/ServicesSection';
import SermonSection from '@/components/home/SermonSection';
import MinistriesSection from '@/components/home/MinistriesSection';
import EventsSection from '@/components/home/EventsSection';
import PrayerGiveSection from '@/components/home/PrayerGiveSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import {
  getPublishedServices,
  getPublishedMinistries,
  getPublishedEvents,
  getPublishedTestimonials,
} from '@/lib/db/queries';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [services, ministries, events, testimonials] = await Promise.all([
    getPublishedServices(),
    getPublishedMinistries(),
    getPublishedEvents(),
    getPublishedTestimonials(),
  ]);

  return (
    <>
      <Hero />
      <Marquee />
      <PastorSection />
      <ServicesSection services={services} />
      <SermonSection />
      <MinistriesSection ministries={ministries} />
      <EventsSection events={events} />
      <PrayerGiveSection />
      <TestimonialsSection testimonials={testimonials} />
    </>
  );
}
