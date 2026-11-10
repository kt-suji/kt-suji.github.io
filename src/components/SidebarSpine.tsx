'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PROFILE_DATA } from '@/data/portfolio';
import styles from './SidebarSpine.module.css';

const NAV_LINKS = [
  {
    href: '/',
    label: '制作物',
    match: (p: string) => p === '/' || p === '' || p.startsWith('/works'),
  },
  {
    href: '/research/',
    label: '研究',
    match: (p: string) => p.startsWith('/research'),
  },
  {
    href: '/skills/',
    label: '技術',
    match: (p: string) => p.startsWith('/skills'),
  },
  {
    href: '/profile/',
    label: '自己紹介・学歴',
    match: (p: string) => p.startsWith('/profile'),
  },
];

export default function SidebarSpine() {
  const pathname = usePathname() || '/';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement('textarea');
      el.value = PROFILE_DATA.email;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <aside className={styles.spine} aria-label="プロフィールとメニュー">
      <div className={styles.topGroup}>
        <div className={styles.identityBlock}>
          <span className={styles.gradText}>{PROFILE_DATA.graduation}</span>

          <Link href="/" className={styles.nameLink}>
            <span className={styles.name}>{PROFILE_DATA.name}</span>
          </Link>

          <p className={styles.role}>{PROFILE_DATA.desiredRole}</p>

          <p className={styles.schoolText}>
            {PROFILE_DATA.school}
            <br />
            {PROFILE_DATA.department}
            <br />
            <span className={styles.majorStrong}>{PROFILE_DATA.major}</span>
          </p>

          <p className={styles.summary}>{PROFILE_DATA.spineSummary}</p>
        </div>

        <nav className={styles.nav} aria-label="ページ切り替え">
          <ul className={styles.navList}>
            {NAV_LINKS.map((item) => {
              const active = item.match(pathname);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className={styles.contactBlock}>
        <div className={styles.emailAddr}>{PROFILE_DATA.email}</div>
        <div className={styles.contactActions}>
          <button
            type="button"
            onClick={handleCopy}
            className={`${styles.copyBtn} ${copied ? styles.copyBtnDone : ''}`}
            aria-live="polite"
          >
            {copied ? 'コピーしました' : 'コピー'}
          </button>
          <a href={`mailto:${PROFILE_DATA.email}`} className={styles.mailBtn}>
            メールを送る
          </a>
        </div>

        <a
          href={PROFILE_DATA.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          <span>GitHub ({PROFILE_DATA.handle})</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </aside>
  );
}
