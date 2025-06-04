import logo from './logo.svg';
import './App.css';
import AppNavbar from './Navbar';
import OurOfferings from './OurOfferings';
import Footer from './Footer';
import AboutUs from './AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // if you route

function App() {
    return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <AppNavbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/offerings" element={<OurOfferings />} />
            <Route path="/aboutus" element={<AboutUs />} />
            {/* More routes can go here */}
          </Routes>
        </div>
        <Footer /> 
      </div>
    </BrowserRouter>
  );
}


export default App;
