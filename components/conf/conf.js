import CustomBtn from '../button/btn'
import styles from './conf.module.scss'

const Conf = () => {
    return (
        <div className={styles.conf}>
            {/* <div className={styles.text}>
                <h1>Unveiling the Future of Technology <br />
                    at Our University's Conference! </h1>
                <div className={styles.text_right}>
                    <p>
                        Join Now for a Transformative Learning <br />
                        Experience - Elevate Your Expertise and <br />
                        Network with Industry Pioneers
                    </p>
                    <CustomBtn text='Conferences' />
                </div>
            </div> */}
            <div className={styles.img_wrapper}>
                <img src='/conf_img.jpg' />
            </div>
        </div>
    )
}

export default Conf