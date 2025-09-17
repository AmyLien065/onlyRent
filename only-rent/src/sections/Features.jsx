import React, { useState } from "react";

const Features = () => {
  const [activeTab, setActiveTab] = useState("seeker"); // "seeker" 或 "provider"

  // Tab 內容數據
  const tabContent = {
    seeker: {
      title: "我要接案",
      subtitle: "你是不是常覺得",
      description: "工作自由度低，接案又缺乏曝光，還要擔心安全與收入保障？",
      features: [
        {
          title: "時間彈性",
          description: "不再受傳統工時限制，隨時開放工作時段",
          image: "/images/feature-time-flexible.svg"
        },
        {
          title: "安全溝通",
          description: "App 內與客戶天，個資不會提前公開，工作與生活切分",
          image: "/images/feature-safe-communication.svg"
        },
        {
          title: "個人品牌",
          description: "打造職人王國，透過社群互動累積口碑，吸引更多案源",
          image: "/images/feature-personal-brand.svg"
        },
        {
          title: "透明交易",
          description: "雙向評價機制，讓每一次合作都更公開、公正、可被信任",
          image: "/images/feature-transparent-deal.svg"
        },
        {
          title: "金流保障",
          description: "平台託管金流，完成驗收放款，確保你收到每一筆收入",
          image: "/images/feature-payment-security.svg"
        }
      ]
    },
    provider: {
      title: "我要找人",
      subtitle: "你是不是也遇過",
      description: "臨時缺人卻找不到可靠的人，行情不明又怕對接後溝通無效？",
      features: [
        {
          title: "身份驗證",
          description: "實名認證＋專人審核，降低合作風險",
          image: "/images/feature-identity-verify.png"
        },
        {
          title: "時間彈性",
          description: "一對一配對，需求可調整，不怕臨時有不了",
          image: "/images/feature-time-flexible-2.png"
        },
        {
          title: "時間彈性",
          description: "依技能、服務地區找到符合需求的人才",
          image: "/images/feature-time-flexible-3.png"
        },
        {
          title: "透明機制",
          description: "不需議價，每位達人的價錢與好評歷史公開透明",
          image: "/images/feature-transparent-system.png"
        },
        {
          title: "金流保障",
          description: "任務完成驗收後才會撥款，保障雙方權益",
          image: "/images/feature-payment-security-2.png"
        }
      ]
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="features" id="features">
      <div className="features-container">
        {/* Tab 切換區 */}
        <div className="tab-switcher">
          <button 
            className={`tab-btn ${activeTab === "seeker" ? "active" : ""}`}
            onClick={() => setActiveTab("seeker")}
          >
            我要接案
          </button>
          <button 
            className={`tab-btn ${activeTab === "provider" ? "active" : ""}`}
            onClick={() => setActiveTab("provider")}
          >
            我要找人
          </button>
        </div>

        {/* 內容區 */}
        <div className="tab-content">
          {/* 標題區 */}
          <div className="content-header">
            <div className="content-subtitle">{currentContent.subtitle}</div>
            <h2 className="content-title">{currentContent.description}</h2>
          </div>

          {/* 功能特色卡片區 */}
          <div className="features-grid">
            {/* 第一排：時間彈性、安全溝通、個人品牌 */}
            <div className="features-row-1">
              {currentContent.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                  <div className="feature-visual">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="feature-image"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* 第二排：透明交易、金流保障 */}
            <div className="features-row-2">
              {currentContent.features.slice(3, 5).map((feature, index) => (
                <div key={index + 3} className="feature-card">
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                  <div className="feature-visual">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="feature-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;