// app/layout.js

import './globals.css';
import Navbar from './components/Navbar'; 
import AnnouncementBar from './components/AnnouncementBar'; // <-- 步驟 1: 匯入新元件
import Footer from './components/Footer';

/* 您原本的 import 都不用動 */

export const metadata = {
  title: 'Best AI Stylist',
  description: '您的 AI 智慧造型師',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>
        <Navbar /> 
        <main>
          {children} 
        </main>
        <Footer />
      </body>
    </html>
  );
}