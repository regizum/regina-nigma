import React from 'react';
import {FiPhone, FiMapPin, FiMail} from "react-icons/fi";
import recommendation from '../../assets/pdf/Recommendation-Letter-Regina-Nigmatullina.pdf';
import cv from '../../assets/pdf/CV-Regina-Nigmatullina.pdf';
import SectionTitle from "../sectionTitle/SectionTitle";

const AboutFive = () => {
    return (
        <div className="about-style-5 rn-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="about-wrapper align-items-center theme-shape theme-shape-top">
                            <div className="content">
                                <div className="inner">
                                    <SectionTitle
                                        textAlign="text-left"
                                        radiusRounded=""
                                        subtitle={"Summary"}
                                        title="About Me"
                                        description=""
                                    />
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
                                    <ul className="contact-address list-inline">
                                        <li><FiMapPin /> Bali, Indonesia & Dubai, UAE</li>
                                        <li><FiMail /> nigmatullinaregina@gmail.com</li>
                                        <li><FiPhone /> +62 812 3 999 3502</li>
                                    </ul>
                                    <div className="download-button mt--20">
                                        <a className="btn-read-more mr--15" href={cv} target = "_blank" rel="noreferrer"><span>Download My CV</span></a>
                                        <a className="btn-read-more" href={recommendation} target = "_blank" rel="noreferrer"><span>Download Recommendation Letter</span></a>
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
export default AboutFive;