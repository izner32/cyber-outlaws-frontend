import Nav from '../components/Nav';
import SideSocials from '../components/SideSocials';
import Main1 from '../components/Team/Main1';
import Footer2 from '../components/Footer2';
import Head from 'next/head'

function Team():JSX.Element {

  return (
    <>
      <Head>
        <title>Team | Cyber Outlaws NFT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav></Nav>
      <Main1></Main1>
      <Footer2></Footer2>
    </>
  )
}

export default Team;