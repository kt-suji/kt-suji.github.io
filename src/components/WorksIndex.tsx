import Link from 'next/link';
import { WORKS_DATA } from '@/data/portfolio';
import styles from './WorksIndex.module.css';

export default function WorksIndex() {
  return (
    <main className={styles.workspace}>
      <header className={styles.topBar}>
        <h1 className={styles.pageTitle}>制作物</h1>
        <p className={styles.lead}>これまでに作ったものです。タイトルを押すと詳しい説明が開きます。</p>
      </header>

      <ul className={styles.list}>
        {WORKS_DATA.map((work) => (
          <li key={work.id} className={styles.item}>
            <Link href={`/works/${work.id}/`} className={styles.link}>
              <div className={styles.main}>
                <p className={styles.context}>{work.context}</p>
                <h2 className={styles.title}>{work.title}</h2>
                <p className={styles.summary}>{work.summary}</p>
                <ul className={styles.tags} aria-label="使用技術">
                  {work.tags.map((t) => (
                    <li key={t} className={styles.tag}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.side}>
                <span className={styles.role}>担当：{work.role}</span>
                <span className={styles.more}>詳しく見る →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
