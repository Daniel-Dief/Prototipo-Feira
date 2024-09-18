import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from "../Welcome";
import VerifyPage from "../VerifyPage";
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Home from '../Home';
import Booking from '../Booking';
import Restaurant from '../Restaurant';
import CheckPage from '../CheckPage';
import VirtualKey from '../VirtualKey';
import Calendar from '../Calendar';

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
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/CheckPage" element={<CheckPage />} />
        <Route path="/VirtualKey" element={<VirtualKey />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
    </Router>
  )
}

export default App;