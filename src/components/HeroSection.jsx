import React from 'react'

function HeroSection() {
    return (
        <main>
            <div className="maincontainer">
                <div className="hero-text">
                    <div className="hero-text-title">
                        <p>YOUR FEET
                            DESERVE
                            THE BEST</p>
                    </div>
                    <div className="hero-text-description">
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    </div>
                    <div className="hero-text-button">
                        <button className='primary-button'>Shop Now</button>
                        <button>Category</button>
                    </div>
                    <div className="hero-text-availability">
                        <p>Also Available On</p>
                        <img src="/images/amazon.png" alt="" className="src" />
                        <img src="/images/flipkart.png" alt="" className="src" />
                    </div>

                </div>
                <div className="hero-image">
                    <img src="/images/shoe_image.png" alt="" className="src" />
                </div>
            </div>



        </main>
    )
}
export default HeroSection;