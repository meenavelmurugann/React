import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import userContext from '../Context/Context'

function Navbar() {
  const value = useContext(userContext)
  console.log(value);
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{value}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <Link to={'/'}>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </Link>
        <Link to={'/Dashboard'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        </Link>
        <Link to={'/Pricing'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
    </Link>
    <Link to={'/Contact'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
    </Link>
    <Link to={'/Hooks'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Hooks</a>
        </li>
    </Link>
    <Link to={'/Form'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Form</a>
        </li>
    </Link>
    
    <Link to={'/Student'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Student</a>
        </li>
    </Link>
    
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar