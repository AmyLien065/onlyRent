import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // 預設第一個問題展開

  // FAQ 數據
  const faqData = [
    {
      question: "我沒有任何工作室、公司戶，可以使用嗎？",
      answer: "當然可以，個人即可使用 Only Rent。不論是想找人幫忙的案主，還是想利用空閒時間接案的達人，都能直接註冊。"
    },
    {
      question: "為什麼需要身分驗證？",
      answer: "為了保障交易安全並符合法規，平台要求達人完成手機驗證與政府核發證件上傳，用於保障雙方權益。"
    },
    {
      question: "如果任務沒有完成怎麼辦？",
      answer: "若發生爭議，案主可以在交易完成後 7 天內提出申訴。平台會根據雙方紀錄協助處理退款或爭議，但最終結果需依實際情況判定。"
    },
    {
      question: "平台允許哪些技能？",
      answer: "原則上不設限，從美甲、攝影到家教、清潔都能自由發佈。但平台嚴格禁止違法、危險或侵害他人權益的內容（如詐騙、黃賭毒、侵權等），一經發現將立即下架並封鎖帳號。"
    },
    {
      question: "我可以同時是發案者和接案者嗎？",
      answer: "可以。你可以在 App 裡自由切換身份，今天發案、明天接案，完全不受限制。"
    },
    {
      question: "接案有時間或地點限制嗎？",
      answer: "沒有。你可以依照自己的生活安排，自行挑選想接的案件與時段，隨時隨地靈活工作。"
    },
    {
      question: "我個人的資料會不會被公開？",
      answer: "在任務成立前，不會公開雙方的個資；所有溝通都在 App 內完成。金流資料則由 綠界（ECPay） 處理，平台不會保存你的卡號或銀行資訊。"
    }
  ];

  // 切換折疊狀態
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        {/* 標題區 */}
        <div className="faq-header">
          <div className="faq-subtitle">FAQ</div>
          <h2 className="faq-title">常見問題</h2>
        </div>

        {/* FAQ 列表 */}
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              {/* 問題標題 */}
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span className="question-number">{index + 1}.</span>
                <span className="question-text">{item.question}</span>
                <span className="faq-icon">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path 
                      d="M6 9L12 15L18 9" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              {/* 答案內容 */}
              <div className="faq-answer">
                <div className="answer-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;