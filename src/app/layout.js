import './globals.css';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'], 
  weight: ['400', '500', '700'], 
  variable: '--font-noto' 
});

export const metadata = {
  title: 'Portfolio | ネットワーク・インフラエンジニア',
  description: 'ECCコンピュータ専門学校 ネットワーク・セキュリティ専攻 ポートフォリオサイト',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
