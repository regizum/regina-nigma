import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

const TimelineData = [
  {
    id: "0",
    date: "March 2024 - Present",
    title: "Senior Front-End Developer at Coral",
    description: `<ul>
        <li>Designed and developed the entire Front End, optimizing performance and ensuring a seamless user experience using Vue, Nuxt, TailwindCSS, SSR</li>
        <li>Developed Shopify Plugin</li>
    </ul>`,
    image: "coral.png",
  },
  {
    id: "1",
    date: "October 2018 - March 2024",
    title: "Lead Front-End Developer at Similie",
    description: `<ul>
        <li>Led the complete redesign and implementation of front-end experience. Boosted user satisfaction by 50% and optimized product efficiency by 80% and website performance by 25%.</li>
        <li>Authored over 300 reusable components, modules and libraries optimized for maximum users satisfaction.</li>
        <li>Introduced dynamic theming feature allowing Light and Dark theme switching, culminating in a 30% increase in user satisfaction.</li>
        <li>Worked in cross-functional teams to develop and execute on-time and on-budget projects and initiatives by effectively communicating using tools such as Slack and Zoom.</li>
    </ul>`,
    image: "similie.jpg",
    workingStep: [
      {
        stepTitle: "Complete Redesign",
        stepDescription:
          "One of my major achievements was the complete redesign and implementation of the front-end experience for Similie's flagship product, Parabl. This project involved reworking a complex application codebase with years of legacy code, showcasing my ability to tackle significant challenges.",
      },
      {
        stepTitle: "Organized Styles System with BEM Methodology",
        stepDescription:
          "I implemented the BEM (Block, Element, Modifier) methodology to create a highly organized UI component system. This approach ensured the maintainability and scalability of our front-end codebase, resulting in streamlined development processes.",
      },
      {
        stepTitle: "Theme Customization",
        stepDescription:
          "As part of my contributions, I introduced a dynamic theming feature that allowed users to switch between Light and Dark themes effortlessly. This enhancement provided users with a more personalized and visually pleasing experience.",
      },
    ],
    projects: [
      {
        id: 7,
        title: "Read More",
      },
    ],
  },
  {
    id: "2",
    date: "January 2019 - October 2019",
    title: "Front-End Developer at CodersClan",
    description: `<ul>
        <li>Developed 10+ responsive WordPress templates that met clients' aesthetic requirements and improved website performance by 30%.</li>
        <li>Developed smooth and efficient user experience for a mobile game app using Cordova, meeting client's requirements.</li>
        <li>Developed custom Eurovision 2019 sponsor Wordpress template, resulting in a 15% boost in sponsor sign-ups.</li></ul>`,
    image: "namogoo.jpg",
    workingStep: [
      {
        stepTitle: "Responsive WordPress Templates",
        stepDescription:
          "I was responsible for implementing WordPress templates that not only met the aesthetic requirements of clients but were also highly responsive. These templates were rigorously tested to ensure compatibility across a wide range of browsers, ensuring a seamless user experience for all visitors.",
      },
      {
        stepTitle: "Eurovision 2019 Sponsor Website Template",
        stepDescription:
          "One of the standout projects I worked on involved creating a bespoke website template for one of the main sponsors of Eurovision 2019 in Israel. This high-profile project demanded creativity, precision, and attention to detail to capture the essence of the event while effectively conveying the sponsor's message. The successful launch and positive feedback from the client and users were a testament to our team's dedication and expertise.",
      },
      {
        stepTitle: "Cordova Mobile Application Development",
        stepDescription:
          "I also had the privilege of developing a mobile application for a game using Cordova. Leveraging my mobile app development skills, I crafted a user-friendly and engaging mobile gaming experience.",
      },
    ],

    projects: [
      {
        id: 4,
        title: "Project Example (App)",
      },
      {
        id: 5,
        title: "Project Example (Website)",
      },
    ],
  },
  {
    id: "3",
    date: "March 2018 - August 2018",
    title: "Front-End Developer at Payever",
    description: `<ul><li>Refactored existing application, cutting development time by 30% while ensuring performance standings.</li>
        <li>Created reusable code library of UI Components, reducing development time for future projects by 50% and improving the efficiency of the development team.</li>
        <li>Granted additional code review permissions after demonstrating strong attention to detail that led to a 25% decrease in code errors.</li></ul>`,
    image: "payever.jpg",
    workingStep: [
      {
        stepTitle: "Angular 6 Development",
        stepDescription:
          "I was heavily involved in the development of complex web applications using Angular 6, leveraging its capabilities to create robust and responsive user interfaces.",
      },
      {
        stepTitle: "UI Component Development",
        stepDescription:
          "I took ownership of developing UI components based on our custom UI-kit system. This allowed us to consistently deliver the best user experience to our customers by ensuring a cohesive and visually appealing design across our applications.",
      },
      {
        stepTitle: "Code Reviews and Quality Assurance",
        stepDescription:
          "I played a key role in maintaining code quality by conducting thorough code reviews. This ensured consistency in coding standards and optimized the style system for better maintainability.",
      },
    ],
    projects: [
      {
        id: 6,
        title: "Read More",
      },
    ],
  },
  {
    id: "4",
    date: "July 2016 - March 2018",
    title: "Front-End Developer at Brobotics",
    description: `<ul><li>Developed 3 interactive front-end applications using the Angular framework and Typescript, enhancing consumer experience by 35%</li>
        <li>Optimized design system by utilizing BEM methodology, leading to a 30% increase in efficiency.</li></ul>`,
    image: "brobotics.jpg",
    workingStep: [
      {
        stepTitle: "Angular Development",
        stepDescription:
          "I was responsible for building one-page applications using Angular 2/4 and TypeScript, leveraging the latest technologies to create dynamic and responsive user interfaces.",
      },
      {
        stepTitle: "UI Organization",
        stepDescription:
          "I adopted the BEM (Block, Element, Modifier) methodology to structure and organize the style system. This resulted in well-structured UI components, enhancing code maintainability and collaboration within the development team.",
      },
      {
        stepTitle: "Mobile Application Development",
        stepDescription:
          "I contributed to the development of mobile applications using the Ionic framework, providing cross-platform solutions that delivered a consistent user experience across various devices and platforms.",
      },
    ],
  },
  {
    id: "5",
    date: "June 2012 - July 2016",
    title: "Web Developer at Kiweb",
    description:
      "<ul><li>Developed websites using HTML, CSS, jQuery, Javascript and CMS (Joomla, Wordpress, Drupal, etc).</li></ul>",
    workingStep: [
      {
        stepTitle: "Web Development",
        stepDescription:
          "I was responsible for developing websites from scratch using HTML, CSS, and jQuery. This involved creating responsive and user-friendly web interfaces that met client requirements.",
      },
      {
        stepTitle: "Content Management Systems (CMS)",
        stepDescription:
          "I had experience working with various Content Management Systems such as Joomla, Wordpress, and OpenCart. I was proficient in customizing and extending these CMS platforms to meet specific project needs, ensuring ease of content management for clients.",
      },
      {
        stepTitle: "Cross-Browser Compatibility",
        stepDescription:
          "Ensuring that websites functioned consistently across different web browsers was a priority. I conducted extensive testing and implemented solutions to address any compatibility issues that arose.",
      },
    ],
  },
];

const TimelineOne = () => {
  return (
    <div className="rn-timeline-wrapper timeline-style-one position-relative">
      <div className="timeline-line"></div>
      {/* Start Single Timeline  */}

      {TimelineData.map((data, index) => (
        <div className="single-timeline mt--50" key={index}>
          <div className="timeline-dot">
            <div className="time-line-circle"></div>
          </div>
          <div className="single-content">
            <div className="inner">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <span className="date-of-timeline">{data.date}</span>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h4 className="title">{data.title}</h4>
              </ScrollAnimation>
              {data.image ? (
                <div className="row row--30 mt--40">
                  <div className="order-2 order-lg-1 col-lg-6">
                    <div className="content">
                      <div
                        dangerouslySetInnerHTML={{ __html: data.description }}
                      ></div>
                    </div>
                  </div>
                  <div className="order-1 order-lg-2 col-lg-6">
                    <div className="thumbnail mb--40">
                      <img
                        className="w-100"
                        src={`./images/timeline/${data.image}`}
                        alt={data.title}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="content mt--40">
                  <div
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  ></div>
                </div>
              )}
              {/* 
              <div className="row row--30">
                {data.workingStep.map((data, index) => (
                  <div className="col-lg-4 col-12" key={index}>
                    <div className="working-list">
                      <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}
                      >
                        <h5 className="working-title">{data.stepTitle}</h5>
                      </ScrollAnimation>

                      <p>{data.stepDescription}</p>
                    </div>
                  </div>
                ))}
              </div> */}

              {data.projects ? (
                <div className="read-morebtn">
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                  >
                    {data.projects.map((project, index) => (
                      <>
                        <Link
                          className="d-md-inline-block d-none btn-default btn-border mr--20 mt--20"
                          to={`/portfolio-details/${project.id}`}
                        >
                          <span>{project.title}</span>
                        </Link>
                        <Link
                          className="d-md-none d-block btn-block btn-default btn-border mr--20 mt--20"
                          to={`/portfolio-details/${project.id}`}
                        >
                          <span>{project.title}</span>
                        </Link>
                      </>
                    ))}
                  </ScrollAnimation>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}

      {/* End Single Timeline  */}
    </div>
  );
};

export default TimelineOne;
