import type { Metadata } from 'next';
import ResearchIndex from '@/components/ResearchIndex';

export const metadata: Metadata = {
  title: '研究 | 辻 昂志朗',
  description: 'ゼミで取り組んだ研究テーマのまとめ。',
};

export default function ResearchPage() {
  return <ResearchIndex />;
}
