import { Link } from "react-router-dom";
import "./Switzerland.css";

import switzerland from "../assets/switzerland.jpg";

function Switzerland() {
  return (
    <section className="Switzerland-page">

      <h1>SWITZERLAND 🇨🇭</h1>

      <img
        src={switzerland}
        alt="Switzerland"
        className="main-image"
      />

      <p className="caption">
        The breathtaking Swiss Alps have always been one of my biggest travel dreams.
      </p>

      <h2 className="section-title">
        Why I Want to Visit Switzerland
      </h2>

      <p className="paragraph">
        Switzerland has always been one of my dream destinations because of its
        breathtaking scenery, peaceful villages, crystal-clear lakes, and
        magnificent mountains. Every photo I see feels like something straight
        out of a fairytale, making me dream of visiting it one day.
      </p>

      <p className="paragraph">
        I hope to ride the famous Glacier Express, admire the beauty of the
        Swiss Alps, stroll through charming towns like Interlaken and Lucerne,
        and experience the peaceful atmosphere that Switzerland is known for.
        It is a country that perfectly combines nature, adventure, and
        tranquility.
      </p>

      <p className="paragraph">
        More than anything, I want to witness the beauty of Switzerland with my
        own eyes, capture unforgettable memories through photography, and
        experience a place I've admired for many years.
      </p>

    </section>
  );
}

export default Switzerland;