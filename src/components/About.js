import React from 'react'
import './About.css'
import Mypic from '../images/mypic.jpg'

const About = () => {
    return (
        <section id='about'>
            <div className='container'>
                <div className='row d-flex no-gutters mt-3'>
                    <div className='d-none d-md-block col-md-6 d-flex'>
                        <div className='img-about img d-flex'>
                            <div className='overlay'></div>
                            <div className='img d-flex align-items-center mt-5'>
                                <img src={Mypic} className='mypic ms-auto mt-5' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 ps-md-5 my-auto mt-3'>
                        <div className='row justify-content-start'>
                            <div className='col-md-12 col-sm-12 about-heading mt-5'>
                                <h1 className='mt-5 mb-3'>About Me</h1>
                                <p className='mb-1 mt-0'>Lorem ipsum dolor sit amet.</p>
                                <ul className='about-info mt-4 px-md-0 px-2'>
                                    <li>
                                        <span className='big'>Name: </span>
                                        <span className='small'> <b>Olabisi Aboge</b></span>
                                    </li>
                                    <li>
                                        <span className='big'>Address: </span>
                                        <span className='small'><b>Alapere, Lagos</b> </span>
                                    </li>
                                    <li>
                                        <span className='big'>Email: </span>
                                        <span className='small'><b>busolaboge@gmail.com</b> </span>
                                    </li>
                                    <li>
                                        <span className='big'>Phone: </span>
                                        <span className='small'> <b>+23480514671</b></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='wrap mt-md-3 mb-3'>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className='mb-1 align-items-center'>
                                        <a href={React} className='btn py-3 px-3'>Download CV</a>
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
