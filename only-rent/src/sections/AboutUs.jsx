import React from "react";

const AboutUs = () => {
    return (
        <section className="about-us" id="about">
            <div className="about-us-container">
                {/* 主要內容 */}
                <div className="about-content">
                    {/* 副標題 */}
                    <div className="about-subtitle">
                        Only Rent 不只是個 App，更是一種態度
                    </div>

                    {/* 主標題 */}
                    <h2 className="about-title">
                        你的價值不被定義，而是由你自己決定！
                    </h2>

                    {/* 描述段落 */}
                    <div className="about-description">
                        <p>
                            Only Rent 來自新加坡，創立於一個簡單卻有力量的信念 —— 你的價值，由你決定。<br />
                            在這個世界，太多人被工作定義、被市場標籤限制、被學歷或履歷決定價值。<br />
                            但我們相信，每一個人都有屬於自己的能力和獨特之處，都值得被看見、被選擇、被尊重。<br />
                            Only Rent 就是為了這樣的人而誕生：<span className="highlight-text">一個真正屬於人的服務平台</span>。
                        </p>           
                        <p>
                            我們從東南亞出發，把台灣作為第一站，因為這裡有最多願意打破框架、敢於嘗試、渴望自由的年輕人。<br />
                            Only Rent 要打造新型態的工作生態，讓「自由職業」真正成為一種自由、一個選擇、一種生活方式。 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;