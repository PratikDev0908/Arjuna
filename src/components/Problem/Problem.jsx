import React from 'react'
import RightSection from './right';
import LeftSection from './left';

function Problem() {
  return ( <div>
    <LeftSection 
    imageUrl="media/problem1.jpg" description=" Develop a website to assess and track children's
 mental health. The solution should enable
 continuous monitoring, identifying potential
 issues, 
and 
offering 
personalized
 recommendations for improvement. It must be
 user-friendly, ensuring privacy and security
 while providing actionable insights for students,
 caregivers, and educators. The aim is to promote
 mental well-being and facilitate early
 intervention 
for 
environment." problemname=" Mental Well-Being Surveillance,
 Tracking and Assessment"/>
    <RightSection imageUrl="media/problem2.jpg" description=" Despite significant advancements in technology,
 effective detection and timely warning systems for
 landslides remain elusive in many regions. Landslides
 pose a severe threat to human lives, infrastructure,
 and the environment, making their accurate
 prediction and timely notification crucial for
 mitigation and disaster management efforts.This case
 study is aimed at using modern engineering
 technologies such as artificial Intelligence, internet of
 things etc to come up with promising solution to this
 alarming problem." problemname=" Advancing Landslide
 detection & Warning
 System."/>
     <LeftSection 
    imageUrl="media\problem3.jpeg" description="Designing earthquake-resistant buildings that
 leverage a blend of contemporary engineering
 techniques 
and traditional construction
 methods poses a significant challenge due to
 the need to integrate diverse materials,
 technologies, and architectural principles while
 ensuring structural integrity and safety in the
 face of seismic activity" problemname=" Earthquake Resistant
 Building "/>
     <RightSection imageUrl="media/problem4.png" description=" The current rate of groundwater depletion due
 to over-extraction and limited recharge
 mechanisms poses a critical threat to water
 security and ecosystem sustainability. Effective
 groundwater recharge strategies are urgently
 needed to mitigate this imbalance and ensure
 long-term water availability for communities,
 agriculture, and ecosystems." problemname="Groundwater Recharge"/>
  </div> );
}

export default Problem;