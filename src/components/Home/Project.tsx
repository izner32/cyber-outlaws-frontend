import Image from 'next/image';
import { useRouter } from 'next/router'
import Fade from 'react-reveal/Fade';

function Project():JSX.Element {
  const router = useRouter();

  return (
    <>
      <section id="project" className="bg-black">
        <Fade big>
          <div className="max-w-[1200px] w-[80%] lg:w-[90%] mx-auto flex sm:flex-col-reverse pt-[100px] sm:pt-[50px] pb-[100px] sm:pb-[50px]">
            <div className="font-ReadexPro w-[50%] sm:w-full">
              <div className="mb-[50px] sm:mb-[25px] leading-none">
                <p className="text-[14px] lg:text-[12px] text-white ">THE PROJECT</p>
                <h1 className="text-[48px] lg:text-[30px] text-gold-500 font-semibold">CYBER OUTLAWS</h1>
                <p className="text-[36px] lg:text-[25px] text-gold-500">Premium NFTs</p>
              </div>
              <div className="text-[18px] sm:text-[14px] text-white mb-[60px] sm:mb-[30px]">
                <p className="mb-[30px] sm:mb-[15px]">Every attribute piece in our characters was made with collective experience - only achieved with the right amount of hardwork and dedication. We continuously challenge our limits to provide the best kind of quality for our community members. </p>
                <p>Be yourself, defy the social norms.</p>
              </div>
              <div>
                <div className="border-t-[1px] border-gray-500 mb-[30px] sm:mb-[15px]"></div>
                <button className=" cursor-zero text-[18px] lg:text-[14px] text-white transition ease-in-out delay-150 hover:translate-x-1 "  onClick={() => router.push('/mint')}>Join the Movement →</button>
              </div>
            </div>
            <div 
                className="w-[50%] sm:w-full h-auto sm:h-[400px] sm:mb-[15px] "
                style={{  
                  backgroundImage: "url(" + "/charlotte.gif" + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
            ></div>
          </div>
        </Fade>
      </section>
    </>
  )
}

export default Project;