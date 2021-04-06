import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router className="App">
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home} />
     </Switch>    
    </Router>
  );
}

export default App;
