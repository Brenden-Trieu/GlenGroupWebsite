import { useRef, useEffect, useState } from "react";
import "../styles/About.css";
import NavBarGeneral from "../components/aboutUs/NavBarGeneral";
import CompanyHistory from "../components/aboutUs/CompanyHistory";
import Footer from "../components/Footer";
import TeamCultureSection from "../components/aboutUs/TeamCultureSection";

const AboutPage = () => {
  const heroRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  // Observe if the hero is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { rootMargin: "-1px 0px 0px 0px" }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <>
      <section className="hero-splash" ref={heroRef}>
        <div>
          <h1>About Us</h1>
          <p>Glen is your Trusted Service Provider Since 2016</p>
        </div>
      </section>
      <NavBarGeneral heroRef={heroRef} />
      <div id="main-content" style={{ paddingTop: isSticky ? "70px" : "0px" }}>
        <CompanyHistory />
      </div>
      <div>
        <TeamCultureSection />
      </div>
      <Footer />
    </>
  );

};

export default AboutPage;
