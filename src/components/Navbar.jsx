import React, { useState } from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-primary w-full p-5 fixed z-20">
      <div className={`${styles.container} flex items-center justify-between`}>
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <h2 className="text-white text-[18px] font-bold">
            Ayobami &nbsp;
            <span className="hidden sm:inline-block"> | &nbsp; Balogun</span>
          </h2>
        </Link>

        <div className="hidden sm:block">
          <div className="flex gap-10">
            {navLinks &&
              navLinks.map((nav) => (
                <div
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  } cursor-pointer hover:text-white text-[18px] font-medium`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </div>
              ))}
          </div>
        </div>

        {/* For Mobile screen */}
        <div className="sm:hidden block">
          <div className="relative">
            <img
              src={`${toggle ? close : menu}`}
              alt="menu"
              className="cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                toggle ? 'block' : 'hidden'
              } absolute top-20 right-0 black-gradient p-5 rounded-xl`}
            >
              <div className="flex flex-col gap-4 text-secondary min-w-[88px]">
                {navLinks &&
                  navLinks.map((nav) => (
                    <div
                      key={nav.id}
                      className={`${
                        active === nav.title ? 'text-white' : 'text-secondary'
                      } cursor-pointer hover:text-white`}
                      onClick={() => {
                        setActive(nav.title);
                        setToggle(false);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
