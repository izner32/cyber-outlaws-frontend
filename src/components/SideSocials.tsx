import { useRouter } from 'next/router';
import Image from 'next/image';


function SideSocials() {
    const router = useRouter();

    return (
        <>
            <div className="bg-white bg-opacity-30 fixed p-2 px-3 left-0 top-48 z-50 flex flex-col gap-y-6 ">
                <button className={`hover:opacity-70 md:w-[15px] w-[20px]`} onClick={() => router.push('https://discord.gg/NUfD4xQHnP')}><Image src='/discord_negative.png' alt='discord' width={70} height={70}/></button>
                <button className={`hover:opacity-70 md:w-[15px] w-[20px]`} onClick={() => router.push('https://twitter.com/_CyberOutlaws')}><Image src='/twitter_negative.png' alt='twitter' width={70} height={70}/></button>
                <button className={`hover:opacity-70 md:w-[15px] w-[20px]`} onClick={() => router.push('https://www.instagram.com/cyber_outlaws/')}><Image src='/instagram_negative.png' alt='instagram' width={70} height={70}/></button>
            </div> 
        </>
    )
}

export default SideSocials;