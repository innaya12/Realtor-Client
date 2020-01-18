import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className={"end1-wrap"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-12 col-md-6"} style={{paddingTop: "18px"}}>
                                <a href={"https://www.facebook.com/realtor.com"} target="_blank"><img alt={"facebook"} src={require("./../home/images/icons/facebook_icon.png")}/></a>
                                <a href={"https://twitter.com/REALTORdotcom"} target="_blank"><img alt={"twitter"} src={require("./../home/images/icons/twitter_icon.png")}/></a>
                                <a href={"https://www.linkedin.com/company/realtor-com/"} target="_blank"><img alt={"linkdin"} src={require("./../home/images/icons/linkdin_icon.png")}/></a>
                                <a href={"https://www.instagram.com/realtordotcom/?hl=en"} target="_blank"><img alt={"instagram"} src={require("./../home/images/icons/instagram_icon.png")}/></a>
                                <a href={"https://www.pinterest.com/realtordotcom/"} target="_blank"><img alt={"pinterest"} src={require("./../home/images/icons/pinterest_icon.png")}/></a>
                                <a href={"https://www.youtube.com/user/RealtorDotCom"} target="_blank"><img alt={"youtube"} src={require("./../home/images/icons/youtube_icon.png")}/></a>
                            </div>
                            <div className={"col-12 col-md-6 d-inline d-md-flex justify-content-center"} style={{paddingTop: "18px"}}>
                                <a href={"https://www.houselogic.com/?nicmp=hlim%26nichn=footerlink%26niseg=rc"} target="_blank"><img alt={"house_logic"} src={require("./../home/images/icons/house_logic_icon.png")}/></a>
                                <a href={"https://realtoru.edu/about/"} target="_blank"><img alt={"university"} src={require("./../home/images/icons/university_icon.png")}/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container-fluid end2"}>
                    <div className={"container"}>
                        <div className={"bar-nav-bottom"}>
                            {/* <div className={"ul-wrapper"}>
                                <ul className={"row"}>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>About us</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Careers</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Feedback</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Media room</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Ad Choices</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Advertise withus</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Agent support</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Privacy</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Terms</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Home Made</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Tech Blog</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Sitemap</a></li>
                                </ul>
                            </div> */}
                            {/* <div className={"d-flex ul-wrapper"}>
                                <h6 style={{fontSize: "13px"}}>PRODUCTS</h6>
                                <ul className={"row"} style={{marginLeft:"-70px"}}>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Leads & Branding</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>ListHub</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Top Producer</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Market Snapshot</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>International</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>FiveStreet</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Move.com</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Relocation</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Moving.com</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>SeniorHousingNet.com</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Remodelista</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Gardenista</a></li>
                                </ul>
                            </div>
                            <div className={"d-flex ul-wrapper"}>
                                <h6 style={{fontSize:"13px"}}>NEWSCORP</h6>
                                <ul className={"row"} style={{marginLeft:"-70px"}}>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Barrens</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Checkout 51</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Financial News</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Harper Collins</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Mansion Global</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Market Watch</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>New York Post</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>REA Group</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Storyful</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>AWall Street Journal</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>Makaan.comHousing.com</a></li>
                                    <li className={"col-lg-auto col-md-3 col-sm-4"}><a href={"/"}>PropTiger.com</a></li>
                                </ul>
                            </div> */}
                            <p className={"lastP"}><span
                                className={"lightgray"}>© 1995-2019</span> National Association of REALTORS® <span
                                className={"lightgray"}> and </span> Move, Inc. <span className={"lightgray"}> All rights reserved.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;

