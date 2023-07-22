import { HiArrowUpRight } from 'react-icons/hi2'

import styles from './reg.module.scss'

const Registration = () => {
    return (
        <div className={styles.reg}>
            <div className={styles.reg_left}>
                <h1>Registration Details</h1>
                <p>Call for papers: 11th October, 2023</p>
                <h4>Registration Fees:</h4>
                <ul>
                    <li>Student: Rs. 4000</li>
                    <li>Faculty: Rs. 6000</li>
                    <li>Industry: Rs. 8000</li>
                </ul>
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