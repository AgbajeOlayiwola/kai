"use client"
import Planet from "@/components/animations/planet"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import styles from "./styles.module.css"

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  }
  // /Images/hero.jpg
  return (
    <div className={styles.heroSect}>
      {/* <div className={styles.slider}> */}
      <Slider {...settings}>
        <Image
          className={styles.sliderImage}
          src="/Images/image1.jpg"
          height={850}
          width={500}
          alt="image"
        />
        <Image
          className={styles.sliderImage}
          src="/Images/image2.jpg"
          height={850}
          width={500}
          alt="image"
        />
        <Image
          className={styles.sliderImage}
          src="/Images/image3.jpg"
          height={850}
          width={500}
          alt="image"
        />
        <Image
          className={styles.sliderImage}
          src="/Images/image4.jpg"
          height={850}
          width={500}
          alt="image"
        />
      </Slider>
      {/* </div> */}
      <div className={styles.heror}>
        <h1 data-aos="fade-down">The Creative Archival</h1>
        <h1 data-aos="fade-down">Project (CAP).</h1>
        <p className={styles.nursing} data-aos="fade-up">
          Collaborating with The Initiative For Equal Rights (TIERs), I propose
          compiling a comprehensive Wikipedia of LGBTQ+ creatives in Nigeria.
          Over the years, LGBTQ+ creatives have lived their lives creating art
          that properly represents their community, but because of the nature of
          our society, frequently, their work gets buried, or they do not get
          accurate recognition for the fantastic things they do.
        </p>
        <Planet />
      </div>
    </div>
  )
}

export default HeroSection
