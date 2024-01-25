import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../CSS_Styles/Footer.css";
import {Link} from "react-router-dom";
import IPTLogo from "../Content/IPTLogo.png";
import GitHubLogo from "../Content/GitHubLogo.png";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
          <a href="https://www.ipt.pt" target="_blank" rel="noreferrer">
            <img className="FooterLogos" src={IPTLogo} alt="IPTLogo" /> 
          </a>
          <a href="https://github.com/PedroMendes2647/TrabalhoIW" target="_blank" rel="noreferrer">
            <img className="FooterLogos" src={GitHubLogo} alt="IPTLogo" />
          </a>
      </div>
      <p> &copy; 2023 World Travelers</p>
      <Link to="/about"> About us </Link>
    </div>
  );
}

export default Footer;