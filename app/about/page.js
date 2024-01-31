import styles from './about.module.scss'

const AboutPage = () => {
    return (
        <div className={styles.about}>
            <div className={styles.head}>
                <h1>Discover the Future of Intelligent Systems and Industrial Instrumentation: International Conference on Intelligent Systems and Industrial Instrumentation (CISII-24) - September 20-21, 2024, Kolkata, India</h1>
                <p>Fostering Collaboration and Advancement in AI, IoT, Robotics, and More - Join the Leading Experts at CISII-24 for an Unforgettable Experience!</p>
            </div>
            <div className={styles.about_img}>
                <img src='/about_pic.jpg' />
            </div>
            <p className={styles.content}>
                <em>International Conference on Intelligent Systems and Industrial Instrumentation (CISII - 24), is going to be organized on 20 and 21 September 2024 at the Techno Main Salt Lake in Kolkata, India.

                    CISII - 24 aims to bring together leading experts, researchers, professionals, and practitioners from various disciplines to explore and discuss the latest advancements and innovations in the fields of Artificial Intelligence, Machine Learning, Data Science, Device, Circuit and Systems, Computational Biology and Bioinformatics, Cloud Computing, IoT (Internet of Things), Blockchain, Security, Quantum Technology, Image, Video, and Signal Processing, Robotics Automation and Control, Green Sustainability, Energy Integration, Utility and Asset Management, Brain-Computer Interaction, and Smart Agriculture and Irrigation.

                    In the era of Artificial Intelligence and Industrial automation, where industries are witnessing a profound transformation driven by cutting-edge technologies, CISII - 24 serves as a pivotal platform for fostering collaborations and exchanging ideas. This two-day conference will feature keynote speeches, plenary sessions, panel discussions, and technical paper presentations, providing attendees with unique insights into the latest trends and challenges in intelligent and smart innovation.

                    The conference encourages the submission of research papers and proposals focusing on emerging tracks, presenting an opportunity for researchers and scholars to share their pioneering work, breakthroughs, and novel methodologies. Moreover, CISII - 24 aims to facilitate stimulating discussions and networking opportunities, leading to potential partnerships and future collaborations.

                    Kolkata, known for its rich cultural heritage and vibrant academic community, serves as an ideal backdrop for this event. Techno Main Salt Lake, renowned for its academic and technological excellence, provides the perfect setting to host this gathering of brilliant minds in the field of intelligent and smart innovation.

                    We cordially invite all interested participants to join us at CISII - 24, where together, we can chart a course towards a smarter and more innovative future Artificial Intelligence and Industrial Instrumentation. Mark your calendars for 20 and 21 September 2024, and be part of this extraordinary event that promises to shape the future of technology and industry. We look forward to welcoming you to Kolkata, India, for an intellectually stimulating and unforgettable experience.
                </em>
            </p>
        </div>
    )
}

export default AboutPage
