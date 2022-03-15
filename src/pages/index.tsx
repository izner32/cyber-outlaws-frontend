// metamask auth - https://blog.avneesh.tech/metamask-authentication-in-nextjs-with-clerk
// minting page - https://www.youtube.com/watch?v=meTpMP0J5E8&t=486s

import Nav from '../components/Nav';
import SideSocials from '../components/SideSocials';
import Hero from '../components/Home/Hero';
import Trivia from '../components/Home/Trivia';
import Project from '../components/Home/Project';
import Vision from '../components/Home/Vision';
import Footer1 from '../components/Footer1';
import Head from 'next/head'

function Home():JSX.Element {

  return (
    <>
    <Head>
        <title>Home | Cyber Outlaws NFT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Nav></Nav>
      <Hero></Hero>
      <Trivia></Trivia>
      <Project></Project>
      <Vision></Vision>
      <Footer1></Footer1>
    </>
  )
}

export default Home