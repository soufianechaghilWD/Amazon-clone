import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Checkout from './Components/Checkout';
import Payment from './Components/Payment';
import Signin from './Components/Signin';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/payment">
          <Header />
          <Payment />
          <Footer />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
          <Footer />
        </Route>
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
