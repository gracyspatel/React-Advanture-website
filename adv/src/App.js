import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Advantures from './Pages/Advantures/Advantures';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar1 from './Components/Navbar'
import Paragliding from './Components/Paragliding';
import Riverrafting from './Components/Riverrafting';
import Scubadive from './Components/Scubadive';
import Skydive from './Components/Skydive';
const App = () => {
  return (
    <Router>
      <header>
        <Navbar1 />
      </header>
      <main>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/About' exact>
          <About />
        </Route>
        <Route path='/Advantures' exact>
          <Advantures />
        </Route>
        <Route path='/Contact' exact>
          <Contact />
        </Route>
        <Route path='/paragliding' exact>
          <Paragliding />
        </Route>
        <Route path='/skydive' exact>
          <Skydive />
        </Route>
        <Route path='/scubadiving' exact>
          <Scubadive />
        </Route>
        <Route path='/riverrafting' exact>
          <Riverrafting />
        </Route>
      </Switch>
      </main>
      <footer>
      </footer>
    </Router>
  );
}

export default App;