import React, { useState, useEffect } from "react";
// 確保 SCSS 正確引入
import "../scss/style.scss";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // 監聽滾動狀態
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 導航選單項目
  const menuItems = [
    { name: "探索 / 發案", href: "#explore" },
    { name: "簡單 3 步驟", href: "#steps" },
    { name: "關於我們", href: "#about" },
    { name: "FAQ", href: "#faq" }
  ];

  const handleMenuClick = (e) => {
    e.preventDefault();
    console.log("選單點擊:", e.target.textContent);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar-brand">
        <a href="#home" className="brand-link" onClick={handleMenuClick}>
          Only Rent
        </a>
      </div>

      {/* 中央選單 */}
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <a 
              href={item.href} 
              className="menu-link"
              onClick={handleMenuClick}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* 右側 CTA 按鈕 */}
      <div className="navbar-cta">
        <a 
          href="#download" 
          className="cta-button"
          onClick={handleMenuClick}
        >
          APP Download
        </a>
      </div>
    </nav>
  );
};

export default Nav;