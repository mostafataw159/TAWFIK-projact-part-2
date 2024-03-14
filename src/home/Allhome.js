import React from 'react'
import Header from '../Header'
import Banner from './Banner'

import Trend from './Trend'
import Mostplay from './Mostplay'
import Categories from './Categories'
import Shop from './Shop'
import Footer from './Footer'


function Allhome() {
  return (
    <div>
      <Header/>
        <Banner/>
    
        <Trend/>
        <Mostplay/>
        <Categories/>
        <Shop/>
       <Footer/>
    </div>
  )
}

export default Allhome