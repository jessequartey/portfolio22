import React from 'react'
import './socials.scss'
const Socials = () => {
  return (
    <div className='socials'>
       <div className="wrapper">
         <div className="button">
            <div className="icon">
               <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
         </div>
         <div className="button">
            <div className="icon">
               <i className="fab fa-dribbble"></i>
            </div>
            <span>Dribble</span>
         </div>
         <div className="button">
            <div className="icon">
               <i className="fab fa-linkedin-in"></i>
            </div>
            <span>Linkedin</span>
         </div>
         <div className="button">
            <div className="icon">
               <i className="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
         </div>
         <div className="button">
            <div className="icon">
               <i className="fab fa-youtube"></i>
            </div>
            <span>YouTube</span>
         </div>
      </div>
    </div>
  )
}

export default Socials