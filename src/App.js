import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
