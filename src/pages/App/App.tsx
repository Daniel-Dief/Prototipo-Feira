import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from "../Welcome";
import VerifyPage from "../VerifyPage";
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Home from '../Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Welcome />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Verify" element={<VerifyPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;