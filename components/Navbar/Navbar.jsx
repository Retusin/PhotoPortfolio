import Link from 'next/link';
import React from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

function Navbar() {
  const [nav, setNav] = React.useState(false);
  const [color, setColor] = React.useState('transparent');
  const [textColor, setTextColor] = React.useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  React.useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#fff');
        setTextColor('#000');
      } else {
        setColor('transparent');
        setTextColor('#fff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{backgroundColor: `${color}`}}
      className="fixed left-0 top-0 z-10 w-full ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex items-center justify-between  p-4 text-white">
        <Link href="/">
          <h1 style={{color: `${textColor}`}} className="font-bold text-4xl">
            Capture
          </h1>
        </Link>
        <ul style={{color: `${textColor}`}} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/portfolio">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* Menu Btn */}
        <div className="block sm:hidden z-10 cursor-pointer" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose
              size={20}
              className="block sm:hidden z-10"
              style={{color: `${textColor}`}}
            />
          ) : (
            <AiOutlineMenu
              size={20}
              className="block sm:hidden z-10"
              style={{color: `${textColor}`}}
            />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul className="">
            <li onClick={handleNav} className="p-4 text-4xl hover:text-green-400">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-green-400">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-green-400">
              <Link href="/portfolio">Work</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-green-400">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
