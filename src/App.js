import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dreamscape from './components/NewPage';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import './App.css';
import NewPage from './components/NewPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define NewPage route */}
          <Route path="NewPage" element={<NewPage />} />
          <Route path="*" element={<NotFound />} />

          {/* Define routes for other pages with shared layout */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <main>
                  <About />
                  <Portfolio />
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
