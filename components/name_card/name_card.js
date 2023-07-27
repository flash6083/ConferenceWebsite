
import styles from './name_card.module.scss'

const NameCard = ({ type, names }) => {
    return (
        <div className={styles.name_card}>

            <h1>{type}</h1>
            {names.map((name, index) => (<p key={index}>{name}</p>))}
        </div>
    )
}

export default NameCard