import Link from 'next/link';
import { RESEARCH_DATA } from '@/data/portfolio';
import styles from './ResearchList.module.css';

export default function ResearchList() {
  return (
    <main className={styles.workspace}>
      <header className={styles.topBar}>
        <h1 className={styles.pageTitle}>研究</h1>
        <p className={styles.lead}>ゼミで取り組んだ研究・検証テーマです。</p>
      </header>

      {RESEARCH_DATA.length === 0 ? (
        <p className={styles.empty}>現在準備中です。</p>
      ) : (
        <ul className={styles.list}>
          {RESEARCH_DATA.map((r) => (
            <li key={r.id} className={styles.item}>
              <article>
                {r.period && <p className={styles.period}>{r.period}</p>}
                <h2 className={styles.title}>{r.title}</h2>
                <p className={styles.summary}>{r.summary}</p>

                {r.sections && r.sections.length > 0 && (
                  <div className={styles.sections}>
                    {r.sections.map((sec, sIdx) => (
                      <section key={sIdx} className={styles.subSection}>
                        <h3 className={styles.subHeading}>{sec.heading}</h3>
                        {(sec.body ?? []).map((t, i) => (
                          <p key={i} className={styles.p}>
                            {t}
                          </p>
                        ))}
                        {sec.points && sec.points.length > 0 && (
                          <ul className={styles.pointsList}>
                            {sec.points.map((pt, i) => (
                              <li key={i}>{pt}</li>
                            ))}
                          </ul>
                        )}
                        {sec.command && (
                          <pre className={styles.commandBlock}>
                            <code>{sec.command}</code>
                          </pre>
                        )}
                      </section>
                    ))}
                  </div>
                )}

                {(r.body ?? []).map((t, i) => (
                  <p key={i} className={styles.p}>
                    {t}
                  </p>
                ))}
                {r.findings && r.findings.length > 0 && (
                  <ul className={styles.findings}>
                    {r.findings.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
                {r.links && r.links.length > 0 && (
                  <p className={styles.links}>
                    {r.links.map((l) => (
                      <Link key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
                        {l.label} ↗
                      </Link>
                    ))}
                  </p>
                )}
              </article>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
