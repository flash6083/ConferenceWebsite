import styles from './imp_dates.module.scss'

const date_info = [
    "Prof. (Dr.) Rajkumar Buyya, THe University of Melbourne, Australia",
    "Prof. (Dr.) Celia Shahnaz, Bangladesh University of Engineering and Technology, Bangladesh",
    "Prof. (Dr.) Debashis De, Maulana Abul Kalam Azad University of Technology, West Bengal, India",
    "Dr. Ahmed A. Elngar, Beni-Suef University, Egypt",
]

const Dates = () => {
    return (
        <div className={styles.dates}>
            <h1>Distinguished Keynote Speakers</h1>
            {date_info.map((date, index) => { return <p key={index}>{date}</p> })}
        </div>
    )
}

export default Dates
