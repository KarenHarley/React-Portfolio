import pic from "../../pics/techBlog.png";

export default function TechBlog() {
  return (
    <div className="imgDiv ">
      <img src={pic} alt="Tech blog" className="image" />
      <div className="details">
        <h5>Project title: Tech Blog</h5>
        <br />
        <a
          href="https://mighty-reaches-19141.herokuapp.com/"
          target="_blank"
          className="btn"
        >
          Website
        </a>

        <a
          href="https://github.com/KarenHarley/Tech-Blog"
          target="_blank"
          className="btn"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}