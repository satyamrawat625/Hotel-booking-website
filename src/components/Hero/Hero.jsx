import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring"
              }}>
              Discover<br /> More suitable<br /> property
            </motion.h1>
          </div>

          <div className="hero-des">
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, ad.</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aspernatur.</span>
          </div>

          <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type='text'></input>
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1200} end={2000} duration={4} />
                <span className='plus'>+</span>
              </span>
              <span className='secondaryText'>
                Premium products
              </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={800} end={900} duration={4} />
                <span className='plus'>+</span>
              </span>
              <span className='secondaryText'>
                Happy customers
              </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span className='plus'>+</span>
              </span>
              <span className='secondaryText'>
                Award winnings
              </span>
            </div>

          </div>

        </div>
        {/* Right side */}
        <motion.div className="flexCenter hero-right"
          initial={{ x: "2rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type:'spring'
          }}>
          <div className="image-container">
            <img src="/headimage.jpg" alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
