import '../styles/Footer.css'
import LogoGit from "../assets/LogoGit.png"
function Footer(){

return(
    <footer>
        <div>
            <p>@CreateByMaxence</p>
        </div>
        <div>
            <ul>
                <li><a href="https://github.com/Maksanse?tab=repositories" target='blanck'><img src={LogoGit} alt="LogoGit"></img></a></li>
            </ul>
        </div>
    </footer>
)

}

export default Footer