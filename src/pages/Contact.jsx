import Footer from '../components/Footer'
import HeaderWhite from '../components/HeaderWhite'
import '../styles/Contact.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Buble from '../components/Buble'

function Contact() {

    const WaterRef = useRef(null)
    const WaterRef2 = useRef(null)
    const WaterRef3 = useRef(null)

    useEffect(() => {
        const Quart = (window.innerWidth + 155) / 100
        const tl = gsap.timeline({ repeat: -1 })

        tl.to(WaterRef.current, {
            x: Quart,
            duration: 2,
            ease: "linear",
            repeat: -1,
            yoyo: true
        })

        tl.to(WaterRef2.current, {
            x: Quart,
            duration: 2,
            ease: "linear",
            repeat: -1,
            yoyo: true
        })

        tl.to(WaterRef3.current, {
            x: Quart,
            duration: 2,
            ease: "linear",
            repeat: -1,
            yoyo: true
        })

    }, []) // Ajouter [] pour ne faire l'effet qu'au premier rendu

    return (
        <div className="page-wrapper">
            <section id="ContactLink" className="Contact__Container">
                <HeaderWhite title={'Contact'} Titlecolor={'#FFFFFF'} color={'#FFFFFF'} NavbarColor={'#FFFFFF'} />
                <article>
                    <div className='Contact__EauMouvement'>
                        <div ref={WaterRef} className='Contact__Eau1'></div>
                        <div ref={WaterRef2} className='Contact__Eau2'></div>
                        <div ref={WaterRef3} className='Contact__Eau3'></div>
                    </div>
                    <div>
                        <div className='Contact__BubbleContainer1'><Buble /></div>
                        <div className='Contact__BubbleContainer2'><Buble /></div>
                        <div className='Contact__BubbleContainer3'><Buble /></div>
                    </div>
                    <form className='Contact__Form' name="contact" data-netlify="true" data-netlify-honeypot="bot-field" method='post'>
                        <input type="hidden" name="form-name" value="contact" />
                        <label htmlFor="name"></label>
                        <input className='Contact__InputName' type="text" name="name" required placeholder='Nom' />
                        <label htmlFor="email"></label>
                        <input className='Contact__InputEmail' type="email" name="email" required placeholder='E-mail' />
                        <label htmlFor="message"></label>
                        <textarea className='Contact__InputMessage' name="message" required placeholder='Message'></textarea>
                        <button className='Contact__ButtonSubmit' type="submit">Envoyer</button>
                    </form>
                </article>
                <div className='Footer__Container'>
                    <Footer />
                </div>
            </section>
        </div>
    )
}

export default Contact
