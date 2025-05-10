import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ heroRef }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { rootMargin: "-1px 0px 0px 0px" }
    );

    if (heroRef?.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef?.current) observer.unobserve(heroRef.current);
    };
  }, [heroRef]);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
