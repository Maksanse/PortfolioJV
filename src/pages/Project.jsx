import '../styles/Project.css'
import HeaderWhite from '../components/HeaderWhite'
import Card from '../components/Card.jsx'
import InformationsProjects from '../datas/informationsProjects.json'
import Palmier from '../components/Palmier.jsx'
import EtoileMerRose from '../components/EtoileMerRose.jsx'
import EtoileMerOrange from '../components/EtoileMerOrange.jsx'
import Sable from '../components/Sable.jsx'
import Bird from '../components/Bird.jsx'

function Project(){

return(
    <section id='ProjectLink' className="Project__Container">
        <HeaderWhite title={'Project'} Titlecolor={'white'} color={'white'} NavbarColor={'white'}/>
    <article className='Project__Card'>
        <div>
            <div className='Project__Bird'><Bird /></div>
            <div className='Project__SableContainer'><Sable /> </div>
            
        </div>
           <div className='Card__Container'>

        {InformationsProjects.map((projet,index)=>
        <Card
        key={index}
        projet={projet}
        />
    )}
</div>
    </article>

     
    
</section>
)

}

export default Project