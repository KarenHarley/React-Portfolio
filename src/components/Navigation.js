import "../css/Navigation.css";
import HamburgerNav from "./navBars/HamburgerNav";
import NormalNav from "./navBars/NormalNav";
//import Container from 'react-bootstrap/Container';
//import Offcanvas from 'react-bootstrap/Offcanvas'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <>
      <div className="show-hamburger">
        <HamburgerNav
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
      <div className="show-normal-nav">
        <NormalNav
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default Navigation;
