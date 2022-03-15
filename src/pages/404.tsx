import { useRouter } from 'next/router';
import Head from 'next/head'

function Custom404():JSX.Element {
  const router = useRouter();

  return (
    <>
    <Head>
        <title>Page not found | Cyber Outlaws NFT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <section className="w-full h-screen bg-black">
          <div className="flex flex-col my-auto justify-center items-center text-white text-center py-[50px]">
            <div 
                className="h-[300px] w-[250px] mb-[50px]"
                style={{
                  backgroundImage: "url(" + "/holding_bat_char.png" + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
            ></div>
            <div className="flex flex-col justify-center">
                <div className="mb-[50px] font-ReadexPro font-bold text-gold-500">
                    <p className="text-[24px]">Oops...</p>
                    <p className="text-[12px] text-white">The page you're looking for doesn't seem to exist... yet.</p>
                </div>
                <div>
                    <button className="cursor-zero font-ReadexPro font-bold text-[12px] px-[24px] py-[12px] bg-gold-500 rounded-lg text-black" onClick={() => router.push('/')}>Take me to home page</button>
                </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Custom404;