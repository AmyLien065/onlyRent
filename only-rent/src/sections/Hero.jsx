import React, { useState, useEffect } from "react";

const Hero = () => {
  const keywords = [
    { text: "發案平台", gradient: "gradient-1" },
    { text: "接案平台", gradient: "gradient-2" }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // 開始淡出
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % keywords.length);
        setIsTransitioning(false); // 淡入新文字
      }, 400); // 淡出時間，可調整
      
    }, 2500); // 每個文字顯示的時間

    return () => clearInterval(interval);
  }, [keywords.length]);

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-subtitle">隨時隨地開始</div>

          <h1 className="hero-title">
            你的
            <span className="keyword-carousel">
              {keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className={`carousel-item ${keyword.gradient} ${
                    index === currentIndex && !isTransitioning ? 'active' : ''
                  }`}
                >
                  {keyword.text}
                </span>
              ))}
            </span>
          </h1>

          <p className="hero-description">
            Only Rent 是一款任務配對平台，透過透明機制與金流保障，<br />
            建立雙方的信任。讓發案更安心、接案更自由！
          </p>

          <div className="hero-cta">
            <a href="#download" className="download-btn">
              <img src="./images/OR_hero_AppStore.png" alt="Download on the App Store" />
            </a>
            
            <a href="#download" className="download-btn">
              <img src="./images/OR_hero_GooglePlay.png" alt="Get it on Google Play" />
            </a>
          </div>
        </div>

        <div className="hero-visual"></div>
      </div>
    </section>
  );
};

export default Hero;