import {React} from 'react'
import Navbar from '../components/NavBar/Navbar'
import AboutText from '../components/AboutText/AboutText';
import './Layout.scss';
import Socials from '../components/Socials/Socials';

const Layout = () => {
  return (
    <div className='Layout'>
      <Navbar  />
      <AboutText />
      <Socials />
    </div>
  )
}

export default Layout;