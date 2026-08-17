import { useEffect } from "react"
import animation from "./particle_module"

export default function ParticleBackground(){
    useEffect(()=>{
        setTimeout(() => {
            animation(200)
        }, 10);


        // window.addEventListener("resize",()=>{

        //     const ctx = document.querySelector("canvas").getContext("2d")
        //     ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
        //     animation()
        // })
        
    },[])
    return(
<>
        <canvas width={window.innerWidth} height={window.innerHeight} />
</>
    )
}