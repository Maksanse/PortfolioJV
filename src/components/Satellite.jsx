import sat from '../assets/sateliteBlanc.png'
import '../styles/Satellite.css'

function Satellite(){


    return(
        <div>
            <img className='Satellite__Image' src={sat} alt="Satellite"></img>
        </div>
    )
}

export default Satellite