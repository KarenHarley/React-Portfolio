import pic from "../../pics/DayPlanner.png";

export default function DayPlanner() {
  return (
    <div className="imgDiv ">
      <img src={pic} alt="Nutricipy" className="image" />
      <div className="details">
        <h5>Project title: Day Planner</h5>
        <br />
        <a
          href="https://karenharley.github.io/Day-Planner/"
          target="_blank"
          className="btn"
        >
          Website
        </a>

        <a
          href="https://github.com/KarenHarley/Day-Planner"
          target="_blank"
          className="btn"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
