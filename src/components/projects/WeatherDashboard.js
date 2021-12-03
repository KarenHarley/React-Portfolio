import pic from "../../pics/weatherDashboard.png";

export default function WeatherBashboard() {
  return (
    <div className="imgDiv ">
      <img src={pic} alt="weather Dashboard" className="image" />
      <div className="details">
        <h5>Project title: Weather Dashboard</h5>
        <br />
        <a
          href="https://karenharley.github.io/Weather-Dashboard"
          target="_blank"
          className="btn"
        >
          Website
        </a>

        <a
          href="https://github.com/KarenHarley/Weather-Dashboard"
          target="_blank"
          className="btn"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

/*
 <div class="imgDiv col-12 col-lg-4">
          <img src="pics/weather.png" alt="weather Dashboard" class="image" />
          <div class="details">
            <h5>Project title: Weather Dashboard</h5>
            <br />
            <a
              href="https://karenharley.github.io/Weather-Dashboard"
              target="_blank"
              class="btn"
              >Website</a
            >

            <a
              href="https://github.com/KarenHarley/Weather-Dashboard"
              target="_blank"
              class="btn"
              >GitHub</a
            >
          </div>
        </div>
*/
