import {React, useState, useEffect} from 'react'
import './AboutText.scss'
import AnimatedText from '../AnimatedText/AnimatedText'

const AboutText = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const uiArray = ['U','I',' ','D','e','s','i','g','n','e','r',' ','a','n','d'];
    const devArray = ['F','r','o','n','t','e','n','d', ' ', 'D','e','v','e','l','o','p','e','r'];

    useEffect(() => {
        return (() => {
          setLetterClass('text-animate')
        })
      }, [])

   

  return (
    <div className='AboutText'>
        <p className='name'>I'm Jesse Quartey</p>
        <span className='wavy'>
        <AnimatedText letterClass={letterClass}
        strArray={uiArray}
        idx={15}
        />
        <br/>
        <AnimatedText letterClass={letterClass}
        strArray={devArray}
        idx={22}
        />
        </span>
        
        <p className='description'>I've been designing highly polished web and mobile <br/>interfaces for small and medium-sized business. <br/> 
        Currently in Ghana and loving it.
        </p>
    </div>
  )
}

export default AboutText