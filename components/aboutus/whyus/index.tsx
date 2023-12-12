'use client'
import Cover from "@/components/cover";
import Image from "next/image";
import { useEffect, useState } from 'react';
import styles from "./styles.module.css";

const Whyus = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      console.log(width);
  };

  useEffect(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      // component is mounted and window is available
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      // unsubscribe from the event on component unmount
      return () => window.removeEventListener('resize', handleWindowResize);
  }, [width]);
  return (
    <Cover>
      {/* <h2 className={styles.nur}>Nurses, Why You Should Chose Us?</h2> */}
      <div className={styles.nurses}>
      <div>
      <Image className={styles.sliderImage} src='/Images/nurse.jpg' height={width>900?400:350} width={width>900?500:400} alt='image'/>
      </div>
        <div className={styles.paraG}>
          <div>
            <p>
              Maple staff connect was established by a group of people working
              In the management & healthcare industry who specialize in
              providing=
              temporary or continuous employment to nursing professionals to
              long-term care homes, Private homes, Hospitals, Retirement homes,
              and Residential care homes.
            </p>
            <p>
              We have a team of healthcare professionals who are committed and
              dedicated to their duties with diverse experience in Mental
              health, Intensive Care Units, Emergency departments, Pre- and
              Post-operatives, Long-Term Care Homes, Public health, and
              Community care.
            </p>
          </div>
        </div>
      </div>
    </Cover>
  );
};

export default Whyus;
