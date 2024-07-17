import HeaderSecond from '../components/HeaderSecond'
import '../styles/Contact.css'
function Contact(){


return( 
    <section id="ContactLink" className="Contact__Container">
<HeaderSecond title={'Contact'} Titlecolor={"#212121"} color={'#212121'} NavbarColor={'#212121'} />
<article>

<form name="contact" method="post" data-netlify="true" onSubmit="submit">
          
            <input type="hidden" name="form-name" value="contact" />
            <label for ="name">Name: </label>
            <input type="text" name="name"/>
         
            <label for="email">Email: </label>
            <input type="email" name="email"/>
         
            <label for="message">Message: </label>
            <textarea name="message"></textarea>
          
            <button type="submit">Send</button>

        </form>
</article>
    </section>
)

}

export default Contact