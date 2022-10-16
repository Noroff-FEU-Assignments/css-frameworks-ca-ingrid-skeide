import './sass/styles.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/home/Home";
import News from './components/news/News';
import Contact from './components/contact/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='wrapper'>
          <Navigation />

        <Router>
            <Switch>
              <Route exact path="/"> 
                <Home />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
