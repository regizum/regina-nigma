import React from "react";
import recommendation from "../../assets/pdf/Recommendation-Letter-Regina-Nigmatullina.pdf";

const TestimonialData = {
  id: "01",
  description:
    " I believe she will be best suited to projects with demanding requirements and will offer strong contributions to any fast-paced, highly structured teams. I am confident that she can rise up and meet any development challenges she might be offered.",
  name: "Adam Smith",
  subtitle: "CTO, Similie",
  image: "adam",
};

const TestimonialTwo = ({ column, teamStyle }) => {
  return (
    <div className="row">
      <div className={`${column}`}>
        <div className={`testimonial-style-two ${teamStyle}`}>
          <div className="row align-items-center row--20">
            <div className="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
              <div className="content mt_sm--40">
                {TestimonialData.form ? (
                  <span className="form">{TestimonialData.form}</span>
                ) : null}
                <p className="description">{TestimonialData.description}</p>

                <div className="row">
                  <div className="client-info col">
                    <h4 className="title">{TestimonialData.name}</h4>
                    <h6 className="subtitle">{TestimonialData.subtitle}</h6>
                  </div>
                  <a
                    className="btn-read-more ml-auto col"
                    href={recommendation}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Download Recommendation Letter</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 order-md-2 col-lg-4 col-md-4">
              <div className="thumbnail">
                <img
                  className="w-100"
                  src={`./images/testimonial/${TestimonialData.image}.jpeg`}
                  alt="Corporate React Template"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialTwo;
