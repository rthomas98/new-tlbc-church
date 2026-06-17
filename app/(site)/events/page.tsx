import PageEvents from '@/components/pages/PageEvents';
import { getPublishedEvents } from '@/lib/db/queries';

export const metadata = {
  title: 'Events · True Light Baptist Church',
  description: 'Gather. Grow. Go. Upcoming events and the weekly worship schedule at True Light Baptist Church.',
};

export default async function EventsPage() {
  const events = await getPublishedEvents();
  return <PageEvents events={events} />;
}
