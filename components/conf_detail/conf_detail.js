import styles from './conf_detail.module.scss'

const ConferenceDetail = () => {
    return (
        <div className={styles.conf_detail}>
            <h1>Upcoming Conference</h1>
            <h3>
                International Conference on Intelligent and Smart innovation<br />
                for industry 6.0 (CISII,24)
            </h3>
            <h4>Date: 23rd and 24th February,2024</h4>
            <h1 className={styles.track_heading}>Track of CISII, 24</h1>
        </div>
    )
}

export default ConferenceDetail