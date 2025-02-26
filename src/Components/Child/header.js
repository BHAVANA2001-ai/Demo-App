import React from 'react'
import Button from './Button';
import Data from '../../data.json'

const header = (props) => {
    const data = props.data

    const button = Data.filter((item) => item.id === 0)
  return (
    <>
      {data.map((getData) => (
        <div className = 'header-container'>
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

export default header
