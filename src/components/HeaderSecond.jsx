import Points from './Points'
import '../styles/HeaderSecond.css'
function HeaderSecond({title, color, Titlecolor, NavbarColor}){
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
          behavior: 'smooth'
        });
    }



    return(
        <header className='HeaderSecond'>
            <div className="HeaderSecondTitle__Container">
                <h2 className="TitleH2"   style={{ color: Titlecolor }}>{title}</h2>
                <Points color={color}/>
            </div>
           <nav>
            <ul className='HeaderSecondListe__Container' >
                <li className='HeaderSecondListe__Content'>
                    <a href='#AboutLink'
                    
                    
                    onClick={(e)=>{
                    e.preventDefault();
                    scrollToSection('AboutLink')}}
                    >A porpos</a>
                </li>
                <li className='HeaderSecondListe__Content'>
                    <a href='#ProjectLink'
                    
                    onClick={(e)=>{
                    e.preventDefault();
                    scrollToSection('ProjectLink')}}>Projets</a></li>
                <li className='HeaderSecondListe__Content'>
                    <a href='#ContactLink'
                    
                    onClick={(e)=>{
                    e.preventDefault();
                    scrollToSection('ContactLink')}}
                    >Contact</a></li>
            </ul>
           </nav>
        </header>
    )
}

export default HeaderSecond