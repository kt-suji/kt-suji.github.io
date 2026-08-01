import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Networking',
    icon: '🌐',
    skills: [
      'Cisco IOS (OSPF / VLAN / ACL)',
      'NAT / DHCP / DNS',
      'Wireshark',
      'パケット解析',
      'Cloudflare',
      'TCP/IP',
    ]
  },
  {
    title: 'Server & Infrastructure',
    icon: '🖥️',
    skills: [
      'Linux',
      'Nginx',
      'Docker',
      'Proxmox VE',
    ]
  },
  {
    title: 'Development',
    icon: '💻',
    skills: [
      'Python',
      'JavaScript',
      'TypeScript',
      'Java',
      'SQL (MySQL)',
      'Git / GitHub',
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
