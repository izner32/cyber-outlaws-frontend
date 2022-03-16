import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Hashicon } from "@emeraldpay/hashicon-react";
import { useRouter } from 'next/router';
import Image from 'next/image';

const Nav = () => {
  const router = useRouter();
  const [show,setShow] = useState(false);
  const [opacity, setOpacity] = useState('bg-opacity-100')
  const [textColor, setTextColor] = useState('text-black');
  const [menuImage, setMenuImage] = useState('/menu.png');

  const toggle = () => {
    setShow(!show);
  }

  const controlNavbar = () => {
    if (window.scrollY > 200){
      setOpacity('bg-opacity-0');
      setTextColor('text-white');
      setMenuImage('/menu_white.png');
    } else {
      setOpacity('bg-opacity-100');
      setTextColor('text-black');
      setMenuImage('/menu.png');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () =>
      window.removeEventListener('scroll', controlNavbar)
  }, [])
  
  return (
    <>
      <header className={` ${opacity} ${textColor} ${show ? "bg-opacity-0" : "bg-opacity-100 "} ease-in duration-300 h-[100px] md:h-[50px] mx-auto sticky top-0 z-[700] bg-white`}>
          {/* mobile menu */}
          <div className="w-[80%] lg:w-[90%] mx-auto hidden lg:flex lg:flex-row-reverse lg:justify-between relative -translate-y-1/2 md:top-[25px] top-[50px]">
            <button onClick={()=>toggle()} className=" h-[50px] w-[50px] flex items-center justify-center ">
              <div 
                className="w-[30px] h-[30px]"
                style={{  
                  backgroundImage: "url(" + menuImage + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
            </button>
            <button id="" type="button" className="" onClick={() => router.push('/')}>
              <h1 className="font-ReadexPro cursor-zero font-bold text-center text-[24px] md:text-[20px] sm:text-[18px]">CYBER OUTLAWS</h1>
            </button>
          </div>

          {/* desktop/tablet menu */}
          <div className="w-[80%] lg:w-[90%] mx-auto lg:hidden relative z-50">
            <div className="max-w-[1300px] flex justify-between relative z-[8000] top-[50px] -translate-y-[50%] mx-auto font-ReadexPro">
            <button id="" type="button" className=" cursor-zero" onClick={() => router.push('/')}><h1 className="font-bold text-center text-[24px]">CYBER OUTLAWS</h1></button>
              <ul className="flex gap-x-8 font-normal text-[16px] ">
                <li className="" onClick={() => router.push('/')}><HomeItem text={"HOME"}></HomeItem></li>
                <li className="" onClick={() => router.push('/team')}><TeamItem text={"TEAM"}></TeamItem></li>
                <li className="" onClick={() => router.push('/roadmap')}><RoadmapItem text={"ROADMAP"}></RoadmapItem></li>
                <li className="" onClick={() => router.push('/rarity')}><RarityItem text={"RARITY"}></RarityItem></li>
                <li className="" onClick={() => router.push('/shop')}><ShopItem text={"SHOP"}></ShopItem></li>
                <li className="" onClick={() => router.push('/mint')}><MintItem ></MintItem></li>
              </ul>
            </div>
          </div>
      </header>

      {/* mobile content goes here */}
      <div className={`${!show?"hidden":"z-[300] h-full w-full"}  top-0 left-0  lg:block hidden fixed overflow-y-scroll bg-gold-500`}>
        <div className={`${!show?"hidden":"lg:block"} ease-in duration-300 md:pt-[50px] pt-[100px] py-4  absolute h-full w-full`}>
          <ul className="pt-[100px] font-ReadexPro font-bold  w-[90%] mx-auto text-[48px] ">
            <li className="" onClick={() => router.push('/')}><button className={`${router.pathname == "/" ? "text-white" : ""} cursor-zero`}>HOME</button></li>
            <li className="" onClick={() => router.push('/team')}><button className={`${router.pathname == "/team" ? "text-white" : ""} cursor-zero`}>TEAM</button></li>
            <li className="" onClick={() => router.push('/roadmap')}><button className={`${router.pathname == "/roadmap" ? "text-white" : ""} cursor-zero`}>ROADMAP</button></li>
            <li className="" onClick={() => router.push('/rarity')}><button className={`${router.pathname == "/rarity" ? "text-white" : ""} cursor-zero`}>RARITY</button></li>
            <li className="" onClick={() => router.push('/shop')}><button className={`${router.pathname == "/shop" ? "text-white" : ""} cursor-zero`}>SHOP</button></li>
            <li className="" onClick={() => router.push('/mint')}><button className={`${router.pathname == "/mint" ? "text-white" : ""} cursor-zero`}>MINT</button></li>
          </ul>
        </div>
      </div>  
    </>
  );
};

const HomeItem = ({ text }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] relative cursor-pointer"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <span className="relative">
        {text}
      </span>
      {isBeingHovered && (
        <div className="relative top-7 right-[100%]">
          <motion.div
            layoutId="menu"
            className="absolute rounded-3xl py-10 px-10 bg-gold-500 rounded-box -left-2/4"
            variants={MenuItemVariants}
            style={{ minWidth: 400 }}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className=" my-2 group cursor-pointer min-w-max"
              layout
              variants={SubItemVariants}
            >
              <div className="flex flex-col gap-y-4">
                <div className="">
                  <p className="font-bold text-black group-hover:text-blue-900 text-md">
                    Cyber Outlaws NFT
                  </p>
                  <div className="font-bold text-white group-hover:text-blue-400 text-sm">
                    Collection of 7777 outlaws ruling the cyber space.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};


const TeamItem = ({ text }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] relative cursor-pointer"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <span className="relative">
        {text}
      </span>
      {isBeingHovered && (
        <div className="relative top-7 right-[100%]">
          <motion.div
            layoutId="menu"
            className="absolute rounded-3xl py-10 px-10 bg-gold-500 rounded-box -left-2/4"
            variants={MenuItemVariants}
            style={{ minWidth: 400 }}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className=" my-2 group cursor-pointer min-w-max"
              layout
              variants={SubItemVariants}
            >
              <div className="flex flex-col gap-y-4">
                <div className="">
                  <p className="font-bold text-black group-hover:text-blue-900 text-md">
                    The Dream
                  </p>
                  <div className="font-bold text-white group-hover:text-blue-400 text-sm">
                    Marketing Lead 
                  </div>
                </div>
                <div className="">
                  <p className="font-bold text-black group-hover:text-blue-900 text-md">
                    Passion
                  </p>
                  <span className="font-bold text-white group-hover:text-blue-400 text-sm">
                    Lead Developer
                  </span>
                </div>
                <div className="">
                  <p className="font-bold text-black group-hover:text-blue-900 text-md">
                    Envy
                  </p>
                  <span className="font-bold text-white group-hover:text-blue-400 text-sm">
                    Community Manager
                  </span>
                </div>
                <div className="">
                  <p className="font-bold text-black group-hover:text-blue-900 text-md">
                    Dunce
                  </p>
                  <span className="font-bold text-white group-hover:text-blue-400 text-sm">
                    Creative Artist
                  </span>
                </div>
                <div className="">
                  <p className="font-bold text-black group-hover:text-blue-900 text-md">
                    Pukuluku
                  </p>
                  <span className="font-bold text-white group-hover:text-blue-400 text-sm">
                    Creative Artist
                  </span>
                </div>
                <div className="">
                  <p className="font-bold text-black group-hover:text-blue-900 text-md">
                    Gelca
                  </p>
                  <span className="font-bold text-white group-hover:text-blue-400 text-sm">
                    Creative Artist
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const RarityItem = ({ text }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] relative cursor-pointer"
      onHoverStart={() => setIsBeingHovered(false)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <span className="relative">
        <button className=" cursor-zero text-center ">RARITY</button>
      </span>
      {isBeingHovered && (
        <div className="relative top-7 right-[100%]">
          <motion.div
            layoutId="menu"
            className=" absolute rounded-3xl border py-10 px-10 bg-black rounded-box -left-2/4"
            variants={MenuItemVariants}
            style={{ minWidth: 400 }}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className=" my-2 group cursor-pointer min-w-max"
              layout
              variants={SubItemVariants}
            >
            <div 
              className="p-16 "
              style={{  
                  backgroundImage: "url(" + "/roadmap.png" + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
            ></div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const ShopItem = ({ text }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] relative cursor-pointer"
      onHoverStart={() => setIsBeingHovered(false)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <span className="relative">
        <button className=" cursor-zero text-center ">SHOP</button>
      </span>
      {isBeingHovered && (
        <div className="relative top-7 right-[100%]">
          <motion.div
            layoutId="menu"
            className=" absolute rounded-3xl border py-10 px-10 bg-black rounded-box -left-2/4"
            variants={MenuItemVariants}
            style={{ minWidth: 400 }}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className=" my-2 group cursor-pointer min-w-max"
              layout
              variants={SubItemVariants}
            >
            <div 
              className="p-16 "
              style={{  
                  backgroundImage: "url(" + "/roadmap.png" + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
            ></div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const RoadmapItem = ({ text }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] relative cursor-pointer"
      onHoverStart={() => setIsBeingHovered(false)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <span className="relative">
        <button className=" cursor-zero text-center ">ROADMAP</button>
      </span>
      {isBeingHovered && (
        <div className="relative top-7 right-[100%]">
          <motion.div
            layoutId="menu"
            className=" absolute rounded-3xl border py-10 px-10 bg-black rounded-box -left-2/4"
            variants={MenuItemVariants}
            style={{ minWidth: 400 }}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className=" my-2 group cursor-pointer min-w-max"
              layout
              variants={SubItemVariants}
            >
            <div 
              className="p-16 "
              style={{  
                  backgroundImage: "url(" + "/roadmap.png" + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
            ></div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const MintItem = () => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] relative cursor-pointer"
      onHoverStart={() => setIsBeingHovered(false)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <div className="">
        <button className=" cursor-zero rounded-tl-full text-center py-2 px-5 bg-gold-500 relative">START MINTING</button>
        <style jsx>{`div { box-shadow: 10px 10px;}`}</style>
      </div>
      {isBeingHovered && (
        <div className="relative top-7 right-[50%]">
          <motion.div
            layoutId="menu"
            className="absolute rounded-3xl py-10 px-10 bg-gold rounded-box -left-2/4"
            variants={MenuItemVariants}
            style={{ minWidth: 400 }}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className=" my-2 group cursor-pointer min-w-max"
              layout
              variants={SubItemVariants}
            >
            <div className=" ">
              Get Started
            </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};



const SubItemVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};


const MenuItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default Nav;