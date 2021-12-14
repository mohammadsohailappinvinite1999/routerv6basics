import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Param from "./pages/Param";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<Param/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
