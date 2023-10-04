import React from 'react';
import Typed from 'react-typed';

const AboutOne = () => {
    return (
        <div className="rwt-about-area rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/about-me2.jpg" alt="About Images"/>
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="section-title">
                                <h2 className="title">About me</h2>
                                <p>
                                    Hello, I'm Regina, a passionate software engineer with 11 years of experience in
                                    front-end development. I love crafting visually appealing websites and am dedicated
                                    to my work, both as a full-time software developer and a freelancer.

                                </p>

                                <h3>Why Choose Me?</h3>

                                <p>
                                    I pay meticulous attention to detail, have a great eye for design, and am known for
                                    my reliability. My extensive experience can help you achieve your web-related goals.
                                    Let's collaborate and make your vision a reality.
                                </p>

                                <p>Explore my portfolio and get in touch – let's create something amazing together!</p>

                                <div className="d-flex mt--40">
                                    <div className="read-more-btn">
                                        <a className="btn-default" href="#"><span>More About Me</span></a>
                                    </div>
                                    <div className="read-more-btn ml--20">
                                        <a className="btn-default" href="#"><span>Contact Me</span></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutOne
