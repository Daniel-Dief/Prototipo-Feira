import Input from "../../components/inputText/index";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from "./Login";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <p><Link to="/">Teste</Link></p>
          <p><Link to="/Login">Teste</Link></p>
        </nav>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
)}

export default App;
