import CustomBtn from '../button/btn'

import styles from './hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_left}>
                <h1>
                    International Conference on <span>Intelligent and Smart</span> innovation<br />
                    for industry 6.0 (CISII,24)
                </h1>
            </div>
            <div className={styles.hero_right}>
                <img src='/hero_img.jpg' />
            </div>
        </div>
    )
}

export default Hero