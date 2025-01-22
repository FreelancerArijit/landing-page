import React from 'react'

function Contact(){
    return(
        <main>
           <div className="contact-body">
            <div className="contact-content">
                <h1>CONTACT US</h1>
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>

            <div className="contact-form">
                <div className="contact-form-right">
                    <div className="contact-form-button">
                        <div className='buttons'>
                            <button className='primary-button'>VIA SUPPORT CHAT</button>
                            <button className='primary-button'>VIA SUPPORT CALL</button>
                        </div>
                        <div>
                            <button className='secondary-button'>VIA EMAIL FORM </button>
                        </div>
                    </div>
                    <form action="">
                        <input type="text" name="name" id="" placeholder='Enter your name here' />
                        <input type="text" name="email" id="" placeholder='Enter your e-mail' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
                    <div className='submit'>
                        <button className='submit-button'>SUBMIT</button>
                        </div>
                    
                    </form>

                </div>

                <div className="contact-form-left">
                    <img src="../images/service.svg" alt="" className="src" />

                </div>
            </div>

           </div>




        </main>
    );
}
export default Contact;