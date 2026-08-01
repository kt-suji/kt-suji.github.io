import styles from './Projects.module.css';

const projects = [
  {
    title: 'LOudyCushion (L.O.C.) ― 健康支援システム',
    description: '長時間の座りすぎを検知し、休憩を促す IoT 健康支援システム。センサー搭載クッションが着座時間・姿勢・動きを検知し、振動や膨張で休憩を促す。モバイルアプリと連携し、通知スケジュール設定・着座データ統計・健康スコアリング機能を提供。チーム開発（+E展展示予定）にて バックエンド API・データベース設計を担当。',
    tags: ['Node.js', 'Docker', 'MySQL', 'チーム開発'],
    github: 'https://github.com/ymk-1024/L.O.C.-Algorithm',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)'
  },
  {
    title: 'PC トラブル診断ツール',
    description: '2025年度+E展 企業展示作品として制作。Yes/No形式の対話型フローで、PCトラブルの原因を切り分けて特定するWebアプリ。最大7段階の分岐ロジックを約600ファイルで構成。',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    github: 'https://github.com/kt-suji/Webapp',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #1a2332 100%)'
  },
  {
    title: 'ファイル共有システム',
    description: 'Laravel で構築した RESTful API バックエンド + Flutter モバイルアプリのフルスタック構成。APIキー認証、ローカル/NASストレージ対応、ページネーション機能を実装。v1(素PHP)からv2(Laravel)へリファクタリング。',
    tags: ['Laravel', 'PHP', 'Dart (Flutter)', 'REST API'],
    github: 'https://github.com/kt-suji/file_share',
    gradient: 'linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)'
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.card}>
              <div 
                className={styles.thumbnail}
                style={{ background: project.gradient }}
              >
                <span className={styles.thumbnailIcon}>📁</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.github} className={styles.link} target="_blank" rel="noopener noreferrer">
                    💻 GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
