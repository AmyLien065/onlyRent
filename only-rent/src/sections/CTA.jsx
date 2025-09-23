import React from "react";

const CTA = () => {
  return (
    <section className="cta" id="cta">
      <div className="cta-container">
        <div className="cta-content">
          {/* 標題區 */}
          <div className="cta-subtitle">#加入等候名單</div>
          <h2 className="cta-title">搶先體驗 Only Rent</h2>
          <p className="cta-description">
            留下聯絡方式，我們將邀請你成為 Beta 版用戶，享推薦獎勵
          </p>
          
          {/* Google Forms 嵌入區 - 使用你的表單 */}
          <div className="google-form-wrapper">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfJO4wvP4_M50m0F46F9UMQqPB1QH-batIql-Bi8Pp4MR_UUQ/viewform?embedded=true" 
              width="100%" 
              height="400" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              title="Only Rent Beta 等候名單"
              loading="lazy"
            >
              載入中…
            </iframe>
          </div>

          {/* 備用連結（如果 iframe 無法顯示） */}
          <div className="backup-link">
            <p style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginTop: '1rem'}}>
              如果表單無法顯示，請
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfJO4wvP4_M50m0F46F9UMQqPB1QH-batIql-Bi8Pp4MR_UUQ/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color: '#75E1EB', textDecoration: 'underline', marginLeft: '4px'}}
              >
                點此填寫
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;