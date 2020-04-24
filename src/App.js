import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/";

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
