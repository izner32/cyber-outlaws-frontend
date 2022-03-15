import Image from 'next/image';
import { useEffect, useState } from "react";
import Mint from './Mint';
import { useRouter } from 'next/router'


function Main():JSX.Element {
  const router = useRouter();
  const [timerFinished, setTimerFinished] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/31/2022 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setTimerFinished(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="bg-black pb-[100px]">
        <div className="w-[80%] lg:w-[90%] mx-auto flex flex-col">
          <div className="mb-[150px] lg:mb-[75px]">
            <div 
                className="h-[250px] w-[300px] rotate-180 mx-auto"
                style={{
                  backgroundImage: "url(" + "/mint_hand.png" + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
            ></div>
            <div className="relative mx-auto">
              <Mint></Mint>
            </div>
          </div>
          <div className="flex lg:flex-col justify-center gap-x-[150px]">
            <div>
              <h1 className="font-ReadexPro font-bold text-gold-500 text-[33px] lg:text-[30px] md:text-[27px] sm:text-[20px] text-center mb-[70px] lg:mb-[35px]">PUBLIC RELEASE <br></br>COUNTDOWN</h1>
              <div className="flex justify-center text-center gap-x-[30px] lg:mb-[70px]  text-[33px] lg:text-[30px] md:text-[27px] sm:text-[20px]">
                <div>
                  <p className="font-ReadexPro font-bold text-white">{days}</p>
                  <p className="font-ReadexPro text-white text-[17px] sm:text-[15px]">DAYS</p>
                </div>
                <div>
                  <p className="font-ReadexPro font-bold text-white">{hours}</p>
                  <p className="font-ReadexPro text-white text-[17px] sm:text-[15px]">HOURS</p>
                </div>
                <div>
                  <p className="font-ReadexPro font-bold text-white">{minutes}</p>
                  <p className="font-ReadexPro text-white text-[17px] sm:text-[15px]">MINUTES</p>
                </div>
                <div>
                  <p className="font-ReadexPro font-bold text-white">{seconds}</p>
                  <p className="font-ReadexPro text-white text-[17px] sm:text-[15px]">SECONDS</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-ReadexPro font-bold text-gold-500 text-[33px] lg:text-[30px] md:text-[27px] sm:text-[23px]  text-center mb-[70px] lg:mb-[35px]">STAY UP TO DATE.<br></br>FOLLOW US.</h1>
              <div className="flex justify-center gap-x-[25px]">
                <button onClick={() => router.push('https://discord.gg/NUfD4xQHnP')}><Image src='/discord_3d.png' alt='discord' width={70} height={70}/></button>
                <button onClick={() => router.push('https://twitter.com/_CyberOutlaws')}><Image src='/twitter_3d.png' alt='twitter' width={70} height={70}/></button>
                <button onClick={() => router.push('https://www.instagram.com/cyber_outlaws/')}><Image src='/instagram_3d.png' alt='instagram' width={70} height={70}/></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main;