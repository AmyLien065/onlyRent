import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 左側區域 - Logo 和 App 下載 */}
        <div className="footer-left">
          {/* Logo */}
          <div className="footer-logo">
            <div className="logo-icon">or</div>
            <span className="logo-text">Only Rent</span>
          </div>

          {/* App 下載按鈕 */}
          <div className="app-download">
            <a href="#" className="download-btn app-store">
              <img src="/images/app-store.svg" alt="Download on the App Store" />
            </a>
            <a href="#" className="download-btn google-play">
              <img src="/images/google-play.svg" alt="Get it on Google Play" />
            </a>
          </div>

          {/* 版權資訊 */}
          <div className="copyright">
            © 2025 Only Rent. All rights reserved.
          </div>
        </div>

        {/* 中間區域 - Taiwan Agent */}
        <div className="footer-center">
          <h4 className="footer-title">Taiwan Agent</h4>
          <div className="contact-info">
            <p>煦澄科技有限公司</p>
            <p>台北市中正區金山北路一號六樓</p>
            <p>onlyrent0404@gmail.com</p>
            <p>統編 83746921</p>
            <p>公司聯絡人：王小明</p>
          </div>
        </div>

        {/* 右側區域 - Singapore HQ */}
        <div className="footer-right">
          <h4 className="footer-title">Singapore HQ</h4>
          <div className="contact-info">
            <p>Only Rent Technology (S) Pte. Ltd.</p>
            <p>1 North Bridge Road #01-37 High Street Centre Singapore 179094</p>
            <p>support@onlyrent.sg</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;