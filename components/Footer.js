import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
   <footer className=' bg-gray-900 text-white  px-4 h-16 flex justify-center items-center'>
        <p className=' text-center'>Copyright &copy; {currentYear} ChaiFund - All Rights are Reserved</p>
   </footer>
  )
}

export default Footer