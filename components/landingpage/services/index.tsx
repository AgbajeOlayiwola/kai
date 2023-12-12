'use client'
import Cleaning from "@/components/animations/cleaning";
import Connect from "@/components/animations/connect";
import Nurse from "@/components/animations/nurse";
import Nursing from "@/components/animations/nursing";
import Security from "@/components/animations/security";
import Cover from "@/components/cover";
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./styles.module.css";
const Services = () => {
    const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

     const settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
  return (
    <Cover>
         <div>
     
    </div>
      <div className={styles.srvicsFlexInner}>
        <div className={styles.srvicsFlexI}>
         {/* <Connect/> */}
          <h1  onClick={() => setDisplay(!display)}>Healthcare</h1>
        <div
        style={{
          width: width + "px",
          display: display ? "block" : "none"
        }}
      >
       <Slider {...settings}>
            <div>
              <Nurse/>
              <p>Home health care </p>
            </div>
            <div>
            <Nursing/>
            <p>Nursing services (RN & RPN)</p>
            </div>
            <div>
            <Connect/>
            <p>Personal support workers </p>
            </div>
          </Slider>
      </div>
        
        </div>

        <div className={styles.srvicsFlexII}>
          {/* <World/> */}
          <div>
      
          <h1>Industrial</h1>
               <div
        style={{
          width: width + "px",
          display: display ? "block" : "none"
        }}
      >
       <Slider {...settings}>
            <div>
              <Cleaning/>
              <p>Cleaning jobs</p>
            </div>
            <div>
            <Security/>
            <p>Security Guards </p>
            </div>
           
          </Slider>
      </div>
          </div>
        </div>
      </div>
      
    </Cover>
  );
};

export default Services;