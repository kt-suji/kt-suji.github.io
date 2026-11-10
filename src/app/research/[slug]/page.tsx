import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ResearchDetailView from '@/components/ResearchDetailView';
import { RESEARCH_DATA } from '@/data/portfolio';

interface ResearchPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return RESEARCH_DATA.map((research) => ({ slug: research.id }));
}

export async function generateMetadata({ params }: ResearchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const research = RESEARCH_DATA.find((r) => r.id === slug);
  if (!research) return { title: '研究 | 辻 昂志朗' };
  return { title: `${research.title} | 辻 昂志朗`, description: research.summary };
}

export default async function ResearchPage({ params }: ResearchPageProps) {
  const { slug } = await params;
  const index = RESEARCH_DATA.findIndex((r) => r.id === slug);
  if (index === -1) notFound();

  return (
    <ResearchDetailView
      research={RESEARCH_DATA[index]}
      prev={index > 0 ? RESEARCH_DATA[index - 1] : null}
      next={index < RESEARCH_DATA.length - 1 ? RESEARCH_DATA[index + 1] : null}
    />
  );
}
