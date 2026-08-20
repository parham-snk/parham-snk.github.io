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
import { IoIosPhonePortrait, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { SiAiohttp } from "react-icons/si";
import { CiDatabase } from "react-icons/ci";
import { VscDeveloperTools } from "react-icons/vsc";

function App() {

  return (
    <div className='bg-zinc-950 z-0 overflow-x-hidden   w-screen h-auto text-white flex justify-center'>

      {
        //particles
        window.innerWidth > 800 &&
        <div className="absolute top-100 z-0" id='hero'>
          <ParticlesPage />
        </div>
      }



      <div className="  pt-10 md:pt-0 w-screen  md:h-screen  z-10 
      flex flex-col md:flex-row  justify-center items-center scale-90 md:gap-5

      ">
        {
          //col1
        }
        <div className="flex flex-col justify-center items-center md:justify-between gap-5 md:gap-1 h-full py-5 w-full md:w-auto mt-12 md:mt-0">
          {
            // profile
          }
          <div id='box' className="bg-zinc-950 md:backdrop-blur-sm border-white border border-opacity-40 rounded-2xl shadow-2xl p-3 px-2 
          flex flex-row justify-around md:justify-center md:items-center
          w-3/4 md:w-80 h-1/5">
            <img src={'/profile.jfif'} className='rounded-full w-16 h-16  shadow-black shadow-xl' />
            <div className="mx-5">
              <h1 className="">Hi! 👋</h1>
              <h2>I am </h2>
              <h2>parham  sanjanaki</h2>
              <h3 className='text-nowrap text-sm'> BackEnd & FronEnd  Coder</h3>
            </div>
          </div>

          {
            // list 
          }
          <div id='box' className="bg-zinc-950 shadow-2xl md:backdrop-blur-sm border-white border border-opacity-40 rounded-2xl p-3 md:p-0 px-4 
          flex flex-col justify-start items-start
          
          w-full md:w-80 h-auto">
            <ul className='w-full flex flex-col  gap-3 md:gap-0 scale-90'>




              <li className='flex flex-col  justify-center items-center md:justify-start md:items-start gap-4 md:gap-0 w-full border bg-zinc-950 md:bg-opacity-80  border-white border-opacity-10  hover:border-opacity-100 transition-all p-2 rounded-xl md:border-none'>
                <SiAiohttp size={25} />
                <ul className='md:ps-10 flex flex-row flex-wrap md:flex-col  gap-4 md:gap-0'>
                  <li className='list-none md:list-item  md:list-disc'>NODEJS</li>
                  <li className='list-none md:list-item  md:list-disc'>EXPRESS</li>
                  <li className='list-none md:list-item  md:list-disc'>SUPABASE</li>
                  <li className='list-none md:list-item  md:list-disc'>EXPO</li>
                </ul>
              </li>
              <li className='flex flex-col  justify-center items-center md:justify-start md:items-start gap-4 md:gap-0 w-full border bg-zinc-950 md:bg-opacity-80  border-white border-opacity-10  hover:border-opacity-100 transition-all p-2 rounded-xl md:border-none'>
                <MdDesignServices size={25} />
                <ul className='md:ps-10 flex flex-row md:flex-col gap-4 md:gap-0 flex-wrap'>
                  <li className='list-none md:list-item  md:list-disc'>REACT</li>
                  <li className='list-none md:list-item  md:list-disc'>REACT-NATIVE</li>
                  <li className='list-none md:list-item  md:list-disc'>ELECTRON</li>
                  <li className='list-none md:list-item  md:list-disc'>TAILWIND</li>
                  <li className='list-none md:list-item  md:list-disc'>THREEJS</li>
                </ul>
              </li>


              <li className='flex flex-wrap flex-col justify-center items-center md:justify-start md:items-start gap-4 md:gap-0 w-full border bg-zinc-950 md:bg-opacity-80 hover:border-opacity-100 transition-all  border-white border-opacity-10 p-2 rounded-xl md:border-none'>
                <CiDatabase size={25} />
                <ul className='md:ps-10 flex flex-row md:flex-col gap-4 md:gap-0'>
                  <li className='list-none md:list-item  md:list-disc'>MYSQL</li>
                  <li className='list-none md:list-item  md:list-disc'>POSTGRESQL</li>
                  <li className='list-none md:list-item  md:list-disc'>MONGODB</li>
                </ul>
              </li>



              <li className='flex flex-col  justify-center items-center md:justify-start md:items-start gap-4 md:gap-0 w-full border bg-zinc-950 md:bg-opacity-80  border-white  hover:border-opacity-100 transition-all border-opacity-10 p-2 rounded-xl md:border-none'>
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
        <div className="flex flex-col justify-start items-center w-full md:w-3/4 h-full pt-5 gap-5">
          {
            //section
          }
          <section className="

          flex flex-col lg:flex-row  justify-start items-start w-full gap-5 h-auto md:h-5/6
          relative
          "
          >
            {
              //pending projects

            }
            <div className="h-full w-full  flex flex-col justify-start items-start px1">
              {
                //animatoin
              }
              <div className="flex flex-row justify-start items-center h-5 gap-2 px-5 py-10 w-full 
              bg-zinc-950 md:bg-opacity-35 md:backdrop-blur-sm border-opacity-10  border-white border  rounded-2xl
             ">
                <div className="relative scale-75">
                  <div style={{ background: "#EAB308" }} className=" rounded-full animate-ping w-5 h-5 z-1 absolute"></div>
                  <div style={{ background: "#FACC15" }} className=" rounded-full  w-5 h-5 z-2"></div>
                </div>
                {
                  // title
                }
                <h1 className='text-2xl scale-95'>PENDING <span className='text-sm'>PROJECTS</span></h1>
              </div>

              {
                //pending list
              }
              <div className=" w-full h-auto md:overflow-y-scroll flex flex-wrap   py-5  
              ">
                {
                  //course app
                }
                <div
                  className="
                         overflow-hidden p-2  w-full 2xl:w-2/4 min-h-96 h-fit mb-4  relative scale-95
                          bg-zinc-950 md:bg-opacity-35 md:backdrop-blur-sm border-opacity-10  border-white border  rounded-2xl
                ">
                  <div className=" scale-75 absolute right-5 top-5">
                    <div style={{ background: "#EAB308" }} className=" rounded-full animate-ping w-5 h-5 z-1 absolute"></div>
                    <div style={{ background: "#FACC15" }} className=" rounded-full  w-5 h-5 z-2"></div>
                  </div>
                  <img src="/projects/course-app-mockup.png" alt="" className='rounded-md shadow' />
                  <div className="flex flex-col justify-start items-start p-1 py-2 font-sans">
                    <h1 className='font-sans'>course app</h1>
                    <p className='font-sans'>course mobile app !</p>
                    <div className="flex flex-wrap flex-row justify-normal items-start pt-4 gap-2">
                      <div className="font-sans bg-blue-400 bg-opacity-20 text-blue-300 p-1 px-2 rounded-md">react</div>
                      <div className="font-sans bg-blue-500 bg-opacity-20 text-blue-400 p-1 px-2 rounded-md">react-native</div>
                      <div className="font-sans bg-zinc-400 bg-opacity-20 text-zinc-400 p-1 px-2 rounded-md">expo</div>
                      <div className="font-sans bg-purple-500 bg-opacity-20 text-purple-400 p-1 px-2 rounded-md">tailwind</div>
                      <div className="font-sans bg-green-500 bg-opacity-20 text-green-400 p-1 px-2 rounded-md">supa-base</div>
                    </div>
                  </div>
                </div>
                {
                  //course app
                }
                <div
                  className="
                         overflow-hidden p-2  w-full 2xl:w-1/2 min-h-96 h-auto  mb-4 relative scale-95
                          bg-zinc-950 md:bg-opacity-35 md:backdrop-blur-sm border-opacity-10  border-white border  rounded-2xl
                ">
                  <img src="/projects/course-app-mockup.png" alt="" className='rounded-md shadow' />
                  <div className=" scale-75 absolute right-5 top-5">
                    <div style={{ background: "#EAB308" }} className=" rounded-full animate-ping w-5 h-5 z-1 absolute"></div>
                    <div style={{ background: "#FACC15" }} className=" rounded-full  w-5 h-5 z-2"></div>
                  </div>
                  <div className="flex flex-col justify-start items-start p-1 py-2 font-sans">

                    <h1 className='font-sans text-2xl font-bold'>course app</h1>
                    <p className='font-sans text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi culpa in veritatis cupiditate dolorem. In eius veritatis, illum amet consequatur accusamus iste, facilis quia minima commodi voluptatibus saepe quibusdam! !</p>
                    <div className="flex flex-wrap flex-row justify-normal items-start pt-4 gap-2">
                      <div className="font-sans bg-blue-400 bg-opacity-20 text-blue-300 p-1 px-2 rounded-md">react</div>
                      <div className="font-sans bg-blue-500 bg-opacity-20 text-blue-400 p-1 px-2 rounded-md">react-native</div>
                      <div className="font-sans bg-zinc-400 bg-opacity-20 text-zinc-400 p-1 px-2 rounded-md">expo</div>
                      <div className="font-sans bg-purple-500 bg-opacity-20 text-purple-400 p-1 px-2 rounded-md">tailwind</div>
                      <div className="font-sans bg-green-500 bg-opacity-20 text-green-400 p-1 px-2 rounded-md">supa-base</div>
                    </div>
                  </div>
                </div>

                {
                  //course app
                }
                <div
                  className="
                         overflow-hidden p-2  w-full 2xl:w-1/2 min-h-96 h-auto  mb-4 relative scale-95
                          bg-zinc-950 md:bg-opacity-35 md:backdrop-blur-sm border-opacity-10  border-white border  rounded-2xl
                ">
                  <img src="/projects/course-app-mockup.png" alt="" className='rounded-md shadow' />
                  <div className=" scale-75 absolute right-5 top-5">
                    <div style={{ background: "#EAB308" }} className=" rounded-full animate-ping w-5 h-5 z-1 absolute"></div>
                    <div style={{ background: "#FACC15" }} className=" rounded-full  w-5 h-5 z-2"></div>
                  </div>
                  <div className="flex flex-col justify-start items-start p-1 py-2 font-sans">

                    <h1 className='font-sans text-2xl font-bold'>course app</h1>
                    <p className='font-sans text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi culpa in veritatis cupiditate dolorem. In eius veritatis, illum amet consequatur accusamus iste, facilis quia minima commodi voluptatibus saepe quibusdam! !</p>
                    <div className="flex flex-wrap flex-row justify-normal items-start pt-4 gap-2">
                      <div className="font-sans bg-blue-400 bg-opacity-20 text-blue-300 p-1 px-2 rounded-md">react</div>
                      <div className="font-sans bg-blue-500 bg-opacity-20 text-blue-400 p-1 px-2 rounded-md">react-native</div>
                      <div className="font-sans bg-zinc-400 bg-opacity-20 text-zinc-400 p-1 px-2 rounded-md">expo</div>
                      <div className="font-sans bg-purple-500 bg-opacity-20 text-purple-400 p-1 px-2 rounded-md">tailwind</div>
                      <div className="font-sans bg-green-500 bg-opacity-20 text-green-400 p-1 px-2 rounded-md">supa-base</div>
                    </div>
                  </div>
                </div>

                {
                  //course app
                }
                <div
                  className="
                         overflow-hidden p-2  w-full 2xl:w-1/2 min-h-96 h-auto  mb-4 relative scale-95
                          bg-zinc-950 md:bg-opacity-35 md:backdrop-blur-sm border-opacity-10  border-white border  rounded-2xl
                ">
                  <img src="/projects/course-app-mockup.png" alt="" className='rounded-md shadow' />
                  <div className=" scale-75 absolute right-5 top-5">
                    <div style={{ background: "#EAB308" }} className=" rounded-full animate-ping w-5 h-5 z-1 absolute"></div>
                    <div style={{ background: "#FACC15" }} className=" rounded-full  w-5 h-5 z-2"></div>
                  </div>
                  <div className="flex flex-col justify-start items-start p-1 py-2 font-sans">

                    <h1 className='font-sans text-2xl font-bold'>course app</h1>
                    <p className='font-sans text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi culpa in veritatis cupiditate dolorem. In eius veritatis, illum amet consequatur accusamus iste, facilis quia minima commodi voluptatibus saepe quibusdam! !</p>
                    <div className="flex flex-wrap flex-row justify-normal items-start pt-4 gap-2">
                      <div className="font-sans bg-blue-400 bg-opacity-20 text-blue-300 p-1 px-2 rounded-md">react</div>
                      <div className="font-sans bg-blue-500 bg-opacity-20 text-blue-400 p-1 px-2 rounded-md">react-native</div>
                      <div className="font-sans bg-zinc-400 bg-opacity-20 text-zinc-400 p-1 px-2 rounded-md">expo</div>
                      <div className="font-sans bg-purple-500 bg-opacity-20 text-purple-400 p-1 px-2 rounded-md">tailwind</div>
                      <div className="font-sans bg-green-500 bg-opacity-20 text-green-400 p-1 px-2 rounded-md">supa-base</div>
                    </div>
                  </div>
                </div>
                {
                  //course app
                }
                <div
                  className="
                         overflow-hidden p-2  w-full 2xl:w-1/2 min-h-96 h-auto  mb-4 relative scale-95
                          bg-zinc-950 md:bg-opacity-35 md:backdrop-blur-sm border-opacity-10  border-white border  rounded-2xl
                ">
                  <img src="/projects/course-app-mockup.png" alt="" className='rounded-md shadow' />
                  <div className=" scale-75 absolute right-5 top-5">
                    <div style={{ background: "#EAB308" }} className=" rounded-full animate-ping w-5 h-5 z-1 absolute"></div>
                    <div style={{ background: "#FACC15" }} className=" rounded-full  w-5 h-5 z-2"></div>
                  </div>
                  <div className="flex flex-col justify-start items-start p-1 py-2 font-sans">

                    <h1 className='font-sans text-2xl font-bold'>course app</h1>
                    <p className='font-sans text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi culpa in veritatis cupiditate dolorem. In eius veritatis, illum amet consequatur accusamus iste, facilis quia minima commodi voluptatibus saepe quibusdam! !</p>
                    <div className="flex flex-wrap flex-row justify-normal items-start pt-4 gap-2">
                      <div className="font-sans bg-blue-400 bg-opacity-20 text-blue-300 p-1 px-2 rounded-md">react</div>
                      <div className="font-sans bg-blue-500 bg-opacity-20 text-blue-400 p-1 px-2 rounded-md">react-native</div>
                      <div className="font-sans bg-zinc-400 bg-opacity-20 text-zinc-400 p-1 px-2 rounded-md">expo</div>
                      <div className="font-sans bg-purple-500 bg-opacity-20 text-purple-400 p-1 px-2 rounded-md">tailwind</div>
                      <div className="font-sans bg-green-500 bg-opacity-20 text-green-400 p-1 px-2 rounded-md">supa-base</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {
              //complete projects
            }
            <div className="h-full w-full  flex flex-col justify-start items-start px1">

              {
                //title
              }
              <div className="flex flex-row justify-start items-center h-10 md:px-4 gap-1 backdrop-blur-sm sticky top-0 mt-0 px-5 py-10 w-full
              bg-zinc-950 md:bg-opacity-35 md:backdrop-blur-sm border-opacity-10  border-white border  rounded-2xl


              ">
                <IoMdCheckmarkCircleOutline className='text-green-500' size={23} />
                <h1 className='text-2xl scale-95'>COMPLETED <span className='text-sm'>PROJECTS</span></h1>
              </div>


              {
                //completed list
              }
              <div className=" w-full h-auto md:overflow-y-scroll flex flex-wrap   py-5  
              ">
                {
                  //course app
                }
                <div
                  className="
                         overflow-hidden p-2  w-full 2xl:w-2/4 min-h-96 h-fit mb-4  relative scale-95
                          bg-zinc-950 md:bg-opacity-35 md:backdrop-blur-sm border-opacity-10  border-white border  rounded-2xl
                ">
                  <div className=" scale-75 absolute right-5 top-5">
                    <div className=" rounded-full bg-green-600  w-5 h-5 z-2"></div>
                  </div>
                  <img src="/projects/course-app-mockup.png" alt="" className='rounded-md shadow' />
                  <div className="flex flex-col justify-start items-start p-1 py-2 font-sans">
                    <h1 className='font-sans'>course app</h1>
                    <p className='font-sans'>course mobile app !</p>
                    <div className="flex flex-wrap flex-row justify-normal items-start pt-4 gap-2">
                      <div className="font-sans bg-blue-400 bg-opacity-20 text-blue-300 p-1 px-2 rounded-md">react</div>
                      <div className="font-sans bg-blue-500 bg-opacity-20 text-blue-400 p-1 px-2 rounded-md">react-native</div>
                      <div className="font-sans bg-zinc-400 bg-opacity-20 text-zinc-400 p-1 px-2 rounded-md">expo</div>
                      <div className="font-sans bg-purple-500 bg-opacity-20 text-purple-400 p-1 px-2 rounded-md">tailwind</div>
                      <div className="font-sans bg-green-500 bg-opacity-20 text-green-400 p-1 px-2 rounded-md">supa-base</div>
                    </div>
                  </div>
                </div>
                {
                  //course app
                }
                <div
                  className="
                         overflow-hidden p-2  w-full 2xl:w-2/4 min-h-96 h-fit mb-4  relative scale-95
                          bg-zinc-950 md:bg-opacity-35 md:backdrop-blur-sm border-opacity-10  border-white border  rounded-2xl
                ">
                  <div className=" scale-75 absolute right-5 top-5">
                    <div className=" rounded-full bg-green-600  w-5 h-5 z-2"></div>
                  </div>
                  <img src="/projects/course-app-mockup.png" alt="" className='rounded-md shadow' />
                  <div className="flex flex-col justify-start items-start p-1 py-2 font-sans">
                    <h1 className='font-sans'>course app</h1>
                    <p className='font-sans'>course mobile app !</p>
                    <div className="flex flex-wrap flex-row justify-normal items-start pt-4 gap-2">
                      <div className="font-sans bg-blue-400 bg-opacity-20 text-blue-300 p-1 px-2 rounded-md">react</div>
                      <div className="font-sans bg-blue-500 bg-opacity-20 text-blue-400 p-1 px-2 rounded-md">react-native</div>
                      <div className="font-sans bg-zinc-400 bg-opacity-20 text-zinc-400 p-1 px-2 rounded-md">expo</div>
                      <div className="font-sans bg-purple-500 bg-opacity-20 text-purple-400 p-1 px-2 rounded-md">tailwind</div>
                      <div className="font-sans bg-green-500 bg-opacity-20 text-green-400 p-1 px-2 rounded-md">supa-base</div>
                    </div>
                  </div>
                </div>
                {
                  //course app
                }
                <div
                  className="
                         overflow-hidden p-2  w-full 2xl:w-2/4 min-h-96 h-fit mb-4  relative scale-95
                          bg-zinc-950 md:bg-opacity-35 md:backdrop-blur-sm border-opacity-10  border-white border  rounded-2xl
                ">
                  <div className=" scale-75 absolute right-5 top-5">

                    <div className=" rounded-full bg-green-600  w-5 h-5 z-2"></div>
                  </div>
                  <img src="/projects/course-app-mockup.png" alt="" className='rounded-md shadow' />
                  <div className="flex flex-col justify-start items-start p-1 py-2 font-sans">
                    <h1 className='font-sans'>course app</h1>
                    <p className='font-sans'>course mobile app !</p>
                    <div className="flex flex-wrap flex-row justify-normal items-start pt-4 gap-2">
                      <div className="font-sans bg-blue-400 bg-opacity-20 text-blue-300 p-1 px-2 rounded-md">react</div>
                      <div className="font-sans bg-blue-500 bg-opacity-20 text-blue-400 p-1 px-2 rounded-md">react-native</div>
                      <div className="font-sans bg-zinc-400 bg-opacity-20 text-zinc-400 p-1 px-2 rounded-md">expo</div>
                      <div className="font-sans bg-purple-500 bg-opacity-20 text-purple-400 p-1 px-2 rounded-md">tailwind</div>
                      <div className="font-sans bg-green-500 bg-opacity-20 text-green-400 p-1 px-2 rounded-md">supa-base</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </section>




          {
            //footer
          }
          <footer className='w-full mb-5 md:mb-0 h-auto md:h-20 p-3 mt-1 bg-zinc-950 md:bg-opacity-35 border-white border border-opacity-10 rounded-xl 
          shadow-2xl drop-shadow-2xl backdrop-blur-sm
          flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0

          '>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-5 md:mb-0">
              <h1 className='text-xl font-sans'>PARHAM SANJANAKI</h1>
              <h3 className='text-md self-end font-sans'> FrontEnd and BackEnd coder ! </h3>
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
