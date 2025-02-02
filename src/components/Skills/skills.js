import React from "react";
import './skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">what i do</span>
            <span className="skillDesc">description</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="sillBarImg"/>
                    <div className="skillBarText">
                        <h2>ui ux design</h2>
                        <p>demo text</p>
                    </div>
                </div><div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="sillBarImg"/>
                    <div className="skillBarText">
                        <h2>ui ux design</h2>
                        <p>demo text</p>
                    </div>
                </div><div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="sillBarImg"/>
                    <div className="skillBarText">
                        <h2>ui ux design</h2>
                        <p>demo text</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;