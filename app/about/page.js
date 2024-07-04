import React from 'react'

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center py-10 px-5">
      <div className=" shadow-lg rounded-lg p-10 max-w-4xl w-full">
        <h1 className="text-5xl font-extrabold text-center text-white mb-6">About Us</h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          We are a team of developers who are passionate about building applications that help people. 
          We believe that technology can be a force for good and we strive to make the world a better 
          place through our work.
        </p>

        <div className="my-10">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Mission</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Our mission is to deliver high-quality software solutions that empower individuals and 
            businesses to achieve their goals. We aim to innovate and push the boundaries of what is 
            possible with technology.
          </p>
        </div>

        <div className="my-10">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-400 leading-relaxed">
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Collaboration</li>
            <li>Customer Focus</li>
            <li>Continuous Improvement</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About

export const metadata = {
    title: "About Us - ChaiFund",
  }
