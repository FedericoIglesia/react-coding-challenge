import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import CityDetail from "./components/Detail/CityDetail";
import IndustryDetail from "./components/Detail/IndustryDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/city" component={CityDetail} />
        <Route path="/industry" component={IndustryDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
