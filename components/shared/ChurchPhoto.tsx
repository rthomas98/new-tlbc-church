import Image from 'next/image';
import type { CSSProperties } from 'react';

export type ChurchPhotoKey =
  | 'worship'
  | 'leadership'
  | 'outreach'
  | 'communityYouth'
  | 'familyCommunity'
  | 'youth'
  | 'kids'
  | 'women'
  | 'men'
  | 'pastor'
  | 'visitor'
  | 'giving'
  | 'members'
  | 'serviceWorship'
  | 'serviceBibleStudy'
  | 'servicePrayer'
  | 'facebookLive'
  | 'prayerTeam'
  | 'communityCare'
  | 'eventRevival'
  | 'eventFoodDrive'
  | 'eventYouthKickoff'
  | 'homePrayerCare'
  | 'homeGiving';

const photos: Record<ChurchPhotoKey, { src: string; alt: string; position?: string }> = {
  worship: {
    src: '/uploads/generated/worship-hero.png',
    alt: 'True Light Baptist Church worship service',
    position: 'center center',
  },
  leadership: {
    src: '/uploads/generated/leadership-fellowship.png',
    alt: 'True Light Baptist Church leaders greeting after worship',
    position: 'center center',
  },
  outreach: {
    src: '/uploads/generated/community-outreach.png',
    alt: 'True Light Baptist Church community outreach food distribution',
    position: 'center center',
  },
  communityYouth: {
    src: '/uploads/generated/community-youth-outreach.png',
    alt: 'True Light Baptist Church youth serving neighbors in the community',
    position: 'center center',
  },
  familyCommunity: {
    src: '/uploads/generated/children-family-community.png',
    alt: 'True Light Baptist Church children and families at a community day',
    position: 'center center',
  },
  youth: {
    src: '/uploads/generated/youth-bible-study.png',
    alt: 'True Light Baptist Church youth Bible study group',
    position: 'center center',
  },
  kids: {
    src: '/uploads/generated/children-ministry.png',
    alt: 'True Light Baptist Church children learning Bible stories',
    position: 'center center',
  },
  women: {
    src: '/uploads/generated/women-bible-study.png',
    alt: 'True Light Baptist Church women Bible study group',
    position: 'center center',
  },
  men: {
    src: '/uploads/generated/mens-fellowship.png',
    alt: 'True Light Baptist Church men fellowship group',
    position: 'center center',
  },
  pastor: {
    src: '/uploads/generated/pastor-welcome.png',
    alt: 'True Light Baptist Church pastor portrait',
    position: 'center center',
  },
  visitor: {
    src: '/uploads/generated/visitor-welcome.png',
    alt: 'True Light Baptist Church greeters welcoming a visiting family',
    position: 'center center',
  },
  giving: {
    src: '/uploads/generated/giving-stewardship.png',
    alt: 'True Light Baptist Church stewardship and offering',
    position: 'center center',
  },
  members: {
    src: '/uploads/generated/members-fellowship.png',
    alt: 'True Light Baptist Church members fellowshipping after service',
    position: 'center center',
  },
  serviceWorship: {
    src: '/uploads/generated/home-service-worship.png',
    alt: 'True Light Baptist Church members greeting families before Sunday worship',
    position: 'center center',
  },
  serviceBibleStudy: {
    src: '/uploads/generated/home-service-bible-study.png',
    alt: 'True Light Baptist Church members studying the Bible together before worship',
    position: 'center center',
  },
  servicePrayer: {
    src: '/uploads/generated/home-service-prayer.png',
    alt: 'True Light Baptist Church members gathered in prayer on Wednesday evening',
    position: 'center center',
  },
  facebookLive: {
    src: '/uploads/generated/home-facebook-live-team.png',
    alt: 'True Light Baptist Church media team streaming worship online',
    position: 'center center',
  },
  prayerTeam: {
    src: '/uploads/generated/home-prayer-team.png',
    alt: 'True Light Baptist Church prayer team praying with a visitor',
    position: 'center center',
  },
  communityCare: {
    src: '/uploads/generated/home-community-care.png',
    alt: 'True Light Baptist Church volunteers serving a senior neighbor in the community',
    position: 'center center',
  },
  eventRevival: {
    src: '/uploads/generated/home-event-revival.png',
    alt: 'True Light Baptist Church congregation worshiping during revival night',
    position: 'center center',
  },
  eventFoodDrive: {
    src: '/uploads/generated/home-event-food-drive.png',
    alt: 'True Light Baptist Church volunteers serving families at a community food drive',
    position: 'center center',
  },
  eventYouthKickoff: {
    src: '/uploads/generated/home-event-youth-kickoff.png',
    alt: 'True Light Baptist Church youth gathering for summer kickoff',
    position: 'center center',
  },
  homePrayerCare: {
    src: '/uploads/generated/home-prayer-care.png',
    alt: 'True Light Baptist Church prayer team offering pastoral care',
    position: 'center center',
  },
  homeGiving: {
    src: '/uploads/generated/home-giving-stewardship.png',
    alt: 'True Light Baptist Church volunteers helping members with stewardship and outreach gifts',
    position: 'center center',
  },
};

type ChurchPhotoProps = {
  // Accepts a known ChurchPhotoKey OR a direct image path/URL (CMS-managed).
  photo: ChurchPhotoKey | string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  style?: CSSProperties;
};

function resolvePhoto(photo: string): { src: string; alt: string; position?: string } {
  if (photo in photos) return photos[photo as ChurchPhotoKey];
  // Direct path or URL stored in the database.
  return { src: photo, alt: 'True Light Baptist Church', position: 'center center' };
}

export default function ChurchPhoto({
  photo,
  alt,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  style,
}: ChurchPhotoProps) {
  const image = resolvePhoto(photo);

  return (
    <Image
      src={image.src}
      alt={alt ?? image.alt}
      fill
      priority={priority}
      sizes={sizes}
      style={{
        objectFit: 'cover',
        objectPosition: image.position,
        ...style,
      }}
    />
  );
}
