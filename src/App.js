import React, {useState, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './assets/application.scss';
import 'bootstrap'; 
import preguntas from './preguntas';
//Partials
import Header from './partials/Nav';
import Footer from './partials/Footer';

//Views
import Home from './views/Home';
import Test from './views/Test';
import Results from './views/resultsTest';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header/>
            <Home/>
          <Footer/>
        </Route>
        
        <Route exact path="/test">
          <Test
            preguntas={preguntas}
          />
        </Route>

        <Route exact path="/result-test">
          <Results/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
