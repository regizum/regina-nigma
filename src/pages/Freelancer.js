import React from 'react'
import {Link} from "react-router-dom";
import SEO from "../common/SEO";
import {FiArrowDown, FiArrowRight} from "react-icons/fi";
import HeaderTwo from '../common/header/HeaderTwo';
import CopyrightTwo from '../common/footer/CopyrightTwo';
import ScrollTop from "../common/footer/ScrollTop";
import SectionTitleTwo from "../elements/sectionTitle/SectionTitleTwo";
import PricingOne from "../elements/pricing/PricingOne";
import BrandThree from "../elements/brand/BrandThree";
import TimelineOne from "../elements/timeline/TimelineOne";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import ContactForm from "../elements/contact/ContactForm";
import AboutTwo from "../elements/about/AboutTwo";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import FooterTwo from "../common/footer/FooterTwo";
import Copyright from "../common/footer/Copyright";
import AboutFive from "../elements/about/AboutFive";
import CalltoActionFiveTwo from "../elements/calltoaction/CalltoActionFiveTwo";


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
                                    <p className="description text-white">Senior Front-End Developer with 11 years extensive
                                        experience.</p>
                                    <div className="button-group mt--40 mt_sm--20">
                                        <a className="btn-default btn-large round btn-icon" href="/contact">Click To Hire Me</a>
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
                        <CalltoActionFiveTwo />
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