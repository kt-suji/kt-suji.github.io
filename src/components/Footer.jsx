import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>Portfolio.</h3>
            <p>辻 昂志朗 - Network & Infrastructure Engineer</p>
          </div>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} 辻 昂志朗. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
