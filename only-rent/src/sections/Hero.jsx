import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* 左側內容區 */}
        <div className="hero-content">
          {/* 副標題 */}
          <div className="hero-subtitle">
            隨時隨地開始
          </div>

          {/* 主標題 */}
          <h1 className="hero-title">
            你的<span className="highlight">發案平台</span>
          </h1>

          {/* 描述文字 */}
          <p className="hero-description">
            Only Rent 是一款任務配對平台，透過透明機制與金流保障，<br />
            建立雙方的信任。讓發案更安心、接案更自由！
          </p>

          {/* CTA 按鈕組 */}
          <div className="hero-cta">
            <a href="#download" className="download-btn">
              <img src="/images/OR_hero_AppStore.png" alt="Download on the App Store" />
            </a>
            
            <a href="#download" className="download-btn">
              <img src="/images/OR_hero_GooglePlay.png" alt="Get it on Google Play" />
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