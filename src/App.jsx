import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ParticlesPage from './components/particles'
import PixelCard from './components/animations/pixles'






import { RiGithubFill, RiTailwindCssFill } from "react-icons/ri";
import { RiSupabaseLine } from "react-icons/ri";
import { SiExpo, SiGit, SiGmail, SiMysql } from "react-icons/si";
import { IoLocationSharp, IoLogoDocker, IoLogoInstagram, IoLogoNodejs, IoLogoReact } from "react-icons/io5";

import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { SiAiohttp } from "react-icons/si";
import { CiDatabase } from "react-icons/ci";
import { VscDeveloperTools } from "react-icons/vsc";

function App() {

  return (
    <div className='bg-zinc-950 z-0 overflow-x-hidden   w-screen h-full  text-white'>

      {
        //particles
      }
      <div className="absolute top-100 z-0" id='hero'>
        <ParticlesPage />
      </div>

      <div className=" top-0 left-0 pt-10 md:pt-0 w-screen  h-screen  z-20 
      flex flex-col md:flex-row  justify-center items-center scale-90 md:gap-5

      ">
        {
          //col1
        }
        <div className="flex flex-col justify-center items-center md:justify-between gap-5 md:gap-1 h-full py-5 w-full md:w-auto mt-12 md:mt-0">
          {
            // profile
          }
          <div id='box' className="bg-zinc-950 border-white border border-opacity-40 rounded-2xl shadow-2xl p-3 px-2 
          flex flex-row justify-around md:justify-center md:items-center
          w-3/4 md:w-80 h-1/5">
            <img src={'/profile.jfif'} className='rounded-full w-16 h-16  shadow-black shadow-xl' />
            <div className="mx-5">
              <h1 className="">Hi! 👋</h1>
              <h2>I am </h2>
              <h2>parham  sanjanaki</h2>
              <h3 className='text-nowrap text-sm'>FronEnd & BackEnd Coder</h3>
            </div>
          </div>

          {
            // list 
          }
          <div id='box' className="bg-zinc-950 shadow-2xl border-white border border-opacity-40 rounded-2xl p-3 md:p-0 px-4 
          flex flex-col justify-start items-start
          
          w-3/4 md:w-80 h-auto">
            <ul className='w-full flex flex-col  gap-3 md:gap-0 scale-90'>




              <li className='flex flex-col  justify-center items-center md:justify-start md:items-start gap-4 md:gap-0 w-full border bg-zinc-950 bg-opacity-80 border-white border-opacity-10 p-2 rounded-xl md:border-none'>
                <SiAiohttp size={25} />
                <ul className='md:ps-10 flex flex-row md:flex-col gap-4 md:gap-0'>
                  <li className='list-none md:list-item  md:list-disc'>NODEJS</li>
                  <li className='list-none md:list-item  md:list-disc'>EXPRESS</li>
                  <li className='list-none md:list-item  md:list-disc'>SUPABASE</li>
                  <li className='list-none md:list-item  md:list-disc'>EXPO</li>
                </ul>
              </li>
              <li className='flex flex-col  justify-center items-center md:justify-start md:items-start gap-4 md:gap-0 w-full border bg-zinc-950 bg-opacity-80 border-white border-opacity-10 p-2 rounded-xl md:border-none'>
                <MdDesignServices size={25} />
                <ul className='md:ps-10 flex flex-row md:flex-col gap-4 md:gap-0 flex-wrap'>
                  <li className='list-none md:list-item  md:list-disc'>REACT</li>
                  <li className='list-none md:list-item  md:list-disc'>REACT-NATIVE</li>
                  <li className='list-none md:list-item  md:list-disc'>ELECTRON</li>
                  <li className='list-none md:list-item  md:list-disc'>TAILWIND</li>
                  <li className='list-none md:list-item  md:list-disc'>THREEJS</li>
                </ul>
              </li>


              <li className='flex flex-col justify-center items-center md:justify-start md:items-start gap-4 md:gap-0 w-full border bg-zinc-950 bg-opacity-80 border-white border-opacity-10 p-2 rounded-xl md:border-none'>
                <CiDatabase size={25} />
                <ul className='md:ps-10 flex flex-row md:flex-col gap-4 md:gap-0'>
                  <li className='list-none md:list-item  md:list-disc'>MYSQL</li>
                  <li className='list-none md:list-item  md:list-disc'>POSTGRESQL</li>
                  <li className='list-none md:list-item  md:list-disc'>MONGODB</li>
                </ul>
              </li>



              <li className='flex flex-col  justify-center items-center md:justify-start md:items-start gap-4 md:gap-0 w-full border bg-zinc-950 bg-opacity-80 border-white border-opacity-10 p-2 rounded-xl md:border-none'>
                <VscDeveloperTools size={25} />
                <ul className='md:ps-10 flex flex-row md:flex-col gap-4 md:gap-0'>
                  <li className='list-none md:list-item  md:list-disc'>DOCKER</li>
                  <li className='list-none md:list-item  md:list-disc'>GIT</li>
                  <li className='list-none md:list-item  md:list-disc'>GITHUB</li>
                  <li className='list-none md:list-item  md:list-disc'>EXPO</li>
                </ul>
              </li>
            </ul>
          </div>
          {
            //skills
          }
          <div id='marquee' className="bg-zinc-950 border-white border-opacity-40 shadow-2xl border-spacing-6 border rounded-2xl p-2 
           flex flex-row justify-center items-center w-3/4 md:w-80 h-32">

            <marquee direction="left" className="scale-90 md:scale-100" >
              <IoLogoNodejs className='inline mx-12' color='white' size={30} />
              <IoLogoReact className='inline mx-12' color='white' size={30} />
              <SiExpo className='inline mx-12' color='white' size={20} />
              <RiTailwindCssFill className='inline mx-12' color='white' size={30} />
              <RiGithubFill className='inline mx-12' color='white' size={30} />
              <SiGit className='inline mx-12' color='white' size={30} />
              <RiSupabaseLine className='inline mx-12' color='white' size={30} />
              <IoLogoDocker className='inline mx-12' color='white' size={30} />
              <BiLogoPostgresql className='inline mx-12' color='white' size={30} />
              <SiMysql className='inline mx-12' color='white' size={30} />
              <BiLogoMongodb className='inline mx-12' color='white' size={30} />
            </marquee>

          </div>
        </div>
        {
          //col2
        }
        <div className="flex flex-col justify-start items-center w-3/4 h-full pt-5 gap-5">
          {
            //section
          }
          <section id='box' className="bg-zinc-950 shadow-2xl border-white border border-opacity-40 rounded-2xl p-3 px-4 flex flex-col justify-start items-start w-full h-5/6 "></section>

          <footer id='box' className='w-full mb-5 md:mb-0 h-auto md:h-20 p-3 mt-1 bg-zinc-950 border-white border border-opacity-35 rounded-xl shadow-2xl drop-shadow-2xl
          flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0

          '>
            <div className="flex flex-row justify-center items-center gap-2">
              <h1 className='text-xl font-sans'>PARHAM SANJANAKI</h1>
              <h3 className='text-md self-end font-sans'>( FrontEnd and BackEnd coder ! )</h3>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
              <a href="mailto:psanjanaki@email.com" about='email address' target='_blank' className='bg-transparent text-white shadow-inner hover:bg-white hover:text-black transition-all rounded-full p-2'><SiGmail size={25} /></a>
              <a href="https://instagram.com/parham_sanjanaki1" about='isntagram address' target='_blank' className='bg-transparent text-white shadow-inner hover:bg-white hover:text-black transition-all rounded-full p-2'><IoLogoInstagram size={25} /></a>
              <a href="https://github.com/parham-snk" target='_blank' about='github address' className='bg-transparent text-white shadow-inner hover:bg-white hover:text-black transition-all rounded-full p-2'><RiGithubFill size={25} /></a>
            </div>


          </footer>
        </div>
      </div>


    </div>

  )
}

export default App
