import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from "../Welcome";
import VerifyPage from "../VerifyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Welcome />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Verify" element={<VerifyPage />} />
      </Routes>
    </Router>
  )
}

export default App;