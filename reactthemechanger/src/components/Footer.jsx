import React from 'react'

const Footer = () => {
  return (
    <div className='footeri-div py-4 px-7 flex justify-between bg-blue-400 text-white'>
     <div className='pages-div p-2 m-2'>
     <ul>
      <li>Home</li>
      <li>Product</li>
      <li>About Us</li>
      <li>Contact Us</li>
     </ul>
     </div>
     <div className='location-div p-2 m-2'>
      <ul>
        <li>Charang, Mustang</li>
        <li>Kathmandu, Boudha</li>
        <li>Pokhara, New road</li>
        <li>Dharan, Shiva Chowk</li>
      </ul>
     </div>
    </div>
  )
}

export default Footer
