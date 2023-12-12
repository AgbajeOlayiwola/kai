import Cover from "@/components/cover";
import styles from "./styles.module.css";

const AboutTop = ({text}:{text:string}) => {
  return (
    <div className={styles.cov}>
      <Cover>
        <div>
          <div>
            <h1 className={styles.aboutus}>{text}</h1>
          </div>
        </div>
      </Cover>
    </div>
  );
};

export default AboutTop;
