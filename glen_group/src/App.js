import { useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import Snapshot from "./components/Snapshot.jsx";
import "./styles/App.css";

function App() {
  const heroRef = useRef(null);

  return (
    <div>
      <section ref={heroRef} className="hero">
        <video id="glenGroupVideo" autoPlay muted loop >
          <source src="https://glengroup.ca/wp-content/uploads/2023/12/Glen-Group-Final-Video.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
        </video>
      </section>
      <Navbar heroRef={heroRef} />
      <section className="content">
        <Snapshot />
      </section>
    </div>
  );
}

export default App;
