import React from 'react';
import './style/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className={"end1-wrap"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-12 col-md-6"} style={{paddingTop: "18px"}}>
                                <a href={"https://www.facebook.com/realtor.com"} rel="noopener noreferrer" target="_blank"><img alt={"facebook"} src={require("./../home/images/icons/facebook_icon.png")}/></a>
                                <a href={"https://twitter.com/REALTORdotcom"} rel="noopener noreferrer" target="_blank"><img alt={"twitter"} src={require("./../home/images/icons/twitter_icon.png")}/></a>
                                <a href={"https://www.linkedin.com/company/realtor-com/"} rel="noopener noreferrer" target="_blank"><img alt={"linkdin"} src={require("./../home/images/icons/linkdin_icon.png")}/></a>
                                <a href={"https://www.instagram.com/realtordotcom/?hl=en"} rel="noopener noreferrer" target="_blank"><img alt={"instagram"} src={require("./../home/images/icons/instagram_icon.png")}/></a>
                                <a href={"https://www.pinterest.com/realtordotcom/"} rel="noopener noreferrer" target="_blank"><img alt={"pinterest"} src={require("./../home/images/icons/pinterest_icon.png")}/></a>
                                <a href={"https://www.youtube.com/user/RealtorDotCom"} rel="noopener noreferrer" target="_blank"><img alt={"youtube"} src={require("./../home/images/icons/youtube_icon.png")}/></a>
                            </div>
                            <div className={"col-12 col-md-6 d-inline d-md-flex justify-content-center"} style={{paddingTop: "18px"}}>
                                <a href={"https://www.houselogic.com/?nicmp=hlim%26nichn=footerlink%26niseg=rc"} rel="noopener noreferrer" target="_blank"><img alt={"house_logic"} src={require("./../home/images/icons/house_logic_icon.png")}/></a>
                                <a href={"https://realtoru.edu/about/"} rel="noopener noreferrer" target="_blank"><img alt={"university"} src={require("./../home/images/icons/university_icon.png")}/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container-fluid end2"}>
                    <div className={"container"}>
                        <div className={"bar-nav-bottom"}>
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

