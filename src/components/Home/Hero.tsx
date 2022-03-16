import Image from 'next/image';
import { useRouter } from 'next/router'
import Fade from 'react-reveal/Fade';

function Hero():JSX.Element {
  const router = useRouter();

  return (
    <>
      <section id="hero" className="bg-black pb-[140px] ">
        <Fade big>
          <div className="max-w-[1300px] flex md:flex-col-reverse gap-x-[130px] lg:gap-x-[60px] w-[80%] mx-auto pt-[115px] sm:pt-[50px]">
            <div className="flex flex-col w-[50%] md:w-full md:mt-[40px] md:text-center">
              <div className="">
                <h1 className="text-gold font-ReadexPro font-semibold text-[88px] md:leading-none xl:text-[50px]">Ascendancy<br></br>of&nbsp;outlaws</h1>
                <p className="text-white font-ReadexPro font-bold text-[24px] lg:text-[16px] mt-[24px] sm:mt-[12px] opacity-[80%]">Collection of 4000 outlaws ruling the cyber space.</p>
              </div>
              <div className="flex md:flex-col md:gap-y-6 gap-x-[15px] font-ReadexPro text-[18px] mt-[48px] sm:mt-[24px] md:justify-center">
                <button className="rounded-full bg-gold-500 px-[92px] lg:px-[40px] py-[20px]  lg:py-[10px] font-bold hover:bg-gold-300 cursor-zero" onClick={() => router.push('/roadmap')}>ROADMAP</button>
                <button className="text-gold-500 rounded-full bg-zinc-800 px-[92px] lg:px-[40px] py-[20px] lg:py-[10px] font-bold hover:bg-zinc-600 cursor-zero" onClick={() => router.push('/team')}>TEAM</button>
              </div>
            </div>
            <div className="relative w-full h-auto ">
                <div 
                  className="bg-white relative w-full md:w-[75%] h-full md:h-[300px]  z-20 mx-auto rounded-xl "
                  style={{  
                    backgroundImage: "url(" + "/betty_hero.png" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}>
                </div>
              {/* <div className="bg-gold-500 w-full md:w-[75%] h-full md:h-[300px] absolute bottom-0 left-10 md:-right-16 md:left-0 mx-auto "></div> */}
            </div>
          </div>
        </Fade>
      </section>
    </>
  )
}

export default Hero;