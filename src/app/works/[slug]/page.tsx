import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import WorkDetailView from '@/components/WorkDetailView';
import { WORKS_DATA } from '@/data/portfolio';

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return WORKS_DATA.map((work) => ({ slug: work.id }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = WORKS_DATA.find((w) => w.id === slug);
  if (!work) return { title: '制作物 | 辻 昂志朗' };
  return { title: `${work.title} | 辻 昂志朗`, description: work.description };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const index = WORKS_DATA.findIndex((w) => w.id === slug);
  if (index === -1) notFound();

  return (
    <WorkDetailView
      work={WORKS_DATA[index]}
      prev={index > 0 ? WORKS_DATA[index - 1] : null}
      next={index < WORKS_DATA.length - 1 ? WORKS_DATA[index + 1] : null}
    />
  );
}
