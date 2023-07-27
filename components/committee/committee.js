"use client"

import NameCard from '../name_card/name_card';
import styles from './committee.module.scss'

const committee_details = {
    "Chief Patron": [
        "Dr Gautam Roy Chowdhury",
        "Prof. Manoshi Roy Chowdhury"
    ],
    "Patron": [
        "Mr Meghdut Roy Chowdhury",
        "Ms Pauline Laravoire",
        "Mr Anit Adhikari",
        "Dr Sujoy Biswas",
        "Dr Subhasis Biswas"
    ],
    "General Chairs": [
        "Dr Siddhartha Bhattacharya",
        "Dr Subhamita Mukherjee"
    ],
    "International Advisory Chair": [
        "Prof Soumitra Sasmal"
    ],
    "International Advisory Committee": [
        " Prof. Sankar K. Pal, Indian Statistical Institute, Kolkata, India",
        " Prof. Nikhil Ranjan Pal, Indian Statistical Institute, Kolkata, India",
        " Prof. Ujjwal Maulik, Jadavpur University, India",
        " Prof. Anupam Basu, Indian Institute of Technology Kharagpur, India",
        " Prof. Amit Konar, Jadavpur University, India",
        " Prof. Bidyut Baran Chaudhuri, Indian Statistical Institute, Kolkata, India",
        " Prof. Sushmita Mitra, Indian Statistical Institute, Kolkata, India",
        " Prof. Bijaya Ketan Panigrahi, Indian Institute of Technology Delhi, India",
        " Prof. Ponnuthurai Nagaratnam, Nanyang Technological University, Singapore",
        " Prof. Elizabeth C. Behrman, Wichita State University, USA",
        " Prof. Rajkumar Buyya, The University of Melbourne, Australia",
        " Prof. Saman K. Halgamuge,  The University of Melbourne, Australia",
        " Prof. Aboul Ella Hassanien, Cairo University, Egypt",
        " Prof. Mario Koeppen, Kyushu Institute of Technology, Japan",
        " Prof. Rudolf Kruse, Otto-von-Guericke University Magdeburg, Germany",
        " Prof. Janusz Kacpryzk, Polish Academy of Sciences, Poland",
        " Prof. Bhabani P. Sinha, Indian Statistical Institute, Kolkata, India",
        " Prof. Malay Kumar Kundu, Indian Statistical Institute, Kolkata, India",
        " Prof. Vincenzo Piuri, University of Milan, Italy",
        " Prof. Bhargab B. Bhattacharya, Indian Statistical Institute, India",
        " Prof. Wei-Chang Yeh, National Tsing Hua University (NTHU), Taiwan",
        " Prof. Punam Kumar Saha, University of Iowa, USA",
        " Pawan Lingras, Saint Mary’s University, Halifax, Nova Scotia, Canada",
        " Prof. Sukumar Nandy, Indian Institute of Technology Guwahati, India",
        " Prof. L. M. Patnaik, Indian Institute of Science, Bangalore, India",
        " Prof. K. V. S. Hari, IISc Bangalore, India"
    ],
    "Organizing Chair": [
        "Prof Shauvik Paul"
    ],
    "Organizing Committee": [
        "Dr Anirban Goswami",
        "Prof Prodipta Bhowmick",
        "Prof Soumyadip Jana",
        "Prof Dibyendu Banerjee",
        "Prof Hemant Agarwal",
        "Prof Nabanita Banerjee",
        "Prof Prodipta Das",
        "Prof Suman Ghosh"
    ],
    "Technical Chair": [
        "Dr.Saikat Majumder"
    ],
    "Technical Committee": [
        "Dr. Biswajit Ghosh",
        "Dr.Sudshna Kundu Mondal",
        "Dr.Tanmay Bhattacharyya",
        "Dr. Alok Kumar Mohanty",
        "Dr .Nilanjan Patra",
        "Dr.Jayanti Sarker",
        "Dr.Santanu Mondal",
        "Dr Pranati Dutta"
    ],
    "Program Chair": [
        "Dr Dharmadas Mandal"
    ],
    "Program Committee": [
        "Prof Bijoly Saha",
        "Prof Subhajit Bhowmik",
        "Dr Uttam Kumar Sarkar",
        "Prof Sanghamitra Manna",
        "Prof Arizul Haque"
    ],
    "Publication Chair": [
        "Prof Bidishna Bhattacharya"
    ],
    "Publication Committee": [
        "Prof Anindita Saha",
        "Prof Aparajita Chowdhury",
        "Prof Santu Guin",
        "Prof Arunava Kabiraj Thakur",
        "Prof Reshmita Mallick",
        "Prof Surojit Roy"
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