
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";
const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">

                <div className="footer-icons">
                    <a href="https://twitter.com/your-twitter-profile">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/your-linkedin-profile">
                        <LinkedInIcon />
                    </a>
                    <a href="https://www.youtube.com/">
                        <YouTubeIcon />
                    </a>
                    <a href="https://www.facebook.com/your-facebook-page">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/_guru_manoj/">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Careers</span>
                    <span>Testimonials</span>
                    <span>Work</span>
                </div>
                <div className="footer-section-columns">
                    <span>6379390543</span>
                    <span>dr.guru750@gmail.com</span>
                    <span>press@food.com</span>
                    <span>contact@food.com</span>
                </div>
                <div className="footer-section-columns">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
