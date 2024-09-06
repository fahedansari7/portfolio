import React from 'react'
import './intro.css'
import bg from '../../assets/Image MFA.png'
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Fahed</span><br />Web Deveoper</span>
            <p className='introPara'>This is ith intro para here the whole line.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire me' className='btnImg'></img>Hire Me</button></Link>
        </div>
        <img src={bg} alt= "Profile" className='bg'/>
    </section>
  )
}

export default Intro