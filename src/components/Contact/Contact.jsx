import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}

            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aut, in fuga ea accusamus facilis iusto! Velit sint dignissimos dolor.</span>

                <div className="flexStart contactModes">
                    {/* first row */}

                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}></MdCall>
                                </div>

                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>1234567890</span>

                                </div>
                            </div>

                            <div className="flexCenter button">Call now</div>
                        </div>
                        {/* second mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}></BsFillChatDotsFill>
                                </div>

                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>1234567890</span>

                                </div>
                            </div>

                            <div className="flexCenter button">Chat now</div>
                        </div>

                    </div>

                    {/* second row */}
                        {/* thired mode */}
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>

                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>1234567890</span>

                                </div>
                            </div>

                            <div className="flexCenter button">Video call now</div>
                        </div>
                            {/* fouth mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}></BsFillChatDotsFill>
                                </div>

                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>1234567890</span>

                                </div>
                            </div>

                            <div className="flexCenter button">Message now</div>
                        </div>

                    </div>
                </div>
            </div>

            {/* right side */}

            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
