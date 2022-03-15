import Image from 'next/image';
import { useRouter } from 'next/router'
import Fade from 'react-reveal/Fade';

function Vision():JSX.Element {
  const router = useRouter();
  
  return (
    <>
      <section id="vision" className="bg-black sm:py-[50px] pb-[100px]">
        <Fade big>
          <div className="max-w-[700px] w-[50%] sm:w-[90%] lg:w-[80%] text-white mx-auto py-[50px] sm:py-[25px]">
            <div className="flex gap-x-8 sm:gap-x-6 justify-center align-center text-right mb-[80px] sm:mb-[40px]">
              <div className="w-fit">
                <h1 className="font-ReadexPro font-bold text-[48px] sm:text-[30px] text-gold-500">THE VISION <br></br>AND&nbsp;MISSION</h1>
                <p className="font-ReadexPro text-[18px] sm:text-[14px]">A great project is not without a purpose.</p>
              </div>
              <div 
                className="h-auto sm:w-[120px] w-[130px]"
                style={{  
                  backgroundImage: "url(" + `/sitting_char.png` + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
            </div>
            <div className="flex sm:flex-col gap-x-[50px] sm:gap-x-[30px] text-center sm:text-left justify-center  sm:text-[12px]">
              <div className=" w-[50%] sm:w-full mb-[50px] sm:mb-[25px]">
                <h1 className="text-gold-500 font-bold">Vision</h1>
                <p className="">To build new opportunities in gaming for our CO (Cyber Outlaws) community without taking the fun out of it.</p>
              </div>
              <div className=" w-[50%] sm:w-full mb-[50px] sm:mb-[25px]">
                <h1 className="text-gold-500  font-bold">Mission</h1>
                <p className="">Explore the world of a metaverse where a user can truly be themselves and defy the social norms.</p>
              </div>
            </div>
            <div className="w-[50%] sm:w-full mx-auto text-center sm:text-left sm:text-[12px]">
              <h1 className="text-gold-500  font-bold">How are we going to achieve this?</h1>
              <p className="">Our team is consistently working hard while constantly providing a premium experience to the community, check out our <button className=" cursor-zero" onClick={()=> router.push('/roadmap')}><span className="text-gold-500 font-light italic">roadmap.</span></button></p>
            </div>
          </div>
        </Fade>
      </section>
    </>
  )
}

export default Vision;