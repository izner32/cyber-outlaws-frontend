import Image from 'next/image';
import { useRouter } from 'next/router'
import Fade from 'react-reveal/Fade';

function Footer():JSX.Element {
  const router = useRouter();
  const { asPath } = useRouter();
  
  return (
    <>
      <footer className="max-w-[1300px] mx-auto bg-white border-t-[1px] border-t-gray-300 w-full flex pl-4 items-center">
        <Fade big>
        <small className="text-gray-500 py-8">© Cyber Outlaws</small>
        </Fade>
      </footer>
    </>
  )
}

export default Footer;