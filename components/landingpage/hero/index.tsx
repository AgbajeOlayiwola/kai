"use client"
import Planet from "@/components/animations/planet"
import Image from "next/image"
import { useEffect, useState } from "react"
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
        {width > 900 ? (
          <>
            <h1 data-aos="fade-down">The</h1>
            <h1 data-aos="fade-down">Creative Archival Project</h1>
            <h1 data-aos="fade-down"> (CAP)</h1>
          </>
        ) : (
          <>
          <h3  data-aos="fade-down">The</h3>
          <h3 data-aos="fade-down"> Creative Archival Project </h3>
          <h3  data-aos="fade-down">(CAP)</h3>
          </>
        )}
        <p className={styles.nursing} data-aos="fade-up">
         An archive of the lives and experiences of LGBTQ+ creatives In Nigeria. 
        </p>
        <Planet />
      </div>
    </div>
  )
}

export default HeroSection
