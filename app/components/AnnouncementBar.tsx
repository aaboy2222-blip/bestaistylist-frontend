// app/components/AnnouncementBar.js
import React from 'react';
// 這是公告列的 CSS 樣式
const barStyle: React.CSSProperties = {
  backgroundColor: '#fff8e2ff', // 一個醒目的黃色背景
  color: '#8c8c8cff',             // 深色文字
  textAlign: 'center',        // 文字置中
  padding: '0.5rem 1rem',     // 上下 0.5rem, 左右 1rem 的內邊距
  fontWeight: 'bold',       // 粗體字
  fontSize: '0.9rem',         // 稍小的字體
};

export default function AnnouncementBar() {
  return (
    <div style={barStyle}>
      現在註冊送100點
    </div>
  );
}