import React, { forwardRef } from "react";

const Steps = forwardRef((props, ref) => {
  // 步驟數據
  const steps = [
    {
      number: "1",
      title: "發佈或瀏覽",
      description: "案主可以發佈需求，達人可以上架技能，雙方都能快速找到彼此。",
      image: "/images/OR_stepCard1.png",
      buttonText: "發佈或瀏覽"
    },
    {
      number: "2", 
      title: "即時溝通",
      description: "在 App 聊天室，討論需求、價格與交付，不必交換個資，安全又方便。",
      image: "/images/OR_stepCard2.png",
      buttonText: "即時溝通"
    },
    {
      number: "3",
      title: "完成後，安全撥款",
      description: "與綠界合作安全收款，任務完成驗收後才撥款，讓合作更有保障。",
      image: "/images/OR_stepCard3.png",
      buttonText: "完成後，安全撥款"
    }
  ];

  return (
    <section className="steps" id="steps" ref={ref}>
      <div className="steps-container">
        {/* 左側標題區 */}
        <div className="steps-header">
          <div className="steps-subtitle">#預約＆搶單</div>
          <h2 className="steps-title">
            只需 3 步驟<br />
            輕鬆完成合作
          </h2>
          <p className="steps-description">
            你可以快速找到合作夥伴。<br />
            無論是臨時缺人或是想展示技能，都<br />
            能透過簡單三步驟完成。
          </p>
        </div>

        {/* 右側步驟卡片區 */}
        <div className="steps-cards">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              {/* 步驟編號 */}
              <div className="step-number">{step.number}</div>
              
              {/* 步驟內容 */}
              <div className="step-content">
                <p className="step-text">{step.description}</p>
                <button className="step-button">
                  {step.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Steps.displayName = "Steps";

export default Steps;