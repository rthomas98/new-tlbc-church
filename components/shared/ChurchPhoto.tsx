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
  | 'members';

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
};

type ChurchPhotoProps = {
  photo: ChurchPhotoKey;
  priority?: boolean;
  sizes?: string;
  style?: CSSProperties;
};

export default function ChurchPhoto({
  photo,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  style,
}: ChurchPhotoProps) {
  const image = photos[photo];

  return (
    <Image
      src={image.src}
      alt={image.alt}
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
