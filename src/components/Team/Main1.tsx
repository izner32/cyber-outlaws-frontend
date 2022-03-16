import Image from 'next/image';
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { filterProps } from 'framer-motion';

function Main():JSX.Element {
  const [onButtonClicked,setOnButtonClicked] = useState(false)
  const team = [
    {
      idx: 1,
      pos: 1,
      active: true,
      center: false,
      name: "The Dream",
      role: "Core & Marketing Lead",
      bio: "He is a crypto enthusiast, been in this space for a few years now. He spends most of his time trading, and flipping nfts.",
      image: "/pfp1.png",
      clicked: false
    },
    {
      idx: 2,
      pos: 2,
      active: true,
      center: true,
      name: "Passion",
      role: "Core & Lead Developer",
      bio: "He is a self-taught web developer, extremely interested in tech mostly in data engineering, and algorithmic trading.",
      image: "/pfp2.png",
      clicked: false
    },
    {
      idx: 3,
      pos: 3,
      active: true,
      center: false,
      name: "Envy",
      role: "Core & Community Mngr",
      bio: "He is a graphic designer. He manages the community, and actively handles the team's social media accounts.",
      image: "/pfp3.png",
      clicked: false
    },
    {
      idx: 4,
      pos: 4,
      active: false,
      center: false,
      name: "Dunce",
      role: "Team & Creative Artist",
      bio: "He is a thinker, and a man with a huge variety of imagination. He is massively passionate about all things related to art.",
      image: "/pfp4.png",
      clicked: false
    },
    {
      idx: 5,
      pos: 5,
      active: false,
      center: false,
      name: "Pukuluku",
      role: "Team & Creative Artist",
      bio: "His specialization lies in manipulating art digitally while extensively using different modern art techniques.",
      image: "/pfp5.png",
      clicked: false
    },
    {
      idx: 6,
      pos: 6,
      active: false,
      center: false,
      name: "Gelca",
      role: "Team & Creative Artist",
      bio: "She is a lifelong learner. She has experience with multiple difficult domains not limited to programming and digital arts.",
      image: "/pfp6.png",
      clicked: false
    },
  ]

  const [cards,setCards] = useState(team)

  const handleCardClick = (currentCardIdx) => {
    const prevState = [...cards];
    prevState.find((f) => f.idx === currentCardIdx).clicked = !prevState.find((f) => f.idx === currentCardIdx).clicked;
    // console.log(prevState)
    setCards(prevState)
  }

  const handleLeftClick = (isLeft) => {
    const prevState = [...cards];

    // find first current active card - so we could make it inactive
    const firstCurrentActiveCardIdx = prevState // get the idx of the one with the highest number of pos from active cards 
      .filter((ft) => ft.active === true) // get only the active cards 
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx; // basically getting the idx of the one with the highest pos
    // find next inactive card - so we could make it active
    var nextInactiveCardIdx;
    if (prevState.filter((ft) => ft.active === true)[2].idx !== prevState.length)
      nextInactiveCardIdx = prevState.filter((ft) => ft.active === true)[2].idx + 1
    else 
      nextInactiveCardIdx = prevState.filter((ft) => ft.active === false)[0].idx

    // find the current center active card - so we could make the center inactive 
    const currentCenterCardIdx = prevState.filter((ft) => ft.center === true)[0].idx
    // find the last current active card - so we could center it 
    const lastCurrentActiveCardIdx = prevState 
      .filter((ft) => ft.active === true) 
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[2].idx; 

    // update
    prevState.find((f) => f.idx === firstCurrentActiveCardIdx).active = false;
    prevState.find((f) => f.idx === nextInactiveCardIdx).active = true;

    prevState.find((f) => f.idx === currentCenterCardIdx).center = false;
    prevState.find((f) => f.idx === lastCurrentActiveCardIdx).center = true;

    prevState.map((f) => {
      f.clicked = false
    })

    // maximize pos
    prevState.find((f) => f.idx === firstCurrentActiveCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) + 1;

    // update state
    setCards(prevState);
    setOnButtonClicked(!onButtonClicked)
  };

  const handleRightClick = () => {
    const prevState = [...cards];

    // find last current active card - so we could make it inactive
    const lastCurrentActiveCardIdx = prevState // get the idx of the one with the highest number of pos from active cards 
      .filter((ft) => ft.active === true) // get only the active cards 
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[2].idx; // basically getting the idx of the one with the highest pos
    console.log(lastCurrentActiveCardIdx)
    // find next inactive card - so we could make it active
    var previousInactiveCardIdx;
    if (prevState.filter((ft) => ft.active === false)[0].idx !== 1)
      previousInactiveCardIdx = prevState.filter((ft) => ft.active === false)[2].idx
    else 
      previousInactiveCardIdx = prevState.filter((ft) => ft.active === true)[0].idx - 1
    console.log(previousInactiveCardIdx)


    // find the current center active card - so we could make the center inactive 
    const currentCenterCardIdx = prevState.filter((ft) => ft.center === true)[0].idx
    // find the first current active card - so we could center it 
    const firstCurrentActiveCardIdx = prevState.filter((ft) => ft.active === true).sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;

    // update
    prevState.find((f) => f.idx === lastCurrentActiveCardIdx).active = false;
    prevState.find((f) => f.idx === previousInactiveCardIdx).active = true;

    prevState.find((f) => f.idx === currentCenterCardIdx).center = false;
    prevState.find((f) => f.idx === firstCurrentActiveCardIdx).center = true;
    
    // maximize pos
    prevState.find((f) => f.idx === previousInactiveCardIdx).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;

    console.log(prevState)
    
    // update state
    setCards(prevState);
    setOnButtonClicked(!onButtonClicked)
  };

  return (
    <>
      <section className="bg-white relative  h-full  mx-auto overflow-hidden">
        <div className="leading-none relative max-w-[1500px] mx-auto">
          <span className="animate-marquee text-[200px] absolute -top-0 font-Anton z-1 leading-none px-12">CYBER&nbsp;OUTLAWS</span>
          <span className="animate-marquee2 text-[200px] absolute -top-0 font-Anton z-1 leading-none px-12">CYBER&nbsp;OUTLAWS</span>
        </div>

        {/* team */}
        <div className="max-w-[1300px] mx-auto flex justify-center gap-x-16 relative z-[2]  w-full top-20 sm:px-12 mb-36">
        {cards
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card, index) => (
          <div className={`mx-auto relative transition ease-in-out delay-50 ${card.center ? " hover:scale-110" : "sm:hidden"}`}>
            <button onClick={()=>handleCardClick(card.idx)}>
              <Image
                src = {card.image}
                width = {400}
                height = {400}
                className={`${card.center ? "" : "grayscale"} rounded-xl`}
              ></Image>
            </button>
            <div className="flex lg:flex-col justify-center items-center text-xl mt-8 md:scale-75 whitespace-nowrap">
              <h1 className={`${card.center ? "span" : "hidden"} font-extrabold mr-4 md:mr-0`}>{card.name}</h1>
              <p className={`${card.center ? "span" : "hidden"}`}>{card.role}</p>
            </div>
            <button onClick={()=>handleCardClick(card.idx)} className="text-left top-0 rounded-xl bg-white bg-opacity-0">
              <Transition
                as="div"
                show={card.clicked && card.center}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-1000"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className={`${card.center ? "block" : "hidden"} rounded-xl p-12 md:p-6 lg:p-8 mx-auto  bg-white bg-opacity-75 lg:text-sm md:text-xs h-full absolute top-0 `}>
                  <h1 className="font-extrabold font-Anton ">{card.name}</h1>
                  <p className="font-medium mb-12 md:mb-8 sm:mb-6">{card.role}</p>
                  <p>{card.bio}</p>
                </div>
              </Transition>
            </button>
          </div>
        ))}
        </div>

        {/* button sliders */}
          <button onClick={handleRightClick} className="rounded-full w-16 h-16 sm:w-14 sm:h-14 bg-white md:bg-black flex justify-center items-center fixed left-10 sm:left-5 top-[45%] z-[3]"><span className=" leading-[none] text-3xl font-extrabold align-text-top md:text-white">&lt;</span></button>
          <button onClick={handleLeftClick} className="rounded-full w-16 h-16 sm:w-14 sm:h-14 bg-white md:bg-black flex justify-center items-center fixed right-10 sm:right-5 top-[45%] z-[3]"><span className=" leading-none text-3xl font-extrabold align-text-top md:text-white">&gt;</span></button>
      </section>
    </>
  )
}

export default Main;