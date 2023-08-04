import styles from './imp_dates.module.scss'

const date_info = [
    "Paper submission open: 01 September 2023",
    "Submission Deadline: 30 November 2023",
    "Acceptance Notification: 15 January 2024",
    "Early Bird Registration: 31 January 2024",
    "Regular Registration Closes: 15 February 2024"
]

const Dates = () => {
    return (
        <div className={styles.dates}>
            <h1>Mark Your Calendar: Important Dates</h1>
            {date_info.map((date) => { return <p>{date}</p> })}
        </div>
    )
}

export default Dates