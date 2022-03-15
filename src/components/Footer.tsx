import Image from 'next/image';
import { useRouter } from 'next/router'
import Fade from 'react-reveal/Fade';

function Footer():JSX.Element {
  const router = useRouter();
  const { asPath } = useRouter();
  
  return (
    <>
      <footer className="bg-black  relative">
        <Fade>
        <section className="max-w-[1300px] bg-black w-[80%] sm:w-[90%] mx-auto text-white pt-[180px] sm:pt-[90px] ">
          <div className="relative z-50">
            <h1 className="text-center text-gold-500 text-ReadexPro font-bold text-[36px] sm:text-[26px] mb-[30px]">CYBER OUTLAWS NFT</h1>
            <div className="sm:text-[13px] text-Barlow font-medium flex gap-x-[66px] sm:gap-x-[33px] justify-center">
              <div>
                <h1 className="mb-[28px] sm:mb-[14px] hover:text-gray-400"><button className="cursor-zero" onClick={() => router.push('/')}>HOME</button></h1>
                <ul className="text-gray-400">
                  <button className="block cursor-zero"><a onClick={() => router.push('/#hero')} className="hover:text-gray-300">Cyber</a></button>
                  <button className="block cursor-zero"><a onClick={() => router.push('/#project')} className="hover:text-gray-300">Project</a></button>
                  <button className="block cursor-zero"><a onClick={() => router.push('/#vision')} className="hover:text-gray-300">Vision</a></button>
                </ul>
              </div>
              <div>
                <h1 className="mb-[28px] sm:mb-[14px] hover:text-gray-400" ><button className="cursor-zero" onClick={() => router.push('/team')}>TEAM</button></h1>
              </div>
              <div>
                <h1 className="mb-[28px] sm:mb-[14px] hover:text-gray-400"><button className="cursor-zero" onClick={() => router.push('/roadmap')}>ROADMAP</button></h1>
              </div>
              <div>
                <h1 className="mb-[28px] sm:mb-[14px] hover:text-gray-400"><button className="cursor-zero" onClick={() => router.push('/rarity')}>RARITY</button></h1>
              </div>
              <div>
                <h1 className="mb-[28px] sm:mb-[14px] hover:text-gray-400"><button className="cursor-zero" onClick={() => router.push('/shop')}>SHOP</button></h1>
              </div>
              <div>
                <h1 className="mb-[28px] sm:mb-[14px] hover:text-gray-400"><button className="cursor-zero" onClick={() => router.push('/mint')}>MINT</button></h1>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-500 mt-[76px] sm:mt-[38px] mb-[21px]"></div>
          <div className="relative z-50">
            <div className="flex gap-x-[20px] items-center justify-center mb-[72px] sm:mb-[36px]">
              <button className="cursor-zero" onClick={() => router.push('https://discord.gg/NUfD4xQHnP')}><Image className="hover:opacity-70" src='/discord_negative.png' alt='discord' width={20} height={20}/></button>
              <button className="cursor-zero" onClick={() => router.push('https://twitter.com/_CyberOutlaws')}><Image className="hover:opacity-70" src='/twitter_negative.png' alt='twitter' width={20} height={20} /></button>
              <button className="cursor-zero" onClick={() => router.push('https://www.instagram.com/cyber_outlaws/')}><Image className="hover:opacity-70" src='/instagram_negative.png' alt='instagram' width={20} height={20} /></button>
            </div>
            {/* <div className="flex sm:flex-col gap-x-[60px] font-Barlow text-[12px] sm:text-[10px]">
              <div className="sm:mb-[20px]">
                <p className="mb-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t</p>
              </div>
              <div>
                <p className="mb-[20px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t</p>
              </div>
            </div> */}
            <p className="font-Barlow text-[12px] sm:text-[10px] text-center mt-[50px] sm:mt-[25px] sm:pb-[26px] pb-[53px]">© CYBER OUTLAWS NFT 2022. ALL RIGHTS RESERVED</p>
          </div>
          
        </section>
        <div 
            className="z-20 absolute -top-0 right-0 w-[350px] h-full"
            style={{  
                backgroundImage: "url(" + "/footer_gradient.png" + ")",
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
        ></div>
        </Fade>
      </footer>
    </>
  )
}

export default Footer;