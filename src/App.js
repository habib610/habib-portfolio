import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import ScrollNavbar from './components/Home/Navbar/ScrollNavbar';

function App() {
  return (
    <>
      <Router>
      <ScrollNavbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/blogs" component={Blogs}/>
          <Route path="/contact" component={Contact}/>
          <Route  component={NotFound}/>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
