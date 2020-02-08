import React from "react";
import "./App.css";
import Home from "./components/Home";
import AllTours from "./components/AllTours";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Carrers from "./components/Carrers";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    duration: 800
  });
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tours" component={AllTours} />
          <Route path="/company" component={Company} />
          <Route path="/contact" component={Contact} />
          <Route path="/careers" component={Carrers} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
