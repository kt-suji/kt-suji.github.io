import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Networking',
    icon: '🌐',
    skills: [
      { name: 'Cisco IOS (OSPF / VLAN / ACL)', level: 70 },
      { name: 'NAT / DHCP / DNS', level: 75 },
      { name: 'Wireshark / パケット解析', level: 70 },
      { name: 'Cloudflare', level: 55 },
    ]
  },
  {
    title: 'Server & Infrastructure',
    icon: '🖥️',
    skills: [
      { name: 'Linux', level: 75 },
      { name: 'Nginx', level: 65 },
      { name: 'Docker', level: 65 },
      { name: 'Proxmox VE', level: 60 },
    ]
  },
  {
    title: 'Development',
    icon: '💻',
    skills: [
      { name: 'Python', level: 65 },
      { name: 'JavaScript / TypeScript', level: 60 },
      { name: 'Java', level: 55 },
      { name: 'SQL (MySQL)', level: 60 },
      { name: 'Git / GitHub', level: 75 },
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
              
              <div className={styles.skillList}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
