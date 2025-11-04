// app/page.js
import HeroSection from "./components/HeroSection"; // <-- 步驟 1: 匯入您的新元件
import SharingSection from "./components/SharingSection";
import FavoritesSection from "./components/FavoritesSection";

// 這是您首頁的 CSS (如果需要的話)
const pageStyles = {
  // 目前我們可以讓 HeroSection 的背景色來填滿
};

export default function HomePage() {
  return (
    <div style={pageStyles}>
      
      {/* 步驟 2: 使用 HeroSection 元件 */}
      <HeroSection />
      <SharingSection />
      <FavoritesSection />
      
    </div>
  );
}