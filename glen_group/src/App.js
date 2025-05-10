import { useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import Snapshot from "./components/Snapshot.jsx";
import Carousel from "./components/CompanyCarousel.jsx";
import InfoTabs from "./components/InfoTabs.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/App.css";
import { ChakraProvider } from '@chakra-ui/react'
// https://glengroup.ca/
// https://glengroup.ca/about/

function App() {
  const heroRef = useRef(null);

  return (
    <ChakraProvider>
      <section ref={heroRef} className="hero">
        <video id="glenGroupVideo" autoPlay muted loop >
          <source src="https://glengroup.ca/wp-content/uploads/2023/12/Glen-Group-Final-Video.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
        </video>
        <Navbar heroRef={heroRef} />
      </section>
      <section className="content">
        <Snapshot />
      </section>
      <section className="companySlides">
        <Carousel />
      </section>
      <section className="companyTabs">
        <InfoTabs />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </ChakraProvider>
  );
}

export default App;
