
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './allpages/Home/Home';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
