import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
import PastorSection from '@/components/home/PastorSection';
import ServicesSection from '@/components/home/ServicesSection';
import SermonSection from '@/components/home/SermonSection';
import MinistriesSection from '@/components/home/MinistriesSection';
import EventsSection from '@/components/home/EventsSection';
import PrayerGiveSection from '@/components/home/PrayerGiveSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <PastorSection />
      <ServicesSection />
      <SermonSection />
      <MinistriesSection />
      <EventsSection />
      <PrayerGiveSection />
      <TestimonialsSection />
    </>
  );
}
