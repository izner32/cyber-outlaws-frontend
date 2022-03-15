import Nav from '../components/Nav';
import SideSocials from '../components/SideSocials';
import Main from '../components/Mint/Main';
import Footer from '../components/Footer';
import Head from 'next/head'

function Mint():JSX.Element {

  return (
    <>
      <Head>
        <title>Mint | Cyber Outlaws NFT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default Mint;

export function getStaticProps() {
  return {
    // returns the default 404 page with a status code of 404 in production
    notFound: true 
  }
}

