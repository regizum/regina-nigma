import React from 'react'
import SEO from "../common/SEO";
import HeaderTwo from '../common/header/HeaderTwo';
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Typed from "react-typed";
import AboutOne from "../elements/about/AboutOne";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import FooterTwo from "../common/footer/FooterTwo";
import Copyright from "../common/footer/Copyright";
import ContactOne from "../elements/contact/ContactOne";
import {Link} from "react-router-dom";

const Splash = () => {
    return (
        <>
            <SEO title="Regina Nigma - Create website for your business to get more sales"/>
            <main className="page-wrapper">
                {/*<HeaderTopNews />*/}
                <HeaderTwo btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent"/>

                {/* Start Slider Area  */}
                <div className="height-950 bg-overlay bg_image"
                     style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/main-image.jpg)`}}>

                    {/*<div className="demo-slider-area slider-area bg-transparent slider-style-1 pb--100 pt--70">*/}
                    <div className="container">
                        <div className="row row--30">
                            <div className="order-2 order-lg-1 col-lg-7">
                                <div className="inner text-left">
                                    {/*<div className="react-image mb--20">*/}
                                    {/*    <img src="./images/demo/react-badge.png" alt="Doob React" />*/}
                                    {/*</div>*/}
                                    <h1 className="title display-two mt--130 mb--130 mb_sm--80 pt_sm--50">
                                        Create a website<br/>for your business<br/>
                                        <span className="theme-gradient">to get more<br/><Typed
                                            strings={[
                                                "sales.",
                                                "clients.",
                                                "profit.",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        /></span>
                                    </h1>
                                    {/*<p className="description">We help our clients succeed by creating brand identities, digital experiences, and print materials.</p>*/}
                                    <div className="button-group">
                                        <Link className="btn-default btn-large round btn-icon" to="/contact">Contact Me</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}


                {/* Start About Area  */}
                <AboutOne/>
                {/* End About Area  */}

                <Separator/>

                <div className="rwt-portfolio-area rn-section-gap" id="portfolio">
                    <div className="container">
                        <SectionTitle
                            textAlign="text-center"
                            radiusRounded=""
                            subtitle={"Some Of My Works"}
                            title="My Portfolio"
                            description=""
                        />
                        <PortfolioOne Column="col-lg-6 col-md-6 col-sm-12 col-12 mt--30 portfolio"/>
                    </div>
                </div>

                <Separator/>

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

        </>
    )
}

export default Splash;