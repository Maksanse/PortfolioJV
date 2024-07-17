import { useEffect, useRef, useState } from 'react'
import Fuse from '../assets/FuseBlanc.png'
import gsap from 'gsap'
import '../styles/Fusee.css'

function Fusee(){


const [moove, setMoove] = useState(false)

const fuseRef = useRef(null)

const changeMoove = () => {
    setMoove(!moove)
}


useEffect(() => {
    moove &&
    gsap.to(fuseRef.current, {
        y:-1500,
        duration: 3
    })
}
) 

    return(
        <div>
            <img 
            className='Fusee'
            onClick={changeMoove}
            ref = {fuseRef}
            src={Fuse} alt="Fuse"></img>
        </div>
    )
}

export default Fusee