import '../styles/Project.css'
import HeaderWhite from '../components/HeaderWhite'
import Card from '../components/Card.jsx'
import InformationsProjects from '../datas/informationsProjects.json'

function Project(){

return(
    <section id='ProjectLink' className="Project__Container">
        <HeaderWhite title={'Project'} Titlecolor={'white'} color={'white'} NavbarColor={'white'}/>
    <article className='Project__Card'>
        <div>
            <div className='Project__Sable1'></div>
            <div className='Project__Sable2'></div>
            <div className='Project__Sable3'></div>
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