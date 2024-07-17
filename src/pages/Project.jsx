import '../styles/Project.css'
import HeaderWhite from '../components/HeaderWhite'
import Card from '../components/Card.jsx'
import InformationsProjects from '../datas/informationsProjects.json'

function Project(){

return(
    <section id='ProjectLink' className="Project__Container">
        <HeaderWhite title={'Project'} Titlecolor={'white'} color={'white'} NavbarColor={'white'}/>
    <article className='Project__Card'>
           <ul className='Card__Container'>

        {InformationsProjects.map((projet,index)=>
        <Card
        key={index}
        projet={projet}
        />
    )}
</ul>
    </article>

     
    
</section>
)

}

export default Project