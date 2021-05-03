import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <nav className=" navbar shadow fixed-top navbar-expend-sm navbar-dark bg-primary">
         <div className ="container" >
           <Link className="navbar-brand" to="/" >
                Back Banchers
           </Link>
           <div>
               <Link to="/contacts/add" className="btn btn-light ml-auto">
                    Create Contact
               </Link>
           </div>
            </div>   
        </nav>
    )
}

export default Navbar
