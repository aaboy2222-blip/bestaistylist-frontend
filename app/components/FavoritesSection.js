// app/components/FavoritesSection.js

import Image from 'next/image';
import Link from 'next/link';

// --- 樣式 Style 物件 ---

// 整個區塊 (Section) 的樣式
const sectionStyles = {
  width: '100%',
  padding: '4rem 0', 
  backgroundColor: '#f9f9f9', // 淡灰色背景, 和 HeroSection 一致
};

// 內容容器, 負責 1440px 置中
const containerStyles = {
  maxWidth: '1440px',   
  margin: '0 auto',     
  padding: '0 2rem',    
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem', 
};

// 區塊大標題 ("最受喜愛穿搭")
const titleStyles = {
  fontSize: '2rem', 
  fontWeight: 'bold',
  color: '#000',
  textAlign: 'center', 
};

// 卡片網格 (Grid) 容器
const gridStyles = {
  display: 'grid',
  // 這是 RWD 網格: 
  // - auto-fit: 自動填滿
  // - minmax(200px, 1fr): 每個卡片 "最小" 200px, "最大" 1fr
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1.5rem', // 卡片之間的間距
};

// --- (新) 單個畫廊項目 (Gallery Item) 的樣式 ---
const itemStyles = {
  position: 'relative', // <-- 關鍵: 為了讓 "排名" 浮在上面
  borderRadius: '12px',
  overflow: 'hidden', // 裁切圖片圓角
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
};

// 圖片的樣式
const imageStyles = {
  width: '100%',
  height: 'auto',
  aspectRatio: '3 / 4', // 圖片比例 3:4 (您可以改成 1:1 或 2:3)
  objectFit: 'cover',
  display: 'block', // 移除圖片底部的空隙
};

// --- (新) 排名標籤 (Rank Tag) 的樣式 ---
const rankStyles = {
  position: 'absolute', // <-- 關鍵: 浮動
  bottom: '1rem',       // 離底部 16px
  left: '1rem',         // 離左側 16px
  padding: '0.25rem 0.75rem',
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // 白色半透明背景
  color: '#000',
  fontWeight: 'bold',
  borderRadius: '6px',
  fontSize: '0.9rem',
};


// --- (新) 假資料 ---
const favoritesData = [
  { id: 1, rank: 'No.1', imageSrc: '/Roxia_001.png' }, // [cite: 23]
  { id: 2, rank: 'No.2', imageSrc: '/Roxia_002.png' }, // [cite: 24]
  { id: 3, rank: 'No.3', imageSrc: '/Roxia_003.png' }, // [cite: 26]
  { id: 4, rank: 'No.4', imageSrc: '/Roxia_004.png' }, // [cite: 27]
  { id: 5, rank: 'No.5', imageSrc: '/Roxia_005.png' }, // [cite: 28]
];


// --- FavoritesSection 元件本體 ---
export default function FavoritesSection() {
  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        
        {/* 1. 區塊標題 */}
        <h2 style={titleStyles}>
          最受喜愛穿搭 {/*  */}
        </h2>

        {/* 2. 卡片網格 */}
        <div style={gridStyles}>
          {favoritesData.map((item) => (
            <div key={item.id} style={itemStyles}>
              <Image
                src={item.imageSrc}
                alt={item.rank}
                width={300} // 原始寬度 (範例)
                height={400} // 原始高度 (範例, 保持 3:4)
                style={imageStyles}
              />
              {/* 排名標籤 */}
              <div style={rankStyles}>{item.rank}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}