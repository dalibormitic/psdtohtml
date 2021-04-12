import './App.scss';
import Faq from './components/Faq';
import Footer from './components/Footer';
import FourthDiv from './components/FourthDiv';
import Hero from './components/Hero';
import LastDiv from './components/LastDiv';
import Navbar from './components/Navbar';
import Planning from './components/Planning';
import PriceDiv from './components/PriceDiv';
import Reasons from './components/Reasons';
import SecondDiv from './components/SecondDiv';
import Technologies from './components/Technologies';
import Testimonials from './components/Testimonials';
import ThirdDiv from './components/ThirdDiv';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SecondDiv />
      <ThirdDiv />
      <FourthDiv />
      <Technologies />
      <Reasons />
      <Planning />
      <PriceDiv />
      <Testimonials />
      <Faq />
      <LastDiv />
      <Footer />
    </div>
  );
}

export default App;
