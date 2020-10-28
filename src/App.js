import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
