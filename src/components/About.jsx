import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)} // Fixed typo
        className='w-full beige-gradient p-[1px] rounded-[20px] shadowcard'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-zinc-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>

      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a web developer with hands-on experience in developing and maintaining responsive WordPress websites. With a strong foundation in HTML, CSS, JavaScript, and PHP, I am passionate about transforming creative designs into functional web pages. I recently completed my BS in Information Technology with honors, and have worked as a web programmer at Dream Webworks Creations Inc., where I developed customized WordPress themes and integrated third-party APIs, including AI solutions. I am eager to continue learning and advancing my skills in web development.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about");