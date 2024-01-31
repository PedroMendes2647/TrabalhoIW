import "./CSS_Styles/App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Shared_Trips from "./Pages/Shared_Trips";
import Footer from "./Components/Footer";
import Admin_Dashboard from "./Pages/Admin_Dashboard";
//import Share_Your_Trips from "./Pages/Share_Your_Trips";
//<Route path="/share_your_trip" exact component={Share_Your_Trips} />
//<Route path="/about" exact component={About} />
//<Route path="/dashboard" exact component={Dashboard} />

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
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shared_trips" exact component={Shared_Trips} />
          <Route path="/admin_dashboard" exact component={Admin_Dashboard} />
        </Switch>
        <Footer/>  
      </Router>  
    </div>
  );
}

export default App;
