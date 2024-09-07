import React from "react";
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id= 'skills'>
       <span className="skillTittle">What I Do</span>
       <span className="skillDescription">I am skilled in and passionate about web design</span>
       <div className="skillsBars">
        <div className="skillsBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImage"/>
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>THis is a demo text</p>
            </div>
        </div>
        <div className="skillsBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImage"/>
            <div className="skillBarText">
                <h2>Web Design</h2>
                <p>THis is a demo text</p>
            </div>
        </div>
        <div className="skillsBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImage"/>
            <div className="skillBarText">
                <h2>App Design</h2>
                <p>THis is a demo text</p>
            </div>
        </div>
       </div>
        </section>
  )
}

export default Skills