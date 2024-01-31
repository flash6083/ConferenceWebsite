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
        "TBA"
    ],
    "General Chairs": [
        "Dr Subhamita Mukherjee, Techno Main Saltlake, Kolkata, India"
    ],
    "Organizing Chairs": [
        "Prof Soumitra Sasmal, Techno Main Saltlake, Kolkata, India",
        "Prof Shauvik Paul, Techno Main Saltlake, Kolkata, India"
    ],
    "Program Chair": [
        "TBA"
    ],
    "International Advisory Committee": [
       "TBA"
    ],

    "Organizing Committee": [
        "Dr Anirban Goswami, Techno Main Saltlake, Kolkata, India",
        "Prof Prodipta Bhowmick, Techno Main Saltlake, Kolkata, India",
        "Prof Soumyadip Jana, Techno Main Saltlake, Kolkata, India",
        "Prof Dibyendu Banerjee, Techno Main Saltlake, Kolkata, India",
        "Prof Hemant Agarwal, Techno Main Saltlake, Kolkata, India",
        "Prof Nabanita Banerjee, Techno Main Saltlake, Kolkata, India",
        "Prof Prodipta Das, Techno Main Saltlake, Kolkata, India",
        "Prof Suman Ghosh, Techno Main Saltlake, Kolkata, India"
    ],
    "Technical Chair": [
        "Dr.Saikat Majumder, Techno Main Saltlake, Kolkata, India",
        "Prof Bidishna Bhattacharya, Techno Main Saltlake, Kolkata, India"
    ],
    "Technical Committee": [
        "Dr. Biswajit Ghosh, Techno Main Saltlake, Kolkata, India",
        "Dr.Sudshna Kundu Mondal, Techno Main Saltlake, Kolkata, India",
        "Dr.Tanmay Bhattacharyya, Techno Main Saltlake, Kolkata, India",
        "Dr. Alok Kumar Mohanty, Techno Main Saltlake, Kolkata, India",
        "Dr .Nilanjan Patra, Techno Main Saltlake, Kolkata, India",
        "Dr.Jayanti Sarker, Techno Main Saltlake, Kolkata, India",
        "Dr.Santanu Mondal, Techno Main Saltlake, Kolkata, India",
        "Dr Pranati Dutta, Techno Main Saltlake, Kolkata, India"
    ],
    "Program Committee": [
        "Prof Bijoly Saha, Techno Main Saltlake, Kolkata, India",
        "Prof Subhajit Bhowmik, Techno Main Saltlake, Kolkata, India",
        "Dr Uttam Kumar Sarkar, Techno Main Saltlake, Kolkata, India",
        "Prof Sanghamitra Manna, Techno Main Saltlake, Kolkata, India",
        "Prof Arizul Haque, Techno Main Saltlake, Kolkata, India"
    ],
    "Publication Committee": [
        "Prof Anindita Saha, Techno Main Saltlake, Kolkata, India",
        "Prof Aparajita Chowdhury, Techno Main Saltlake, Kolkata, India",
        "Prof Santu Guin, Techno Main Saltlake, Kolkata, India",
        "Prof Arunava Kabiraj Thakur, Techno Main Saltlake, Kolkata, India",
        "Prof Reshmita Mallick, Techno Main Saltlake, Kolkata, India",
        "Prof Surojit Roy, Techno Main Saltlake, Kolkata, India"
    ],
    "Technical Program Committee": [
        "TBA"
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
