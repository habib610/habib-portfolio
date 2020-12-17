import React from 'react';
import './SkillsMain.css'
const SkillBtn = ({skill}) => {
    return (
        <div className="skill-btn">{skill.name}</div>
    );
};

export default SkillBtn;