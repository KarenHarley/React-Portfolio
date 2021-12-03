import pic from "../../pics/Nutricipy.png";

export default function Nutricipy() {
  return (
    <div class="imgDiv ">
      <img src={pic} alt="Nutricipy" className="image" />
      <div class="details">
        <h5>Project title: Nutricipy</h5>
        <br />
        <a
          href="https://cristobalhdz.github.io/Nutricipy/"
          target="_blank"
          class="btn"
        >
          Website
        </a>

        <a
          href="https://github.com/CristobalHdz/Nutricipy"
          target="_blank"
          class="btn"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}