import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router className="App">
     <Navbar/>
     <Switch>
       <Route exact path="/" />
     </Switch>    
    </Router>
  );
}

export default App;
