import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import logo from '.././logo.svg';
function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <div className='anchor-box'>
        <a href="/" className='home'>GregsList</a>
        <Link className='ms-3' to="/cars">Cars</Link>
        <Link className='ms-3' to="/houses">Houses</Link>
        <Link className='ms-3' to="/jobs">Jobs</Link>
      </div>
    </header>
  )
}

export default Header