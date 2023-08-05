import React from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import { Tilt } from 'react-tilt';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 1)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly"
      >
        <img src={icon} alt="" className="w-[64px] h-[64px] object-contain" />
        <h3 className="text-white font-bold text-[20px] text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className={`mt-7`}>
      <motion.div variants={textVariant}>
        <h3 className="text-[#dfd9ff] font-medium lg:text-[25px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
          Introduction
        </h3>
        <h1 className="font-black text-white lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
          Overview.
        </h1>
      </motion.div>

      <motion.p
        variants={fadeIn('right', 'tween', 0.1, 1)}
        className="mt-4 max-w-3xl text-secondary text-[17px] leading-[30px]"
      >
        Step into the realm of Full Stack Development, where the fusion of
        creativity and technology unfolds! As an experienced Full Stack
        Developer, proficient in TypeScript and JavaScript, and expertise in
        frameworks like React, ReactNative, Node.js, Next.js, Three.js, Tailwindcss, MaterialUI, I
        possess the expertise to build dynamic web applications spanning from
        front-end to back-end, with focus on amalgamating seamless user
        experiences with potent server-side functionalities. Beyond my technical
        prowess, I am a fast learner and thrive on close collaboration with
        clients, crafting scalable and user-friendly solutions that address
        real-world challenges. Together, let's bring your visions to reality,
        and embark on an inspiring journey to shape the future
        of the digital landscape with innovative digital solutions!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 ">
        {services &&
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
