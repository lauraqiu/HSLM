import HomePage from './Pages/Home.js';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "@fontsource/poppins";

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path='/home' component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
