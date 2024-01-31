"use client"

import { useRouter } from 'next/navigation'

import CustomBtn from '../button/btn'
import styles from './hero.module.scss'

const Hero = () => {
    const router = useRouter()
    return (
        <div className={styles.hero}>
            <div className={styles.hero_left}>
                <h1>
                    International Conference on <span>Intelligent Systems</span>
                    and Industrial Instrumentation<br />
                    (CISII-2024)<br />
                      <span>20 and 21 September 2024</span>
                </h1>
                <div onClick={() => router.push('/registration')} >
                    <CustomBtn text='Register' />
                </div>
            </div>
            <div className={styles.hero_right}>
                <img src='/hero_img.jpeg' />
            </div>
        </div>
    )
}

export default Hero
