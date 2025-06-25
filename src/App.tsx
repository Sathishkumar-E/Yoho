import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Content from './Components/Content';
import Footer from './Components/Footer';

const App = () => {
  
  return (
    <><Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router><Header /><Navbar /><Main /><Content /><Footer /></>

  );
}
export default App

