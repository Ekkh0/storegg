import './App.css';
import Home from './pages/Home';
import MyProduct from './pages/MyProduct';
import CoinGame from './pages/CoinGame';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  return(
    <div className="page">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/myproduct" element={<MyProduct />}/>
          <Route path="/coingame" element={<CoinGame />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
