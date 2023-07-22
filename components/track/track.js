import styles from './track.module.scss'

const Track = ({ id, name }) => {
    return (
        <div className={styles.track}>
            <p>{id}</p>
            <span>{name}</span>
        </div>
    )
}

export default Track