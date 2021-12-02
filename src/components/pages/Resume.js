import "../../css/Resume.css";
export default function Resume() {
  return (
    <div className="resume-div">
      <h2 className="centered-heading">Resume Page</h2>
      <p>
        Download my<a href="https://drive.google.com/drive/folders/1yqEBjbJGYUqEdjEdNl1kRHevuT2MzVO8"> Resume</a>
      </p>
      <h1>My front-end Skills</h1>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>jQuery</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
      </ul>

      <h1>My Back-end Skills</h1>

      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL (Sequelize)</li>
        <li>MongoDB (Mongoose)</li>
        <li>Bootstrap</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
