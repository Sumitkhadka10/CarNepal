import React from 'react';
import Topnavigation from '../../components/Client/Topnavigation';
import Navigation from '../../components/Client/navigation';
import Footer from '../../components/Client/Footer';

function Home() {
  return (
    <div>
    <Topnavigation />
    <Navigation />
      <h1>Welcome to the Home Page</h1>
  
    <Footer />
    </div>
  );
}

export default Home;