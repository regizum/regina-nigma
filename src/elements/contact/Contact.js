import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactOne from "./ContactOne";

const Contact = () => {
    return (
        <>
            <SEO title="Regina Nigma | Contact Me" />
            <Layout>
                <div className="main-content">
                    {/* Start Contact Area  */}
                    <div className="rwt-contact-area rn-section-gap">
                        <div className="container">
                            <div className="mb--40">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "My Contact Details"
                                    title = "Contact Me"
                                    description = ""
                                />
                            </div>
                            <ContactOne />
                        </div>
                    </div>
                    {/* End Contact Area  */}
                </div>
            </Layout>
        </>
    )
}
export default Contact;