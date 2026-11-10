import type { Metadata } from 'next';
import { IBM_Plex_Sans_JP, IBM_Plex_Mono } from 'next/font/google';
import SidebarSpine from '@/components/SidebarSpine';
import './globals.css';
import styles from './layout.module.css';

const ibmPlexSansJP = IBM_Plex_Sans_JP({
  weight: ['400', '500', '600'],
  preload: false,
  display: 'swap',
  variable: '--font-sans',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: '辻 昂志朗 | ポートフォリオ — ネットワーク・インフラエンジニア志望',
  description:
    'ECCコンピュータ専門学校 高度情報処理研究学科 ネットワーク・セキュリティ専攻（2028年3月卒業予定）辻 昂志朗のポートフォリオ。制作実績の構成図・担当範囲および技術領域を掲載。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${ibmPlexSansJP.variable} ${ibmPlexMono.variable}`}>
      <body>
        <div className={styles.shell}>
          <SidebarSpine />
          <div className={styles.stage}>{children}</div>
        </div>
      </body>
    </html>
  );
}
