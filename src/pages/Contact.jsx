import HeaderSecond from '../components/HeaderSecond'
import '../styles/Contact.css'
function Contact(){


return( 
    <section id="ContactLink" className="Contact__Container">
<HeaderSecond title={'Contact'} Titlecolor={"#212121"} color={'#212121'} NavbarColor={'#212121'} />
<article>

<form name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    
    <label htmlFor="name">Name:</label>
    <input type="text" name="name" required />

    <label htmlFor="email">Email:</label>
    <input type="email" name="email" required />

    <label htmlFor="message">Message:</label>
    <textarea name="message" required></textarea>

    <button type="submit">Send</button>
</form>
</article>
    </section>
)

}

export default Contact