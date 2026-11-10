import type { Metadata } from 'next';
import SkillsMatrix from '@/components/SkillsMatrix';

export const metadata: Metadata = {
  title: '技術・環境 | 辻 昂志朗',
  description: 'ネットワーク・サーバー・開発で触れてきた技術の一覧。',
};

export default function SkillsPage() {
  return <SkillsMatrix />;
}
