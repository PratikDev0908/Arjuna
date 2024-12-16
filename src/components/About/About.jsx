import React from "react";
import "./about.css";
export default function About() {
  return (
    <div>
      <div className="heading text-center mt-5 mx-5">
        Our cell solely focuses on the promotion of innovation and technology
        within the realm of civil engineering,priortizing interdisciplinary
        collaboration to drive technology adoption across civil engineering
        disciplines.we provide the skill development platforms to empower
        individuals within their domain. spreadheading IOT,AI,&ML integeration
        and leveraging IT solutions for enhancement functionality within civil
        engineering projects
      </div>
      <h1 className="objective-heading text-center mt-5">OUR OBJECTIVE</h1>
      <div class="container">
        <ul>
          <li>Igniting innovation and technological advancement within the expansive realm of civil engineering.</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <h1 className="text-center mt-5">People</h1>
      <div className="row people text-center">
        <div className="col-4">
          <img src="./media/copowered.jpg" alt="" className="team-image" />
          <h1>jfs</h1>
        </div>
        <div className="col-4">
          <img src="" alt="" className="team-image" />
        </div>
        <div className="col-4">
          <img src="" alt="" className="team-image" />
        </div>
      </div>
      <div className="row people text-center">
        <div className="col-4">
          <img src="./media/copowered.jpg" alt="" className="team-image" />
          <h1>jfs</h1>
        </div>
        <div className="col-4">
          <img src="" alt="" className="team-image" />
        </div>
        <div className="col-4">
          <img src="" alt="" className="team-image" />
        </div>
      </div>
      <div className="row people text-center">
        <div className="col-4">
          <img src="./media/copowered.jpg" alt="" className="team-image" />
          <h1>jfs</h1>
        </div>
        <div className="col-4">
          <img src="" alt="" className="team-image" />
        </div>
        <div className="col-4">
          <img src="" alt="" className="team-image" />
        </div>
      </div>
    </div>
  );
}
