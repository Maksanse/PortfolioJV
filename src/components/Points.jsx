import '../styles/Points.css'
import gsap from 'gsap'
import { useEffect, useRef} from 'react'
function Points({color}){

 const PointRef = useRef(null)

    
    useEffect(() => {
        const points = PointRef.current.querySelectorAll('.Points');
        gsap.to(points, {
            opacity : 1,
           repeat : -1,
           stagger : 1,
            repeatDelay: 2,
            
        })
    }
    ) 


    return(
        <div ref={PointRef} className="Points__Container">
            <p 
            style={{ color: color }}
            className='Points'>.</p>
            <p 
           style={{ color: color }}
            className='Points'>.</p>
            <p 
            style={{ color: color }}
            className='Points'>.</p>
        </div>
    )
}
export default Points