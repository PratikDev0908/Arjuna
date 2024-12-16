import React from "react";
function Footer() {
  return (
    <footer
      style={{ backgroundColor: "rgb(250,250,250" }}
      className="footer mt-5"
    >
      <div className="container border-top ">
        <div className="row mt-5">
          <div className="col-2 ">
            <img src="media/logos.png" style={{ width: "70%" }} alt="logo" />
            <p className="fs-6 mb-4"></p>
            <div className="icon-container text-muted">
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <hr />
            <div className="icon-container-2 text-muted">
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-telegram"></i>
            </div>
          </div>
          
          <div className="col-3 footer-logo" style={{ textDecoration: "none" }}>
            <p>Powered By</p>
            <img src="/media/powered.png" style={{ width: "35%",borderRadius:"30%"  }} alt="logo" />
          </div>
          <div className="col-3" style={{ textDecoration: "none" }}>
            <p>Co-powered By</p>
            <img src="/media/copowered.jpg" style={{ width: "35%",borderRadius:"30%" }} alt="logo" />
          </div>
          <div className="col-3" style={{ textDecoration: "none" }}>
            <p>Presented By</p>
            <img src="/media/presented.png" style={{ width: "190px",height:"100px",borderRadius:"20px"}} alt="logo" />
          </div>
        </div>
      </div>
      <div className="text-center mt-5"><b>Made with </b><i class="fa-solid fa-heart"></i>&nbsp;<b>by the <b>CITC TEAM</b></b></div>
      <div className="text-center">
      <p className="text-center">copyrights <i class="fa-regular fa-copyright"></i>&nbsp;2024 Civil Innovation and Technology Cell(CITC) All rights reserved.<br/>Designed and developed by SARTHAK PRATIK.</p>
     
      </div>
    </footer>
  );
}

export default Footer;
