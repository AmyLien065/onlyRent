import React, { useState, useEffect, forwardRef } from "react";
// 確保 SCSS 正確引入
import "../scss/style.scss";

const Nav = ({ sectionRefs }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // 監聽滾動狀態
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 滾動到頂部的函數
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // 滾動到指定區塊的函數
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // 減去 navbar 高度
        behavior: "smooth"
      });
    }
  };

  // 導航選單項目
  const menuItems = [
    { name: "探索 / 發案", onClick: () => scrollToSection(sectionRefs?.featuresRef) },
    { name: "簡單 3 步驟", onClick: () => scrollToSection(sectionRefs?.stepsRef) },
    { name: "關於我們", onClick: () => scrollToSection(sectionRefs?.aboutRef) },
    { name: "FAQ", onClick: () => scrollToSection(sectionRefs?.faqRef) }
  ];

  const handleMenuClick = (e, onClick) => {
    e.preventDefault();
    onClick();
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    scrollToTop();
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo - 添加 ScrollToTop 功能 */}
      <div className="navbar-brand">
        <a 
          href="#" 
          className="brand-link"
          onClick={handleLogoClick}
          title="回到頂部"
        >
          Only Rent
        </a>
      </div>

      {/* 中央選單 */}
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <a 
              href="#" 
              className="menu-link"
              onClick={(e) => handleMenuClick(e, item.onClick)}
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
        >
          APP Download
        </a>
      </div>
    </nav>
  );
};

export default Nav;