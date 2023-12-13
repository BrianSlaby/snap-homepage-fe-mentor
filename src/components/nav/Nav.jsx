import React from 'react'
import Button from "../Button"
import Dropdown from "./Dropdown"
import NavItem from "./NavItem"
import DropdownButton from "./DropdownButton"

export default function Nav({ toggleNav }) {
    const [featuresOpen, setFeaturesOpen] = React.useState(false)
    const [companyOpen, setCompanyOpen] = React.useState(false)

    function toggleFeaturesOpen() {
        setFeaturesOpen(prevState => !prevState)
    }

    function toggleCompanyOpen() {
        setCompanyOpen(prevState => !prevState)
    }

    return(
        <nav className={`main-nav`}>
            <Button classProp="close-nav-btn" clickProp={toggleNav}>
                <img src="./public/icons/icon-close-menu.svg"/>
            </Button>

            <ul className="nav-links nav-links-primary">
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
            
            <Button classProp="ghost-btn">Login</Button>
            <Button classProp="secondary-btn">Register</Button>
        </nav>
    )
}