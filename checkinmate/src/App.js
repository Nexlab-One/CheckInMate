import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AOS from "aos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Registration from "./pages/Registration";
import CheckIn from "./pages/CheckIn";
import Success from "./pages/Success";
import UserDetails from "./pages/UserDetails";
import CheckInSuccess from "./pages/CheckInSuccess";
import NotExist from "./pages/NotExist";
import QRReader from "./pages/QRReader";
import Setting from "./pages/Setting";
import ReportIssue from "./pages/ReportIssue";
function App() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/register" component={Registration}></Route>
          <Route path="/checkin" component={CheckIn}></Route>
          <Route path="/success" component={Success}></Route>
          <Route path="/userDetail" component={UserDetails}></Route>
          <Route path="/checkinsuccess" component={CheckInSuccess}></Route>
          <Route path="/notExist" component={NotExist} />
          <Route path="/qrcode" component={QRReader}></Route>
          <Route path="/setting" component={Setting}></Route>
          <Route path="/reportissue" component={ReportIssue}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
