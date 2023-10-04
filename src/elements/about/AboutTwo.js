import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import {Link} from "react-router-dom";
import {FiArrowRight, FiCheck} from "react-icons/fi";

const AboutTwo = () => {
    return (
        <div className="rwt-about-area about-style-2 rn-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <div className="content">
                            <div className="section-title">
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <h4 className="subtitle"><span className="theme-gradient">Summary</span></h4>
                                    <h2 className="title mt--10">About Me</h2>
                                </ScrollAnimation>

                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p>I'm professional Front-End Developer with 11 years of extensive experience.</p>
                                    <p>I have commercial development experience using Angular, AngularJS, React, Vue3,
                                        Ionic,
                                        React Native. Proficient in JavaScript, TypeScript, HTML5, CSS3, SASS, and LESS.
                                        I have
                                        a deep understanding of web development tools and practices.</p>
                                    <p>Having worked in Agile teams, I bring a collaborative and adaptive approach to my
                                        work. I’m
                                        quick to identify and resolve bugs, both in Javascript and Typescript, and has
                                        pixel-perfect
                                        accuracy when defining and implementing front-end experiences.
                                    </p>
                                    <p>
                                        My goal is to provide clean usable interfaces and develop the most flexible and
                                        efficient
                                        application.
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <div className="read-more-btn mt--40">
                                        <Link className="btn-default btn-icon" to="#">Contact Me <i
                                            className="icon"><FiArrowRight/></i></Link>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTwo;
