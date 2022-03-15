import Nav from '../components/Nav';
import SideSocials from '../components/SideSocials';
import Main from '../components/Roadmap/Main';
import Footer from '../components/Footer';
import Head from 'next/head'

function roadmap():JSX.Element {

  return (
      <>
        <Head>
          <title>Roadmap | Cyber Outlaws NFT</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
      </>
  )
}

export default roadmap