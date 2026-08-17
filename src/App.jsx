import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ParticlesPage from './components/particles'
import PixelCard from './components/animations/pixles'
import profile from "../public/profile.jfif"





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
    <div className='bg-zinc-950 z-0 overflow-x-hidden w-screen h-screen  text-white'>
      
      {
        //particles
      }
      <div className="top-100 z-10" id='hero'>
        <ParticlesPage />
      </div>

      <div className="fixed top-0 left-0 w-screen h-screen z-20 flex flex-row justify-center items-center scale-90 gap-5">
        {
          //col1
        }
        <div  className="flex flex-col justify-between gap-5 h-full py-5">
          {
            // profile
          }
          <div id='box' className="bg-zinc-950 border-white border border-opacity-40 rounded-2xl shadow-2xl p-3 px-2 flex flex-row justify-center items-center max-w-80 h-1/5">
            <img src={profile} className='rounded-full w-16 h-16  shadow-black shadow-xl' />
            <div className="mx-5">
              <h1 className="">Hi! 👋</h1>
              <h2>I am </h2>
              <h2>parham  sanjanaki</h2>
            </div>
          </div>

          {
            // list 
          }
          <div id='box' className="bg-zinc-950 shadow-2xl border-white border border-opacity-40 rounded-2xl p-3 px-4 flex flex-col justify-start items-start max-w-80 h-4/5">
            <ul>




              <li>
                <SiAiohttp size={25} />
                <ul className='ps-10'>
                  <li className='list-item  list-disc'>NODEJS</li>
                  <li className='list-item list-outside list-disc'>EXPRESS</li>
                  <li className='list-item  list-disc'>SUPABASE</li>
                  <li className='list-item  list-disc'>EXPO</li>
                </ul>
              </li>
              <li>
                <MdDesignServices size={25} />
                <ul className='ps-10'>
                  <li className='list-item  list-disc'>REACT</li>
                  <li className='list-item list-outside list-disc'><div className='flex flex-row items-center gap-2'>REACT-NATIVE <IoIosPhonePortrait size={19} /></div></li>
                  <li className='list-item  list-disc'>ELECTRON</li>
                  <li className='list-item  list-disc'>TAILWIND</li>
                  <li className='list-item  list-disc'>THREEJS</li>
                </ul>
              </li>


              <li>
                <CiDatabase size={25} />
                <ul className='ps-10'>
                  <li className='list-item list-outside list-disc'>MYSQL</li>
                  <li className='list-item list-outside list-disc'>POSTGRESQL</li>
                  <li className='list-item list-outside list-disc'>MONGODB</li>
                </ul>
              </li>



              <li>
                <VscDeveloperTools size={25} />
                <ul className='ps-10'>
                  <li className='list-item  list-disc'>DOCKER</li>
                  <li className='list-item list-outside list-disc'>GIT</li>
                  <li className='list-item  list-disc'>GITHUB</li>
                  <li className='list-item  list-disc'>EXPO</li>
                </ul>
              </li>
            </ul>
          </div>
          {
            //skills
          }
          <div  id='marquee' className="bg-zinc-950 border-white border-opacity-40 shadow-2xl border-spacing-6 border rounded-2xl p-2  flex flex-row justify-center items-center  max-w-80 h-20">

            <marquee direction="left" >
              <IoLogoNodejs className='inline mx-12' color='white' size={40} />
              <IoLogoReact className='inline mx-12' color='white' size={40} />
              <SiExpo className='inline mx-12' color='white' size={30}/>
              <RiTailwindCssFill className='inline mx-12' color='white' size={40} />
              <RiGithubFill className='inline mx-12' color='white' size={40} />
              <SiGit className='inline mx-12' color='white' size={40} />
              <RiSupabaseLine className='inline mx-12' color='white' size={40} />
              <IoLogoDocker className='inline mx-12' color='white' size={40} />
              <BiLogoPostgresql className='inline mx-12' color='white' size={40} />
              <SiMysql className='inline mx-12' color='white' size={40} />
              <BiLogoMongodb className='inline mx-12' color='white' size={40} />
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

          <footer id='box' className='w-full h-20 p-3 mt-1 bg-zinc-950 border-white border border-opacity-35 rounded-xl shadow-2xl drop-shadow-2xl
          flex flex-row justify-between items-center
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
