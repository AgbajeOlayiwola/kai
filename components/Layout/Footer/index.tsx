'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMail } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';
import logo from '../../../public/Images/logowhite.jpeg';
import styles from "./styles.module.css";
const Footer = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className={styles.Foot}>
     <Image
        src={logo}
        width={150}
        height={100}
        alt="mapple staff logo"
      />
      <div className={styles.right}>
      <div className={styles.navLinks}>
        {/* <h1 onClick={()=> setShowModal(true)}>Covid 19 Policy</h1>
        <hr />
        <Link href="/About"> <h1>About</h1></Link>
        <hr />
        <Link href="/Contact"> <h1>Contact</h1> </Link> */}
        <div>
       <div className={styles.mail}> <AiOutlineMail/>  
       <Link href='mailto:maplestaffconnect.ca'>
        <p>emmail@email.ca</p>
        </Link>
        </div> 
       <div  className={styles.mail}> <FaLocationArrow/> <p>460 eemmakl</p></div> 
        </div>
        
      </div>
      <div className={styles.divh2}>
        <h2>Stay Connected</h2>
        <div className={styles.socials}>
         <Link href='#' target='_blank'><BsLinkedin/></Link> 
          {/* <PiMicrosoftOutlookLogoBold/> */}
        </div>
        </div>
       {/* <div>
        <h2>Opening hours</h2>
        
        <div className={styles.socials}>
         <p>Mon - Fri</p><p>9:00am -  5:00pm</p>
        </div>
        <div className={styles.socials}>
         <p>Saturday</p><p>9:00am -  5:00pm</p>
        </div>
        <div className={styles.socials}>
         <p>Sunday</p><p>9:00am -  5:00pm</p>
        </div>
        </div> */}
        </div>
    </div>
  );
};

export default Footer;
