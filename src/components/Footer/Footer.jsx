import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* left side */}

                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={120} />

                    <span className="secondaryText">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, veniam temporibus.<br /> Voluptas aliquam numquam aliquid?
                    </span>
                </div>

                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>Lorem ipsum dolor sit amet.</span>

                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Products</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
