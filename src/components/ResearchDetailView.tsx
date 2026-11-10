import Link from 'next/link';
import type { ResearchItem } from '@/data/portfolio';
import styles from './ResearchDetailView.module.css';

interface Props {
  research: ResearchItem;
  prev: ResearchItem | null;
  next: ResearchItem | null;
}

export default function ResearchDetailView({ research, prev, next }: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/research/" className={styles.back}>
          ← 研究一覧へ
        </Link>

        <header className={styles.header}>
          {research.period && <p className={styles.period}>{research.period}</p>}
          <h1 className={styles.title}>{research.title}</h1>
          {research.tags && (
            <ul className={styles.tags} aria-label="キーワード">
              {research.tags.map((t) => (
                <li key={t} className={styles.tag}>
                  {t}
                </li>
              ))}
            </ul>
          )}
          {research.links && research.links.length > 0 && (
            <p className={styles.links}>
              {research.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={l.url.includes('github') ? styles.repo : styles.link}
                >
                  {l.label} ↗
                </a>
              ))}
            </p>
          )}
        </header>

        {research.highlights && research.highlights.length > 0 && (
          <section className={styles.highlightsGrid} aria-label="成果ハイライト">
            {research.highlights.map((h, i) => (
              <div key={i} className={styles.highlightCard}>
                <span className={styles.highlightLabel}>{h.label}</span>
                <span className={styles.highlightValue}>{h.value}</span>
                {h.detail && <span className={styles.highlightDetail}>{h.detail}</span>}
              </div>
            ))}
          </section>
        )}

        <section className={styles.section}>
          <h2 className={styles.h2}>概要</h2>
          <p className={styles.lead}>{research.summary}</p>
        </section>

        {research.sections && research.sections.length > 0 && (
          <div className={styles.sections}>
            {research.sections.map((sec, idx) => (
              <section key={idx} className={styles.section}>
                <h2 className={styles.h2}>{sec.heading}</h2>
                {(sec.body ?? []).map((t, i) => (
                  <p key={i} className={styles.p}>
                    {t}
                  </p>
                ))}
                {sec.points && sec.points.length > 0 && (
                  <ul className={styles.points}>
                    {sec.points.map((pt, i) => (
                      <li key={i} className={styles.point}>
                        {pt}
                      </li>
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

        {research.body && research.body.length > 0 && !research.sections && (
          <section className={styles.section}>
            {research.body.map((t, i) => (
              <p key={i} className={styles.p}>
                {t}
              </p>
            ))}
          </section>
        )}

        {research.pdfDownloads && research.pdfDownloads.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.h2}>提出レポート・発表資料（原本PDF）</h2>
            <p className={styles.pdfLead}>
              ゼミ演習で実際に執筆・発表した報告書およびスライド資料の原本PDFです。ブラウザで閲覧またはダウンロードできます。
            </p>
            <div className={styles.pdfGrid}>
              {research.pdfDownloads.map((pdf, i) => (
                <a
                  key={i}
                  href={pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pdfCard}
                >
                  <div className={styles.pdfBadge} aria-hidden="true">
                    PDF
                  </div>
                  <div className={styles.pdfBody}>
                    <div className={styles.pdfTitle}>{pdf.title} ↗</div>
                    {pdf.subtitle && <div className={styles.pdfSub}>{pdf.subtitle}</div>}
                    {pdf.size && <div className={styles.pdfSize}>ファイルサイズ：{pdf.size}</div>}
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        <nav className={styles.pager} aria-label="前後の研究">
          {prev ? (
            <Link href={`/research/${prev.id}/`} className={styles.pagerLink}>
              ← {prev.shortTitle ?? prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/research/${next.id}/`} className={styles.pagerLink}>
              {next.shortTitle ?? next.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </main>
  );
}
