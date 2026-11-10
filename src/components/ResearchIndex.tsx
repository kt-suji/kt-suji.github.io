import Link from 'next/link';
import { RESEARCH_DATA } from '@/data/portfolio';
import styles from './ResearchIndex.module.css';

export default function ResearchIndex() {
  return (
    <main className={styles.workspace}>
      <header className={styles.topBar}>
        <h1 className={styles.pageTitle}>研究</h1>
        <p className={styles.lead}>ゼミで取り組んだ研究テーマです。タイトルを押すと詳しい背景・構成・検証結果が開きます。</p>
      </header>

      <ul className={styles.list}>
        {RESEARCH_DATA.map((research, index) => (
          <li key={research.id} className={styles.item}>
            <Link href={`/research/${research.id}/`} className={styles.link}>
              <div className={styles.main}>
                <p className={styles.context}>
                  <span className={styles.num}>THEME 0{index + 1}</span>
                  {research.period ? ` ｜ ${research.period}` : ''}
                </p>
                <h2 className={styles.title}>{research.title}</h2>
                <p className={styles.summary}>{research.summary}</p>
                {research.tags && (
                  <ul className={styles.tags} aria-label="キーワード">
                    {research.tags.map((t) => (
                      <li key={t} className={styles.tag}>
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={styles.side}>
                <span className={styles.more}>詳しく見る →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
