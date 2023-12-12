'use client'
import AboutTop from "@/components/aboutus/abouttop";
import Cover from "@/components/cover";
import { contact } from "@/utils/contact";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from 'react-icons/fa';
import styles from "./styles.module.css";

export type FormData = {
  name: string;
  email: string;
  message: string;
  subject: string;
};
const Contact = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    contact(data);
  }
  return (
    <>
    <AboutTop text='Contact'/>
    <Cover>
      <div className={styles.reachout}>
        <div className={styles.youA}>
          <h1 className={styles.reg}>How Can We Help</h1>
        </div>
        <div className={styles.flex}>
       <div className={styles.contact}>
        <div className={styles.contactInfo}>
          
          <div className={styles.mail}> 
          <h2>Phone Number</h2>
          <div>
            <AiFillPhone/>
            <Link href='tel'><p>(647)657-9902</p></Link>
            </div>
        </div> 
        <div className={styles.mail}> 
        <h2>Email</h2>
        <div>
          <AiOutlineMail/> 
          <p>Info@maplestaffconnect.ca</p>
          </div>
        </div> 
        <div  className={styles.mail}> 
        <h2>Address</h2>
        <div>
          <FaLocationArrow/> 
          <p>460 Dundas Street east Waterdown Hamilton, ON L8B2A5 Suite 103</p>
          </div>
        </div> 
        {/* <div className={styles.open}>
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
        <div className={styles.formDiv}>
          <form onSubmit={handleSubmit(onSubmit)}  className={styles.form}>
            <div>
              <label htmlFor="name">Full Name</label>
            <input type='text' placeholder="Name" 
            {...register('name', { required: true })}/>
            </div>
            <div> 
              <label htmlFor="email">Email</label>
              <input type='text' placeholder="Email" 
              {...register('email', { required: true })} />
              </div>
            <div> 
              <label htmlFor="subject">Subject</label>
              <input type='text' placeholder="Subject"  
              {...register('subject', { required: true })}/>
            </div>
            <div> 
              <label htmlFor="message">Message</label>
              <textarea rows={8} cols={13} placeholder="Message"
              {...register('message', { required: true })}/>
            </div>
            <button>Send Email</button>
          </form>
        </div>
        </div>
       </div>
    </Cover>
    </>
  );
};

export default Contact;
