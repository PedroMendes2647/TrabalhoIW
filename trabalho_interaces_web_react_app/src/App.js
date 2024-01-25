import "./CSS_Styles/App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Shared_Trips from "./Pages/Shared_Trips";

// Navbar fica acima pois vai aparecer sempre
// muda a página dependendo da rota onde queremos ir
// por exemplo se em Home estiver para aparecer
// Hello World, e formos ao site e metermos /about no fim
// Esse Hello World não vai aparecer, pois só aparece quandoe estamos no /home

//Navbar fica sempre acima e Footer fica sempre em baixo

function App() {
  return (
    <div className="App">
      <Router>  
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={Shared_Trips} />
        </Switch>  
      </Router>  
    </div>
  );
}

export default App;
