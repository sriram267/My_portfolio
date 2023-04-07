import React from 'react';
import { motion } from "framer-motion"
import { images } from "../../constants"
import "./About.scss";

const abouts = [
  { title: "Class-X (2017)",    Marks: "Marks: 92%", description: "ST.ANN'S.MAT.HR.SEC.SCHOOL", imgUrl: images.about01 },
  { title: "Class-X (2019)",    Marks: "Marks: 71%", description: "ST.ANN'S.MAT.HR.SEC.SCHOOL", imgUrl: images.about02 },
  { title: "B.E | CSE (2023)",  Marks: "CGPA: 8.40", description: "PANIMALAR ENGINEERING COLLEGE", imgUrl: images.about04 }
]
const About = () => {
  return (
    <div className="app__about app__whitebg">
      <h2 className="head-text">Designing My career,<span> One Pixel</span><br />at a time,<span> with precision and creativity.</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{ scale: 1.1}}
            transition={{ duration: 0.5, type: "tween"}}
            className="app__profiles-item"
            key={about.title +index}
          >
            <img src={about.imgUrl}  alt=""/>
            <h2 className="bold-text" style={{ mt: 20}}>{about.title}</h2>
            <p className="bold-text" style={{ mb: 10}}>{about.Marks}</p>
            <br />
            <p className="p-text" style={{ mt: 10}}>{about.description}</p>

          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About
