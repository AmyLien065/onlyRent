import React from "react";

const Skills = () => {
  // 技能標籤數據
  const skills = [
    "家教", "語言學習", "工程開發", "會計", "個人助理", "行銷/小編", 
    "美容保養", "美甲美睫", "寵物保母", "毛孩陪玩", "保潔人員", "水電", "油漆"
  ];

  // 複製一份技能列表用於無縫循環
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        {/* 標題區 */}
        <div className="skills-header">
          <div className="skills-subtitle">#技能</div>
          <h2 className="skills-title">
            不設限技能發佈<br />
            每一種才華 都值得被看見！
          </h2>
          <p className="skills-description">
            從影音剪輯、設計、家教、美容美甲，到臨時人手與活動支援，各種技能都能找到舞台
          </p>
        </div>

        {/* 跑馬燈區域 */}
        <div className="skills-marquee">
          <div className="marquee-track">
            {duplicatedSkills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 底部說明文字 */}
        <div className="skills-footer">
          平台會嚴格控管，禁止非法或違規技能的發佈
        </div>
      </div>
    </section>
  );
};

export default Skills;