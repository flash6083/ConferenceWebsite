import styles from './imp_dates.module.scss'

const date_info = [
    "Paper submission open: 01 February 2024",
    "Paper Submission Deadline: 15 May 2024",
    "Acceptance Notification: 15 August 2024",
    "Early Bird Registration: 31 August 2024",
    "Regular Registration Closes: 15 September 2024"
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
