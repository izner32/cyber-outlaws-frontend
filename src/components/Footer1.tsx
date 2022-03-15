import Image from 'next/image';
import { useRouter } from 'next/router'
import Fade from 'react-reveal/Fade';

function Footer():JSX.Element {
  const router = useRouter();
  const { asPath } = useRouter();
  
  return (
    <>
      <footer className="max-w-[1300px] bg-white h-screen sticky top-100 z-[3000] lg:z-0 mx-auto flex items-center">
        <Fade>
        <div className="flex gap-x-20 mx-auto w-[80%] lg:w-[90%] ">
            <div className="lg:hidden">
            <Image
                src = "/standing_bat_char_bnw.png"
                width = {240}
                height = {430}
                className=""
            ></Image>
            </div>
            <div className="my-auto">
                <div className="mb-24 w-[80%] lg:w-full">
                    <h1 className="font-bold text-5xl mb-8">Do you have something to say?</h1>
                    <p className="text-xl mb-8">Send us a ticket on our discord server and we'll get back to you as soon as possible</p>
                    <button className="px-12 py-3 rounded bg-black text-white hover:bg-opacity-75">JOIN DISCORD</button>
                </div>
                <div className="border-t-[1px] border-gray-500 mb-[30px] sm:mb-[15px]"></div>
                <div>
                    <ul className="lg:text-sm flex font-bold justify-between">
                        <li><button className="cursor-zero font-bold" onClick={() => router.push('/')}>Home</button></li>
                        <li><button className="cursor-zero font-bold" onClick={() => router.push('/team')}>Team</button></li>
                        <li><button className="cursor-zero font-bold" onClick={() => router.push('/roadmap')}>Roadmap</button></li>
                        <li><button className="cursor-zero font-bold" onClick={() => router.push('/rarity')}>Rarity</button></li>
                        <li><button className="cursor-zero font-bold" onClick={() => router.push('/shop')}>Shop</button></li>
                        <li><button className="cursor-zero font-bold" onClick={() => router.push('/mint')}>Mint</button></li>
                    </ul>
                </div>
            </div>
        </div>
        </Fade>
      </footer>
    </>
  )
}

export default Footer;