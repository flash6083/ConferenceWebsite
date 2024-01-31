"use client"
//import word_template from '../../public/ProcSci_TeX.zip'
import styles from './papers.module.scss'

const CallForPapers = () => {
    return (
        <div className={styles.papers}>
            <h1>CISII 2024 invites unpublished research articles in following tracks but not limited to:</h1>
            <ul>
                <li>Artificial Intelligence and Machine Learning</li>
                <li>Data Science</li>
                <li>Device, Circuits and Systems</li>
                <li>Computational Biology and Bioinformatics</li>
                <li>Cloud Computing, IoT and Blockchain</li>
                <li>Quantum Technology</li>
                <li>AImage, Video and Signal Processing</li>
                <li>Robotics, Automation and Control</li>
                <li>Green Sustainability</li>
                <li>Energy integration</li>
                <li>Utility and Asset Management</li>
                <li>Brain Computer Interaction</li>
                <li>Smart Agriculture and Irrigation</li>
            </ul>
            <p>
                Prospective authors are invited to submit manuscripts reporting original unpublished research and recent developments in the topics related to the conference.

                <br /> <br />Manuscript should be prepared according to the template specified below, either in word or LaTeX format. Maximum page limit of the manuscript is mentioned under Submission Instructions. All the submissions must comply with this standard. Submission must include title, abstract, keywords, author and affiliation with email address. The paper should not contain page numbers.

                <br /> <br />We regard plagiarism as a serious misconduct and that is against the ethics. Every submission will be screened for plagiarism before acceptance. Decision regarding any paper will be based on single bind peer review process by at least three reviewers maintaining the policy regarding conflict of interest. Program committee of the conference will be solely responsible to confer their final decision regarding acceptance of any paper based on its similarity index, review comments and ratings.

                <br /><br />Moreover CISII 2024 organizers don't encourage withdrawal of any accepted papers after its acceptance.

                <br /><br />One author of an accepted paper is required to register for the conference at the full rate. All accepted papers MUST be presented at the conference by one of the authors, or, if none of the authors are able to attend then by a qualified surrogate.
            </p>
            <h2>Submission Instructions</h2>
            <ul className={styles.format}>
              // <li><span>Paper Template: </span>
              //       <a
              //           href="/splnproc1703.zip"
              //           download="Word_Template"
              //           target="_blank"
              //           rel="noreferrer"
              //       >
              //           <img src='/word-logo.png' style={{ "display": "inline-block", "width": "4vw", "marginRight": "2vw" }} />
              //       </a>
              //       <a
              //           href="/ProcSci_TeX.zip"
              //           download="LaTeX_Template"
              //           target="_blank"
              //           rel="noreferrer"
              //       >
              //           <img src='/latex-logo.png' style={{ "display": "inline-block", "width": "5vw" }} />
              //       </a>
              //   </li>
              //  <li>Normal Page Limit: 8 Pages</li>
                <li>Format for submission: PDF</li>
                <li>Link for submission: To be updated soon</li>
            </ul>
        </div>
    )
}

export default CallForPapers
