import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.container} animate-fade-in`}>
        <h2 className={styles.greeting}>Hello, I'm</h2>
        <h1 className={styles.name}>辻 昂志朗</h1>
        <h3 className={styles.title}>
          <span className={styles.gradientText}>ネットワーク・インフラエンジニア志望</span>
        </h3>
        <p className={styles.description}>
          PCトラブルの原因を調べて解決することが好きで、家族や友人から相談を受けることもあります。
          現在はネットワーク・サーバー技術を中心に学びながら、実際に環境を構築して知識を深めています。
          将来は、利用者が安心して使えるITインフラを支えるエンジニアを目指しています。
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryBtn}>プロジェクトを見る</a>
          <a href="#contact" className={styles.secondaryBtn}>お問い合わせ</a>
        </div>
      </div>
    </section>
  );
}
