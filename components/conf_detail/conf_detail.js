"use client"

import Track from '../track/track'

import styles from './conf_detail.module.scss'

const tracks_info = [
    { "id": "01", "name": "AI, ML, Data Science" },
    { "id": "02", "name": "Device, Circuit & Systems" },
    { "id": "03", "name": "Computational Biology and Bioinformatics" },
    { "id": "04", "name": "Cloud Computing, IoT, Blockchain, Security" },
    { "id": "05", "name": "Quantum Technology" },
    { "id": "06", "name": "Image, Video & Signal Processing" },
    { "id": "07", "name": "Robotics Automation & Control" },
    { "id": "08", "name": "Green Sustainability" },
    { "id": "09", "name": "Energy Integration" },
    { "id": "10", "name": "Utility & Asset Management" },
    { "id": "11", "name": "Brain-Computer Interaction" },
    { "id": "12", "name": "Smart Agriculture and Irrigation" },
]

const ConferenceDetail = () => {

    return (
        <div className={styles.conf_detail}>
            <h1>Upcoming Conference Date - 11 and 12 May,2024</h1>
            {/* <h4>Call for Papers: 11th October, 2023</h4> */}
            <h1 className={styles.track_heading}>Track of CISII, 24</h1>
            <div className={styles.track_items}>
                {tracks_info.map(track => <Track key={track.id} id={track.id} name={track.name} />)}
            </div>
        </div>
    )

}

export default ConferenceDetail