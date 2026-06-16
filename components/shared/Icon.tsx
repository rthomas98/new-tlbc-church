import {
  CalendarDays, BookOpen, Radio, Play, Cross, Heart, Users, Droplet, Flame,
  Globe, Phone, Hand, Mail, FileText, HelpCircle,
  type LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  CalendarDays, BookOpen, Radio, Play, Cross, Heart, Users, Droplet, Flame,
  Globe, Phone, Hand, Mail, FileText,
};

export default function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const Cmp = ICON_MAP[name] ?? HelpCircle;
  return <Cmp size={size} />;
}
