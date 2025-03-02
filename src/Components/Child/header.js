import React, { useEffect, useState } from 'react'
import Button from './Button';
import Data from '../../data.json'

const Header = (props) => {
    const data = props.data
    const button = Data.filter((item) => item.id === 0)


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 900);    //background color should be changed after 900px;
      }

      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    }, []);


   
  return (
    <>
      {data.map((getData) => (
           <div className={`header-container ${scrolled ? "scrolled" : "hero-bg"}`}  >
           <img src = {getData.logo} alt = {getData.alt} className='logo'/>
            <nav className='header-list'>
                <ul>
                <li> <a href = "#home"> About Us </a></li>
                    <li><a href = "#features"> Features </a></li>
                    <li><a href = "#services"> Services </a></li>
                    <li><a href = "#visuals"> Visual Highlights </a></li>
                </ul>
            </nav>

            <Button data = {button}/>

        </div>
        
      ))}
    </>
  )
}

export default Header
