import React from 'react'
import ReactTyped from 'react-typed'
import './Header.css'

const Header = () => {
    return (
        <section className='header-wrapper'>
            <div className='overlay'></div>
            <div className="container">
                <div className="row no-gutters slider-text justify-content-center alighn-items-center" style={{height: "33rem"}}>
                    <div className="col-lg-8 col-md-6 d-flex align-items-center">
                        <div className="text text-center">
                            <span className='sub-heading'>hey! I am</span>
                            <h1>Olabisi Aboge</h1>
                            <ReactTyped 
                            className='typed-text'
                            typeSpeed={50}
                            backSpeed={40}
                            loop
                            strings={[` I'm a Web Developer`, `I'm a Web designer`, `I'm a Cabin Crew`, `I'm a Botanist`]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
