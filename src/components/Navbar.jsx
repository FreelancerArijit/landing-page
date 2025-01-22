import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(){
    return(
        <nav>
            <div className="navigation">
                <div className="navigation-logo">
                    <img src="/images/brand_logo.png" alt="" className="src" />
                </div>
                <div className="navigation-menu">
                    <ul>                        
                       <NavLink to='/' className='nav-item' style={{ textDecoration: 'none', color:'black' }} > <li>HOME</li> </NavLink>
                       <NavLink to='/pages/location' className='nav-item' style={{ textDecoration: 'none', color:'black' }} > <li>LOCATION</li> </NavLink>
                     <NavLink to='/pages/contact' className='nav-item' style={{ textDecoration: 'none', color:'black' }} > <li>CONTACT</li> </NavLink>
                    </ul>
                </div>
                <div className="navigation-button">
                    <button className="btn">Login</button>
                </div>
            </div>



        </nav>
    )
}
export default Navbar