import "../../styles/CompanyHistory.css";
// import img from "../../../public/assets/imgs/glenGroupProgression.png"

const CompanyHistory = () => {
  return (
    <section className="history-section">
      <div className="history-container">
        <h2 className="history-title">Our History</h2>
        <p className="history-description">
          Established in 2015, Glen Group has grown to become a major player in Canada, offering a wide range of premiere services to different industries.
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-content">
              <h4>2015 – Foundation</h4>
              <p>Glen Group began with a focus on providing high-quality security services across Canada.</p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-content">
              <h4>2016–2020 – Expansion</h4>
              <p>We expanded into new sectors including real estate, recruitment, childcare, traffic management, and home renovations—broadening our impact and offerings.</p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-content">
              <h4>2021–2024 – Evolving Services</h4>
              <p>Continually innovating, we’ve focused on providing comprehensive and creative solutions tailored to each client’s needs.</p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-content">
              <h4>Today – Trusted & Client-Focused</h4>
              <p>Glen Group operates as a one-stop shop, delivering seamless and integrated solutions while maintaining transparency, integrity, and excellence.</p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-content">
              <h4>Future – Growth & Innovation</h4>
              <p>Looking ahead, we’re committed to expanding our services, adapting to change, and always staying ahead of industry trends.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="progressionImage">
        <img src="/assets/imgs/glenGroupProgression.png" alt="Glen Group Progression" />
      </div>
    </section>
  );
};

export default CompanyHistory;
