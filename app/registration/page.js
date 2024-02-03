"use client"

import { useRouter } from 'next/navigation'
import { HiArrowUpRight } from 'react-icons/hi2'
import styles from './reg.module.scss'


const Registration = () => {
    const router = useRouter()
    return (
        <div className={styles.reg}>
            <div className={styles.reg_left}>
                <h1>Registration Details</h1>
                <div className={styles.reg_table}>
                    <div className={styles.tab_col}>
                        <h3>Category</h3>
                        <ul>
                            <li><em>Academia</em> Indian Authors</li>
                            <li><em>Industry</em> Indian Authors</li>
                            <li><em>For All</em> Foreign Authors</li>
                            <li><em>Indian Delegates</em> Non Authors(Listener)</li>
                            <li><em>Foreign Delegates</em> Non Authors(Listener)</li>
                        </ul>
                    </div>
                    <div className={styles.tab_col}>
                        <h3>Early Bid</h3>
                        <ul>
                            <li>9000 INR</li>
                            <li>10000 INR</li>
                            <li>150 USD</li>
                            <li>2000 INR</li>
                            <li>100 USD</li>
                        </ul>
                    </div>
                    <div className={styles.tab_col}>
                        <h3>Regular Registration</h3>
                        <ul>
                            <li>10000 INR</li>
                            <li>11000 INR</li>
                            <li>200 USD</li>
                            <li>2500 INR</li>
                            <li>150 USD</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.reg_btn}>
                    <span>Register Now</span>
                    <HiArrowUpRight size={15} />
                </div>
            </div>
            <div className={styles.reg_right}>
                <img src='/reg_img.jpg' alt='Registration' />
            </div>
        </div>
    )
}

export default Registration
