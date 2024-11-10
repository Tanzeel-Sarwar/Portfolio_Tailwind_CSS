import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Navbar from './Navbar'


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      
      <head>
        <title>Portfolio Website</title>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
     
        <Navbar/>
      <section className="text-center mb-16 mt-40">
        <Image
          src= "/public/Mine.png"
          alt=" "
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6 bg-[url(/Mine.png)] bg-cover"
        />
        <h1 className="text-4xl font-bold mb-4">Tanzeel Sarwar</h1>
        <p className="text-xl text-gray-600 mb-6">Web Developer & Designer</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/Tanzeel-Sarwar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/tanzeel-sarwar-8b2a9131b/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:tgdesigner338@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Gmail</span>
          </a>
          <a href="tel:+92 319 029 1699" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Phone className="h-6 w-6" />
            <span className="sr-only">Phone Number</span>
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-600">Creating responsive and user-friendly websites using modern technologies like React and Next.js.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-gray-600">Designing intuitive and visually appealing user interfaces and experiences using tools like Figma.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Digital Marketer</h3>
            <p className="text-gray-600">Crafting strategies, driving results—digital marketing that connects brands with their audience.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Let's Work Together</h2>
        <p className="text-xl text-gray-600 mb-6">I'm always open for new opportunities and exciting projects.</p>
        <Link href="/contact" className="inline-flex items-center px-6 py-3 mb-20 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>


      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-80 py-3 text-center">
          © {new Date().getFullYear()} Tanzeel Sarwar. All rights reserved.
        </div>
      </footer>
    </div>
  )
}