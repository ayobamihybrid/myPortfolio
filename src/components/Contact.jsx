import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import SectionWrapper from '../hoc/SectionWrapper';
import EarthCanvas from './canvas/Earth';

import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="flex flex-col-reverse gap-10 xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className={`px-8 py-10 w-full bg-black-100 flex-[0.75] rounded-2xl`}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact me.</h2>

        <div>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="block gap-4 mt-12 text-white font-medium"
            >
              Your Name
            </label>
            <div className=" mt-4">
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                placeholder="What's your name?"
                onChange={(e) => setName(e.target.value)}
                className="bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
              />
            </div>

            <label
              htmlFor="email"
              className="block mt-12 text-white font-medium"
            >
              Your Email
            </label>
            <div className="mt-4">
              <input
                type="text"
                name="email"
                id="email"
                required
                value={email}
                placeholder="What's your email address?"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
              />
            </div>

            <label
              htmlFor="message"
              className="block mt-12 text-white font-medium"
            >
              Talk to me
            </label>
            <div className="mt-4">
              <textarea
                type="text"
                name="message"
                id="message"
                rows={7}
                value={message}
                placeholder="Write a message..."
                onChange={(e) => setMessage(e.target.value)}
                className="bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
              />
            </div>

            <button
              type="submit"
              className="py-3 px-8 bg-tertiary mt-4 rounded-xl shadow-md shadow-primary outline-none text-white font-bold"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
