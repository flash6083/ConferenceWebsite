"use client"

import NameCard from '../name_card/name_card';
import styles from './committee.module.scss';

const committee_details = {
    "Chief Patron": [
        "Dr Gautam Roy Chowdhury, Techno India Group, India",
        "Prof. Manoshi Roy Chowdhury, Techno India Group, India"
    ],
    "Patron": [
        "Mr Meghdut Roy Chowdhury, Techno India Group, India",
        "Ms Pauline Laravoire, Techno India Group, India",
        "Mr Anit Adhikari, Techno India Group, India",
        "Dr Sujoy Biswas, Techno India Group, India",
        "Dr Subhasis Biswas, Techno India Group, India",
        "Dr Dharmadas Mandal, Techno Main Saltlake, Kolkata, India"
    ],
    "Honorary General Chairs": [
        "Prof. (Dr.) Rajkumar Buyya, The University of Melbourne, Australia",
        "Prof. (Dr.) Debashis De, Maulana Abul Kalam Azad University of Technology, WB, India"
    ],
    "General Chairs": [
        "Dr. Subhamita Mukherjee, Techno Main Saltlake, Kolkata, India",
        "Dr. Saikat Majumder, Techno Main Saltlake, Kolkata, India"
    ],
    "Organizing Chairs": [
        "Prof Shauvik Paul, Techno Main Saltlake, Kolkata, India",
        "Prof Soumitra Sasmal, Techno Main Saltlake, Kolkata, India"
    ],
    "Publication Chair": [
        "Prof. (Dr.) Indrajit Pan, RCC Institute of Information Technology, India"
    ],
    "International Advisory Committee": [
        "Prof. (Dr.) Valentina E. Balas, Aurel Vlaicu University, Arad, Romania",
        "Prof. (Dr.) Anand Nayyar, Duy Tan University, Vietnam",
        "Prof. (Dr.) Rajkumar Buyya, The University of Melbourne, Australia",
        "Prof. (Dr.) Debashis De, Maulana Abul Kalam Azad University of Technology, WB, India",
        "Dr. Pushpendu Kar, The University of Nottingham, China",
        "Prof. (Dr.) Rabie A. Ramadan, Nizwa University, Oman",
        "Prof. (Dr.) Paramartha Dutta, Visva Bharati University, India",
        "Dr. Debaditya Barman, Visva Bharati University, India",
        "Prof. (Dr.) Anirban Mukherjee, RCC Institute of Information Technology, India",
        "Dr. Arpan Deyasi, RCC Institute of Information Technology, India",
        "Dr. Baisakhi Das, Institute of Engineering and Management, India"
    ],

    "Technical Program Chair": [
        "Prof. (Dr.) Paramartha Dutta, Visva Bharati University, India",
        "Prof. (Dr.) Rabie A. Ramadan, Nizwa University, Oman",
        "Prof. Bidishna Bhattacharya, Techno Main Saltlake, Kolkata, India"
    ],
    "Technical Program Committee": [
        "Prof. (Dr.) Anand Nayyar, Duy Tan University, Vietnam",
        "Dr. Pushpendu Kar, The University of Nottingham, China",
        "Dr. Debaditya Barman, Visva Bharati University, India",
        "Dr. Arpan Deyasi, RCC Institute of Information Technology, India",
        "Dr. Hiranmoy Roy, RCC Institute of Information Technology, India",
        "Dr. Brojo Kishore Mishra, NIST Institute of Science and Technology, India",
        "Dr. Sudip Ghosh, Indian Institute of Engineering Science and Technology, Shibpur, India",
        "Dr. Indrajit Banerjee, Indian Institute of Engineering Science and Technology, Shibpur, India",
        "Dr. Tuhina Samanta, Indian Institute of Engineering Science and Technology, Shibpur, India",
        "Dr. Sanjoy Pratihar, Indian Institute of Information Technology, Kalyani, India",
        "Dr. Imon Mukherjee, Indian Institute of Information Technology, Kalyani, India",
        "Dr. Anjan Bandyopadhyay, KIIT University, Bhubaneswar, India",
        "Dr. Baisakhi Das, Institute of Engineering and Management, India",
        "Dr. Anirban Goswami, Techno Main Saltlake, Kolkata, India",
        "Dr. Biswajit Ghosh, Techno Main Saltlake, Kolkata, India",
        "Dr. Tanmay Bhattacharyya, Techno Main Saltlake, Kolkata, India",
        "Dr. Alok Kumar Mohanty, Techno Main Saltlake, Kolkata, India",
        "Dr. Nilanjan Patra, Techno Main Saltlake, Kolkata, India",
        "Dr. Jayanti Sarker, Techno Main Saltlake, Kolkata, India",
        "Dr. Santanu Mondal, Techno Main Saltlake, Kolkata, India",
        "Dr. Pranati Dutta, Techno Main Saltlake, Kolkata, India",
        "Dr. Uttam Kumar Sarkar, Techno Main Saltlake, Kolkata, India"     
    ],
    "Organizing Committee": [
        "Prof Anindita Saha, Techno Main Saltlake, Kolkata, India",
        "Prof Aparajita Chowdhury, Techno Main Saltlake, Kolkata, India",
        "Prof Bijoly Saha, Techno Main Saltlake, Kolkata, India",
        "Prof Subhajit Bhowmik, Techno Main Saltlake, Kolkata, India",
        "Prof Santu Guin, Techno Main Saltlake, Kolkata, India",
        "Prof Arunava Kabiraj Thakur, Techno Main Saltlake, Kolkata, India",
        "Prof Reshmita Mallick, Techno Main Saltlake, Kolkata, India",
        "Prof Surojit Roy, Techno Main Saltlake, Kolkata, India",
        "Prof Sanghamitra Manna, Techno Main Saltlake, Kolkata, India",
        "Prof Arizul Haque, Techno Main Saltlake, Kolkata, India",
        "Prof Prodipta Bhowmick, Techno Main Saltlake, Kolkata, India",
        "Prof Soumyadip Jana, Techno Main Saltlake, Kolkata, India",
        "Prof Dibyendu Banerjee, Techno Main Saltlake, Kolkata, India",
        "Prof Hemant Agarwal, Techno Main Saltlake, Kolkata, India",
        "Prof Nabanita Banerjee, Techno Main Saltlake, Kolkata, India",
        "Prof Prodipta Das, Techno Main Saltlake, Kolkata, India",
        "Prof Suman Ghosh, Techno Main Saltlake, Kolkata, India"
    ]

}
const keys = Object.keys(committee_details);

const Committee = () => {
    console.log(keys);
    return (

        <div className={styles.com_section}>
            {keys.map((pos, index) => {
                return <NameCard key={index} type={pos} names={committee_details[pos]} />
            })}
        </div>
    )
}

export default Committee
