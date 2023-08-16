import { HiMapPin } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import { HiEnvelope } from "react-icons/hi2";
import styles from './contact.module.scss'

const Contact = () => {
    return (
        <div className={styles.contact}>
            <h1>Get in Touch: Reach Out to Us for Inquiries, Information, and Collaboration Opportunities</h1>
            <div className={styles.content}>

                <div className={styles.img_wrap}>
                    <img src='/contact.png' />
                </div>

                <div className={styles.text}>
                    <div className={styles.address}>
                        <HiMapPin size={20} />
                        <span>Techno India, TECHNO INDIA : EM-4/1, Sector V, Bidhannagar, Kolkata, West Bengal 700091</span>
                    </div>
                    <div className={styles.address}>
                        <HiPhone size={20} />
                        <span>+91 9830370605</span>
                    </div>
                    <div className={styles.address}>
                        <HiEnvelope size={20} />
                        <span>cisiiconference@gmail.com</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact