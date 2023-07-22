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
    const [screenSize, setScreenSize] = useState({ width: 960, height: 30 });
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
                    <Image src='/tmslogo.png' priority={true}
                        width={screenSize.width / 6} height={30} alt='TMSL logo' />
                </Link>
            </div>
            <div className={styles.links}>
                <Link href='/'>
                    <div className={styles.link}>
                        Home
                    </div>
                </Link>
                <Link href='#'>
                    <div className={styles.link}>
                        Conferences
                    </div>
                </Link>
                <Link href='#'>
                    <div className={styles.link}>
                        About Us
                    </div>
                </Link>
                <Link href='#'>
                    <div className={styles.link}>
                        Contact
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar