"use client"
import Cleaning from "@/components/animations/cleaning"
import Cover from "@/components/cover"
import Choosus from "@/components/landingpage/chooseus"
import HeroSection from "@/components/landingpage/hero"
import JoinUs from "@/components/landingpage/jooinus"
import Mission from "@/components/landingpage/mission"
import styles from "./styles.module.css"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Mission />

      {/* <Services /> */}
      <Choosus />
      <Cover>
        <div className={styles.join}>
          <h1>How can we help</h1>
          {/* <p className={styles.are}>
            Are you a Registered Nurse, Personal Support Worker, Registered
            Practical Nurse, Developmental Support Worker, or a Nursing aide in
            Canada? Are you interested in getting health-related job offers that
            are suitable for you? We are constantly recruiting to fill various
            patient-care assignments all over Canada. Get in touch with us at</p>
            <Link href='mailto:maplestaffconnect.ca'> <strong> admin@Maplestaffconnect.ca</strong> </Link>*/}
        </div>
      </Cover>
      <JoinUs svg={<Cleaning />} />
    </div>
  )
}

export default HomePage
