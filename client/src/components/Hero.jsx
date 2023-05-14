import { arrow, cpx, spt } from "../assets";
import "../styles/hero.scss";

const Hero = () => {
  return (
    <div className="landing__hero">
      <div className="hero__container">
        <h2>
          technology is the best tool we can use to <br /> reinvent education.
        </h2>
        <p>
          Lorem ipsum dolor sit amet. Sed inventore blanditiis ea <br />
          aspernatur voluptatibus et ullam voluptas aut veniam <br /> molestiae
          et galisum dicta et adipisci maxime. Qui <br /> accusantium quibusdam
        </p>
        <img src={arrow} alt="" />
      </div>

      <div className="image__overcontainer">
        <img src={spt} alt="" className="spt" />
        <img src={cpx} alt="" className="cpx" />
        {/* <img src={} alt="" className="cpx" /> */}
      </div>
    </div>
  );
};

export default Hero;
