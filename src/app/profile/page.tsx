import type { Metadata } from 'next';
import ProfileDossier from '@/components/ProfileDossier';

export const metadata: Metadata = {
  title: '自己紹介・学歴 | 辻 昂志朗',
  description: 'この道に進んだきっかけ、大事にしていること、学歴。',
};

export default function ProfilePage() {
  return <ProfileDossier />;
}
