import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import {FiArrowRight} from "react-icons/fi";
import Logo from "../logo/Logo";
import {Link} from "react-router-dom";

const callToActionData = {
    title: "Ready to start creating a standard website?",
    subtitle: "This website is built with React.js.",
    btnText: "Contact Me",
}

const CalltoActionSeven = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-7">
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper">
                    <div className="col-lg-8 col-md-8">
                        <div className="inner">
                            <div className="content text-left">
                                <Logo
                                    image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                                    image2={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`}
                                />
                                <p className="subtitle mt--30">{callToActionData.subtitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                            <div className="call-to-btn text-left mt_sm--20 text-md-right">
                                <Link className="btn-default btn-icon" to="/contact">{callToActionData.btnText} <i
                                    className="icon"><FiArrowRight/></i></Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionSeven;