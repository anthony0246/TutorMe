import './App.css';
import AppNavbar from './Navbar';
import OurOfferings from './OurOfferings';
import Footer from './Footer';
import AboutUs from './AboutUs';
import BookSession from './BookSession';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './HeroSection';
import HomePageCards from './HomePageCards';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <div className="flex-grow-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <HomePageCards />
              </>
            }
          />
          <Route path="/offerings" element={<OurOfferings />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/booksession" element={<BookSession />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
