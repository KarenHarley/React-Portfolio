import pic from "../../pics/CodingChallenge.png";

export default function CodingChallenge() {
  return (
    <div className="imgDiv ">
      <img src={pic} alt="Nutricipy" className="image" />
      <div className="details">
        <h5>Project title: Coding Quiz Challenge</h5>
        <br />
        <a
          href="https://karenharley.github.io/Coding-Quiz-Challenge/"
          target="_blank"
          className="btn"
        >
          Website
        </a>

        <a
          href="https://github.com/KarenHarley/Coding-Quiz-Challenge"
          target="_blank"
          className="btn"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
