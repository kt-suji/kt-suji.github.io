import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <span className={styles.code}>HTTP 404 / NOT FOUND</span>
        <h1 className={styles.title}>指定されたページが見つかりません</h1>
        <p className={styles.desc}>
          URLが変更されたか、入力されたアドレスに誤りがある可能性があります。
        </p>
        <Link href="/" className={styles.homeLink}>
          <span>制作実績ワークベンチへ戻る</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
