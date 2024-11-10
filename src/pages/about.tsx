import Image from 'next/image'
import Navbar from './Navbar'

export default function About() {
  return (
    <div className="flex flex-col items-center">
            <Navbar/>
      <h1 className="text-4xl font-bold mb-8 mt-28">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <Image
          src="/Mine.png"
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-lg shadow-md align-middle"
        />
        <div className="max-w-2xl">
          <p className="text-lg mb-4">
            Hello! I'm <b>Tanzeel Sarwar</b>, a passionate web developer, Graphic designer and Digital Marketer with experience in creating
            beautiful, functional, and user-centered digital experiences.
          </p>
          <p className="text-lg mb-4">
            My journey in web development began when I built my first website for a local non-profit organization.
            Since then, I've had the opportunity to work with a diverse range of clients, from startups to large corporations,
            helping them achieve their goals through innovative digital solutions.
          </p>
          <p className="text-lg mb-4">
            When I'm not coding or designing, you can find me exploring new hiking trails, experimenting with new recipes
            in the kitchen, or contributing to open-source projects. I believe in continuous learning and always strive to
            stay updated with the latest trends and technologies in my field.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-3">Skills & Technologies</h2>
          <div className="grid grid-cols-2 gap-4 mb-20">
            <ul className="list-disc list-inside">
              <li>HTML & CSS</li>
              <li>Typescript </li>
              <li>React & Next.js</li>
              <li>C Language</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>UI/UX Design</li>
              <li>Graphic Designer</li>
              <li>Digital Marketer</li>
              <li>Git & Version Control</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-80 py-3 text-center">
          © {new Date().getFullYear()} Tanzeel Sarwar. All rights reserved.
        </div>
      </footer>
    </div>
  )
}