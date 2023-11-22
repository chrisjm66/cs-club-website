import { NavLink } from 'react-router-dom'
import './index.scss' // SCSS uses the SASS library and allows for logic and nesting in CSS files.

const Header = () => {
    return (
        <div className='header-bar'>
            
            <div className='text'>
                BROOKDALE COMPUTER SCIENCE CLUB
            </div>
            <span className='links'>
                    <NavLink activeClassName='active' className='mission-link' to='/' >Home Page</NavLink>
                    <NavLink activeClassName='active' className='mission-link' to='/about' >About Us</NavLink>
                    <NavLink activeClassName='active' className='mission-link' to='/contact' >Contact Us</NavLink>
                    <NavLink activeClassName='active' className='mission-link' to='/our-mission' >Our Mission</NavLink>
                    <NavLink activeClassName='active' className='mission-link' to='/events' >Upcoming Events</NavLink>
                    <NavLink activeClassName='active' className='mission-link' to='/resources' >Resources</NavLink>
            </span>
            
        </div>
    
    )
}

export default Header;