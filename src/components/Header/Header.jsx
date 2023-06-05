import React, { useState } from "react"
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler"

export default function Header() {
    const [menuOpened, SetMenuOpened] = useState(false)

    const getMenuStyles= (menuOpened)=>{
        if(document.documentElement.clientWidth<=1000){//if we r smaller screen & menu not opened 
            return {right: !menuOpened && "-100%"}//if menu is not openedposition frmo right sign of screen
        }
    }

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" />

                <OutsideClickHandler onOutsideClick={()=>{
                    SetMenuOpened(false)
                }}>

                <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                    <a href="">Residencies</a>
                    <a href="">Our values</a>
                    <a href="">Coontact Use</a>
                    <a href="">Get Started</a>

                    <button className="button">
                        <a href="">Contact us</a>
                    </button>
                </div>
                </OutsideClickHandler>

                <div className="menu-icon" onClick={() => {
                    SetMenuOpened((prev) => (
                        !prev
                    ))
                }}>
                    <BiMenuAltRight size={30}> </BiMenuAltRight>
                </div>
            </div>
        </section>
    )
}