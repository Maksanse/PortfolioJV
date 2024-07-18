import { useEffect, useRef } from 'react'
import Fusee from '../components/Fusee'
import HeaderHome from '../components/HeaderHome'
import Stars from '../components/Stars'
import Stars48 from '../components/Stars48'
import StarsFull from '../components/StarsFull'
import TextScroll from '../components/TextScroll'
import '../styles/Welcome.css'
import gsap from 'gsap'
import Satellite from '../components/Satellite'

function Welcome() {

    
const sateliteRef = useRef(null)

useEffect(() => {

    const VingtCinqs = -window.innerWidth + window.innerWidth/4
    const Cinquante = -window.innerWidth + window.innerWidth/2
    const SoixanteQuinze = VingtCinqs / 4
    const cents = -window.innerWidth - 200

    const VingtCinqsMonte = -window.innerHeight/8
    const CinquanteMonte = window.innerHeight/8
    const SoixanteQuinzeMonte = -window.innerHeight/8
    const centsMonte = window.innerHeight/9

    const tl = gsap.timeline({repeat:-1})

   tl.to(sateliteRef.current, {
    x : SoixanteQuinze,
    y: VingtCinqsMonte,
    duration : 10,
    rotate:90,
    ease:"linear"
   });
   tl.to(sateliteRef.current, {
    x : Cinquante,
    y: CinquanteMonte,
    duration : 15,
    rotate:180,
    ease:"linear"
   });
   tl.to(sateliteRef.current, {
    x : VingtCinqs,
    y: SoixanteQuinzeMonte,
    duration : 10,
    rotate:-90,
    ease:"linear"
   })
   tl.to(sateliteRef.current, {
    x : cents,
    y: centsMonte,
    duration : 10,
    rotate:90,
    ease:"linear"
   })

})

return (
    <div className='Welcome__Container'>
        <HeaderHome />
        <div ref={sateliteRef} className='Satelite'><Satellite /></div>
        <div className='Star1'> <Stars /> </div>
        <div className='Star2'> <Stars /> </div>
        <div className='Star3'> <StarsFull /> </div>
        <div className='FuseeContainer'><Fusee /></div>
        <div className='Star48-1'><Stars48 delay={1}/></div>
        <div className='Star48-2'><Stars48 delay={1.5}/></div>
        <div className='Star48-3'><Stars48 delay={2}/></div>
        <div className='TextScrollContainer'><TextScroll /></div>
        
    </div>
)
}

export default Welcome