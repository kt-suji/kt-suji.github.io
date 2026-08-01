import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.avatar}></div>
          </div>
          
          <div className={styles.details}>
            <p className={styles.bio}>
              PCトラブルの原因を調べて解決することが好きで、家族や友人から相談を受けることもあります。
            </p>
            <p className={styles.bio}>
              現在はECCコンピュータ専門学校 高度情報処理研究学科にて、ネットワーク・セキュリティを専攻しています。
              ネットワーク・サーバー技術を中心に学びながら、実際に環境を構築して知識を深めています。
              将来は、利用者が安心して使えるITインフラを支えるエンジニアを目指しています。
            </p>
            
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.year}>2028年 3月（卒業予定）</div>
                <div className={styles.event}>ECCコンピュータ専門学校 高度情報処理研究学科<br/>IT開発エキスパートコース ネットワーク・セキュリティ専攻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
