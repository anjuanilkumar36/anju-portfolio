import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Navbars/Navbar";
import Home from "../Components/Home";
import About from "../Components/About";
import Education from "../Components/Education";
import Contacts from "../Components/Contacts";
import Projects from "../Components/Projects";
import TechStack from "../Components/TechStack";

function Portfolio() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <TechStack />
        <Education />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

