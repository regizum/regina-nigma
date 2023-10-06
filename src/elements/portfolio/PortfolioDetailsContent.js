import React from 'react';
import CalltoActionFive from "../calltoaction/CalltoActionFive";
import SEO from "../../common/SEO";


const PortfolioDetailsContent = ({ data }) => {
    return (
        <>
            <SEO title={'Regina Nigma | ' + data.title} />
            <div className="rwt-portfolio-details rn-section-gap">
                <div className="container">
                    <div className="inner">
                        <div className="details-list">
                            {/*<h1 className="text-center mb--40">{data.title}</h1>*/}
                            <div className="thumbnail">
                                <img className="radius w-100" src={`${process.env.PUBLIC_URL}/${data.largeImage}`} alt="Corporate Image" />
                            </div>

                            <div className="row mt--80 mt_md--50 mt_sm--50 row--30">
                                <div className="col-lg-6">
                                    <div className="content-left">
                                        <div className="single-list-wrapper">
                                            <div className="single-list">
                                                <label>Date:</label>
                                                <span>{data.date}</span>
                                            </div>
                                            <div className="single-list">
                                                <label>Client:</label>
                                                <span>{data.client}</span>
                                            </div>
                                            <div className="single-list">
                                                <label>Category:</label>
                                                <span>{data.category}</span>
                                            </div>
                                        </div>
                                        <div className="view-btn mt--50 mb--50">
                                            <a className="btn-default btn-large round" href={`${data.btn.link}`}>{data.btn.buttontext}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt_md--30 mt_sm--30">
                                    <div className="content-right">
                                        <h5 className="subtitle">{data.subtitle}</h5>
                                        <div className="description" dangerouslySetInnerHTML={{__html: data.body}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-gallery mt--80">
                            <div className="row mt--80 align-items-center">
                                <div className="col-lg-8">
                                    <div className="gallery">
                                        <div className="thumbnail">
                                            <img className="radius w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageOne}`} alt="DMDBrand" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 portfolio-gallery-desc">
                                    {data.subContent.title ? <h5 className="subtitle mt_md--30 mt_sm--30">{data.subContent.title}</h5> : null}
                                    {data.subContent.subtext ? <p>{data.subContent.subtext}</p> : null}
                                </div>
                            </div>

                            <div className="row mt--80 align-items-center">
                                <div className="order-2 order-lg-1 col-lg-4 text-right portfolio-gallery-desc">
                                    {data.subContent2.title ? <h5 className="subtitle mt_md--30 mt_sm--30">{data.subContent2.title}</h5> : null}
                                    {data.subContent2.subtext ? <p>{data.subContent2.subtext}</p> : null}
                                </div>
                                <div className="order-1 order-lg-2 col-lg-8">
                                    <div className="gallery">
                                        <div className="thumbnail">
                                            <img className="radius w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageTwo}`} alt="DMDBrand" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt--80 align-items-center">
                                <div className="col-lg-8">
                                    <div className="gallery">
                                        <div className="thumbnail">
                                            <img className="radius w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageThree}`} alt="DMDBrand" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 portfolio-gallery-desc">
                                    {data.subContent3.title ? <h5 className="subtitle mt_md--30 mt_sm--30">{data.subContent3.title}</h5> : null}
                                    {data.subContent3.subtext ? <p>{data.subContent3.subtext}</p> : null}
                                </div>
                            </div>
                        </div>
                        <div className="mt--120 mt_md--60 mt_sm--60 mb--60">
                            <CalltoActionFive />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioDetailsContent;
