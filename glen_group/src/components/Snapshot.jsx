import { useEffect, useState, useRef } from "react";
import "../styles/Snapshot.css";

const Snapshot = ({ heroRef }) => {
  return (
    <div id="snapshotContainer">
      <h1 id="sectionTitle">Glen Group Of Companies</h1>
      <section id="snapshotContent">
        <p>
          Glen Group is a trusted, multi-disciplinary contracting firm based in the Lower Mainland, offering tailored solutions in security, real estate, recruitment, childcare, traffic management, and home renovations — all guided by our core values of safety, integrity, and social responsibility.
        </p>
      </section>
    </div>
  );
};

export default Snapshot;
