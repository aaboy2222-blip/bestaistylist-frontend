'use client';
// 步驟 1: 匯入 useState 和 useEffect
import React, { useState, useEffect } from 'react'; 
// 步驟 2: 匯入漢堡選單和關閉圖示
import { FaFacebookF, FaInstagram, FaLine, FaBars, FaTimes } from 'react-icons/fa'; 
import Link from 'next/link';
import Image from 'next/image';

// --- 專為白底 Navbar 設計的新樣式 ---

const navStyles: React.CSSProperties = {
  // ... (您原本的 navStyles 保持不變) ...
  display: 'grid',
  gridTemplateColumns: 'auto minmax(0, 1fr) auto',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  padding: '1rem 0rem',
  backgroundColor: '#ffffff',
  color: '#000000ff',
  position: 'sticky',
  top: 0,
  zIndex: 10,
  borderBottom: '1px solid #eaeaea',
  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
};

// ... (您原本的 logoLinkStyles, navLinksStyles, linkStyles 保持不變) ...
const logoLinkStyles: React.CSSProperties = {
  justifySelf: 'start',
  display: 'flex',
  alignItems: 'center',
};
const navLinksStyles: React.CSSProperties = {
  display: 'flex',
  justifySelf: 'center',
  gap: '4rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  minWidth: 0,
};
const linkStyles: React.CSSProperties = {
  color: '#333',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
};

// ... (您原本的 rightSectionStyles, socialLinksStyles, authButtonsStyles, ... 保持不變) ...
const rightSectionStyles: React.CSSProperties = {
  justifySelf: 'end',
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  minWidth: 0,
};
const socialLinksStyles: React.CSSProperties = {
  display: 'flex',
  gap: '1.2rem',
  color: '#555',
  fontSize: '1.2rem',
};
const authButtonsStyles: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
};
const loginButtonStyles: React.CSSProperties = {
  padding: '0.5rem 1rem',
  color: '#333',
  backgroundColor: 'transparent',
  border: '1px solid #ccc',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: '500',
  fontSize: '0.9rem',
};
const registerButtonStyles: React.CSSProperties = {
  padding: '0.5rem 1rem',
  color: 'white',
  backgroundColor: '#000000',
  border: '1px solid #000000',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: '500',
  fontSize: '0.9rem',
};


// --- (新) 步驟 3: 為手機版新增樣式 ---

// 漢堡圖示按鈕
const hamburgerIconStyles: React.CSSProperties = {
  justifySelf: 'end',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1.5rem', // 24px
  color: '#333',
  padding: '0.5rem', // 增加點擊範圍
};

// 全螢幕彈出選單的 "容器"
const mobileMenuContainerStyles: React.CSSProperties = {
  position: 'fixed', // 固定在螢幕上
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  zIndex: 100, // 確保在最上層
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

// 彈出選單的 "關閉按鈕"
const closeIconStyles: React.CSSProperties = {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '2rem', // 32px
  color: '#333',
};

// 彈出選單的 "連結"
const mobileLinkStyles: React.CSSProperties = {
  ...linkStyles, // 沿用桌機版的基本樣式
  fontSize: '1.75rem', // 放大字體
  margin: '1rem 0', // 增加垂直間距
};

// --- (新) 步驟 4: 定義手機版的寬度斷點 ---
const MOBILE_BREAKPOINT = 768; // 768px (您可以調整這個數字)


// --- Navbar 元件本體 ---

export default function Navbar() {
  // 步驟 5: 建立 "選單是否開啟" 的 state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 步驟 6: 建立 "是否為手機版" 的 state
  const [isMobile, setIsMobile] = useState(false);

  // 步驟 7: 建立 "偵測" 瀏覽器寬度的功能
  useEffect(() => {
    // 檢查寬度的函式
    const handleResize = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsMenuOpen(false); // (重要) 切換回桌機版時, 自動關閉選單
      }
    };

    // 第一次載入時, 立即檢查一次
    handleResize();

    // 監聽瀏覽器寬度變化
    window.addEventListener('resize', handleResize);

    // (重要) 元件卸載時, 移除監聽
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // [] 空陣列代表 "只在元件載入時執行一次"

  const handleLinkClick = () => {
    setIsMenuOpen(false); // 點擊連結時關閉選單
  };

  return (
    <>
      <nav style={navStyles}>
        {/* 1. 左側 Logo (保持不變) */}
        <Link href="/" style={logoLinkStyles}>
          <Image
            src="/logo.png"
            alt="Best AI Stylist Logo"
            width={719 / 5}
            height={423 / 5}
            priority
          />
        </Link>

        {/* 步驟 8: 根據 "是否為手機" 決定要顯示什麼 */}

        {/* --- 桌機版選單 (isMobile 為 false 時顯示) --- */}
        {!isMobile && (
          <>
            {/* 2. 中間選單連結 */}
            <div style={navLinksStyles}>
              <Link href="/" style={linkStyles}>首頁</Link>
              <Link href="/about" style={linkStyles}>關於我們</Link>
              <Link href="/sharing" style={linkStyles}>穿搭分享</Link>
              <Link href="/recommend" style={linkStyles}>推薦服裝</Link>
              <Link href="/recommend" style={linkStyles}>常見問題</Link>
            </div>

            {/* 3. 右側區塊 */}
            <div style={rightSectionStyles}>
              <div style={socialLinksStyles}>
                <a href="#" style={{ color: 'inherit' }}><FaFacebookF /></a>
                <a href="#" style={{ color: 'inherit' }}><FaInstagram /></a>
                <a href="#" style={{ color: 'inherit' }}><FaLine /></a>
              </div>
              <div style={authButtonsStyles}>
                <button style={loginButtonStyles}>登入</button>
                <button style={registerButtonStyles}>註冊</button>
              </div>
            </div>
          </>
        )}

        {/* --- 手機版漢堡圖示 (isMobile 為 true 時顯示) --- */}
        {isMobile && (
          <button
            style={hamburgerIconStyles}
            onClick={() => setIsMenuOpen(true)}
            aria-label="開啟選單"
          >
            <FaBars />
          </button>
        )}
      </nav>

      {/* --- 
        步驟 9: 手機版 "彈出式選單"
        (isMobile 且 isMenuOpen 都為 true 時顯示)
        --- 
      */}
      {isMobile && isMenuOpen && (
        <div style={mobileMenuContainerStyles}>
          <button
            style={closeIconStyles}
            onClick={() => setIsMenuOpen(false)}
            aria-label="關閉選單"
          >
            <FaTimes />
          </button>

          {/* 連結 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="/" style={mobileLinkStyles} onClick={handleLinkClick}>首頁</Link>
            <Link href="/about" style={mobileLinkStyles} onClick={handleLinkClick}>關於我們</Link>
            <Link href="/sharing" style={mobileLinkStyles} onClick={handleLinkClick}>穿搭分享</Link>
            <Link href="/recommend" style={mobileLinkStyles} onClick={handleLinkClick}>推薦服裝</Link>
            <Link href="/recommend" style={mobileLinkStyles} onClick={handleLinkClick}>常見問題</Link>
          </div>

          {/* 登入/註冊按鈕 */}
          <div style={{ ...authButtonsStyles, marginTop: '2rem' }}>
            <button style={loginButtonStyles}>登入</button>
            <button style={registerButtonStyles}>註冊</button>
          </div>

          {/* 社群圖示 */}
          <div style={{ ...socialLinksStyles, marginTop: '2rem' }}>
            <a href="#" style={{ color: 'inherit' }}><FaFacebookF /></a>
            <a href="#" style={{ color: 'inherit' }}><FaInstagram /></a>
            <a href="#" style={{ color: 'inherit' }}><FaLine /></a>
          </div>
        </div>
      )}
    </>
  );
}