import React from "react"

import "./Contact.css"

function Contact() {


    return <section id="contact" className="pt-5">
        <div id="contact-intro">
            <div className="container">

                <h3 className="pt-4 section-title text-white font-weight-bold text-center mb-4">How do you take your coffee? ☕</h3>
                <div className="section-intro mx-auto text-center mb-5 text-white">
                    I'd love to chat about any of my projects, working together, learning opportunities or just a general natter about all things code! You can reach me via any of the following:
                 <ul className="list-inline list-unstyled  pt-2 mt-4">
                        <li className="social-icon list-inline-item text-white"><a href="https://twitter.com/bobbytbls" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <li className=" social-icon list-inline-item text-white"><a href="https://www.facebook.com/rpollock03/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                        <li className="social-icon list-inline-item text-white"><a href="https://github.com/rpollock03" target="_blank"><i class="fab fa-github"></i></a></li>
                        <li className="social-icon list-inline-item text-white"><a href=""><i class="fab fa-instagram" target="_blank"></i></a></li>
                        <li className="social-icon list-inline-item text-white">
                            <a href=""><i class="far fa-envelope"></i></a>
                        </li>
                    </ul>
                </div>
                <form className="mx-md-5 my-5 " style={{ padding: "40px", borderRadius: "20px", backgroundColor: "#fff", boxShadow: "0 15px 30px 0 rgb(0 0 0 / 20%)" }}>
                    <h3 className="text-center py-2">Send me a message:</h3>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="John Smith" />
                    </div>
                    <div className="form-group">
                        <label for="email">Your email:</label>
                        <input type="email" className="form-control" id="email" placeholder="john.smith@gmail.com" />
                    </div>
                    <div className="form-group">
                        <label for="message">Message:</label>
                        <textarea className="form-control" id="message" placeholder="Your message here" rows="6" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block  ">Send</button>
                </form>
            </div>

            <nav id="navbar-footer" class="navbar navbar-expand-lg sticky-bottom">
                <div className="container justify-content-center">
                    <span class="navbar-brand">Made with Bootstrap, React and ❤️ <span className="d-none d-md-inline">- © Robert Pollock 2021</span> </span>
                </div>

            </nav>
        </div>

    </section>
}

export default Contact