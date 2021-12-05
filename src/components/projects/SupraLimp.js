import pic from "../../pics/SupraLimp.png";

export default function SupraLimp() {
  return (
    <div className="imgDiv ">
      <img src={pic} alt="SupraLimp" className="image" />
      <div className="details">
        <h5>Project title: SupraLimp</h5>
        <br />
        <a
          href="https://afternoon-plains-57708.herokuapp.com/"
          target="_blank"
          className="btn"
        >
          Website
        </a>

        <a
          href="https://github.com/CristobalHdz/Project_2"
          target="_blank"
          className="btn"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}