import { Link } from "react-router-dom";
import "./Japan.css";

import japan from "../assets/japan.jpg";

function Japan() {
  return (
    <section className="japan-page">

      <h1>JAPAN 🇯🇵</h1>

      <img
        src={japan}
        alt="Japan"
        className="main-image"
      />

      <p className="caption">
        Japan has been my dream destination ever since I was a child.
      </p>

      <h2 className="section-title">
        Why I Want to Visit Japan
      </h2>

      <p className="paragraph">
        Japan has always been one of the countries I want to visit the most. One of the reasons is 
        because it looks so safe and peaceful. As an introvert, 
        I think Japan is the kind of place where I would feel comfortable. I like quiet places, walking around without feeling rushed, and just enjoying the moment.
      </p>

      <p className="paragraph">
       Another reason is that I've never experience snow before. I've always dreamed of experiencing my first snowfall in Japan. 
       I want to know what it feels like to see everything covered in white,
        build a snowman, and simply enjoy the winter for the first time.
      </p>

      <p className="paragraph">
        Of course, I also want to visit famous places like Kyoto, Tokyo, Osaka, and Mount Fuji. I want to walk through the streets, 
        visit beautiful temples, try authentic Japanese food, 
        and experience the culture I've only seen in videos and photos.
      </p>

      <p className="paragraph">
        Another reason Japan is so special to me is because I hope to 
        work there someday. I know that people in Japan work very hard,
         and I understand that the work culture can be challenging. Even so, 
         I believe living there would help me grow, become more independent, and teach me many valuable lessons. I know it won't always be easy, but I think the experience 
        will help me become a better version of myself.
      </p>

      
      <p className="paragraph">
        Japan is more than just a place I want to visit—it's 
        a dream that I hope to turn into reality one day.
      </p>

    </section>
  );
}

export default Japan;