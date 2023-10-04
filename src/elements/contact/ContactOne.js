import React from 'react';
import ContactForm from "./ContactForm";
import GoogleMapStyle from "./GoogleMapStyle";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";

const ContactOne = () => {
    return (
        <>
            <div className="row mt--40 row--15">
                <div className="col-lg-5">
                    <div className="rn-address mt-0">
                        <div className="icon">
                            <FiHeadphones />
                        </div>
                        <div className="inner">
                            <h4 className="title">Contact Phone Numbers</h4>
                            <p><a href="https://wa.me/79174531267">WhatsApp: +7 917 453 12 67 </a></p>
                            <p><a href="tel:+62 812 3 999 3502">Phone: +62 812 3 999 3502</a></p>
                        </div>
                    </div>

                    <div className="rn-address mb--40">
                        <div className="icon">
                            <FiMail />
                        </div>
                        <div className="inner">
                            <h4 className="title">My Email Address</h4>
                            <p><a href="mailto:nigmatullinaregina@gmail.com">nigmatullinaregina@gmail.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <ContactForm formStyle="contact-form-1" />
                </div>
            </div>
        </>
    )
}
export default ContactOne;