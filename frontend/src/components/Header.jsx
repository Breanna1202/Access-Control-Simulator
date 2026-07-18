import React from 'react'
import '../App'


export default function Header() {
  return (
    <>
      <div className="nav">
        <h1 className="logo">⛉Access Control Simulator</h1>
      </div>

   <div>
        <ul>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Choose Your Role</a>
    <div class="dropdown-content">
      <a href="#">System Admin</a>
      <a href="#">Auditor</a>
      <a href="#">Manager</a>
    </div>
  </li>
</ul>
      </div>
      </>
  )
};