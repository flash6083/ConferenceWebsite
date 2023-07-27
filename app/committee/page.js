import Committee from '@/components/committee/committee'

import styles from './committee.module.scss'


const CommitteePage = () => {
    return (
        <div className={styles.com}>
            <div className={styles.com_content}>
                <div className={styles.com_text}>
                    <h1>Meet Our Dedicated and Esteemed Committee:
                        <br />Passionate Minds Driving Excellence and Innovation!</h1>
                    <p>Scroll to view</p>
                </div>
                <div className={styles.image_wrap}>
                    <img src='/com.png' />
                </div>
            </div>

            <Committee />
        </div>
    )
}

export default CommitteePage