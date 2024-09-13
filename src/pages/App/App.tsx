import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Welcome from "../Welcome";
import SignIn from "../SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Welcome />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App;