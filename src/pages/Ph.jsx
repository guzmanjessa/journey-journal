import { Link } from "react-router-dom";
import "./Ph.css";

import philippines from "../assets/ph.jpg";

function Ph() {
  return (
    <section className="philippines-page">

      <h1>PHILIPPINES 🇵🇭</h1>

      <img
        src={philippines}
        alt="Philippines"
        className="main-image"
      />

      <p className="caption">
        The Philippines is home to breathtaking islands, rich culture, and unforgettable adventures.
      </p>

      <h2 className="section-title">
        WHY I WANT TO EXPLORE THE PHILIPPINES
      </h2>

      <p className="paragraph">
        Even though I was born and raised in the Philippines, there are still
        so many places I dream of visiting. Every island, province, and city
        has its own unique beauty, culture, and story waiting to be discovered.
        I want to experience more of what my own country has to offer and
        appreciate its incredible diversity.
      </p>

      <p className="paragraph">
        One of the places I want to visit the most is Manila because I have
        never been there before. I also hope to travel to Baguio to enjoy its
        cool climate, explore the breathtaking landscapes of Palawan, relax on
        the beaches of Siargao, visit the Chocolate Hills in Bohol, and admire
        the Banaue Rice Terraces. Each destination has something special that I
        would love to experience firsthand.
      </p>

      <p className="paragraph">
        More than anything, I want to discover the beauty of my own country
        before exploring the rest of the world. I believe the Philippines has
        countless hidden gems, and I hope to create unforgettable memories
        while learning more about the different cultures, traditions, and
        people that make our country truly special.
      </p>

    </section>
  );
}

export default Ph;