import React from 'react';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import FilterSection from './components/FilterSection';
import RetreatList from './components/RetreatList';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroImage />
      <FilterSection />
      <RetreatList />
      <Pagination />
      <Footer />
    </div>
  );
};

export default App;