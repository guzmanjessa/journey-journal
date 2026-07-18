import { Link } from "react-router-dom";
import "./Korea.css";

import korea from "../assets/korea.jpg";

function Korea() {
  return (
    <section className="korea-page">

      <h1>SOUTH KOREA 🇰🇷</h1>

      <img
        src={korea}
        alt="South Korea"
        className="main-image"
      />

      <p className="caption">
        South Korea is a destination where modern cities meet rich traditions.
      </p>

      <h2 className="section-title">
        Why I Want to Visit South Korea
      </h2>

      <p className="paragraph">
        South Korea has always been one of the countries I've dreamed of visiting. 
        It all started because of K-dramas, Korean music, and Korean variety shows.
         As you probably guessed, I'm a huge K-pop fan, so visiting South Korea has 
         always been on my bucket list.
      </p>

      <p className="paragraph">
       There are so many places I want to see. One of them is Namsan Tower, 
       where couples and friends leave love locks. I've always wanted to see it 
       in person. I also want to visit Nami Island, walk around the beautiful 
       streets, 
       and explore the famous places I've seen in dramas and travel videos.
      </p>

      <p className="paragraph">
        I would also love to visit during spring. Seeing the cherry blossoms bloom has always 
        looked so beautiful, and I hope I can experience it for myself someday. I think South Korea has a 
        special charm that makes me want to keep coming back.
      </p>

      <p className="paragraph">
        And of course, I want to try the food! One thing that's on my 
        bucket list is having a late-night meal at a convenience store with a
         cup of instant ramen and a bottle of soju. It may sound simple, but it's something I've always wanted to
         experience after seeing it so many times in Korean shows.
      </p>

      <p className="paragraph">
        I know there's so much more to South Korea than K-pop and K-dramas, 
        and that's exactly why I want to visit. I want to learn more about the culture, meet new people, 
        and make memories in a place I've admired for so many years.
      </p>

      

    </section>
  );
}

export default Korea;