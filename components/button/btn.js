import { HiArrowUpRight } from 'react-icons/hi2'
import styles from './btn.module.scss'

const CustomBtn = ({ text }) => {
    return (
        <div className={styles.btn}>
            <span>{text}</span>
            <HiArrowUpRight size={15} />
        </div>
    )
}

export default CustomBtn