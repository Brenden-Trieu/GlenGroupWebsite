import { useEffect, useState, useRef } from "react";
import "../styles/Navbar.css"; // Optional: Create this if you want scoped styles

const Navbar = ({ heroRef }) => {
  const [isSticky, setIsSticky] = useState(false);

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
  }, [heroRef]);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <ul>
        <li>Home</li>
        <li>About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
