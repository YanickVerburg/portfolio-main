import React from 'react';
import '../styles/style.css';

export default class Contact extends React.Component {
    componentDidMount() {
        document.title = "Contact - YV";
      }
    render() {
        return (
            <header style={{ height: "100%" }}>
                   <section id="contact-page">
                        <h3>Contact Me</h3>
                        <div className="wrapper3">
                            <div>
                                <div>
                                    <i className="fas fa-mail-bulk"></i>
                                </div>
                                <div className="nested3">
                                <form action="https://formsubmit.co/yanick.verburg@student.hu.nl" method="POST" type="hidden" name="_next" value="youtube.com">
                                <input type="hidden" name="_next" value="https://portfolio-9i4fuj0u0-yanickverburg.vercel.app/contact/submit" />
                                    <input type="text" name="name" placeholder="Name" required />
                                    <input type="email" name="email" placeholder="Email" required />
                                    <input type="text" name="subject" placeholder="Subject" required />
                                    <textarea name="message" placeholder="Message" id="message-input" required></textarea>
                                    <input type="submit" name="submit" value="Submit ➤" />
                                </form> 
                                </div>
                                <div className="box-icon2">
                                    <a href="https://github.com/YanickVerburg">
                                        <i className="fab fa-github-square"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/yanick-verburg-9b0aa9221/">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="mailto:yanick.verburg@student.hu.nl?cc=&bcc=&subject=Mail van YV Portfolio&body=Beste Yanick,">
                                        <i className="fas fa-envelope-square"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
            </header>
        );
    }
}