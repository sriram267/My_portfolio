import React from 'react';
import { motion } from "framer-motion"
import { images } from "../../constants"
import "./About.scss";

const abouts = [
  { title: "Frontend Developer", description: "Skilled in creating intuitive and visually appealing user interfaces ", imgUrl: images.about01 },
  { title: "React developer", description: "building dynamic web applications using front-end technologies to develop responsive and efficient user interfaces.", imgUrl: images.about02 },
  { title: "Ui/Ux designer", description: "Bridging the gap between users and technology through design", imgUrl: images.about04 }
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
            <p className="p-text" style={{ mt: 10}}>{about.description}</p>

          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About
