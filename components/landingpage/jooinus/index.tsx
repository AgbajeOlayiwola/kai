import Cover from "@/components/cover";
import { sendEmail } from '@/utils/send-email';
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

export type FormData = {
  email: string;
  message: string;
  Subject: string;
};

const JoinUs = ({svg}:{svg?:any}) => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  return (
    <Cover>
      <div className={styles.personal}>
        <div className={styles.svg} data-aos="fade-right">
        {svg}
        </div>
        <div className={styles.formOuter}>
          
          
          <form onSubmit={handleSubmit(onSubmit)} className={styles.personalInfo}>
        

            <div className={styles.avail}>
              <input
              data-aos="fade-down"
                type="text"
                placeholder="Email"
                id="email"
                {...register('email', { required: true })}
                required
              />
              <input
              data-aos="fade-down"
                type="text"
                id="Subject"
                placeholder="Subject"
                {...register('Subject', { required: true })}
                required
              />


              <div className={styles.texareaDiv}
              data-aos="fade-down"> 
              <label htmlFor="message">Message</label>
              <textarea rows={8} cols={13} placeholder="Message"
              {...register('message', { required: true })}/>
            </div>
              
              <button data-aos="fade-down">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Cover>
  );
};

export default JoinUs;
