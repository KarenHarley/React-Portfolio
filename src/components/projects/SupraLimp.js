import pic from "../../pics/SupraLimp.png";

export default function SupraLimp() {
  return (
    <div class="imgDiv ">
      <img src={pic} alt="SupraLimp" className="image" />
      <div class="details">
        <h5>Project title: SupraLimp</h5>
        <br />
        <a
          href="https://afternoon-plains-57708.herokuapp.com/"
          target="_blank"
          class="btn"
        >
          Website
        </a>

        <a
          href="https://github.com/CristobalHdz/Project_2"
          target="_blank"
          class="btn"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}