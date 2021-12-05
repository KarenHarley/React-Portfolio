import pic from "../../pics/Nutricipy.png";

export default function Nutricipy() {
  return (
    <div className="imgDiv ">
      <img src={pic} alt="Nutricipy" className="image" />
      <div className="details">
        <h5>Project title: Nutricipy</h5>
        <br />
        <a
          href="https://cristobalhdz.github.io/Nutricipy/"
          target="_blank"
          className="btn"
        >
          Website
        </a>

        <a
          href="https://github.com/CristobalHdz/Nutricipy"
          target="_blank"
          className="btn"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}