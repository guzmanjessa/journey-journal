import { Link } from "react-router-dom";
import "./Blog.css";

import switzerland from "../assets/switzerland.jpg";
import japan from "../assets/japan.jpg";
import korea from "../assets/korea.jpg";
import philippines from "../assets/ph.jpg";

function Blog() {
  return (
    <section className="blog-page">

      <div className="blog-content">

        <h1>My Dream Destinations</h1>

        {/* Switzerland */}
        <div className="blog-card">
          <img src={switzerland} alt="Switzerland" />

          <div className="blog-info">
            <h2>Switzerland 🇨🇭</h2>

            <p>
              Switzerland is the definition of a dream destination.
              Snow-covered mountains, crystal-clear lakes, charming
              villages, and scenic train rides make it one of the most
              beautiful countries I hope to explore someday.
            </p>

            <Link to="/switzerland">
              <button>Read More</button>
            </Link>
          </div>
        </div>

        {/* Japan */}
        <div className="blog-card">
          <img src={japan} alt="Japan" />

          <div className="blog-info">
            <h2>Japan 🇯🇵</h2>

            <p>
              Japan has always been one of my biggest dreams. From the
              peaceful temples of Kyoto to the vibrant streets of Tokyo,
              I hope to experience its rich culture, breathtaking cherry
              blossoms, delicious cuisine, and beautiful traditions that
              have inspired me since I was young.
            </p>

            <Link to="/japan">
              <button>Read More</button>
            </Link>
          </div>
        </div>

        {/* South Korea */}
        <div className="blog-card">
          <img src={korea} alt="South Korea" />

          <div className="blog-info">
            <h2>South Korea 🇰🇷</h2>

            <p>
              South Korea has always fascinated me because of its blend
              of modern cities and traditional culture. I want to visit
              beautiful palaces, enjoy authentic Korean food, experience
              the changing seasons, and explore places I've seen in
              dramas and travel videos.
            </p>

            <Link to="/korea">
              <button>Read More</button>
            </Link>
          </div>
        </div>

        {/* Philippines */}
        <div className="blog-card">
          <img src={philippines} alt="Philippines" />

          <div className="blog-info">
            <h2>Philippines 🇵🇭</h2>

            <p>
              Even though it's my home country, there are still so many
              incredible places I want to discover. From the crystal-blue
              waters of Palawan to the mountains of Banaue and the white
              beaches of Siargao, I hope to appreciate more of the beauty
              our country has to offer.
            </p>

            <Link to="/philippines">
              <button>Read More</button>
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Blog;