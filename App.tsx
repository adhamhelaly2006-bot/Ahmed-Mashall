
import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#F7F9F9] text-[#5D737E] min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Countdown />
        <EventDetails />
        <Footer />
      </main>
    </div>
  );
};

export default App;
