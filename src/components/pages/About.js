import "../../css/AboutMe.css";
import pic from "../../pics/avatar.png";

export default function About() {
  return (
    <>
      <h2 className="centered-heading">About Me</h2>
      <div className="about-div">
        <div className="about-img">
          <img src={pic} alt="Girl in a purple sweater" />
        </div>
        <div className="text-div">
          <p>
            A Full-Stack Web Developer with a passion and drive for perfection.
          </p>
          <p>
            From graduating with a 4.0 GPA to obsessing over plating food, I
            like to give things my all and not settle for anything less than
            AMAZING.
          </p>

          <p>
            I like to always explore the unknown with curiosity while
            maintaining an analytical mindset. I am passionate about creating
            things.
          </p>
        </div>
      </div>
    </>
  );
}
