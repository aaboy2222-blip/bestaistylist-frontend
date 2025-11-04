// app/components/HeroSection.js

'use client'; 

import React, { useState, useEffect } from 'react'; // <-- 步驟 1: 我們不再需要 useEffect
import Image from 'next/image'; 

// 圖片檔案清單 (保持不變)
const imageList = [
  '/Roxia_001.png',
  '/Roxia_002.png',
  '/Roxia_003.png',
  '/Roxia_004.png',
  '/Roxia_005.png',
];

// --- 樣式 Style 物件 ---

// ... (sectionStyles, containerStyles 保持不變) ...
const sectionStyles: React.CSSProperties = {
  width: '100%',
  padding: '2rem 0', 
  backgroundColor: '#fdf6f0ff', 
  borderBottom: '1px solid #eaeaea',
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1440px',   
  margin: '0 auto',     
  padding: '0 2rem',    
  display: 'flex',          
  alignItems: 'center',     
  justifyContent: 'space-between', 
  gap: '3rem',              
  flexWrap: 'wrap-reverse', 
};

// --- (修改) 左欄：控制項容器 ---
const controlsContainerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column', 
  gap: '2rem', // <-- 稍微拉大 "風格" 和 "場合" 之間的距離
  flex: '1',               
  minWidth: '300px',       
};

// (新) 按鈕組 (風格, 場合) 的外層
const controlGroupStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem', // 標籤和按鈕組的間距
};

// "風格:" 和 "場合:" 的標籤樣式 (保持不變)
const labelStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: '500',
  color: '#333',
};

// (新) 按鈕組的容器 (水平排列按鈕)
const buttonGroupStyles: React.CSSProperties = {
  // ↓↓↓↓↓↓ 這是關鍵修改 ↓↓↓↓↓↓
  display: 'grid', // 1. 從 'flex' 改成 'grid'
  gap: '0.75rem',
  // 2. 這行是 "魔法"
  // - auto-fit: 自動填滿
  // - minmax(100px, 1fr): 每個按鈕 "最小" 100px, "最大" 1fr (填滿)
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  // ↑↑↑↑↑↑ 這是關鍵修改 ↑↑↑↑↑↑
};

// (新) 按鈕的預設樣式
const toggleButtonStyles: React.CSSProperties = {
  padding: '0.5rem 1rem',
  fontSize: '0.9rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  cursor: 'pointer',
  backgroundColor: '#ffffff', 
  color: '#2f2f2fff',          
  fontWeight: '500',

};

// (新) 按鈕 "被選中" 時的樣式
const activeButtonStyles: React.CSSProperties = {
  backgroundColor: '#616161ff', // 選中: 黑色
  color: '#ffffff',          // 選中: 白色
  border: '1px solid #3c3c3cff',
};

// "生成服裝按鈕" 的樣式 (保持不變)
const buttonStyles: React.CSSProperties = {
  padding: '0.75rem 2rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: 'white',
  backgroundColor: '#2b2b2bff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  width: '100%', 
};



// --- (修改) 右欄：圖片容器 ---
const imageContainerStyles: React.CSSProperties = {
  flex: '1',               
  minWidth: '300px',       
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // 我們讓圖片的樣式來控制比例
};

// --- (修改) 圖片本身的樣式 ---
const imageStyles: React.CSSProperties = {
  width: '100%',            // 佔滿容器寬度
  maxWidth: '500px',          // <-- 關鍵: 限制圖片最大寬度
  height: 'auto',             // 高度自動
  aspectRatio: '1 / 1',       // <-- 關鍵: 鎖定長寬比為 1:1 (正方形)
  objectFit: 'cover',         // <-- 關鍵: 圖片會被裁切以填滿, 不會變形
  borderRadius: '12px',
  backgroundColor: '#eee', // 圖片載入前的底色
};


// --- HeroSection 元件本體 ---

export default function HeroSection() {
  const [style, setStyle] = useState('日系');
  const [occasion, setOccasion] = useState('日系');
  
  // 步驟 3: 隨機圖片的 state, 初始值為 null (沒有圖片)
  const [randomImage, setRandomImage] = useState<string | null>(null);

  // --- ↓↓↓ 步驟 2: 把這整段 useEffect 加回來 ↓↓↓ ---
  useEffect(() => {
    // 這段程式碼只會在 "元件第一次載入" 時執行一次
    const randomIndex = Math.floor(Math.random() * imageList.length);
    setRandomImage(imageList[randomIndex]);
  }, []); // <-- 這個空的 [] 是關鍵, 代表 "只執行一次 (on load)"

  // 步驟 4: 移除 useEffect

  // 步驟 5: 修改 handleGenerate 函式
  const handleGenerate = () => {
    console.log('--- 開始生成服裝 ---');
    console.log('選擇的風格:', style);
    console.log('選擇的場合:', occasion);

    // --- (新) 隨機邏輯移到這裡 ---
    const randomIndex = Math.floor(Math.random() * imageList.length);
    setRandomImage(imageList[randomIndex]);
    // ---
  };

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        
        {/* --- 左欄：控制項 (已更新為按鈕組) --- */}
        <div style={controlsContainerStyles}>
          
          {/* 按鈕組 1: 風格 */}
          <div style={controlGroupStyles}>
            <label style={labelStyles}>風格:</label>
            <div style={buttonGroupStyles}>
              {['日系', '韓系', '歐美', '休閒'].map((item) => (
                <button
                  key={item}
                  style={
                    style === item // 檢查: 目前的 style 是否等於這個按鈕?
                      ? { ...toggleButtonStyles, ...activeButtonStyles } // "是": 套用 "選中" 樣式
                      : toggleButtonStyles // "否": 套用 "預設" 樣式
                  }
                  onClick={() => setStyle(item)} // 點擊時, 更新 style
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* 按鈕組 2: 場合 */}
          <div style={controlGroupStyles}>
            <label style={labelStyles}>場合:</label>
            <div style={buttonGroupStyles}>
              {['日系', '約會', '上班', '派對'].map((item) => (
                <button
                  key={item}
                  style={
                    occasion === item // 檢查: 目前的 occasion 是否等於這個按鈕?
                      ? { ...toggleButtonStyles, ...activeButtonStyles } // "是": 套用 "選中" 樣式
                      : toggleButtonStyles // "否": 套用 "預設" 樣式
                  }
                  onClick={() => setOccasion(item)} // 點擊時, 更新 occasion
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          {/* 生成按鈕 (保持不變) */}
          <button style={buttonStyles} onClick={handleGenerate}>
            生成服裝按鈕
          </button>
        </div>

        {/* --- 右欄：隨機圖片 --- */}
        <div style={imageContainerStyles}>
          {/* 步驟 6: 只有當 randomImage "不是" null 時, 才渲染圖片 */}
          {randomImage ? (
            <Image
              src={randomImage}
              alt="隨機服裝展示"
              width={500}  // 原始寬高
              height={500} // 原始寬高
              style={imageStyles} // 響應式樣式
              priority
            />
          ) : (
            // (新) 尚未生成時, 顯示一個佔位符
            <div style={{...imageStyles, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'}}>
              請選擇風格與場合
            </div>
          )}
        </div>

      </div>
    </section>
  );
}