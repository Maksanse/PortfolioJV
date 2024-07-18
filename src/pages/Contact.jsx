import Footer from '../components/Footer'
import HeaderSecond from '../components/HeaderSecond'
import '../styles/Contact.css'
function Contact(){


return( 
    <section id="ContactLink" className="Contact__Container">
<HeaderSecond title={'Contact'} Titlecolor={"#212121"} color={'#212121'} NavbarColor={'#212121'} />
<article>

<form className='Contact__Form' name="contact" data-netlify="true" data-netlify-honeypot="bot-field" method='post'>
    <input type="hidden" name="form-name" value="contact" />
    
    <label htmlFor="name"></label>
    <input className='Contact__InputName' type="text" name="name" required placeholder='Name'/>

    <label htmlFor="email"></label>
    <input className='Contact__InputEmail' type="email" name="email" required  placeholder='Email'/>

    <label htmlFor="message"></label>
    <textarea className='Contact__InputMessage' name="message" required placeholder='Message'></textarea>

    <button className='Contact__ButtonSubmit' type="submit">Send</button>
</form>
</article>
<div className='Footer__Container'>
    <Footer />
</div>

    </section>
)

}

export default Contact