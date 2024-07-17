import Fusee from '../components/Fusee'
import HeaderHome from '../components/HeaderHome'
import Stars from '../components/Stars'
import StarsFull from '../components/StarsFull'
import TextScroll from '../components/TextScroll'
import '../styles/Welcome.css'

function Welcome() {



return (
    <div className='Welcome__Container'>
        <HeaderHome />
        <div className='Star1'> <Stars /> </div>
        <div className='Star2'> <Stars /> </div>
        <div className='Star3'> <StarsFull /> </div>
        <div className='FuseeContainer'><Fusee /></div>
        <div className='TextScrollContainer'><TextScroll /></div>
        
    </div>
)
}

export default Welcome