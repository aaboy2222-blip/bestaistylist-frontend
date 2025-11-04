// app/components/SharingSection.js

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
// --- 樣式 Style 物件 ---

// ... (sectionStyles, containerStyles, titleStyles 保持不變) ...
const sectionStyles: React.CSSProperties = {
  width: '100%',
  padding: '0rem 0', 
  backgroundColor: '#ffffff', 
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1440px',   
  margin: '0 auto',     
  padding: '0 2rem',    
  display: 'flex',
  flexDirection: 'column', 
  gap: '0rem', 
};

const titleStyles: React.CSSProperties = {
  fontSize: '2rem', 
  fontWeight: 'bold',
  color: '#000',
  textAlign: 'center', 
};

// --- (修改) 卡片 "網格" 容器 ---
const gridStyles: React.CSSProperties = {
  display: 'flex', // <-- 1. 改用 Flex 
  flexDirection: 'column', // <-- 2. 讓卡片垂直堆疊
  gap: '0.2rem', // 每一張卡片之間的間距
};

// --- (修改) 單張卡片 (Card) 的樣式 ---
const cardStyles: React.CSSProperties = {
  display: 'flex', // <-- 3. 卡片內部使用 Flex 佈局 (關鍵)
  gap: '1.5rem',   // 圖片和文字之間的間距
  border: '1px solid #eaeaea',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  backgroundColor: '#fff',
  padding: '1.5rem', // <-- 4. Padding 移到卡片上
  overflow: 'hidden',
  
  // RWD: 當螢幕太窄時, 讓圖片和文字垂直堆疊
  flexWrap: 'wrap',
};

// --- (修改) 卡片圖片的樣式 ---
const cardImageStyles: React.CSSProperties = {
  // 5. "半身圖" 裁切: 鎖定 1:1 的正方形比例
  aspectRatio: '1 / 1', 
  objectFit: 'cover',
  borderRadius: '8px', // 圖片圓角
  
  // 6. 尺寸控制
  width: '100%',     // 在手機上 (換行時) 佔滿 100%
  maxWidth: '200px', // 在大螢幕上 (並排時) 最大 200px
  height: 'auto',
};

// --- (修改) 卡片文字內容的容器 ---
const cardContentStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  flex: 1, // <-- 7. 讓文字區塊自動填滿右側 "所有" 剩餘空間 (關鍵)
  minWidth: '250px', // 確保文字區塊有足夠空間, 輔助 RWD 換行
};

// ... (cardTitleStyles, cardDateStyles, cardTextStyles, viewMoreStyles 保持不變) ...
const cardTitleStyles: React.CSSProperties = {
  fontSize: '1.25rem', 
  fontWeight: '600',
  color: '#111',
};

const cardDateStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#666',
  marginBottom: '0.5rem',
};

const cardTextStyles: React.CSSProperties = {
  fontSize: '1rem',
  color: '#333',
  lineHeight: '1.6',
};

const viewMoreStyles: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: '#000',
  textDecoration: 'none',
  marginTop: '1rem',
  marginBottom: '1rem',
};


// --- 穿搭分享的假資料 (保持不變) ---
const sharingData = [
  {
    id: 1,
    title: '穿搭名稱: 許我耀眼許延穿搭',
    date: '發布日期: 2025/11/04',
    text: '上半身穿著一件合身的奶油白V領羅紋針織衫。長袖與短版的剪裁突顯了腰部線條...', 
    imageSrc: '/Roxia_001.png', 
  },
  {
    id: 2,
    title: '穿搭名稱: 歐式服裝風格',
    date: '發布日期: 2025/10/05',
    text: '上半身穿著一件合身的奶油白V領羅紋針織衫。長袖與短版的剪裁突顯了腰部線條...', 
    imageSrc: '/Roxia_002.png', 
  },
];


// --- SharingSection 元件本體 (修改卡片結構) ---
export default function SharingSection() {
  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        
        <h2 style={titleStyles}>
          穿搭分享
        </h2>

        <div style={gridStyles}>
          {sharingData.map((item) => (
            // 8. 調整卡片結構
            <div key={item.id} style={cardStyles}>
              
              {/* 圖片在左 */}
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={200} // 原始寬度 (範例)
                height={200} // 原始高度 (範例, 保持 1:1)
                style={cardImageStyles}
              />
              
              {/* 文字在右 */}
              <div style={cardContentStyles}>
                <h3 style={cardTitleStyles}>{item.title}</h3>
                <p style={cardDateStyles}>{item.date}</p>
                <p style={cardTextStyles}>{item.text}</p>
              </div>

            </div>
          ))}
        </div>

        <Link href="/sharing" style={viewMoreStyles}>
          {`>>> 觀看更多穿搭分享 <<<`}
        </Link>

      </div>
    </section>
  );
}