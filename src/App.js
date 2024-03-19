import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Program from './Components/Program/Program';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import {useState} from 'react'

function App() {
  const [playState, setPlayState] = useState(false);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What we Offer"/>
        <Program />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact />
        <Footer />
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
        
      </div>
      
    </>
  );
}

export default App;
