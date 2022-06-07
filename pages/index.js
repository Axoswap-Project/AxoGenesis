import Head from 'next/head'
import Navbar from '../components/navbar';
import Heroes from '../components/heroes';
import Footer from '../components/footer';
import Images from '../components/images';
import Banner from '../components/banner';
import Team from '../components/team';
import Faq from '../components/faq';
import NftDetail from '../components/nft-detail';


function App() {
  return (
    <div className="bg-black">
      <Head>
        <title>AxoGenesis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner/>
      <Navbar/>
      <Heroes/>
      <Images/>
      <NftDetail />
      <Team/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
