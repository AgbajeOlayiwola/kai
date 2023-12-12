import Cover from "@/components/cover";
import { sendEmail } from '@/utils/send-email';
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

export type FormData = {
  fullName: string;
  email: string;
  phone: string;
  addressStreet: string;
  date: string;
  addressCity: string;
  province: string;
  postalCode: string;
  country: string;
  available: string;
  message: string;

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
                id="addressCity"
                {...register('addressCity', { required: true })}
                required
              />
              <input
              data-aos="fade-down"
                type="text"
                id="Subject"
                placeholder="Province"
                {...register('province', { required: true })}
                required
              />

              <input
              data-aos="fade-down"
                type="text"
                id="postalCode"
                placeholder="Postal Code"
                {...register('postalCode', { required: true })}
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
