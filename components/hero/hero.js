import CustomBtn from '../button/btn'

import styles from './hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_left}>
                <h1>
                    Empowering Excellence:<br /> Explore Crucial Tech &<br /> Present-Day Topics - Join<br />Our University's Premier<br /> Conference & Webinars!
                </h1>
                <p>Stay Ahead in the Digital Era: Gain Insights from<br />
                    Renowned Experts and Thought Leaders.</p>
                <CustomBtn text='Register Now' />
            </div>
            <div className={styles.hero_right}>
                <img src='/hero_img.jpg' />
            </div>
        </div>
    )
}

export default Hero