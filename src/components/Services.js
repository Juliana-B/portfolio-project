import React from "react"
import "./Services.css"
import Image1 from '../images/pic1.jpg'
import Image2 from '../images/pic2.jpg'
import Image3 from '../images/image4.jpg'
import Image4 from '../images/image2.jpg'
import Image5 from '../images/image1.jpg'
import Image6 from '../images/pic3.jpg'

const Services = () => {
    return (
        <section className='sect-service mt-5' id='services'>
            
            <div className="container px-md-5 my-auto">
                <div className="row justify-content-center py-5">
                    <div className="col-md-12 text-center section-heading">
                        <h1 className='mb-3'>Services</h1>
                        <p className="mb-1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-md-4 mb-2">
                        <div class="card">
                            <img src={Image1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2">
                        <div class="card">
                            <img src={Image5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5">
                        <div class="card">
                            <img src={Image2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div class="card">
                            <img src={Image3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="card">
                            <img src={Image6} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="card">
                            <img src={Image4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
