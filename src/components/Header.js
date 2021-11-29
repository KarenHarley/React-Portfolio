import React, { useState } from "react";
//this is the nav-bar
import Navigation from "./Navigation";
//importing the components
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }

    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page); //function that updates the state

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
