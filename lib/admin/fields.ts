// Serializable field metadata (no DB imports) — safe to use in client components.

export type FieldType =
  | 'text'
  | 'textarea'
  | 'checkbox'
  | 'number'
  | 'photo'
  | 'richtext'
  | 'select'
  | 'stringList'
  | 'objectList'
  | 'group';

export type SubField = { name: string; label: string; type: 'text' | 'textarea' };

export type Field = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  help?: string;
  options?: { value: string; label: string }[]; // for 'select'
  itemFields?: SubField[]; // for 'objectList' — fields repeated per item
  subFields?: SubField[]; // for 'group' — fields of a single nested object
};

// Field types whose form value is submitted as a JSON string and stored in a JSONB column.
export const JSON_FIELD_TYPES: FieldType[] = ['stringList', 'objectList', 'group'];

export type ResourceKey =
  | 'events'
  | 'services'
  | 'ministries'
  | 'testimonials'
  | 'sermons'
  | 'leaders'
  | 'beliefs'
  | 'givingFunds'
  | 'givingMethods'
  | 'ministryPages'
  | 'announcements';

export type ResourceConfig = {
  label: string; // plural
  singular: string;
  fields: Field[];
  listColumns: string[];
};

export const RESOURCES: Record<ResourceKey, ResourceConfig> = {
  announcements: {
    label: 'Announcements',
    singular: 'Announcement',
    listColumns: ['message', 'variant', 'published'],
    fields: [
      { name: 'message', label: 'Message', type: 'text', required: true, help: 'Shown in the bar across the top of every page' },
      {
        name: 'variant',
        label: 'Style',
        type: 'select',
        options: [
          { value: 'info', label: 'Info (blue)' },
          { value: 'alert', label: 'Alert (red)' },
          { value: 'success', label: 'Good news (green)' },
        ],
      },
      { name: 'linkLabel', label: 'Button label', type: 'text', help: 'Optional, e.g. “Register now”' },
      { name: 'linkUrl', label: 'Button link', type: 'text', help: 'Optional, e.g. /events or https://…' },
      { name: 'dismissible', label: 'Let visitors dismiss it', type: 'checkbox' },
      { name: 'published', label: 'Show on the site (on/off)', type: 'checkbox' },
      { name: 'sort', label: 'Sort order', type: 'number' },
    ],
  },
  events: {
    label: 'Events',
    singular: 'Event',
    listColumns: ['title', 'month', 'day', 'category', 'published'],
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'category', label: 'Category', type: 'text', help: 'e.g. Revival, Community, Youth' },
      { name: 'description', label: 'Description', type: 'richtext' },
      { name: 'month', label: 'Month', type: 'text', help: 'e.g. May, Jun' },
      { name: 'day', label: 'Day', type: 'text', help: 'e.g. 17' },
      { name: 'time', label: 'Time', type: 'text', help: 'e.g. 7:00 p.m.' },
      { name: 'location', label: 'Location', type: 'text' },
      { name: 'photo', label: 'Photo', type: 'photo' },
      { name: 'featured', label: 'Featured (large card)', type: 'checkbox' },
      { name: 'published', label: 'Published', type: 'checkbox' },
      { name: 'sort', label: 'Sort order', type: 'number' },
    ],
  },
  services: {
    label: 'Service Times',
    singular: 'Service',
    listColumns: ['name', 'tag', 'time', 'published'],
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'tag', label: 'Day tag', type: 'text', help: 'e.g. Sunday, Wednesday' },
      { name: 'time', label: 'Time', type: 'text', help: 'e.g. 10:00 a.m.' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'photo', label: 'Photo', type: 'photo' },
      { name: 'published', label: 'Published', type: 'checkbox' },
      { name: 'sort', label: 'Sort order', type: 'number' },
    ],
  },
  ministries: {
    label: 'Ministries',
    singular: 'Ministry',
    listColumns: ['name', 'groupName', 'day', 'tag', 'published'],
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'groupName', label: 'Group', type: 'text', help: 'Adults · Youth & Kids · Outreach · Worship' },
      { name: 'size', label: 'Size / ages', type: 'text', help: 'e.g. Grades 6–12' },
      { name: 'day', label: 'Day', type: 'text', help: 'e.g. Sundays' },
      { name: 'tag', label: 'Tag', type: 'text', help: 'e.g. Bible Study' },
      { name: 'photo', label: 'Photo', type: 'photo' },
      { name: 'tagBlue', label: 'Blue tag', type: 'checkbox' },
      { name: 'published', label: 'Published', type: 'checkbox' },
      { name: 'sort', label: 'Sort order', type: 'number' },
    ],
  },
  testimonials: {
    label: 'Testimonials',
    singular: 'Testimonial',
    listColumns: ['name', 'role', 'published'],
    fields: [
      { name: 'quote', label: 'Quote', type: 'textarea', required: true },
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'role', label: 'Role / context', type: 'text', help: 'e.g. Members since 2003' },
      { name: 'initials', label: 'Initials', type: 'text', help: 'e.g. TH' },
      { name: 'published', label: 'Published', type: 'checkbox' },
      { name: 'sort', label: 'Sort order', type: 'number' },
    ],
  },
  sermons: {
    label: 'Sermons / Watch',
    singular: 'Sermon',
    listColumns: ['title', 'schedule', 'published'],
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'schedule', label: 'Schedule', type: 'text', help: 'e.g. Sundays · 10:00 a.m. CT' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'icon', label: 'Icon', type: 'text', help: 'Lucide name: CalendarDays, BookOpen, Radio, Play' },
      { name: 'url', label: 'Watch link', type: 'text', help: 'Facebook/YouTube live URL (optional)' },
      { name: 'published', label: 'Published', type: 'checkbox' },
      { name: 'sort', label: 'Sort order', type: 'number' },
    ],
  },
  leaders: {
    label: 'Leaders',
    singular: 'Leader',
    listColumns: ['name', 'role', 'published'],
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'role', label: 'Role', type: 'text', help: 'e.g. Senior Pastor' },
      { name: 'org', label: 'Subtitle', type: 'text', help: 'e.g. True Light Baptist Church' },
      { name: 'photo', label: 'Photo', type: 'photo' },
      { name: 'published', label: 'Published', type: 'checkbox' },
      { name: 'sort', label: 'Sort order', type: 'number' },
    ],
  },
  beliefs: {
    label: 'Beliefs',
    singular: 'Belief',
    listColumns: ['title', 'published'],
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'description', label: 'Description', type: 'richtext' },
      { name: 'icon', label: 'Icon', type: 'text', help: 'Lucide name: BookOpen, Cross, Heart, Users, Droplet, Flame' },
      { name: 'published', label: 'Published', type: 'checkbox' },
      { name: 'sort', label: 'Sort order', type: 'number' },
    ],
  },
  givingFunds: {
    label: 'Giving Funds',
    singular: 'Fund',
    listColumns: ['title', 'pct', 'published'],
    fields: [
      { name: 'title', label: 'Fund name', type: 'text', required: true },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'color', label: 'Color', type: 'text', help: 'Hex color, e.g. #A02319' },
      { name: 'pct', label: 'Percent of budget', type: 'number' },
      { name: 'published', label: 'Published', type: 'checkbox' },
      { name: 'sort', label: 'Sort order', type: 'number' },
    ],
  },
  givingMethods: {
    label: 'Ways to Give',
    singular: 'Method',
    listColumns: ['title', 'published'],
    fields: [
      { name: 'title', label: 'Method', type: 'text', required: true },
      { name: 'description', label: 'Details', type: 'text' },
      { name: 'icon', label: 'Icon', type: 'text', help: 'Lucide name: Globe, Phone, Hand, Mail, FileText' },
      { name: 'published', label: 'Published', type: 'checkbox' },
      { name: 'sort', label: 'Sort order', type: 'number' },
    ],
  },
  ministryPages: {
    label: 'Ministry Pages',
    singular: 'Ministry Page',
    listColumns: ['name', 'sub', 'published'],
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'slug', label: 'URL slug', type: 'text', required: true, help: 'e.g. youth → /ministries/youth' },
      { name: 'sub', label: 'Subtitle', type: 'text', help: 'e.g. Grades 6 – 12' },
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'hero', label: 'Hero image', type: 'photo' },
      { name: 'ages', label: 'Ages', type: 'text', help: 'e.g. 6th – 12th grade' },
      { name: 'schedule', label: 'Schedule', type: 'text', help: 'e.g. Wednesdays · 6:30 p.m.' },
      { name: 'location', label: 'Location', type: 'text' },
      { name: 'leader', label: 'Leader', type: 'text' },
      { name: 'leaderRole', label: 'Leader role', type: 'text' },
      { name: 'description', label: 'Description paragraphs', type: 'stringList', help: 'One block per paragraph' },
      {
        name: 'expectations',
        label: 'What to expect',
        type: 'objectList',
        itemFields: [
          { name: 'title', label: 'Heading', type: 'text' },
          { name: 'body', label: 'Detail', type: 'textarea' },
        ],
      },
      {
        name: 'scripture',
        label: 'Scripture',
        type: 'group',
        subFields: [
          { name: 'quote', label: 'Verse', type: 'textarea' },
          { name: 'ref', label: 'Reference', type: 'text' },
        ],
      },
      { name: 'published', label: 'Published', type: 'checkbox' },
      { name: 'sort', label: 'Sort order', type: 'number' },
    ],
  },
};

export const RESOURCE_KEYS = Object.keys(RESOURCES) as ResourceKey[];

export function isResourceKey(x: string): x is ResourceKey {
  return x in RESOURCES;
}

// Photo keys available from the built-in illustration set (for the photo picker).
export const PHOTO_KEYS = [
  'worship', 'leadership', 'outreach', 'communityYouth', 'familyCommunity',
  'youth', 'kids', 'women', 'men', 'pastor', 'visitor', 'giving', 'members',
  'serviceWorship', 'serviceBibleStudy', 'servicePrayer', 'facebookLive',
  'prayerTeam', 'communityCare', 'eventRevival', 'eventFoodDrive',
  'eventYouthKickoff', 'homePrayerCare', 'homeGiving',
];
