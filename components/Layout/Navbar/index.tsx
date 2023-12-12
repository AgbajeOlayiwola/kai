"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { push as Menu } from "react-burger-menu"
import { AiFillPhone, AiOutlineMail } from "react-icons/ai"
import { BsFillMenuAppFill } from "react-icons/bs"
import logo from "../../../public/Images/logowhite.jpeg"
import style from "./styles.module.css"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  const closeSideBar = () => {
    setOpen(false)
  }
  var styless = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      width: "292px",
      left: "0",
      top: "0",
    },
    bmMenu: {
      background: "#9b4778",
      padding: "2.5em 1.0em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
      top: "0",
      left: "0",
    },
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
  return (
    <div className={style.nav}>
      <Link href="/">
        <Image src={logo} width={150} height={100} alt="mapple staff logo" />
      </Link>
      {width > 900 ? (
        <div className={style.navLinks}>
          {/* <Link href="/About">
          <h1>About</h1>
        </Link>
        <hr className={style.hr} />
        <Link href="/Contact">
          <h1>Contact</h1>
        </Link> */}
          <hr className={style.hr} />
          <div className={style.mail}>
            {" "}
            <AiOutlineMail /> <p>email@email.ca</p>
          </div>
          <hr className={style.hr} />
          <div>
            <div className={style.mail}>
              <AiFillPhone />
              <Link href="tel">
                <p>(123)897-098765</p>
              </Link>
            </div>
          </div>
          <div className={style.mail}>
            <AiFillPhone />
            <Link href="https://thecreativearchivalproject.wordpress.com/about/" target='_blank'>
              <p>Blog</p>
            </Link>
          </div>
        </div>
      ) : (
        <Menu
          isOpen={isOpen}
          customBurgerIcon={<BsFillMenuAppFill />}
          styles={styless}
        >
          <div className={style.navLinks}>
            {/* <Link onClick={closeSideBar} href="/About">
          <h1 >About</h1>
        </Link>
        <Link onClick={closeSideBar} href="/Contact">
          <h1>Contact</h1>
        </Link> */}
            <div className={style.mail}>
              {" "}
              <AiOutlineMail />
              <Link href="mailto:maplestaffconnect.ca">
                <p>emmail@emmail.ca</p>
              </Link>
            </div>
            <div>
              <div className={style.mail}>
                <AiFillPhone />
                <Link href="tel:6476579902">
                  <p>(123)897-098765</p>
                </Link>
              </div>
            </div>
            <div className={style.mail}>
              <AiFillPhone />
              <Link  href="https://thecreativearchivalproject.wordpress.com/about/" target='_blank'>
                <p>Blog</p>
              </Link>
            </div>
          </div>
        </Menu>
      )}
    </div>
  )
}

export default Navbar
