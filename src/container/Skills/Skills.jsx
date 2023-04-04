import React from 'react'
import "./Skills.scss"
import { motion } from 'framer-motion';
import { images } from "../../constants";

const Skills = () => {
const mySkills = [
    { id: "1", title: "Figma",      img: images.figma, bgColor: "" },
    { id: "2", title: "Html",       img: images.html, bgColor: "" },
    { id: "3", title: "CSS",        img: images.css, bgColor: "" },
    { id: "4", title: "Sass",       img: images.sass },
    { id: "5", title: "JavaScript", img: images.javascript, bgColor: "" },
    { id: "6", title: "React",      img: images.react, bgColor: "" },
    { id: "7", title: "Material UI",img: images.mu5, bgColor: "" },
    
  ]

  return (
    <div className="app__skills">
      <h2 className="head-text"><span>Skills</span> & <span>Internship</span></h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {mySkills.map((skill) => (
            <motion.div
              whileInView={{opacity: [0,1]}}
              transition={{ duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.id}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor}}>
                <img src={skill.img} alt="" />
              </div>
              <p className="p-text">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          <motion.div
            whileInView={{opacity: [0,1]}}
            transition={{ duration: 0.5}}
            className="app__skills-exp-work app__flex"
            key={mySkills.id}
          >
            <div>
            <h1>2023</h1>
            <p>Frontend Developer</p>
            </div>
            <h3>VIRTUSA (Jan 13, 2023 to April 14, 2023)</h3>
            <h5>I have worked as a front-end developer. Building components using React.js, Material UI.</h5>
          </motion.div>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Skills
