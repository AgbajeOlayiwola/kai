'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import HomePage from './Home/page'
import Layout from '@/components/Layout'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      duration: 1000,
    })
  }, [])
  return <HomePage />
}
