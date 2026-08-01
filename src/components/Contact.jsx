'use client';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <p className={styles.description}>
              最後までご覧いただきありがとうございます。<br />
              採用に関するお問い合わせ等は、以下のメールアドレスよりお願いいたします。
            </p>
            
            <div className={styles.socials}>
              <a href="mailto:ktsuji.osigoto@gmail.com" className={styles.socialLink}>
                <span className={styles.socialIcon}>📧</span>
                <span>ktsuji.osigoto@gmail.com</span>
              </a>
              <a href="https://github.com/kt-suji" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                <span className={styles.socialIcon}>💻</span>
                <span>GitHub (kt-suji)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
