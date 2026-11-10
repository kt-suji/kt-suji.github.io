import { SKILL_GROUPS } from '@/data/portfolio';
import styles from './SkillsMatrix.module.css';

export default function SkillsMatrix() {
  return (
    <main className={styles.workspace}>
      <header className={styles.topBar}>
        <h1 className={styles.pageTitle}>技術</h1>
        <p className={styles.lead}>触れたことのある技術です。</p>
      </header>

      <dl className={styles.groups}>
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className={styles.group}>
            <dt className={styles.groupTitle}>{group.title}</dt>
            <dd className={styles.items}>{group.items.join('　/　')}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
