import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Soumissionpage from './components/Soumissionpage';
import Publipostagepage from './components/Publipostagepage';
import Emballagepage from './components/Emballagepage';
import Impressionpage from './components/Impressionpage';
import rea1 from './components/rea1';
import rea2 from './components/rea2';
import rea3 from './components/rea3';
import rea4 from './components/rea4';
import rea5 from './components/rea5';
import rea6 from './components/rea6';
import rea7 from './components/rea7';
import rea8 from './components/rea8';
import rea9 from './components/rea9';
import rea10 from './components/rea10';
import rea11 from './components/rea11';
import rea12 from './components/rea12';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/soumission" exact component={Soumissionpage} />
          <Route path="/publipostage" exact component={Publipostagepage} />
          <Route path="/emballage" exact component={Emballagepage} />
          <Route path="/impression" exact component={Impressionpage} />
          <Route path="/rea1" exact component={rea1} />
          <Route path="/rea2" exact component={rea2} />
          <Route path="/rea3" exact component={rea3} />
          <Route path="/rea4" exact component={rea4} />
          <Route path="/rea5" exact component={rea5} />
          <Route path="/rea6" exact component={rea6} />
          <Route path="/rea7" exact component={rea7} />
          <Route path="/rea8" exact component={rea8} />
          <Route path="/rea9" exact component={rea9} />
          <Route path="/rea10" exact component={rea10} />
          <Route path="/rea11" exact component={rea11} />
          <Route path="/rea12" exact component={rea12} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
