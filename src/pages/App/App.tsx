import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from "../Welcome";
import VerifyPage from "../VerifyPage";
import SignIn from '../SignIn';
import SignUp from '../SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Welcome />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Verify" element={<VerifyPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App;