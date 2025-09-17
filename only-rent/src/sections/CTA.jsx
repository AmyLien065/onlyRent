import React, { useState } from "react";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 處理表單提交邏輯
    console.log("提交郵箱:", email);
    // 這裡可以添加 API 調用或其他處理邏輯
  };

  return (
    <section className="cta" id="cta">
      <div className="cta-container">
        <div className="cta-content">
          {/* 副標題 */}
          <div className="cta-subtitle">
            #加入等候名單
          </div>
          
          {/* 主標題 */}
          <h2 className="cta-title">
            搶先體驗 Only Rent
          </h2>
          
          {/* 描述文字 */}
          <p className="cta-description">
            留下聯絡方式，我們將邀請你成為 Beta 版用戶，享推薦獎勵
          </p>
          
          {/* 郵箱輸入表單 */}
          <form className="cta-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="輸入信箱"
                className="email-input"
                required
              />
              <button type="submit" className="submit-btn">
                送出
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;