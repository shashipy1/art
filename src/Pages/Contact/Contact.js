import React from 'react';
import './contact.css';

function About() {
    return (
        <>
            <section className='contact'>
                <div className='content-contact'>
                    <h2>
                        contact us
                    </h2>
                    <p>I am Ranjeet Kumar, Please fill this form for contact us</p>
                </div>
                <div className='contain'>
                    <div className='contactInfo'>
                        <div className='box'>
                            <div className='icon'><i class="fa-solid fa-location-dot"></i></div>
                            <div className='text'>
                                <h3>Address</h3>
                                <p>821306 Berkap<br />Darihat, <br />Rohtas(Bihar)</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon'><i class="fa-solid fa-phone-volume"></i></div>
                            <div className='text'>
                                <h3>Mobile number</h3>
                                <p>7004951479</p>
                            </div>
                            <div className='box'>
                                <div className='icon'><i class="fa-solid fa-envelope"></i></div>
                                <div className='text'>
                                    <h3>Email</h3>
                                    <p>shashikant.deligence@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contactForm'>
                        <form>
                            <h2>
                                Send Messege
                            </h2>
                            <div className='inputBox'>
                                <input className='input' type='text' name='' required="required" />
                                <span>Full name</span>
                            </div>
                            <div className='inputBox'>
                                <input className='input' type='text' name='' required="required" />
                                <span>Email</span>
                            </div>
                            <div className='inputBox'>
                                <textarea required="required"></textarea>
                                <span>Type your Messege...</span>
                            </div>
                            <div>
                                <input className='submit' type='submit' name='' value='send' />
                            </div>
                        </form>
                    </div>
                </div>
            </section></>
    );
}

export default About;
