import React from 'react';
import { styles } from '../styles';
import ComputerCanvas from './canvas/Computers';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <div
        className={`${styles.container} absolute inset-0 top-[120px] flex items-start gap-5 px-6 sm:px-16`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-80 violet-gradient" />
        </div>

        <div>
          <h1 className="font-black text-white lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[88px] mt-2">
            Hi, I'm <span className="text-[#915EFF]">Ayobami</span>
          </h1>
          <p className="text-white font-medium lg:text-[20px] sm:text-[21px] xs:text-[15px] text-[12px] lg:leading-[35px] mt-2">
            I develop 3D visuals, user <br /> interfaces and web applications
          </p>
        </div>
      </div>

      <ComputerCanvas />

      <div className='-mt-5 flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
