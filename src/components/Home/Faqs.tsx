import Image from 'next/image';
import { useRouter } from 'next/router'
import Fade from 'react-reveal/Fade';

function Faqs():JSX.Element {
  const router = useRouter();

  return (
    <>
      <div className="bg-black"> 
      <div className=" mx-auto relative max-w-[1300px] min-h-[600px] font-ReadexPro flex justify-center">
        <Fade big>
            <section className="text-black w-[80%] md:w-[90%] mx-auto">
                <div className="container px-5 pb-24 mx-auto">
                <div className="text-center mb-20 text-white">
                    <h1 className="lg:text-3xl text-5xl font-extrabold font-medium text-center title-font text-gold-500 mb-4">
                    FAQS
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    The most common questions about our NFT.
                    </p>
                </div>
                <div className="flex flex-wrap  lg:mx-auto lg:mb-2 -mx-2 ">
                    <div className="md:w-full w-1/2 px-4  pt-2">
                    <details className="mb-4">
                        <summary className="font-semibold  bg-gold-500 rounded-md py-2 px-4">
                        Is this on ethereum?
                        </summary>

                        <div className="text-white mt-4 relative md:w-[80%] sm:w-full">
                        Cyber outlaws would be available on Polygon - layer 2 scaling solution for the ethereum blockchain
                        </div>
                    </details>
                    <details className="mb-4">
                        <summary className="font-semibold  bg-gold-500 rounded-md py-2 px-4">
                        When is the mint date?
                        </summary>

                        <div className="text-white mt-4 md:w-[80%]  sm:w-full">
                        TBA.
                        </div>
                    </details>
                    <details className="mb-2">
                        <summary className="font-semibold  bg-gold-500 rounded-md py-2 px-4">
                        What is the mint price?
                        </summary>

                        <div className="text-white mt-4 md:w-[80%] sm:w-full">
                        TBA.
                        </div>
                    </details>
                    </div>
                    <div className="md:w-full w-1/2  px-4 pt-2">
                    <details className="mb-4">
                        <summary className="font-semibold  bg-gold-500 rounded-md py-2 px-4">
                        Whitelist benefits? What are they?
                        </summary>

                        <div className="text-white mt-4 md:w-[80%] sm:w-full">
                        Early Access. Cheaper Mint Price. 
                        </div>
                    </details>
                    <details className="mb-4">
                        <summary className="font-semibold  bg-gold-500 rounded-md py-2 px-4">
                        How about for OG benefits?
                        </summary>

                        <div className="text-white mt-4 md:w-[80%] sm:w-full">
                        See how cheap the mint price for whitelisters is? It's even more cheaper when you're an OG + don't forget the early access perk.
                        </div>
                    </details>
                    <details className="mb-4">
                        <summary className="font-semibold  bg-gold-500 rounded-md py-2 px-4">
                        Perks for the holders?
                        </summary>

                        <div className="text-white mt-4 md:w-[80%] sm:w-full">
                        Have a look at our <button onClick={() => router.push('/roadmap')} className="text-gold-500">roadmap</button>, it pretty much answers most if not all the questions regarding holder's perks. Not satisfied? Send us a message in <button onClick={() => router.push('https://discord.gg/NUfD4xQHnP')} className="text-gold-500">discord</button>.
                        </div>
                    </details>
                    </div>
                </div>
                </div>
            </section>
            <div 
                  className="h-[500px] w-48 absolute right-10 sm:right-0 sm:hidden top-20"
                  style={{  
                    backgroundImage: "url(" + "/standing_char.png" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}>
            </div>
        </Fade>
      </div>
      </div>
    </>
  )
}

export default Faqs;