import WeatherDashboard from "./projects/WeatherDashboard";
import TechBlog from "./projects/TechBlog";
import SupraLimp from "./projects/SupraLimp";
import Nutricipy from "./projects/Nutricipy";
import CodingChallenge from "./projects/CodingChallenge";
import DayPlanner from "./projects/DayPlanner";
import "../css/Projects.css";
export default function Project() {
    return (
      <div className="wrapper">
        <WeatherDashboard/>
        <TechBlog/>
        <SupraLimp/>
        <Nutricipy/>
        <CodingChallenge/>
        <DayPlanner/>
      </div>
    );
  }

