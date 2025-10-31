import React, { useState, useEffect } from "react";

const Hero = () => {
  const keywords = [
    { text: "發案平台", gradient: "gradient-1" },
    { text: "接案平台", gradient: "gradient-2" }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // 👈 新增：判斷是否為手機版
  
  // 新增：監聽視窗大小
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % keywords.length);
        setIsTransitioning(false);
      }, 400);
      
    }, 2500);

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

          {/* 根據裝置顯示不同文字 */}
          <p className="hero-description">
            {isMobile ? (
              // 手機版簡化文字
              <>
              Only Rent 是一款任務配對平台，<br />
              讓發案更安心、接案更自由！
              </>
            ) : (
              // 桌機版完整文字
              <>
                Only Rent 是一款任務配對平台，透過透明機制與金流保障，<br />
                建立雙方的信任。讓發案更安心、接案更自由！
              </>
            )}
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