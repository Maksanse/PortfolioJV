import Cloud from '../components/Cloud'
import HeaderSecond from '../components/HeaderSecond'
import Plane from '../components/Plane';
import '../styles/About.css'
import gsap from 'gsap';

function About(){

    const animateToLeft = (element) => {
        gsap.to(element, {
          x: -window.innerWidth,
          duration: 20,
          ease: "linear"
        });
      };
      
      const animateToLeft1 = (element) => {
        gsap.to(element, {
            x: -window.innerWidth,
            duration: 15,
             ease: "linear"
        });
      };
      
      const animateToLeft2 = (element) => {
        gsap.to(element, {
            x: -window.innerWidth,
            duration: 20,
             ease: "linear"
        });
      };

      const animateToLeft3 = (element) => {
        gsap.to(element, {
            x: -window.innerWidth -300,
            duration: 20,
            repeat:-1,
             ease: "linear"
        });
      };

      const animateToLeft4 = (element) => {
        gsap.to(element, {
            x: -window.innerWidth -300,
            duration: 25,
            repeat:-1,
            delay:2,
             ease: "linear"
        });
      };

      const animateToLeft5 = (element) => {
        gsap.to(element, {
            x: -window.innerWidth -300,
            duration: 20,
            repeat:-1,
            delay:10,
             ease: "linear"
        });
      };

      const animateToLeft6 = (element) => {
        gsap.to(element, {
            x: -window.innerWidth -300,
            duration: 15,
            repeat:-1,
            delay:12,
             ease: "linear"
        });
      };

return(
    <div id='AboutLink' className="About__Container">
        <HeaderSecond title={'A propos'} Titlecolor={'#212121'} color={'#212121'} NavbarColor={'#212121'}/>
        <div className='CLouds__ContainerClouds'>
            <div className='About__Cloud1'><Cloud animation={animateToLeft} /></div>
            <div className='About__Cloud2'><Cloud animation={animateToLeft1}/></div>
            <div className='About__Cloud3'><Cloud animation={animateToLeft2}/></div>
            <div className='About__Cloud4'><Cloud animation={animateToLeft3}/></div>
            <div className='About__Cloud5'><Cloud animation={animateToLeft4}/></div>
            <div className='About__Cloud6'><Cloud animation={animateToLeft5}/></div>
            <div className='About__Cloud7'><Cloud animation={animateToLeft6}/></div> 
        </div>
        <div className='Plane__Container'>
          <Plane />
        </div>
        
   
        
    </div>
)

}
export default About