import React, {useRef} from "react";
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Microsoft from '../../assets/microsoft.png';
import Adobe from '../../assets/adobe.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_lyxhstf', 'template_lqamxpr', form.current, {
                publicKey: '4pEeiw_uuLcgE4zhk',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert('Email sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">Descriptionjdfnkjsdbvjkbsk</p>
            </div>
            <div className="clientImg">
                <img src={Walmart} alt="Client" className="clientImg"/>
                <img src={Adobe} alt="Client" className="clientImg"/>
                <img src={Microsoft} alt="Client" className="clientImg"/>
                <img src={Facebook} alt="Client" className="clientImg"/>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle"></h1>
                <span className="contactDesc"></span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="name" className="name" placeholder='Your Name' name='your_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="FacebookIcon" className="link"/>
                        <img src={InstagramIcon} alt="InstagramIcon" className="link"/>
                        <img src={TwitterIcon} alt="TwitterIcon" className="link"/>
                        <img src={YoutubeIcon} alt="YoutubeIcon" className="link"/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;