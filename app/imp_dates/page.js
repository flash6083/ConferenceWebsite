import styles from './imp_dates.module.scss'

const date_info = [
    "Paper submission open: 01 February 2024",
    "Paper Submission Deadline: 31 March 2024",
    "Acceptance Notification: 30 April 2024",
    "Early Bird Registration: 03 May 2024",
    "Regular Registration Closes: 07 May 2024"
]

const Dates = () => {
    return (
        <div className={styles.dates}>
            <h1>Mark Your Calendar: Important Dates</h1>
            {date_info.map((date, index) => { return <p key={index}>{date}</p> })}
        </div>
    )
}

export default Dates