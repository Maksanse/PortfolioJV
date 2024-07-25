import Oiseau from '../assets/Oiseau.png'
import '../styles/Bird.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
function Bird(){

    const BirdRef = useRef(null)

    useEffect(() => {
    const Quart =(window.innerWidth + 155) /4
    const Dixieme = (window.innerHeight)/10
        const tl = gsap.timeline({repeat:-1})
    

        tl.to(BirdRef.current, {
            x: Quart,
            y: Dixieme,
            duration: 2,
            ease: "linear"
          })
          .call(() => {
            gsap.set(BirdRef.current, { rotate: -15 });
          });
          
          tl.to(BirdRef.current, {
            x: Quart * 2,
            y: 0,
            duration: 2,
            ease: "linear"
          })
          .call(() => {
            gsap.set(BirdRef.current, { rotate: 15 });
          });
          
          tl.to(BirdRef.current, {
            x: Quart * 3,
            y: Dixieme,
            duration: 2,
            ease: "linear"
          })
          .call(() => {
            gsap.set(BirdRef.current, { rotate: -15 });
          });
          
          tl.to(BirdRef.current, {
            x: Quart * 4,
            y: 0,
            duration: 2,
            ease: "linear"
          })
          .call(() => {
            gsap.set(BirdRef.current, { rotate: 15 });
          });
          
    
    })
    return(
        <div>
            <img ref={BirdRef} className='Bird' src={Oiseau} alt='Bird'></img>
        </div>
    )
}

export default Bird