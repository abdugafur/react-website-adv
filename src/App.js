import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import './App.css';
function App() {
  return (
    <Router className="App">
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/products" component={Products} />
       <Route exact path="/services" component={Services} />
       <Route exact path="/sign-up" component={SignUp} />
     </Switch>    
    </Router>
  );
}

export default App;
