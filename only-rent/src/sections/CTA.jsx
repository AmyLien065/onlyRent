import React, { useState } from "react";

const CTA = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    role: "",
    skills: "",
    region: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 你的 Formspree form ID
      const FORMSPREE_URL = "https://formspree.io/f/xeorqjqd";
      
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          source: "Only Rent 官網等候名單",
          timestamp: new Date().toISOString()
        })
      });
      
      if (response.ok) {
        setMessage("🎉 成功加入等候名單！我們會盡快聯絡您。");
        setFormData({ email: "", name: "", role: "", skills: "", region: "" });
      } else {
        throw new Error("提交失敗");
      }
    } catch (error) {
      setMessage("❌ 提交失敗，請稍後再試或聯絡客服。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="cta" id="cta">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-subtitle">#加入等候名單</div>
          <h2 className="cta-title">搶先體驗 Only Rent</h2>
          <p className="cta-description">
            留下聯絡方式，我們將邀請你成為 Beta 版用戶，享推薦獎勵
          </p>
          
          {/* 進階自訂表單 */}
          <div className="advanced-form-wrapper">
            <form className="advanced-form" onSubmit={handleSubmit}>
              {/* Email 欄位 */}
              <div className="form-field">
                <label htmlFor="email" className="field-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="field-input"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* 姓名欄位 */}
              <div className="form-field">
                <label htmlFor="name" className="field-label">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="您的姓名"
                  className="field-input"
                  disabled={isSubmitting}
                />
              </div>

              {/* 角色選擇 */}
              <div className="form-field">
                <label className="field-label">感興趣的角色 *</label>
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="role"
                      value="案主"
                      checked={formData.role === "案主"}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                    <span className="radio-text">我是案主（我要發案）</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="role"
                      value="達人"
                      checked={formData.role === "達人"}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                    <span className="radio-text">我是達人（我要接案）</span>
                  </label>
                </div>
              </div>

              {/* 技能/需求領域 */}
              <div className="form-field">
                <label htmlFor="skills" className="field-label">
                  {formData.role === "案主" ? "需要什麼服務" : "您的專長技能"}
                </label>
                <select
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="field-select"
                  disabled={isSubmitting}
                >
                  <option value="">請選擇...</option>
                  <option value="家教">家教</option>
                  <option value="語言學習">語言學習</option>
                  <option value="工程開發">工程開發</option>
                  <option value="設計美工">設計美工</option>
                  <option value="行銷小編">行銷/小編</option>
                  <option value="美容美甲">美容美甲</option>
                  <option value="寵物服務">寵物服務</option>
                  <option value="清潔家務">清潔家務</option>
                  <option value="水電維修">水電維修</option>
                  <option value="其他">其他</option>
                </select>
              </div>

              {/* 地區 */}
              <div className="form-field">
                <label htmlFor="region" className="field-label">主要活動地區</label>
                <select
                  id="region"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className="field-select"
                  disabled={isSubmitting}
                >
                  <option value="">請選擇...</option>
                  <option value="台北市">台北市</option>
                  <option value="新北市">新北市</option>
                  <option value="桃園市">桃園市</option>
                  <option value="台中市">台中市</option>
                  <option value="台南市">台南市</option>
                  <option value="高雄市">高雄市</option>
                  <option value="其他縣市">其他縣市</option>
                  <option value="不限地區">不限地區（線上服務）</option>
                </select>
              </div>

              {/* 提交按鈕 */}
              <button 
                type="submit" 
                className="advanced-submit-btn"
                disabled={isSubmitting || !formData.email || !formData.role}
              >
                {isSubmitting ? "提交中..." : "🚀 搶先加入"}
              </button>
            </form>
          </div>

          {/* 提交結果顯示 */}
          {message && (
            <div className={`submit-message ${message.includes("🎉") ? "success" : "error"}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;