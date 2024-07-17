import Points from './Points'
import '../styles/HeaderWhite.css'
function HeaderWhite({title, color, Titlecolor, NavbarColor}){
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
          behavior: 'smooth'
        });
    }



    return(
        <header className='HeaderSecondWhite'>
            <div className="HeaderSecondTitleWhite__Container">
                <h2 className="TitleH2"   style={{ color: Titlecolor }}>{title}</h2>
                <Points color={color}/>
            </div>
           <nav>
            <ul className='HeaderSecondListeWhite__Container' >
                <li className='HeaderSecondListeWhite__Content'>
                    <a href='#AboutLink'
                    
                    
                    onClick={(e)=>{
                    e.preventDefault();
                    scrollToSection('AboutLink')}}
                    >About</a>
                </li>
                <li className='HeaderSecondListeWhite__Content'>
                    <a href='#ProjectLink'
                    
                    onClick={(e)=>{
                    e.preventDefault();
                    scrollToSection('ProjectLink')}}>Project</a></li>
                <li className='HeaderSecondListeWhite__Content'>
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

export default HeaderWhite