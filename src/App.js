import HomePage from './pages/Home.js';
import Quizzes from './pages/Quizzes.js';
import Quiz1 from './pages/Quiz1.js';
import Quiz2 from './pages/Quiz2.js';
import Quiz3 from './pages/Quiz3.js';
import Quiz4 from './pages/Quiz4.js';
import AdventurePage from './pages/Adventure.js';
import ContactForm from './pages/ContactForm.js';
import VideosPage from './pages/Videos.js';
import Video1 from './pages/Video1.js';
import Video2 from './pages/Video2';
import Video3 from './pages/Video3.js';
import Video4 from './pages/Video4.js';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "@fontsource/poppins";

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path='/home' component={HomePage}/>
        <Route path='/quiz' component={Quizzes}/>
        <Route path='/quiz1' component={Quiz1}/>
        <Route path='/quiz2' component={Quiz2}/>
        <Route path='/quiz3' component={Quiz3}/>
        <Route path='/quiz4' component={Quiz4}/>
        <Route path='/adventure' component={AdventurePage}/>
        <Route path='/videos' component={VideosPage}/>
        <Route path='/Video1' component={Video1}/>
        <Route path='/Video2' component={Video2}/>
        <Route path='/Video3' component={Video3}/>
        <Route path='/Video4' component={Video4}/>
        <Route path='/contactform' component={ContactForm}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
