
import '../styles/HeaderHome.css'
import Points from './Points'


function HeaderHome(){
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
          behavior: 'smooth'
        });
    }


    return(
        <header className='Header'>
            <div className="HeaderTitle__Container">
                <h1 className="TitleH1">Welcome to my Portfolio</h1>
                <Points color={'white'}/>
            </div>
           <nav>
            <ul className='HeaderListe__Container'>
                <li className='HeaderListe__Content'>
                    <a  onClick={(e)=>{
                        e.preventDefault();
                        scrollToSection('AboutLink')}}
                        href='#AboutLink'>
                        About
                    </a>
                </li>
                <li className='HeaderListe__Content'>
                    <a onClick={(e)=>{
                        e.preventDefault();
                        scrollToSection('ProjectLink')}}
                        href='#ProjectLink'>
                        Project</a></li>
                <li className='HeaderListe__Content'>
                    <a onClick={(e)=>{
                        e.preventDefault();
                        scrollToSection('ContactLink')}}
                        href='#ContactLink'>
                        Contact</a></li>
            </ul>
           </nav>
        </header>
    )
}

export default HeaderHome