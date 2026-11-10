'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { WorkItem } from '@/data/portfolio';
import ArchitectureDiagram from './ArchitectureDiagram';
import styles from './WorkDetailView.module.css';

interface Props {
  work: WorkItem;
  prev: WorkItem | null;
  next: WorkItem | null;
}

export default function WorkDetailView({ work, prev, next }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const layers = work.layers ?? [];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>
          ← 制作物一覧へ
        </Link>

        <header className={styles.header}>
          <p className={styles.context}>
            {work.context}
            {work.period ? `　${work.period}` : ''}
          </p>
          <h1 className={styles.title}>{work.title}</h1>
          <p className={styles.role}>担当：{work.role}</p>
          <ul className={styles.tags} aria-label="使用技術">
            {work.tags.map((t) => (
              <li key={t} className={styles.tag}>
                {t}
              </li>
            ))}
          </ul>
          {work.githubUrl && (
            <a href={work.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.repo}>
              GitHub{work.repoLabel ? `：${work.repoLabel}` : ''} ↗
            </a>
          )}
        </header>

        <section className={styles.section}>
          <h2 className={styles.h2}>どんなものか</h2>
          <p className={styles.p}>{work.description}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>作った経緯</h2>
          {work.story.map((t, i) => (
            <p key={i} className={styles.p}>
              {t}
            </p>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>内容</h2>
          <ul className={styles.points}>
            {work.points.map((pt, i) => (
              <li key={i} className={styles.point}>
                {pt}
              </li>
            ))}
          </ul>
        </section>

        {work.diagramKind && (
          <section className={styles.section}>
            <h2 className={styles.h2}>構成</h2>
            <p className={styles.hint}>図の箱か下の項目を押すと、対応する部分が強調されます。</p>
            <div className={styles.diagram}>
              <ArchitectureDiagram
                kind={work.diagramKind}
                selectedNodeKey={selected}
                onSelectNode={setSelected}
              />
            </div>

            {layers.length > 0 && (
              <ul className={styles.layers}>
                {layers.map((l) => {
                  const on = selected === l.nodeKey;
                  const dim = selected !== null && !on;
                  return (
                    <li key={l.nodeKey}>
                      <button
                        type="button"
                        onClick={() => setSelected(on ? null : l.nodeKey)}
                        className={`${styles.layer} ${on ? styles.layerOn : ''} ${dim ? styles.layerDim : ''}`}
                      >
                        <span className={styles.layerHead}>
                          <span className={styles.layerName}>
                            {l.layer}
                            {l.isPrimaryScope && <span className={styles.mine}>担当</span>}
                          </span>
                          <span className={styles.layerTech}>{l.tech}</span>
                        </span>
                        <span className={styles.layerDetail}>{l.detail}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        )}

        <nav className={styles.pager} aria-label="前後の制作物">
          {prev ? (
            <Link href={`/works/${prev.id}/`} className={styles.pagerLink}>
              ← {prev.shortTitle}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/works/${next.id}/`} className={styles.pagerLink}>
              {next.shortTitle} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </main>
  );
}
