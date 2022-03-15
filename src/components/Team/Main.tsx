import Image from 'next/image';
import Fade from 'react-reveal/Fade';

function Main():JSX.Element {
  
  return (
    <>
      <section className="bg-black">
        <Fade big>
        <div className="lg:w-[90%] lg:mx-auto pt-[90px] sm:pt-[45px] flex sm:flex-col gap-x-4 justify-center">
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
            <h1 className="font-ReadexPro font-bold text-[48px] sm:text-[30px] text-gold-500">THE TEAM</h1>
            <p className="font-ReadexPro text-[18px] sm:text-[14px] text-white">Our project's quality reflects how passionate we are</p>
          </div>
        </div>

        {/* cards */}
        <div className="mt-[100px] sm:mt-[50px] flex justify-center gap-x-[120px] flex-wrap gap-y-16 w-[90%] mx-auto">
          <div className="w-[250px] bg-white">
            <div 
              className="h-[250px]"
              style={{
                backgroundImage: "url(" + "/pfp_1.png" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="bg-gold-500 px-[20px] py-[20px]">
              <h1 className="font-ReadexPro font-bold text-[16px]">The Dream</h1>
              <p className="font-ReadexPro font-semibold text-[12px]">Core, Marketing Lead</p>
              <p className="font-ReadexPro text-[10px] mt-[30px]">He is a crypto enthusiast, been in this space for a few years now. He spends most of his time trading, and flipping nfts.</p>
            </div>
          </div>
          <div className="w-[250px] bg-white">
            <div 
              className="h-[250px]"
              style={{
                backgroundImage: "url(" + "/pfp_2.png" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="bg-gold-500 px-[20px] py-[20px]">
              <h1 className="font-ReadexPro font-bold text-[16px]">Passion</h1>
              <p className="font-ReadexPro font-semibold text-[12px]">Core, Lead Developer</p>
              <p className="font-ReadexPro text-[10px] mt-[30px]">He is a self-taught web developer, extremely interested in tech mostly in data engineering, and algorithmic trading.</p>
            </div>
          </div>
          <div className="w-[250px] bg-white">
            <div 
              className="h-[250px]"
              style={{
                backgroundImage: "url(" + "/pfp_3.png" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="bg-gold-500 px-[20px] py-[20px]">
              <h1 className="font-ReadexPro font-bold text-[16px]">Envy</h1>
              <p className="font-ReadexPro font-semibold text-[12px]">Core, Community Manager</p>
              <p className="font-ReadexPro text-[10px] mt-[30px]">He is a graphic designer. He manages the community, and actively handles the team's social media accounts.</p>
            </div>
          </div>
          <div className="w-[250px] bg-white">
            <div 
              className="h-[250px]"
              style={{
                backgroundImage: "url(" + "/pfp_6.png" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="bg-gold-500 px-[20px] py-[20px]">
              <h1 className="font-ReadexPro font-bold text-[16px]">Dunce</h1>
              <p className="font-ReadexPro font-semibold text-[12px]">Creative Artist</p>
              <p className="font-ReadexPro text-[10px] mt-[30px]">He is a thinker, and a man with a huge variety of imagination. He is massively passionate about all things related to art.</p>
            </div>
          </div>
          <div className="w-[250px] bg-white">
            <div 
              className="h-[250px]"
              style={{
                backgroundImage: "url(" + "/pfp_3.png" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="bg-gold-500 px-[20px] py-[20px]">
              <h1 className="font-ReadexPro font-bold text-[16px]">Pukuluku</h1>
              <p className="font-ReadexPro font-semibold text-[12px]">Creative Artist</p>
              <p className="font-ReadexPro text-[10px] mt-[30px]">His specialization lies in manipulating art digitally while extensively using different modern art techniques. </p>
            </div>
          </div>
          <div className="w-[250px] bg-white">
            <div 
              className="h-[250px]"
              style={{
                backgroundImage: "url(" + "/pfp_2.png" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="bg-gold-500 px-[20px] py-[20px]">
              <h1 className="font-ReadexPro font-bold text-[16px]">Gelca</h1>
              <p className="font-ReadexPro font-semibold text-[12px]">Creative Artist</p>
              <p className="font-ReadexPro text-[10px] mt-[30px]">She is a lifelong learner. She has experience with multiple difficult domains not limited to programming and digital arts.</p>
            </div>
          </div>
        </div>
        </Fade>
      </section>
    </>
  )
}

export default Main;