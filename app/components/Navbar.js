'use client';
// app/components/Navbar.js
import { FaFacebookF, FaInstagram, FaLine } from 'react-icons/fa'; // <-- 1. 匯入圖示
// import { FaFacebook, FaInstagram, FaLine } from 'react-icons/fa'; // <-- 1. 匯入圖示
import Link from 'next/link';
import Image from 'next/image';

// --- 專為白底 Navbar 設計的新樣式 ---

const navStyles = {
  // --- 佈局 (Layout) ---
  display: 'grid',
  gridTemplateColumns: 'auto minmax(0, 1fr) auto', // <-- 1. 讓中間欄位可以被壓縮
  alignItems: 'center',
  // --- 尺寸與間距 (Size & Spacing) ---
  width: '100%',                // 1. 寬度先佔滿
  maxWidth: '1440px',           // 2. 限制最大寬度 (例如 1280px, 您可以調整這個數字)
  margin: '0 auto',             // 3. 讓這個 1280px 的容器自動置中
  padding: '1rem 0rem',         // 4. 這是 "安全邊距", 當螢幕小於 1280px 時, 內容才不會黏住邊緣
  // --- 外觀 (Appearance) ---
  backgroundColor: '#ffffff',  // <-- 1. 更改為白底
  color: '#000000ff',            // <-- 2. 預設文字改為黑色
  position: 'sticky',          // 固定在頂部
  top: 0,
  zIndex: 10,
  borderBottom: '1px solid #eaeaea', // <-- 3. 加上一個細細的底線, 增加質感
  boxShadow: '0 2px 4px rgba(0,0,0,0.02)', // <-- 4. 加上一點點不易察覺的陰影
};

const logoLinkStyles = {
  justifySelf: 'start', // <-- 3. 讓 Logo 在第一欄中靠左對齊
  display: 'flex', // 幫助圖片垂直置中
  alignItems: 'center',
};

// 中間連結的容器
const navLinksStyles = {
  display: 'flex',
  justifySelf: 'center', // <-- 4. 讓導覽連結在中間欄置中
  gap: '4rem', // 連結之間的間距 (32px)

  flexWrap: 'wrap',    // 2. 允許連結在空間不夠時換行
  justifyContent: 'center', // 3. 換行後，每一行都保持置中
  minWidth: 0,         // 5. 允許容器收縮到 0 (關鍵)
};

// 中間連結的樣式
const linkStyles = {
  color: '#333', // 深灰色, 比純黑柔和
  textDecoration: 'none',
  fontSize: '1rem', // 16px
  fontWeight: '500', // 中等粗細
};

// 整個右側區塊的容器
const rightSectionStyles = {
  justifySelf: 'end', // <-- 5. 讓整個右側區塊在第三欄中靠右對齊
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem', // 右側社群和按鈕之間的間距
  
  flexWrap: 'wrap',    // 1. 也允許右側區塊 (社群/按鈕) 換行
  justifyContent: 'flex-end', // 2. 換行後，內容還是靠右
  minWidth: 0,         // 3. 告訴 Grid：這個欄位也可以被壓縮
};

// 社群連結的樣式
const socialLinksStyles = {
  display: 'flex',
  gap: '1.2rem', // <-- 2. 稍微增加圖示間的距離
  color: '#555', // 社群 icon 的顏色
  fontSize: '1.2rem', // <-- 2. 放大圖示尺寸
};

// 登入/註冊按鈕的容器
const authButtonsStyles = {
  display: 'flex',
  gap: '1rem',
};

// 登入按鈕 (描邊)
const loginButtonStyles = {
  padding: '0.5rem 1rem',
  color: '#333',
  backgroundColor: 'transparent', // 透明背景
  border: '1px solid #ccc',      // 灰色邊框
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: '500',
  fontSize: '0.9rem',
};

// 註冊按鈕 (填滿)
const registerButtonStyles = {
  padding: '0.5rem 1rem',
  color: 'white',
  backgroundColor: '#000000', // 主要按鈕顏色 (黑色)
  border: '1px solid #000000',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: '500',
  fontSize: '0.9rem',
};

// --- Navbar 元件本體 ---

export default function Navbar() {
  return (
    <nav style={navStyles}>
      
      {/* 1. 左側 Logo (保持不變) */}
      <Link href="/" style={logoLinkStyles}>
          <Image
            src="/logo.png"
            alt="Best AI Stylist Logo"
            width={719/5} // 繼續使用您設定的寬高
            height={423/5}
            priority
          />
      </Link>

      {/* 2. 中間選單連結 (已更新) */}
      <div style={navLinksStyles}>
        <Link href="/" style={linkStyles}>
          首頁
        </Link>
        <Link href="/about" style={linkStyles}>
          關於我們
        </Link>
        <Link href="/sharing" style={linkStyles}>
          穿搭分享
        </Link>
        <Link href="/recommend" style={linkStyles}>
          推薦服裝
        </Link>
        <Link href="/recommend" style={linkStyles}>
          常見問題
        </Link>
      </div>

      {/* 3. 右側區塊 (已更新) */}
      <div style={rightSectionStyles}>
        
        {/* 社群連結 (我們先用文字暫代, 之後可以換成 Icon) */}
        <div style={socialLinksStyles}> 
          {/* 3. 將文字替換成 Icon 元件 */}
          <a href="#" style={{ color: 'inherit' }}>
            <FaFacebookF />
          </a>
          <a href="#" style={{ color: 'inherit' }}>
            <FaInstagram />
          </a>
          <a href="#" style={{ color: 'inherit' }}>
            <FaLine />
          </a>
        </div>
        
        {/* 登入/註冊按鈕 (已更新樣式) */}
        <div style={authButtonsStyles}>
          <button style={loginButtonStyles}>登入</button>
          <button style={registerButtonStyles}>註冊</button>
        </div>

      </div>
    </nav>
  );
}