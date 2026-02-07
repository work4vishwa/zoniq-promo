import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ArtistStats from '../components/ArtistStats';
import ImageStrip from '../components/ImageStrip';
import InstaComposition from '../components/InstaComposition';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ArtistStats />
      <ImageStrip />
      <InstaComposition />
      <Footer />
    </div>
  );
}

export default Home;