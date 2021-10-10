import React from 'react'
import Pic from '../images/mypic2.jpg'
import {Link} from 'react-router-dom'

const ContactUs = () => {
    return (
        <div className='container mt-5'>
            <hr />
                <div className='row d-flex no-gutters'>
                    
                    <div className='col-md-6'>
                        <div className='row justify-content-end'>
                            <div className='col-md-6 about-heading mt-5'>
                                <h1 className='mt-3 mb-2'>Contact Me</h1>
                                <p className='mb-1 mt-0'>You are just a Click away</p>
                                <div className='wrap mt-md-3'>
                                <p className='mb-1'>
                                    <Link to='/Form' className='btn'> Click Me </Link>
                                </p>
                                </div>
                        </div>
                        </div>
                        
                    </div>

                    <div className='col-md-6'>
                        <div className='justify-content-start'>
                            <div className='overlay'></div>
                            <div className='img'>
                                <img src={Pic} className='mypic' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            <hr />
        </div>
    )
}

export default ContactUs
