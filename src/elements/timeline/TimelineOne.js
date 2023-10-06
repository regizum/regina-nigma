import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        date: "October 2018 - October 2023",
        title: "Lead Front-End Developer at Similie",
        description: "<p>I have had the privilege of serving as a Front-End Developer at Similie since October 2018. Over the years, I have evolved into a dynamic and proficient front-end developer, contributing significantly to the success of Similie.</p><p>My work at Similie has underscored my commitment to delivering high-quality front-end solutions and my ability to adapt to evolving design and development requirements.</p><p>I took on a leading role within the company and demonstrated a meticulous, action-oriented approach. I proactively initiated projects, collaborated with team members, and established well-defined paths for execution and accountability.</p>",
        image: "similie",
        workingStep: [
            {
                stepTitle: "Complete Redesign",
                stepDescription: "One of my major achievements was the complete redesign and implementation of the front-end experience for Similie's flagship product, Parabl. This project involved reworking a complex application codebase with years of legacy code, showcasing my ability to tackle significant challenges.",
            },
            {
                stepTitle: "Organized Styles System with BEM Methodology",
                stepDescription: "I implemented the BEM (Block, Element, Modifier) methodology to create a highly organized UI component system. This approach ensured the maintainability and scalability of our front-end codebase, resulting in streamlined development processes.",
            },
            {
                stepTitle: "Theme Customization",
                stepDescription: "As part of my contributions, I introduced a dynamic theming feature that allowed users to switch between Light and Dark themes effortlessly. This enhancement provided users with a more personalized and visually pleasing experience.",
            },
        ],
        projects: [{
            id: 7,
            title: "Read More"
        }]
    },
    {
        id: "2",
        date: "January 2019 - October 2019",
        title: "Front-End Developer at CodersClan",
        description: "<p>As a Front-End Developer and Mobile App Developer, I had the opportunity to work on several exciting projects that showcased my skills in Front-End and mobile app development.</p><p>Throughout my tenure, I consistently demonstrated my ability to deliver innovative and high-quality solutions, meeting and often exceeding client expectations. These experiences have not only honed my technical skills but also enriched my problem-solving and teamwork abilities.</p>",
        image: "namogoo",
        workingStep: [
            {
                stepTitle: "Responsive WordPress Templates",
                stepDescription: "I was responsible for implementing WordPress templates that not only met the aesthetic requirements of clients but were also highly responsive. These templates were rigorously tested to ensure compatibility across a wide range of browsers, ensuring a seamless user experience for all visitors.",
            },
            {
                stepTitle: "Eurovision 2019 Sponsor Website Template",
                stepDescription: "One of the standout projects I worked on involved creating a bespoke website template for one of the main sponsors of Eurovision 2019 in Israel. This high-profile project demanded creativity, precision, and attention to detail to capture the essence of the event while effectively conveying the sponsor's message. The successful launch and positive feedback from the client and users were a testament to our team's dedication and expertise.",
            },
            {
                stepTitle: "Cordova Mobile Application Development",
                stepDescription: "I also had the privilege of developing a mobile application for a game using Cordova. Leveraging my mobile app development skills, I crafted a user-friendly and engaging mobile gaming experience.",
            },
        ],

        projects: [
            {
                id: 4,
                title: "Project Example (App)"
            },
            {
                id: 5,
                title: "Project Example (Website)"
            }
        ]
    },
    {
        id: "3",
        date: "March 2018 - August 2018",
        title: "Front-End Developer at Payever",
        description: "<p>In my role as a Front-End Developer at Payever, I had the opportunity to work on complex applications using Angular 6. I contributed significantly to the success of our projects and improve the overall user experience. My dedication to code quality and innovative solutions positively impacted the team's productivity and the satisfaction of our end-users.</p>",
        image: "payever",
        workingStep: [
            {
                stepTitle: "Angular 6 Development",
                stepDescription: "I was heavily involved in the development of complex web applications using Angular 6, leveraging its capabilities to create robust and responsive user interfaces.",
            },
            {
                stepTitle: "UI Component Development",
                stepDescription: "I took ownership of developing UI components based on our custom UI-kit system. This allowed us to consistently deliver the best user experience to our customers by ensuring a cohesive and visually appealing design across our applications.",
            },
            {
                stepTitle: "Code Reviews and Quality Assurance",
                stepDescription: "I played a key role in maintaining code quality by conducting thorough code reviews. This ensured consistency in coding standards and optimized the style system for better maintainability.",
            },
        ],
        projects: [{
            id: 6,
            title: "Read More"
        }]
    },
    {
        id: "4",
        date: "July 2016 - March 2018",
        title: "Front-End Developer at Brobotics",
        description: "<p>In my role as a Front-End Developer at Payever, I had the opportunity to work on complex applications using Angular 6. I contributed significantly to the success of our projects and improve the overall user experience. My dedication to code quality and innovative solutions positively impacted the team's productivity and the satisfaction of our end-users.</p>",
        image: "brobotics",
        workingStep: [
            {
                stepTitle: "Angular Development",
                stepDescription: "I was responsible for building one-page applications using Angular 2/4 and TypeScript, leveraging the latest technologies to create dynamic and responsive user interfaces.",
            },
            {
                stepTitle: "UI Organization",
                stepDescription: "I adopted the BEM (Block, Element, Modifier) methodology to structure and organize the style system. This resulted in well-structured UI components, enhancing code maintainability and collaboration within the development team.",
            },
            {
                stepTitle: "Mobile Application Development",
                stepDescription: "I contributed to the development of mobile applications using the Ionic framework, providing cross-platform solutions that delivered a consistent user experience across various devices and platforms.",
            },
        ]
    },
    {
        id: "5",
        date: "June 2012 - July 2016",
        title: "Web Developer at Kiweb",
        description: "<p>During my tenure as a Web Developer at Kiweb, I had the opportunity to work on various web projects where I played a crucial role in creating visually appealing and functional websites.</p><p>My role as a Web Developer at this company allowed me to combine my technical skills with creative design to deliver websites that were not only visually appealing but also functionally robust. I worked closely with clients to ensure that projects were delivered on time and met the highest quality standards.</p>",
        workingStep: [
            {
                stepTitle: "Web Development",
                stepDescription: "I was responsible for developing websites from scratch using HTML, CSS, and jQuery. This involved creating responsive and user-friendly web interfaces that met client requirements.",
            },
            {
                stepTitle: "Content Management Systems (CMS)",
                stepDescription: "I had experience working with various Content Management Systems such as Joomla, Wordpress, and OpenCart. I was proficient in customizing and extending these CMS platforms to meet specific project needs, ensuring ease of content management for clients.",
            },
            {
                stepTitle: "Cross-Browser Compatibility",
                stepDescription: "Ensuring that websites functioned consistently across different web browsers was a priority. I conducted extensive testing and implemented solutions to address any compatibility issues that arose.",
            },
        ]
    },
]

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
                                animateOnce={true}>
                                <span className="date-of-timeline">{data.date}</span>
                            </ScrollAnimation>

                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                <h2 className="title">{data.title}</h2>
                            </ScrollAnimation>
                            {data.image ? (
                                <div className="row row--30 mt--40">
                                    <div className="order-2 order-lg-1 col-lg-6">
                                        <div className="content">
                                            <div dangerouslySetInnerHTML={{__html: data.description}}></div>
                                        </div>
                                    </div>
                                    <div className="order-1 order-lg-2 col-lg-6">
                                        <div className="thumbnail mb--40">
                                            <img className="w-100" src={`./images/timeline/${data.image}.jpg`}
                                                 alt="Corporate React Template"/>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="content mt--40">
                                    <div dangerouslySetInnerHTML={{__html: data.description}}></div>
                                </div>
                            )}


                            <div className="row row--30">
                                {data.workingStep.map((data, index) => (
                                    <div className="col-lg-4 col-12" key={index}>
                                        <div className="working-list">
                                            <ScrollAnimation
                                                animateIn="fadeInUp"
                                                animateOut="fadeInOut"
                                                animateOnce={true}>
                                                <h5 className="working-title">{data.stepTitle}</h5>
                                            </ScrollAnimation>

                                            <p>{data.stepDescription}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {data.projects ? (
                                <div className="read-morebtn">
                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                        {data.projects.map((project, index) => (
                                            <>
                                                <a className="d-md-inline-block d-none btn-default btn-border mr--20 mt--20"
                                                   href={`/portfolio-details/${project.id}`}><span>{project.title}</span></a>
                                                <a className="d-md-none d-block btn-block btn-default btn-border mr--20 mt--20"
                                                   href={`/portfolio-details/${project.id}`}><span>{project.title}</span></a>
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
    )
}

export default TimelineOne;
