import { useEffect, useRef} from 'react';
import '../styles/TextScroll.css'
import gsap from 'gsap';
function TextScroll(){

    const TextScrollRef = useRef(null)

    
    useEffect(() => {
        gsap.to(TextScrollRef.current, {
            opacity : 0,
           repeat : -1,
           duration: 2,
           yoyo : true
        })
    }
    ) 

    return (
        <div>
            <p 
            ref={TextScrollRef}
            className="TextScroll">Scroll your mouse to move</p>
        </div>
    )
}

export default TextScroll