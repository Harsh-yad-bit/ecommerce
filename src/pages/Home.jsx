import React from 'react'
import "@fontsource-variable/inter";
import Header from '../components/Header';
import Cursor from '../components/Cursor';
import Maskimage from '../components/Maskimage';
import Texthome from '../components/texthome';
import "../styles/homepage.css"

const Home = () => {
  return (
    <div className='homepg'>
         <Cursor/>
      <Header/>
      <Maskimage/>
      <Texthome/>
    </div>
  )
}

export default Home
