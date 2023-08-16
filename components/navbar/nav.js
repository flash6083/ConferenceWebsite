"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './nav.module.scss'

function getCurrentDimension() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

const Navbar = () => {
    const [screenSize, setScreenSize] = useState({ width: 560, height: 30 });
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize]);

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link href='/'>
                    <Image src='/tmsl_logo.png' priority={true}
                        width={screenSize.width / 10} height={30} alt='TMSL logo' />
                </Link>
            </div>
            <div className={styles.links}>
                <Link href='/'>
                    <div className={styles.link}>
                        Home
                    </div>
                </Link>
                <Link href='/about'>
                    <div className={styles.link}>
                        About
                    </div>
                </Link>
                <Link href='/imp_dates'>
                    <div className={styles.link}>
                        Important Dates
                    </div>
                </Link>
                <Link href='/imp_dates'>
                    <div className={styles.link}>
                        Call for papers
                    </div>
                </Link>
                <Link href='/registration'>
                    <div className={styles.link}>
                        Registration
                    </div>
                </Link>
                <Link href='/committee'>
                    <div className={styles.link}>
                        Committee
                    </div>
                </Link>
                <Link href='/contact'>
                    <div className={styles.link}>
                        Contact
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar