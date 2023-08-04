"use client"

import NameCard from '../name_card/name_card';
import styles from './committee.module.scss'

const committee_details = {
    "Chief Patron": [
        "Dr Gautam Roy Chowdhury, Techno Main Saltlake, Kolkata, India",
        "Prof. Manoshi Roy Chowdhury, Techno Main Saltlake, Kolkata, India"
    ],
    "Patron": [
        "Mr Meghdut Roy Chowdhury, Techno Main Saltlake, Kolkata, India",
        "Ms Pauline Laravoire, Techno Main Saltlake, Kolkata, India",
        "Mr Anit Adhikari, Techno Main Saltlake, Kolkata, India",
        "Dr Sujoy Biswas, Techno Main Saltlake, Kolkata, India",
        "Dr Subhasis Biswas, Techno Main Saltlake, Kolkata, India"
    ],
    "Honorary General Chairs": [
        "Dr. Kalyanmoy Deb",
        "Professor, Michigan State University",
        "Dr. Rajkumar Buyya",
        "Professor, The University of Melbourn"
    ],
    "General Chairs": [
        "Dr Siddhartha Bhattacharya, Techno Main Saltlake, Kolkata, India",
        "Dr Subhamita Mukherjee, Techno Main Saltlake, Kolkata, India"
    ],
    "International Advisory Chair": [
        "Prof Soumitra Sasmal, Techno Main Saltlake, Kolkata, India"
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
        "Prof Shauvik Paul, Techno Main Saltlake, Kolkata, India"
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
        "Dr.Saikat Majumder, Techno Main Saltlake, Kolkata, India"
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
    "Program Chair": [
        "Dr Dharmadas Mandal, Techno Main Saltlake, Kolkata, India"
    ],
    "Program Committee": [
        "Prof Bijoly Saha, Techno Main Saltlake, Kolkata, India",
        "Prof Subhajit Bhowmik, Techno Main Saltlake, Kolkata, India",
        "Dr Uttam Kumar Sarkar, Techno Main Saltlake, Kolkata, India",
        "Prof Sanghamitra Manna, Techno Main Saltlake, Kolkata, India",
        "Prof Arizul Haque, Techno Main Saltlake, Kolkata, India"
    ],
    "Publication Chair": [
        "Prof Bidishna Bhattacharya, Techno Main Saltlake, Kolkata, India"
    ],
    "Publication Committee": [
        "Prof Anindita Saha, Techno Main Saltlake, Kolkata, India",
        "Prof Aparajita Chowdhury, Techno Main Saltlake, Kolkata, India",
        "Prof Santu Guin, Techno Main Saltlake, Kolkata, India",
        "Prof Arunava Kabiraj Thakur, Techno Main Saltlake, Kolkata, India",
        "Prof Reshmita Mallick, Techno Main Saltlake, Kolkata, India",
        "Prof Surojit Roy, Techno Main Saltlake, Kolkata, India"
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