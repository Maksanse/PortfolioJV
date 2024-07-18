import { useEffect, useRef } from 'react'
import Star48 from '../assets/EtoileVide48.png'
import '../styles/Stars.css'
import gsap from 'gsap'
function Stars48({delay}){


    const Star48Ref = useRef(null)

    useEffect(()=> {
        gsap.to(Star48Ref.current, {
            opacity:0,
            repeat:-1,
            yoyo:true,
            duration:1,
            delay:delay
            
        })
    })


return(
        <div>
            <img ref={Star48Ref} className='StarImage48' src={Star48} alt="Stars"></img>
        </div>
    )

}

export default Stars48