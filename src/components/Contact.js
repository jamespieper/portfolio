
import './styling/Contact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {


    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs
            .sendForm('service_zq5bptg', 'template_tynz6ce', form.current, {
                publicKey: 'IJy7fyxjtUTg0Oaeg',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }




    return (


        <>
            <div class="contact">


                <h1>Contact me!</h1>

                <h4>Feel free to send me a message if you have any questions or proposals!</h4>

                <div class="contact-container">
                    <div class="contact-form-container">

                        <form ref={form} onSubmit={sendEmail}>
                            <h6><label>Name</label></h6>
                            <input type="text" name="user_name" class="contact-name"/>
                            
                            <h6>
                            <label>Email</label>
                                </h6>
                            <input type="email" name="user_email" class="contact-email" />
                            
                            <h6>
                            <label>Message</label>
                                </h6>
                            <textarea name="message" class="contact-message"/>

                            <br></br>
                            <input type="submit" value="Send" className="contact-submit"/>
                        </form>


                    </div>

                </div>


                <div class="contact-socials">

                    <a href='https://github.com/jamespieper' target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="fa-3x m-4" inverse />
                    </a>

                    <FontAwesomeIcon icon={faEnvelope} className="fa-3x m-4" inverse />

                    <a href='https://linkedin.com/in/james-p-pieper' target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="fa-3x m-4" inverse />
                    </a>



                </div>


            </div>

        </>
    );
}

export default Contact;