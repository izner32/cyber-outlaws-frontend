import Image from 'next/image';
import Fade from 'react-reveal/Fade';

function Main():JSX.Element {
  
  return (
    <>
      <div className="min-h-screen bg-black flex flex-col justify-center">
        <div className=" lg:w-[90%] w-[70%] mx-auto px-2 px-0">

          <div className="max-w-[1300px]  mx-auto relative font-Barlow font-extralight text-white antialiased ">

            <div className="pt-[90px] mb-[100px] sm:mb-[50px] sm:pt-[45px] lg:mx-auto flex sm:flex-col gap-x-4 justify-center">
              <div 
                className="h-[100px] w-[100px] sm:mx-auto"
                style={{
                  backgroundImage: "url(" + "/sitting_char.png" + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="sm:text-center">
                <h1 className="font-ReadexPro font-bold text-[48px] sm:text-[30px] text-gold-500">THE ROADMAP</h1>
                <p className="font-ReadexPro text-[18px] sm:text-[14px] text-white">This is just the beginning</p>
              </div>
            </div>

            {/* <!-- Vertical bar running through middle --> */}
            <div className="md:left-3 md:block w-1 bg-gold-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <Fade big>
            <div className="sm:mt-6 mt-0 mb-12">
              <div className="relative ">
                <div className="flex md:flex-col-reverse flex-row items-center">
                  <div className="text-right md:text-left w-[50%] md:w-full">
                    <div className="md:w-full md:pl-8 md:pr-0 pr-8">
                      <div className="p-4 rounded shadow text-[18px] sm:text-[14px]">
                        <p className="text-gold-500 font-bold font-ReadexPro ">Metaverse Acquisition</p>
                        <div className="flex flex-col gap-y-8">
                          <p>Cyber Outlaws will be buying our first ever plot in the Sandbox Metaverse where the Outlaws can experience future events built for the community.</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[50%] pl-8 md:pl-0">
                    <p className="font-ReadexPro text-[48px] md:text-[30px] font-bold text-center">PHASE&nbsp;1</p>
                  </div>
                </div>
                <div className="rounded-full bg-gold-500 border-black border-4 w-8 h-8 absolute -translate-y-1/2 top-[50%] md:top-[5.5%] left-[50%] -translate-x-1/2 flex items-center justify-center md:left-3">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg> */}
                </div>
              </div>
            </div>
            </Fade>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <Fade big>
            <div className="sm:mt-6 mt-0 mb-12">
              <div className="relative">
                <div className="flex flex-row-reverse md:flex-col-reverse flex-row items-center">
                  <div className="text-left md:text-left w-[50%] md:w-full">
                    <div className="md:w-full md:pl-8 md:pr-0 pl-8">
                      <div className="p-4 rounded shadow text-[18px] sm:text-[14px]">
                        <p className="text-gold-500 font-bold font-ReadexPro ">Baby Outlaws Collection</p>
                        <div className="flex flex-col gap-y-8">
                          <p>A way to incentivize our holders, each holder of the Cyber Outlaws collection can breed two of their current NFTs to get a free Baby Outlaw.</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[50%] pr-8 md:pr-0">
                    <p className="font-ReadexPro text-[48px] sm:text-[30px] font-bold text-center">PHASE&nbsp;2</p>
                  </div>
                </div>
                <div className="rounded-full bg-gold-500 border-black border-4 w-8 h-8 absolute top-[50%] left-[50%]  md:top-[5.5%] -translate-y-1/2 -translate-x-1/2 flex items-center justify-center md:left-3">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg> */}
                </div>
              </div>
            </div>
            </Fade>


            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <Fade big>
            <div className="sm:mt-6 mt-0 mb-12">
              <div className="relative ">
                <div className="flex md:flex-col-reverse flex-row items-center">
                  <div className="text-right md:text-left w-[50%] md:w-full">
                    <div className="md:w-full md:pl-8 md:pr-0 pr-8">
                      <div className="p-4 rounded shadow text-[18px] sm:text-[14px]">
                        <p className="text-gold-500 font-bold font-ReadexPro ">Outlaw Shop</p>
                        <div className="flex flex-col gap-y-8">
                          <p>With our plans to spread the Cyber Outlaws brand, we will be building our clothing shop in which we will provide every holder their very own limited edition Cyber Outlaw shirt. The designs chosen for the brand will be determined by our community in the DAO.</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[50%] pl-8 md:pl-0">
                    <p className="font-ReadexPro text-[48px] sm:text-[30px] font-bold text-center">PHASE&nbsp;3</p>
                  </div>
                </div>
                <div className="rounded-full bg-gold-500 border-black border-4 w-8 h-8 absolute -translate-y-1/2 top-[50%] left-[50%]  md:top-[5.5%] -translate-x-1/2 flex items-center justify-center md:left-3">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg> */}
                </div>
              </div>
            </div>
            </Fade>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <Fade big>
            <div className="sm:mt-6 mt-0 mb-12">
              <div className="relative">
                <div className="flex flex-row-reverse md:flex-col-reverse flex-row items-center">
                  <div className="text-left md:text-left w-[50%] md:w-full">
                    <div className="md:w-full md:pl-8 md:pr-0 pl-8">
                      <div className="p-4 rounded shadow text-[18px] sm:text-[14px]">
                        <p className="text-gold-500 font-bold font-ReadexPro ">Cyber Space</p>
                        <div className="flex flex-col gap-y-8">
                          <p>A giant cyber metaverse space will be accessible to all of our holders where we create social hubs and gaming experiences with the integration of our very own Cyber Outlaws NFTs.</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[50%] pr-8 md:pr-0">
                    <p className="font-ReadexPro text-[48px] sm:text-[30px] font-bold text-center">PHASE&nbsp;4</p>
                  </div>
                </div>
                <div className="rounded-full bg-gold-500 border-black border-4 w-8 h-8 absolute top-[50%] left-[50%]  md:top-[5.5%] -translate-y-1/2 -translate-x-1/2 flex items-center justify-center md:left-3">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg> */}
                </div>
              </div>
            </div>
            </Fade>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <Fade big>
            <div className="sm:mt-6 mt-0">
              <div className="relative ">
                <div className="flex md:flex-col-reverse flex-row items-center">
                  <div className="text-right md:text-left w-[50%] md:w-full">
                    <div className="md:w-full md:pl-8 md:pr-0 pr-8">
                      <div className="p-4 rounded shadow text-[18px] sm:text-[14px]">
                        <p className="text-gold-500 font-bold font-ReadexPro ">Cyber Guild</p>
                        <div className="flex flex-col gap-y-8">
                          <p>Owning one of our NFTs will give you access to the Cyber Guild where we will build our Play-To-Earn Empire.</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[50%] pl-8 md:pl-0">
                    <p className="font-ReadexPro text-[48px] sm:text-[30px] font-bold text-center">PHASE&nbsp;5</p>
                  </div>
                </div>
                <div className="rounded-full bg-gold-500 border-black border-4 w-8 h-8 absolute -translate-y-1/2 top-[50%] left-[50%]  md:top-[5.5%] -translate-x-1/2 flex items-center justify-center md:left-3">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg> */}
                </div>
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;