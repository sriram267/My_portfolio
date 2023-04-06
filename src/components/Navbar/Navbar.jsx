import React,{ useState} from 'react'
import { images } from "../../constants"
import { Link } from "react-router-dom"
import { HiMenuAlt4, HiX } from "react-icons/hi"
import { motion } from "framer-motion"
import "./Navbar.scss"
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="" />
        </div>
        <ul className="app__navbar-links">
            <li className="app__flex p-text"><Link to="/">HOME</Link></li>
            <li className="app__flex p-text"><Link to="/about">ABOUT</Link></li>
            <li className="app__flex p-text"><Link to="/skills">SKILLS</Link></li>
            <li className="app__flex p-text"><Link to="/work">WORK</Link></li>
            <li className="app__flex p-text"><Link to="/footer">CONTACT</Link></li>
            <li className="app__flex p-text"><a href= "../../assets/resume.pdf" download>Download Resume</a></li>
        </ul>
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{x: [300, 0]}}
              transition={{ duration: 0.85, ease: "easeOut"}}
            >
              <HiX onClick={() => setToggle(false)} />
              {
                <ul>
                  <li onClick={() => setToggle(false)}><Link to="/">HOME</Link></li>
                  <li onClick={() => setToggle(false)}><Link to="/about">ABOUT</Link></li>
                  <li onClick={() => setToggle(false)}><Link to="/skills">SKILLS</Link></li>
                  <li onClick={() => setToggle(false)}><Link to="/work">WORK</Link></li>
                  <li onClick={() => setToggle(false)}><Link to="/footer">CONTACT</Link></li>
                </ul>
              }
            </motion.div>
          )}
        </div>
      </nav>

  )
}
export default Navbar