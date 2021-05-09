import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Projects from "./pages/Projects";

import Topbar from "./components/Topbar";

import "./css/app.css";
import Project from "./pages/Project";

import bg from "./assets/bg.svg";

import { ScrollToTop } from "./components/General/ScrollToTop";
import Footer from "./components/Sections/Footer";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <section
        className="min-h-screen overflow-hidden w-full relative"
        style={{ paddingTop: 90 }}
      >
        <img
          alt="Bg"
          className="pointer-events-none fixed z-0 right-0 top-0"
          src={bg}
        />
        <div className="relative">
          <Topbar />
          <Switch>
            <Route path="/project/:id">
              <Project />
            </Route>
            <Route path="/">
              <Projects />
            </Route>
          </Switch>
        </div>
      </section>
      <Footer />
    </Router>
  );
};

export default App;
