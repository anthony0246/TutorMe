import logo from './logo.svg';
import './App.css';
import AppNavbar from './Navbar';
import OurOfferings from './OurOfferings';
import Footer from './Footer';
import AboutUs from './AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // if you route
import HeroSection from './HeroSection';
import HomePageCards from './HomePageCards';

function App() {
    return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
      <AppNavbar/>          {/* appears on every page */}
      <HeroSection/>
      <HomePageCards />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/offerings" element={<OurOfferings />} />
            <Route path="/aboutus" element={<AboutUs />} />
            {/* More routes can go here */}
          </Routes>
        </div>
        <Footer /> 
      </div>
      
      <Routes>               {/* your routes here */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;
