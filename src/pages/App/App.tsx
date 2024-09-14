import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from "../Welcome";
import VerifyPage from "../VerifyPage";
import SignIn from '../SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Welcome />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Verify" element={<VerifyPage />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App;