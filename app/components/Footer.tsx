// app/components/Footer.js

'use client'; // 因為我們使用了 react-icons

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLine } from 'react-icons/fa';

// --- 樣式 Style 物件 ---

// 整個頁尾 (Footer) 的樣式
const footerStyles: React.CSSProperties = {
  width: '100%',
  padding: '0rem 0 1rem 0', // 上 4rem, 下 2rem
  backgroundColor: '#1a1a1a', // 深灰色背景
  color: '#ccc', // 淺色文字
};

// 內容容器, 負責 1440px 置中
const containerStyles: React.CSSProperties = {
  maxWidth: '1440px',   
  margin: '0 auto',     
  padding: '0 2rem', 
};

// 多欄位網格 (Grid) 佈局
const gridStyles: React.CSSProperties = {
  display: 'grid',
  // RWD: 自動填滿, 每個欄位最小 250px
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1rem', 
  marginBottom: '0rem', // 網格和 Copyright 之間的距離
};

// 每一欄 (Column) 的樣式
const columnStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem', // 欄位內項目的間距
};

// 欄位標題 (例如 "聯絡我們")
const titleStyles: React.CSSProperties = {
  fontSize: '1.25rem', // 20px
  fontWeight: 'bold',
  color: '#ffffff', // 標題用純白
  marginBottom: '0.5rem',
};

// 一般文字
const textStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  lineHeight: '0',
};

const linksContainerStyles: React.CSSProperties = {
display: 'flex',
flexWrap: 'wrap', // 允許連結在空間不夠時換行
gap: '2rem', // 連結之間的水平間距
};
// 頁尾連結
const linkStyles: React.CSSProperties = {
  color: '#ccc',
  textDecoration: 'none',
  fontSize: '0.9rem',
};

// 社群圖示容器
const socialStyles: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  fontSize: '1.5rem', // 放大圖示
  color: '#ffffff',
};

// Copyright (版權) 區塊
const copyrightStyles: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '1rem',
  borderTop: '1px solid #666666ff',
  paddingTop: '0.1rem',
  fontSize: '0.9rem',
  color: '#888',
};


// --- Footer 元件本體 ---
export default function Footer() {
  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        {/* 主要內容網格 */}
        <div style={gridStyles}>
          {/* 欄位 3: 相關連結 */}
          <div style={columnStyles}>
            <h3 style={titleStyles}>相關連結</h3>
            <div style={linksContainerStyles}>
            <Link href="/" style={linkStyles}>首頁</Link>
            <Link href="/about" style={linkStyles}>關於我們</Link>
            <Link href="/sharing" style={linkStyles}>穿搭分享</Link>
            <Link href="/recommend" style={linkStyles}>推薦服裝</Link>
            <Link href="/faq" style={linkStyles}>常見問題</Link>
            </div>
          </div>

          {/* 欄位 1: 聯絡我們 */}
          <div style={columnStyles}>
            <h3 style={titleStyles}>聯絡我們</h3>
            <p style={textStyles}>服務時間: 週一至週五 09:00-18:00</p>
            <p style={textStyles}>信箱: MiraMoo0331@gmail.com</p>
            <p style={textStyles}>地址: 臺北市松山區八德路四段...</p>
          </div>

          {/* 欄位 2: 關注我們 */}
          <div style={columnStyles}>
            <h3 style={titleStyles}>關注我們</h3>
            <div style={socialStyles}>
              <a href="#" style={{ color: 'inherit' }}><FaFacebook /></a>
              <a href="#" style={{ color: 'inherit' }}><FaInstagram /></a>
              <a href="#" style={{ color: 'inherit' }}><FaLine /></a>
            </div>
          </div>

          

        </div>

        {/* Copyright (版權) */}
        <div style={copyrightStyles}>
          <p>Copyright © MiraMoo0331</p> {/* */}
        </div>
      </div>
    </footer>
  );
}