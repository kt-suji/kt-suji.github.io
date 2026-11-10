import { PROFILE_DATA } from '@/data/portfolio';
import styles from './ProfileDossier.module.css';

export default function ProfileDossier() {
  return (
    <main className={styles.workspace}>
      <header className={styles.topBar}>
        <h1 className={styles.pageTitle}>自己紹介・学歴</h1>
      </header>

      <section className={styles.block} aria-labelledby="p-intro">
        <h2 id="p-intro" className={styles.h2}>
          この道に進んだきっかけ
        </h2>
        {PROFILE_DATA.paragraphs.map((t, i) => (
          <p key={i} className={styles.p}>
            {t}
          </p>
        ))}
      </section>

      <section className={styles.block} aria-labelledby="p-habits">
        <h2 id="p-habits" className={styles.h2}>
          大事にしていること
        </h2>
        <ul className={styles.habits}>
          {PROFILE_DATA.habits.map((h) => (
            <li key={h.title} className={styles.habit}>
              <h3 className={styles.h3}>{h.title}</h3>
              <p className={styles.p}>{h.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.block} aria-labelledby="p-edu">
        <h2 id="p-edu" className={styles.h2}>
          学歴
        </h2>
        <dl className={styles.dl}>
          {PROFILE_DATA.educationRows.map((r) => (
            <div key={r.label} className={styles.dlRow}>
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
