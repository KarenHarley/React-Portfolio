const styles = {
  div: {
    margin: 20,
    display: "flex",
    justifyContent: "center",
    
  },
  icons: {
    fontSize: "2.2rem",
    textDecoration: "none",
    padding: 20,
    color: "black"
  }
};

export default function Footer() {
  return (
    <div style={styles.div}>
      <a style={styles.icons} href="https://github.com/KarenHarley" target="_blank">
        <i className="bx bxl-github"></i>
      </a>
      <a style={styles.icons} href="https://www.linkedin.com/in/karen-villagomez/" target="_blank">
        <i className="bx bxl-linkedin-square"></i>
      </a>
      <a style={styles.icons} href="https://stackoverflow.com/users/16088954/karen88" target="_blank">
        <i className="bx bxl-stack-overflow"></i>
      </a>
    </div>
  );
}
