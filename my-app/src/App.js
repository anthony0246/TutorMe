import logo from './logo.svg';
import './App.css';
import AppNavbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // if you route
import HeroSection from './HeroSection';
import HomePageCards from './HomePageCards';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar/>          {/* appears on every page */}
      <HeroSection/>
      <HomePageCards />
      <Routes>               {/* your routes here */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
