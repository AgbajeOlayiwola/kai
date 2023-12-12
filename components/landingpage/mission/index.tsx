import MedicalSvg from "@/components/SVG/medicalSvg"
import ValuesSvg from "@/components/SVG/valuesSvg"
import VisionSvg from "@/components/SVG/visionsvg"
import Cover from "@/components/cover"
import styles from "./styles.module.css"
const Mission = () => {
  return (
    <Cover>
      <div className={styles.missionCov}>
        <div className={styles.mid}>
          <div data-aos="fade-right">
            <MedicalSvg />
            <h1>Project Objectives</h1>
            <p>
              Compile a detailed and diverse Wikipedia featuring profiles,
              biographies, and artistic contributions of LGBTQ+ creatives across
              Nigeria.
            </p>
            <p>
              Provide a platform for LGBTQ+ artists to showcase their work and
              experiences.
            </p>
            <p>
              Celebrate the achievements and challenges faced by LGBTQ+ artists,
              fostering a sense of community and collaboration.
            </p>
            <p>
              Facilitate networking and collaborations among LGBTQ+ creatives,
              leading to innovative artistic endeavours.
            </p>
            <p>
              Establish a long-term resource for research, education, and
              advocacy, promoting a more inclusive creative industry.
            </p>
          </div>
          <div data-aos="fade-down">
            <VisionSvg />
            <h1>Methodology</h1>
            <ul>
              <li>
                Conduct thorough research through interviews, surveys, and
                engagement with LGBTQ+ networks and organizations to identify
                LGBTQ+ creatives across various artistic disciplines.
              </li>
              <li>
                Prioritize online research by leveraging social media, LGBTQ+
                forums, and creative networks to identify potential
                participants.
              </li>
              <li>
                Conduct targeted surveys and collect biographical information,
                work samples, and personal narratives.
              </li>
              <li>
                Collaborate with artists to ensure accurate representation and
                respectful storytelling, obtaining personal narratives and
                insights.
              </li>
              <li>
                Work with experienced editors and designers to compile the data
                into an accessible and visually appealing format.
              </li>
            </ul>
          </div>
          <div data-aos="fade-left">
            <ValuesSvg />
            <h1>Target Audience</h1>
            <ul>
              <li>LGBTQ+ individuals seeking representation and inspiration</li>
              <li>
                Creative industry professionals interested in diverse
                perspectives
              </li>
              <li>
                Academics and researchers studying LGBTQ+ representation in
                media
              </li>
              <li>
                Advocacy groups and organizations promoting LGBTQ+ rights and
                visibility
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Cover>
  )
}

export default Mission
