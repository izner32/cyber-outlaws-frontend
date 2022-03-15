import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Sort from './Sort';
import Pagination from './Pagination';
import Characters from './Characters';

function Main():JSX.Element {
  const router = useRouter();
  const [isCharacterOpen, setIsCharacterOpen] = useState(false);
  const [page, setPage] = useState(1);

  const [activeTraitsFilter, setActiveTraitsFilter] = useState([])


  return (
    <>
      <div className="bg-black ">
        <div className="h-[350px] lg:h-[300px] md:h-[250px] sm:h-[200px] bg-white relative mx-auto">
          <h1 className="w-[80%] mx-auto flex justify-center items-center font-ReadexPro font-bold text-[250px] lg:text-[170px] md:text-[130px] sm:text-[90px]">RARITY</h1>
          <div className="absolute top-0 w-72 left-20">
            <Image
              className = "lg:scale-75 md:scale-50 origin-top-left"
              src="/holding_bat_char.png"
              alt="Holding bat character"
              width={600}
              height={800}
            ></Image>
          </div>
        </div>
        <section className="w-[80%] md:w-[90%] mx-auto bg-black font-ReadexPro">
          <div className=" pt-[50px]">
            <h1 className="text-gold-500 text-[30px] font-bold pb-[20px] md:text-[25px] sm:text-[20px] md:text-center">CYBER OUTLAWS</h1>
            <div className="border-t-[1px] border-gray-500 mb-[30px] sm:mb-[15px]"></div>
            <div className="flex md:flex-col-reverse justify-between">
              <div className="w-[65%] md:w-full text-[16px] lg:text-[14px] ">
                <p className="text-gold-500 font-SourceSansPro">Description</p>
                <p className="text-white font-SourceSansPro">Cyber Outlaws is Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!</p>
              </div>
              <div className="flex gap-x-12 md:justify-around lg:scale-[85%] md:scale-75 md:mb-4">
                <button className="cursor-zero" onClick={() => router.push('https://discord.gg/NUfD4xQHnP')}><Image className="hover:opacity-70" src='/discord_negative.png' alt='discord' width={50} height={50}/></button>
                <button className="cursor-zero" onClick={() => router.push('https://twitter.com/_CyberOutlaws')}><Image className="hover:opacity-70" src='/twitter_negative.png' alt='twitter' width={50} height={50} /></button>
                <button className="cursor-zero" onClick={() => router.push('https://www.instagram.com/cyber_outlaws/')}><Image className="hover:opacity-70" src='/instagram_negative.png' alt='instagram' width={50} height={50} /></button>
              </div>
            </div>
          </div>
          <div className="md:scale-[85%] md:origin-bottom-left flex md:flex-col md:mx-auto md:gap-y-4 justify-between pt-[60px] md:pt-[30px] relative z-50">
            {/* sort button */}
            <Sort activeTraitsFilter = {activeTraitsFilter} setActiveTraitsFilter = {setActiveTraitsFilter}></Sort>
            {/* pagination button */}
            <Pagination page = {page} setPage = {setPage} activeTraitsFilter = {activeTraitsFilter} setActiveTraitsFilter = {setActiveTraitsFilter}></Pagination>
          </div>
          <div className="relative">
            {/* character list */}
            <Characters activeTraitsFilter={activeTraitsFilter} page = {page} isCharacterOpen = {isCharacterOpen} setIsCharacterOpen = {setIsCharacterOpen}></Characters>
          </div>
          <div className="mt-4 flex justify-end md:justify-start md:scale-[85%] origin-top-left">
            {/* pagination button */}
            <Pagination page = {page} setPage = {setPage}></Pagination>
          </div>
        </section>
      </div>
    </>
  )
}

export default Main;