import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Healthinsurance from './Pages/Healthinsurance/Healthinsurance';
import Allheader from '../src/Components/Allheader/Allheader';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthinsurance" element={<Healthinsurance />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
