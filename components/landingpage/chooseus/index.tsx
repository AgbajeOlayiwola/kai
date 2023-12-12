import Nurse from "@/components/animations/nurse"
import Cover from "@/components/cover"
import { useEffect, useState } from "react"
import styles from "./styles.module.css"

const Choosus = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    console.log(width)
  }

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    // component is mounted and window is available
    handleWindowResize()
    window.addEventListener("resize", handleWindowResize)
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [width])
  return (
    <Cover>
      <div className={styles.choose}>
        <h1 className={styles.nuse}  data-aos="fade-down">
          {" "}
          Why You Should Choose The Creative Archival Project (CAP) and TIERs{" "}
        </h1>
      </div>
      <div className={styles.wide}>
        <div>
          <ul className={styles.ulli}>
            <li  data-aos="fade-right">
              Showcase the diverse LGBTQ+ community in Nigeria through a
              detailed Wikipedia, promoting inclusivity and accurate
              representation.
            </li>
            <li data-aos="fade-right">
              Provide a platform for LGBTQ+ artists to share their work,
              fostering visibility, representation, and awareness within the
              community and society.
            </li>
            <li data-aos="fade-right">
              Collaborate with TIERs, a leading non-profit organization
              committed to human rights and advocacy in Nigeria.
            </li>
            <li data-aos="fade-right">
              Prioritize creators' safety by starting with a manageable number,
              utilizing various formats for sharing stories.
            </li>
            <li data-aos="fade-right">
              Ensure the project's longevity through regular updates,
              partnerships, online platforms, and an annual LGBTQ+ arts
              festival.
            </li>
            <li data-aos="fade-right">
              Anticipate increased visibility, creation of role models, and
              enrichment of the LGBTQ+ rights conversation, evaluated through
              metrics and feedback.
            </li>
            <li data-aos="fade-right">
              Address LGBTQ+ individuals, creative professionals, academics, and
              advocacy groups, promoting diverse perspectives and rights.
            </li>
            <li data-aos="fade-right">
              Establish a lasting resource for research, education, and
              advocacy, contributing to a more inclusive creative industry.
            </li>
          </ul>
        </div>
        <div className={styles.svg} data-aos="fade-left">
          <Nurse />
        </div>
      </div>
    </Cover>
  )
}

export default Choosus
