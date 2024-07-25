import Bubles from '../assets/Bulle.png'
import '../styles/Satellite.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Buble(){

    const BubbleRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({repeat:-1})
    

        tl.to(BubbleRef.current, {
            x: 15,
            y: -800,
            opacity : 0,
            duration: 3,
            ease: "linear"
          })

      
          
    
    })
    return(
        <div>
            <img ref={BubbleRef} className='Bubble' src={Bubles} alt="Bubble"></img>
        </div>
    )
}

export default Buble