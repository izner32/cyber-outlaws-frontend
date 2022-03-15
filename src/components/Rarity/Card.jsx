import Image from 'next/image';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import * as rarity_data from '../../utils/json/rarity.json';
const rarity_data_json = JSON.stringify(rarity_data)
const rarity_data_obj = JSON.parse(rarity_data_json)
const rarity_data_arr = Object.values(rarity_data_obj).slice(1,-2)

// console.log(rarity_data_arr)

function getRarity (trait) {
  for (const i in rarity_data_arr){
    if (rarity_data_arr[i].trait == trait){
      return rarity_data_arr[i].rarity;
      break;
    }
  }
}

function Card(props) {
  const router = useRouter();

  return (
    <>
      <div className={`flex rounded-xl w-[900px] lg:scale-[85%] md:scale-[65%] sm:flex-col sm:w-[500px] sm:h-[820px] sm max-w-[1200px] h-[500px] bg-white fixed z-[2000] top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2`}>
        {/* image */}
        <div className="flex justify-center items-end sm:h-[75%] sm:w-[75%] mx-auto">
          <Image className="rounded-xl " src={`/images/${props.character.edition}.png`} width={600} height={600} ></Image>
        </div>

        {/* right section */}
        <div className="sm:border-t-[1px] sm:border-t-black w-[55%] sm:w-full h-full flex flex-col justify-between py-2">
            <div className="flex justify-end pr-4 sm:absolute sm:top-3 sm:right-0"><button className="font-bold text-right" onClick={() =>{ 
              props.setIsCharacterOpen(!props.isCharacterOpen)
            }}>✘</button></div>
            <div className=" pr-12 sm:pr-2 pl-0 sm:pl-4">
              <div className="flex justify-between mb-[20px]">
                <div className="font-ReadexPro">
                  <p className="text-[12px] font-semibold">CYBER OUTLAWS</p>
                  <h1 className="text-[30px] font-bold">{`# ${props.character.edition}`}</h1>
                </div>
                <div className="flex items-center gap-x-[20px] mr-14 sm:mr-4">
                  <button onClick={() => router.push('https://twitter.com/_CyberOutlaws')}><Image className="hover:opacity-70" src='/twitter_black.png' alt='twitter' width={30} height={30} /></button>
                  <button onClick={() => router.push('https://www.instagram.com/cyber_outlaws/')}><Image className="hover:opacity-70" src='/instagram_black.png' alt='instagram' width={30} height={30} /></button>
                  <button onClick={() => router.push('https://discord.gg/NUfD4xQHnP')}><Image className="hover:opacity-70 font-white " src='/discord_black.png' alt='discord' width={30} height={30}/></button>
                </div>
              </div>
              <div id="mintAttr" className="h-[300px] overflow-scroll">
                {/* attribute */}
                <div className="mb-4 h-[40px] w-[90%] sm:w-[95%] bg-gray-300 rounded-lg font-ReadexPro">
                  <div className="w-[97.5%] mx-auto h-full flex items-center">
                    <Image className="hover:opacity-70" src='/sample_mint_attr.png' alt='type' width={30} height={30} />
                    <div className="relative ml-4 w-full">
                      <div className="flex  justify-between">
                        <div className="">
                          <p className="text-[8px] font-semibold">Background:</p>
                          <p className="text-[14px] font-bold">{props.character.attributes[0].value}</p>
                        </div>
                        <div className="">
                          <p className="text-[8px] font-semibold">Occurences:</p>
                          <p className="text-[14px] font-bold">10%</p>
                        </div>
                      </div>
                      <div className="absolute -translate-x-1/2 left-1/2 top-0">
                        <p className="text-[8px] font-semibold">Rarity:</p>
                        <p className="text-[14px] font-bold">{getRarity(props.character.attributes[0].value)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* attribute */}
                <div className="mb-4 h-[40px] w-[90%] sm:w-[95%] bg-gray-300 rounded-lg font-ReadexPro">
                  <div className="w-[97.5%] mx-auto h-full flex items-center">
                    <Image className="hover:opacity-70" src='/sample_mint_attr.png' alt='type' width={30} height={30} />
                    <div className="relative ml-4 w-full">
                      <div className="flex  justify-between">
                        <div className="">
                          <p className="text-[8px] font-semibold">Type:</p>
                          <p className="text-[14px] font-bold">{props.character.attributes[1].value}</p>
                        </div>
                        <div className="">
                          <p className="text-[8px] font-semibold">Occurences:</p>
                          <p className="text-[14px] font-bold">10%</p>
                        </div>
                      </div>
                      <div className="absolute -translate-x-1/2 left-1/2 top-0">
                        <p className="text-[8px] font-semibold">Rarity:</p>
                        <p className="text-[14px] font-bold">{getRarity(props.character.attributes[1].value)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* attribute */}
                <div className="mb-4 h-[40px] w-[90%] sm:w-[95%] bg-gray-300 rounded-lg font-ReadexPro">
                  <div className="w-[97.5%] mx-auto h-full flex items-center">
                    <Image className="hover:opacity-70" src='/sample_mint_attr.png' alt='type' width={30} height={30} />
                    <div className="relative ml-4 w-full">
                      <div className="flex  justify-between">
                        <div className="">
                          <p className="text-[8px] font-semibold">Special:</p>
                          <p className="text-[14px] font-bold">{props.character.attributes[2].value}</p>
                        </div>
                        <div className="">
                          <p className="text-[8px] font-semibold">Occurences:</p>
                          <p className="text-[14px] font-bold">10%</p>
                        </div>
                      </div>
                      <div className="absolute -translate-x-1/2 left-1/2 top-0">
                        <p className="text-[8px] font-semibold">Rarity:</p>
                        <p className="text-[14px] font-bold">{getRarity(props.character.attributes[2].value)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* attribute */}
                <div className="mb-4 h-[40px] w-[90%] sm:w-[95%] bg-gray-300 rounded-lg font-ReadexPro">
                  <div className="w-[97.5%] mx-auto h-full flex items-center">
                    <Image className="hover:opacity-70" src='/sample_mint_attr.png' alt='type' width={30} height={30} />
                    <div className="relative ml-4 w-full">
                      <div className="flex  justify-between">
                        <div className="">
                          <p className="text-[8px] font-semibold">Offhand:</p>
                          <p className="text-[14px] font-bold">{props.character.attributes[3].value}</p>
                        </div>
                        <div className="">
                          <p className="text-[8px] font-semibold">Occurences:</p>
                          <p className="text-[14px] font-bold">10%</p>
                        </div>
                      </div>
                      <div className="absolute -translate-x-1/2 left-1/2 top-0">
                        <p className="text-[8px] font-semibold">Rarity:</p>
                        <p className="text-[14px] font-bold">{getRarity(props.character.attributes[3].value)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* attribute */}
                <div className="mb-4 h-[40px] w-[90%] sm:w-[95%] bg-gray-300 rounded-lg font-ReadexPro">
                  <div className="w-[97.5%] mx-auto h-full flex items-center">
                    <Image className="hover:opacity-70" src='/sample_mint_attr.png' alt='type' width={30} height={30} />
                    <div className="relative ml-4 w-full">
                      <div className="flex  justify-between">
                        <div className="">
                          <p className="text-[8px] font-semibold">Clothing:</p>
                          <p className="text-[14px] font-bold">{props.character.attributes[4].value}</p>
                        </div>
                        <div className="">
                          <p className="text-[8px] font-semibold">Occurences:</p>
                          <p className="text-[14px] font-bold">10%</p>
                        </div>
                      </div>
                      <div className="absolute -translate-x-1/2 left-1/2 top-0">
                        <p className="text-[8px] font-semibold">Rarity:</p>
                        <p className="text-[14px] font-bold">{getRarity(props.character.attributes[4].value)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* attribute */}
                <div className="mb-4 h-[40px] w-[90%] sm:w-[95%] bg-gray-300 rounded-lg font-ReadexPro">
                  <div className="w-[97.5%] mx-auto h-full flex items-center">
                    <Image className="hover:opacity-70" src='/sample_mint_attr.png' alt='type' width={30} height={30} />
                    <div className="relative ml-4 w-full">
                      <div className="flex  justify-between">
                        <div className="">
                          <p className="text-[8px] font-semibold">Mouth:</p>
                          <p className="text-[14px] font-bold">{props.character.attributes[5].value}</p>
                        </div>
                        <div className="">
                          <p className="text-[8px] font-semibold">Occurences:</p>
                          <p className="text-[14px] font-bold">10%</p>
                        </div>
                      </div>
                      <div className="absolute -translate-x-1/2 left-1/2 top-0">
                        <p className="text-[8px] font-semibold">Rarity:</p>
                        <p className="text-[14px] font-bold">{getRarity(props.character.attributes[5].value)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* attribute */}
                <div className="mb-4 h-[40px] w-[90%] sm:w-[95%] bg-gray-300 rounded-lg font-ReadexPro">
                  <div className="w-[97.5%] mx-auto h-full flex items-center">
                    <Image className="hover:opacity-70" src='/sample_mint_attr.png' alt='type' width={30} height={30} />
                    <div className="relative ml-4 w-full">
                      <div className="flex  justify-between">
                        <div className="">
                          <p className="text-[8px] font-semibold">Ear:</p>
                          <p className="text-[14px] font-bold">{props.character.attributes[6].value}</p>
                        </div>
                        <div className="">
                          <p className="text-[8px] font-semibold">Occurences:</p>
                          <p className="text-[14px] font-bold">10%</p>
                        </div>
                      </div>
                      <div className="absolute -translate-x-1/2 left-1/2 top-0">
                        <p className="text-[8px] font-semibold">Rarity:</p>
                        <p className="text-[14px] font-bold">{getRarity(props.character.attributes[6].value)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* attribute */}
                <div className="mb-4 h-[40px] w-[90%] sm:w-[95%] bg-gray-300 rounded-lg font-ReadexPro">
                  <div className="w-[97.5%] mx-auto h-full flex items-center">
                    <Image className="hover:opacity-70" src='/sample_mint_attr.png' alt='type' width={30} height={30} />
                    <div className="relative ml-4 w-full">
                      <div className="flex  justify-between">
                        <div className="">
                          <p className="text-[8px] font-semibold">Eyes:</p>
                          <p className="text-[14px] font-bold">{props.character.attributes[7].value}</p>
                        </div>
                        <div className="">
                          <p className="text-[8px] font-semibold">Occurences:</p>
                          <p className="text-[14px] font-bold">10%</p>
                        </div>
                      </div>
                      <div className="absolute -translate-x-1/2 left-1/2 top-0">
                        <p className="text-[8px] font-semibold">Rarity:</p>
                        <p className="text-[14px] font-bold">{getRarity(props.character.attributes[7].value)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* attribute */}
                <div className="mb-4 h-[40px] w-[90%] sm:w-[95%] bg-gray-300 rounded-lg font-ReadexPro">
                  <div className="w-[97.5%] mx-auto h-full flex items-center">
                    <Image className="hover:opacity-70" src='/sample_mint_attr.png' alt='type' width={30} height={30} />
                    <div className="relative ml-4 w-full">
                      <div className="flex  justify-between">
                        <div className="">
                          <p className="text-[8px] font-semibold">Face:</p>
                          <p className="text-[14px] font-bold">{props.character.attributes[8].value}</p>
                        </div>
                        <div className="">
                          <p className="text-[8px] font-semibold">Occurences:</p>
                          <p className="text-[14px] font-bold">10%</p>
                        </div>
                      </div>
                      <div className="absolute -translate-x-1/2 left-1/2 top-0">
                        <p className="text-[8px] font-semibold">Rarity:</p>
                        <p className="text-[14px] font-bold">{getRarity(props.character.attributes[8].value)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* attribute */}
                <div className="mb-4 h-[40px] w-[90%] sm:w-[95%] bg-gray-300 rounded-lg font-ReadexPro">
                  <div className="w-[97.5%] mx-auto h-full flex items-center">
                    <Image className="hover:opacity-70" src='/sample_mint_attr.png' alt='type' width={30} height={30} />
                    <div className="relative ml-4 w-full">
                      <div className="flex  justify-between">
                        <div className="">
                          <p className="text-[8px] font-semibold">Neck:</p>
                          <p className="text-[14px] font-bold">{props.character.attributes[9].value}</p>
                        </div>
                        <div className="">
                          <p className="text-[8px] font-semibold">Occurences:</p>
                          <p className="text-[14px] font-bold">10%</p>
                        </div>
                      </div>
                      <div className="absolute -translate-x-1/2 left-1/2 top-0">
                        <p className="text-[8px] font-semibold">Rarity:</p>
                        <p className="text-[14px] font-bold">{getRarity(props.character.attributes[9].value)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* attribute */}
                <div className="mb-4 h-[40px] w-[90%] sm:w-[95%] bg-gray-300 rounded-lg font-ReadexPro">
                  <div className="w-[97.5%] mx-auto h-full flex items-center">
                    <Image className="hover:opacity-70" src='/sample_mint_attr.png' alt='type' width={30} height={30} />
                    <div className="relative ml-4 w-full">
                      <div className="flex  justify-between">
                        <div className="">
                          <p className="text-[8px] font-semibold">Hair:</p>
                          <p className="text-[14px] font-bold">{props.character.attributes[10].value}</p>
                        </div>
                        <div className="">
                          <p className="text-[8px] font-semibold">Occurences:</p>
                          <p className="text-[14px] font-bold">10%</p>
                        </div>
                      </div>
                      <div className="absolute -translate-x-1/2 left-1/2 top-0">
                        <p className="text-[8px] font-semibold">Rarity:</p>
                        <p className="text-[14px] font-bold">{getRarity(props.character.attributes[10].value)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* attribute */}
                <div className="mb-4 h-[40px] w-[90%] sm:w-[95%] bg-gray-300 rounded-lg font-ReadexPro">
                  <div className="w-[97.5%] mx-auto h-full flex items-center">
                    <Image className="hover:opacity-70" src='/sample_mint_attr.png' alt='type' width={30} height={30} />
                    <div className="relative ml-4 w-full">
                      <div className="flex  justify-between">
                        <div className="">
                          <p className="text-[8px] font-semibold">Headgear:</p>
                          <p className="text-[14px] font-bold">{props.character.attributes[11].value}</p>
                        </div>
                        <div className="">
                          <p className="text-[8px] font-semibold">Occurences:</p>
                          <p className="text-[14px] font-bold">10%</p>
                        </div>
                      </div>
                      <div className="absolute -translate-x-1/2 left-1/2 top-0">
                        <p className="text-[8px] font-semibold">Rarity:</p>
                        <p className="text-[14px] font-bold">{getRarity(props.character.attributes[11].value)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end pr-4"><button className="hover:opacity-[70%] font-ReadexPro font-bold text-right"><span>VIEW ON OPENSEA</span></button></div>
        </div>
      </div>
    </>
  )
}

export default Card;