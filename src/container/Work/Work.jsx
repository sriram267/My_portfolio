import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from "../../constants"
import './Work.scss';

const Work = () => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const works = [
    { 
      title: 'Restaurant Website',
      description: 'A restaurant website : Figma file to Code',      
      imgUrl: images.work1,      
      tags: ['React JS', 'All'],
      projectLink: 'https://sriz-kitchen.netlify.app',
      codeLink: 'https://github.com/example/sample-project-1',
    },
    {
      title: 'React Admin Dashboard',
      description: 'A fully responsive admin dashboard',
      imgUrl: images.work3,
      tags: ['React JS', 'All' ],
      projectLink: 'https://react-admin-dashboard-2023.netlify.app',
      codeLink: 'https://github.com/example/sample-project-2',
    },
    {
      title: 'Portfolio Website',
      description: 'My portfolio website.optimized for mobile, tablet, laptops',
      imgUrl: images.work2,
      tags: ['React JS', 'All'],
      projectLink: 'https://my-portfolio-sriram-vs.netlify.app',
      codeLink: 'https://github.com/example/sample-project-2',
    },
    {
      title: 'Passenger Counter App',
      description: 'Counter app that counts passsengers in each subway',
      imgUrl: images.work4,
      tags: ['JavaScript', 'All'],
      projectLink: undefined,
      codeLink: 'https://github.com/sriram267/counter-app',
    },
    {
      title: 'BlackJack Game',
      description: 'An online blackjack game',
      imgUrl: images.work5,
      tags: ['JavaScript', 'All'],
      projectLink: undefined,
      codeLink: 'https://github.com/sriram267/black-jack-game',
    },
    {
      title: 'Lead Tracker',
      description: 'A google extension works like a bookmark saver',
      imgUrl: images.work6,
      tags: ['JavaScript', 'All'],
      projectLink: undefined,
      codeLink: 'https://github.com/sriram267/lead-tracker',
    },
  ];

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  useState(() => setFilterWork(works));
  return (
    <div className="app__works app__whitebg">
      <h2 className="head-text">My <span>Project</span> Section</h2>

      <div className="app__work-filter">
        {['React JS', 'JavaScript', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work
