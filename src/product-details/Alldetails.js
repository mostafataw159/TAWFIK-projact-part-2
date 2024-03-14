import React from 'react'
import Pagedetail from './Pagedetail'
import Header from '../Header'
import Gamedetails from './Gamedetails'
import Moreinfo from './Moreinfo'
import Categories from './Categories'
import Footerdetails from './Footerdetails'
import ScrollToTop from 'react-scroll-to-top'

function Alldetails() {
  return (
    <div>
      <Header/>
 <Pagedetail/>
 <Gamedetails/>
 <Moreinfo/>
 <Categories/>
 <Footerdetails/>
 </div>
  )
}

export default Alldetails