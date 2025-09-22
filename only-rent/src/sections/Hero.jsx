import React, { useState, useEffect } from "react";

const Hero = () => {
  // 輪播關鍵字數組
  const keywords = ["發案平台", "接案平台"];
  
  // 當前顯示的關鍵字索引
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 設置輪播定時器
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 2500); // 每2.5秒切換一次

    return () => clearInterval(interval); // 清理定時器
  }, [keywords.length]);

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* 左側內容區 */}
        <div className="hero-content">
          {/* 副標題 */}
          <div className="hero-subtitle">
            隨時隨地開始
          </div>

          {/* 主標題 - 加入輪播效果 */}
          <h1 className="hero-title">
            你的
            <span className="keyword-carousel">
              {keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                >
                  {keyword}
                </span>
              ))}
            </span>
          </h1>

          {/* 描述文字 */}
          <p className="hero-description">
            Only Rent 是一款任務配對平台，透過透明機制與金流保障，<br />
            建立雙方的信任。讓發案更安心、接案更自由！
          </p>

          {/* CTA 按鈕組 */}
          <div className="hero-cta">
            <a href="#download" className="download-btn">
              <img src="./images/OR_hero_AppStore.png" alt="Download on the App Store" />
            </a>
            
            <a href="#download" className="download-btn">
              <img src="./images/OR_hero_GooglePlay.png" alt="Get it on Google Play" />
            </a>
          </div>
        </div>

        {/* 右側留空給背景圖片中的手機 */}
        <div className="hero-visual">
          {/* 背景圖片中已包含手機，這裡不需要額外內容 */}
        </div>
      </div>
    </section>
  );
};

export default Hero;