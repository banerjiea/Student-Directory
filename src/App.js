import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import Denied from "./components/pages/Denied";
import personal from "./components/pages/personal";
import academics from "./components/pages/academics";
import CoCurr from "./components/pages/CoCurr";
import Update from "./components/pages/Update";
import Placement from "./components/pages/Placement";
import Admission from "./components/pages/Admission";
import Fees from "./components/pages/Fees";
import Project from "./components/pages/Project";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/denied" component={Denied} />
          <Route exact path="/personal/:id" component={personal} />
          <Route exact path="/academics/:id" component={academics} />
          <Route exact path="/cocurricular/:id" component={CoCurr} />
          <Route exact path="/Update/:id" component={Update} />
          <Route exact path="/Placement/:id" component={Placement} />
          <Route exact path="/Admission/:id" component={Admission} />
          <Route exact path="/Fees/:id" component={Fees} />
          <Route exact path="/Project/:id" component={Project} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
