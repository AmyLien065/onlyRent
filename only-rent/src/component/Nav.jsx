import React, { useState, useEffect } from "react";
import "../scss/style.scss";

const Nav = ({ sectionRefs }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制漢堡選單開合

  // 監聽滾動狀態
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 點擊外部關閉選單
  useEffect(() => {
    const handleClickOutside = (event) => {
      // 如果點擊的不是漢堡按鈕或選單內容，就關閉選單
      if (!event.target.closest('.hamburger-btn') && !event.target.closest('.navbar-menu')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // 滾動到頂部的函數
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsMenuOpen(false); // 導航後關閉選單
  };

  // 滾動到指定區塊的函數
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // 減去 navbar 高度
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false); // 導航後關閉選單
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

  // 切換漢堡選單開合
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        {/* Logo - ScrollToTop 功能 */}
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
        <ul className={`navbar-menu ${isMenuOpen ? "menu-open" : ""}`}>
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
          
          {/* 手機版選單內的 CTA 按鈕 */}
          <li className="mobile-menu-cta">
            <a 
              href="#download" 
              className="cta-button"
              onClick={() => setIsMenuOpen(false)}
            >
              APP Download
            </a>
          </li>
        </ul>

        {/* 右側 CTA 按鈕（桌面和平板版） */}
        <div className="navbar-cta">
          <a 
            href="#download" 
            className="cta-button"
          >
            APP Download
          </a>
        </div>

        {/* 漢堡選單按鈕（手機版專用） */}
        <button 
          className={`hamburger-btn ${isMenuOpen ? "menu-open" : ""}`}
          onClick={toggleMenu}
          aria-label="選單"
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </nav>

      {/* 背景遮罩 */}
      <div 
        className={`menu-overlay ${isMenuOpen ? "overlay-open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </>
  );
};

export default Nav;