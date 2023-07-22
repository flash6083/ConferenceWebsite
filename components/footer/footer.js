"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './footer.module.scss'

function getCurrentDimension() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

const Footer = () => {
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
        <div className={styles.footer}>
            <div className={styles.foot_left}>
                <h3>International conference on Intelligent and Smart Innovations
                    <br /> for Industries 6.0</h3>
                <Link href='/'>
                    <Image src='/tmslogo.png' priority={true}
                        width={screenSize.width / 6} height={30} alt='TMSL logo' />
                </Link>
            </div>
            <div className={styles.foot_right}>
                <div className={styles.imp_links}>
                    <span>Quick Links</span>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='#'>Conferences</Link></li>
                        <li><Link href='#'>About Us</Link></li>
                        <li><Link href='#'>Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.imp_links}>
                    <span>Follow Us</span>
                    <ul>
                        <li><Link href='#'>Facebook</Link></li>
                        <li><Link href='#'>Linkedin</Link></li>
                        <li><Link href='#'>Instagram</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer