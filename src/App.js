import React from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import DestinationsSection from './components/DestinationsSection.jsx';
// import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import Separator from './components/Separator.jsx';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <Separator />
        <DestinationsSection />
        <Separator />
        {/* <ContactForm /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
