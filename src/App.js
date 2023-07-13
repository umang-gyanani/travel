import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Hero from './components/Hero';
import Footer from './components/Footer';
import Category from './components/Category';
import Three_cards from './components/Three_cards';
import Trip from './components/Trip';
import Verical_cards from './components/Verical_cards';
import Email from './components/Email';
import Smooth from './components/Smooth';
import CDropdown from './components/CDropdown';



function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className='overflow-hidden'>
        <Hero />
        <CDropdown/>
        <Category />
        <Three_cards />
        <Trip />
        <Verical_cards/>
        <Smooth />
        <Email />
        <Footer />
       
      </div>
    </>
  )
}

export default App