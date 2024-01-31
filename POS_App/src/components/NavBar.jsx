import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
 

function NavBar() {
  return (
    <nav className='navbar nabvar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
            <a href="#home" className='navbar-brand'>Axelor POS</a>
        </div>
    </nav>
  )
}

export default NavBar