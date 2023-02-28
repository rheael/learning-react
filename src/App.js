import logo from './logo.svg';
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Views/Home'
import About from './Views/About'

function App() {
  return (
    <div>
      <Router>
      <Header/>
      {/* <CounterExample/> */}
        <Routes>
          <Route exact path="/" element={Home}/>
          <Route path="/about" element={About}/>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
