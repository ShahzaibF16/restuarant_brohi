import React from 'react';
import { Container } from 'react-bootstrap';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Service';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router';
import Header from './Components/Header';
import './App.css'
import Header_2 from './Components/Header_2';

function App() {
  return (
    <>
      {/* <Header/> */}
      <Header_2 />
      <Container fluid>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/services" element={<Services />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/gallery" element={<Gallery />}>
          </Route>
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
