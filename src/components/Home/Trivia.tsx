import Image from 'next/image';
import Fade from 'react-reveal/Fade';

function Trivia():JSX.Element {
  
  return (
    <>
      <section className="bg-gold-500">
        <Fade big>
          <div className="max-w-[1300px] mx-auto bg-gold-500 relative">
            <h1 className="font-ReadexPro font-semibold text-[36px] text-white absolute  translate-x-10 -translate-y-7">TRIVIA</h1>
            <style jsx>{`
                @supports (-webkit-text-stroke: 1px black) {
                  h1 {
                    -webkit-text-stroke: 2px black;
                  }
                }
            `}</style>
            <div className="py-[64px] sm:py-[50px]">
              <p className="w-[70%] lg:w-[90%] mx-auto font-ReadexPro font-semibold text-[18px] sm:text-[14px] text-center">An NFT is more special than many realize. Every individual NFT commonly uses the Ethereum token standard of ERC-721. What this means is that each and every NFT minted is a verifiably unique asset that is worth as much as someone’s willing to pay for it.</p>
            </div>
          </div>
        </Fade>
      </section>
    </>
  )
}

export default Trivia;