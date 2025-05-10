import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>About Us</h1>
      <p>Welcome to the Glen Group. Learn more about what makes us different below.</p>

      <div style={{ marginTop: "2rem" }}>
        <Link to="/">
          <button style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#319795",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500"
          }}>
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default AboutPage;
