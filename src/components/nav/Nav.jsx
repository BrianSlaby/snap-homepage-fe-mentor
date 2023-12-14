import React from 'react'
import Button from "../Button"
import Dropdown from "./Dropdown"
import NavItem from "./NavItem"
import DropdownButton from "./DropdownButton"
import AuthButtons from "../AuthButtons"
import { WindowSizeContext } from "../../App"

export default function Nav({ toggleNav }) {
    const [featuresOpen, setFeaturesOpen] = React.useState(false)
    const [companyOpen, setCompanyOpen] = React.useState(false)

    const { 
        windowWidth, 
        layoutSwitchWidth,
        desktopLayoutClassName } = React.useContext(WindowSizeContext)

    function toggleFeaturesOpen() {
        setFeaturesOpen(prevState => !prevState)
    }

    function toggleCompanyOpen() {
        setCompanyOpen(prevState => !prevState)
    }

        // think about secondary nav dropdowns
            // keep as is in mobile
            // they're essentially modals in desktop
            // the NavItem is the parent, relative positioning?
            // parent position relative, dropdowns position absolute

    

    return(
        <nav 
        className={`main-nav ${desktopLayoutClassName}`}>
            
            {windowWidth < layoutSwitchWidth && 
            <Button classProp="close-nav-btn" clickProp={toggleNav}>
                <img src="./public/icons/icon-close-menu.svg"/>
            </Button>}

            <ul 
            className={`nav-links nav-links-primary ${desktopLayoutClassName}`}>
                <NavItem>Features
                <DropdownButton 
                    open={featuresOpen} 
                    toggle={toggleFeaturesOpen}/>
                {featuresOpen && 
                <Dropdown>
                    <NavItem> 
                        <img src="./public/icons/icon-todo.svg"/> Todo List
                    </NavItem>
                    <NavItem> 
                        <img src="./public/icons/icon-calendar.svg"/> Calendar
                    </NavItem>
                    <NavItem> 
                        <img src="./public/icons/icon-reminders.svg"/> Reminders
                    </NavItem>
                    <NavItem> 
                        <img src="./public/icons/icon-planning.svg"/> Planning
                    </NavItem>
                </Dropdown>}
                
                </NavItem>
                <NavItem>Company
                <DropdownButton 
                    open={companyOpen}
                    toggle={toggleCompanyOpen}/>
                {companyOpen && 
                <Dropdown>
                    <NavItem><a href="#">History</a></NavItem>
                    <NavItem><a href="#">Our Team</a></NavItem>
                    <NavItem><a href="#">Blog</a></NavItem>
                </Dropdown>}
                </NavItem>
                <NavItem><a href="#">Careers</a></NavItem>
                <NavItem><a href="#">About</a></NavItem>
            </ul>
            
            {windowWidth < layoutSwitchWidth && <AuthButtons />}
        </nav>
    )
}