import React from 'react'

function Navbar() {
  return (
<div className="flex items-center justify-between p-4 z-[100] w-full absolute">
  <img
    className="logo cursor-pointer w-28"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
    alt="Netflix Logo"
  />
  <div>
  <img className="avatar w-12 cursor-pointer" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/>
  </div>
</div>
  )
}

export default Navbar