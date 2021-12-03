import WeatherDashboard from "./projects/WeatherDashboard";
import TechBlog from "./projects/TechBlog";
import SupraLimp from "./projects/SupraLimp";
import Nutricipy from "./projects/Nutricipy";
import "../css/Projects.css";
export default function Project() {
    return (
      <div>
        <WeatherDashboard/>
        <TechBlog/>
        <SupraLimp/>
        <Nutricipy/>
      </div>
    );
  }

