import React from 'react'
import {Link} from "react-router-dom";
import SEO from "../common/SEO";
import HeaderTwo from '../common/header/HeaderTwo';
import ScrollTop from "../common/footer/ScrollTop";
import TimelineOne from "../elements/timeline/TimelineOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import FooterTwo from "../common/footer/FooterTwo";
import Copyright from "../common/footer/Copyright";
import AboutFive from "../elements/about/AboutFive";
import CalltoActionFiveTwo from "../elements/calltoaction/CalltoActionFiveTwo";
import ProgressbarOne from "../elements/progressbar/ProgressbarOne";

const Freelancer = () => {
    return (
        <>
            <SEO title="Regina Nigma | My Work Experience"/>
            <main className="page-wrapper">
                <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-transparent"/>

                {/* Start Slider area  */}
                <div className="slider-area slider-style-2 variation-3 height-850 bg-overlay bg_image theme-shape"
                     style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/main-image.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="inner text-left">
                                    <h1 className="title">Hello, I am‍ <br/><span className="theme-gradient">Regina Nigmatullina!</span>
                                    </h1>
                                    <p className="description text-white">Senior Front-End Developer with 11 years
                                        extensive
                                        experience.</p>
                                    <div className="button-group mt--40 mt_sm--20">
                                        <Link className="btn-default btn-large round btn-icon" to="/contact">Click To
                                            Hire Me</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider area  */}

                <AboutFive/>
                {/*<AboutTwo />*/}


                <div className="rwt-timeline-area rn-section-gap pt--0" id="experience">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle={"Frameworks"}
                                    title="My Skills"
                                    description=""
                                />
                                <ProgressbarOne/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="rwt-timeline-area rn-section-gap" id="experience">
                    <div className="container">
                        <SectionTitle
                            textAlign="text-center"
                            radiusRounded=""
                            subtitle={"Experience"}
                            title="My Work Experience"
                            description=""
                        />
                        <TimelineOne/>
                    </div>
                </div>

                <div className="rwt-timeline-area rn-section-gap">
                    <div className="container">
                        <CalltoActionFiveTwo/>
                    </div>
                </div>


                <div className="rwt-portfolio-area rn-section-gap">
                    <div className="container">
                        <SectionTitle
                            textAlign="text-center"
                            radiusRounded=""
                            subtitle={"My Contact Details"}
                            title="Contact Me"
                            description=""
                        />
                        <ContactOne/>
                    </div>
                </div>

                <FooterTwo/>
                <Copyright/>
            </main>
            <ScrollTop/>
        </>
    )
}
export default Freelancer;