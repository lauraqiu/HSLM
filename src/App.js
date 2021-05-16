import HomePage from './Pages/Home.js';
import Quizzes from './Pages/Quizzes.js';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "@fontsource/poppins";
import AdventurePage from './Pages/Adventure.js';

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path='/home' component={HomePage}/>
        <Route path='/quiz' component={Quizzes}/>
        <Route path='/adventure' component={AdventurePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
