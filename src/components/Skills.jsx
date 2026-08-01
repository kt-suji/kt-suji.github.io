import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Infrastructure',
    icon: '🏗️',
    skills: [
      'Linux',
      'Docker',
      'KVM',
      'PXE / iPXE Boot',
      'iSCSI',
      'ZFS',
      'NFS / SMB',
      'Nginx',
    ]
  },
  {
    title: 'Language',
    icon: '📝',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'Java',
      'C++',
      'C#',
      'Kotlin',
      'Dart',
      'Python',
    ]
  },
  {
    title: 'Framework & Runtime',
    icon: '⚙️',
    skills: [
      'React',
      'React Native',
      'Vue',
      'Laravel',
      'Node.js',
      'Flutter',
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className={styles.grid}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <div className={styles.tagList}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
