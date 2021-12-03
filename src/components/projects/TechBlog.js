import pic from "../../pics/techBlog.png";

export default function TechBlog() {
  return (
    <div class="imgDiv ">
      <img src={pic} alt="Tech blog" className="image" />
      <div class="details">
        <h5>Project title: Tech Blog</h5>
        <br />
        <a
          href="https://mighty-reaches-19141.herokuapp.com/"
          target="_blank"
          class="btn"
        >
          Website
        </a>

        <a
          href="https://github.com/KarenHarley/Tech-Blog"
          target="_blank"
          class="btn"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}