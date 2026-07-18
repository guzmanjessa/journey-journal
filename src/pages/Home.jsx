import { Link } from "react-router-dom";
import "../App.css";
import jess from "../assets/jess.jpg";

function Home() {
  return (
    <div className="page-root">

      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <span className="small-title">
            Travel • Lifestyle • Memories
          </span>

          <div className="profile-container">
            <div className="image-frame">
              <img src={jess} alt="Jess" />
            </div>
          </div>

          <h1>
            Meet <span>Jess</span>
          </h1>

          <p>
            Hi! I'm Jess! 
          </p>
    <p>
      Ever since I was a child, I've always been curious about what the world has to offer. I've dreamed of visiting different countries, experiencing new cultures, trying local food, and seeing the places I've only ever admired through photos and videos.
    </p>
          <div className="hero-buttons">

            <Link to="/about">
              <button className="btn secondary">
               Continue Reading
              </button>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;