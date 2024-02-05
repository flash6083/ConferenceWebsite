"use client"

import NameCard from '../name_card/name_card';
import styles from './committee.module.scss';

const committee_details = {
    "Chief Patron": [
        "Prof. (Dr.) Gautam Roy Chowdhury, Techno India Group, India",
        "Prof. Manoshi Roy Chowdhury, Techno India Group, India"
    ],
    "Patron": [
        "Mr. Meghdut Roy Chowdhury, Techno India Group, India",
        "Ms. Pauline Laravoire, Techno India Group, India",
        "Mr. Anit Adhikari, Techno India Group, India",
        "Dr. Sujoy Biswas, Techno India Group, India",
        "Dr. Subhasis Biswas, Techno India Group, India"
    ],
    "Honorary General Chairs": [
        "Prof. (Dr.) Rajkumar Buyya, The University of Melbourne, Australia",
        "Prof. (Dr.) Celia Shahnaz, Bangladesh University of Engineering and Technology, Bangladesh",
        "Prof. (Dr.) Valentina E. Balas, Aurel Vlaicu University of Arad, Romania"
    ],
    "General Chairs": [
        "Dr. Subhamita Mukherjee, Techno Main Saltlake, Kolkata, India",
        "Dr. Saikat Majumder, Techno Main Saltlake, Kolkata, India",
        "Prof. (Dr.) Debashis De, Maulana Abul Kalam Azad University of Technology, WB, India"
    ],
    "Organizing Chairs": [
        "Prof. Shauvik Paul, Techno Main Saltlake, Kolkata, India",
        "Prof. Soumitra Sasmal, Techno Main Saltlake, Kolkata, India"
    ],
    "Publication Chair": [
        "Prof. (Dr.) Anand Nayyar, Duy Tan University, Vietnam",
        "Prof. (Dr.) Dharmadas Mandal, Techno Main Saltlake, Kolkata, India",
        "Prof. (Dr.) Indrajit Pan, RCC Institute of Information Technology, India"
    ],
    "International Advisory Committee": [
        "Prof. (Dr.) Valentina E. Balas, Aurel Vlaicu University of Arad, Romania",
        "Prof. (Dr.) Celia Shahnaz, Bangladesh University of Engineering and Technology, Bangladesh",
        "Prof. (Dr.) Anand Nayyar, Duy Tan University, Vietnam",
        "Prof. (Dr.) Rajkumar Buyya, The University of Melbourne, Australia",
        "Dr. Ahmed A Elngar, Beni-Suef University, Egypt",
        "Dr. Utku Kose, Suleyman Demirel University, Turkey & University of North Dakota, US",
        "Prof. (Dr.) R. Jhon Martin, Jazan University, Kingdom of Saudi Arabia",
        "Dr. Haipeng Liu, Coventry University, UK",
        "Dr. Soumya Sankar Basu, Sheffield Hallam University, UK",
        "Dr. Amlan Chatterjee, California State University, USA",
        "Dr. Pushpendu Kar, The University of Nottingham, China",
        "Prof. (Dr.) Rabie A. Ramadan, Nizwa University, Oman",
        "Dr. Akib Mohi Ud Din Khanday, United Arab Emirates University, UAE",
        "Prof. (Dr.) Paramartha Dutta, Visva Bharati University, India",
        "Dr. Debaditya Barman, Visva Bharati University, India",
        "Prof. (Dr.) Debashis De, Maulana Abul Kalam Azad University of Technology, WB, India",
        "Prof. (Dr.) Anirban Mukherjee, RCC Institute of Information Technology, India",
        "Prof. (Dr.) Jyoti Sekhar Banerjee, Bengal Institute of Technology, Kolkata, India",
        "Dr. Arpan Deyasi, RCC Institute of Information Technology, India",
        "Dr. Baisakhi Das, Institute of Engineering and Management, India",
        "Prof. (Dr.) Anirban Das, University of Engineering and Management, Kolkata, India",
        "Dr. Bharat Bhushan, Sharda University, Greater Noida, India"
    ],

    "Technical Program Chair": [
        "Prof. (Dr.) Paramartha Dutta, Visva Bharati University, India",
        "Prof. (Dr.) Rabie A. Ramadan, Nizwa University, Oman",
        "Prof. Bidishna Bhattacharya, Techno Main Saltlake, Kolkata, India"
    ],
    "Technical Program Committee": [
        "Prof. (Dr.) Anand Nayyar, Duy Tan University, Vietnam",
        "Dr. Pushpendu Kar, The University of Nottingham, China",
        "Dr. Soumya Sankar Basu, Sheffield Hallam University, UK",
        "Dr. Amlan Chatterjee, California State University, USA",
        "Dr. Debaditya Barman, Visva Bharati University, India",
        "Dr. Arpan Deyasi, RCC Institute of Information Technology, India",
        "Dr. Hiranmoy Roy, RCC Institute of Information Technology, India",
        "Prof. (Dr.) Indrajit Pan, RCC Institute of Information Technology, India",
        "Dr. Aniruddha Nag, IETE, Kolkata, India",
        "Dr. Brojo Kishore Mishra, NIST Institute of Science and Technology, India",
        "Dr. Ahmed A Elngar, Beni-Suef University, Egypt",
        "Dr. Utku Kose, Suleyman Demirel University, Turkey & University of North Dakota, US",
        "Dr. Sudip Ghosh, Indian Institute of Engineering Science and Technology, Shibpur, India",
        "Dr. Indrajit Banerjee, Indian Institute of Engineering Science and Technology, Shibpur, India",
        "Dr. Tuhina Samanta, Indian Institute of Engineering Science and Technology, Shibpur, India",
        "Dr. Sanjoy Pratihar, Indian Institute of Information Technology, Kalyani, India",
        "Dr. Imon Mukherjee, Indian Institute of Information Technology, Kalyani, India",
        "Dr. Anjan Bandyopadhyay, KIIT University, Bhubaneswar, India",
        "Prof. (Dr.) Anirban Das, University of Engineering and Management, Kolkata, India",
        "Dr. Abhishek Basu, RCC Institute of Information Technology, India",
        "Dr. Abhijit Das, RCC Institute of Information Technology, India",
        "Dr. Soumen Mukherjee, RCC Institute of Information Technology, India",
        "Dr. Haipeng Liu, Coventry University, UK",
        "Dr. Soham Sarkar, RCC Institute of Information Technology, India",
        "Dr. Soumyadip Dhar, RCC Institute of Information Technology, India",
        "Dr. Sutirtha Kumar Guha, Meghnad Saha Institute of Technology, India",
        "Prof. Pampa Debnath, RCC Institute of Information Technology, India",
        "Dr. Bharat Bhushan, Sharda University, Greater Noida, India",
        "Dr. Anuj Kumar, Sharda University, India",
        "Dr. Mohd Anas Wajid, Galgotias University, India",
        "Dr. Mohd Arif, Galgotias University, India",
        "Prof. Rabi Narayan Behera, Institute of Engineering & Management, India",
        "Prof. Uddalak Chatterjee, Sikhsha 'O' Anusandhan University, India",
        "Prof. Anirban Bhar, Narula Institute of Technology, Kolkata, India",
        "Prof. (Dr.) R. Jhon Martin, Jazan University, Kingdom of Saudi Arabia",
        "Prof. (Dr.) Jyoti Sekhar Banerjee, Bengal Institute of Technology, Kolkata, India",
        "Dr. Akib Mohi Ud Din Khanday, United Arab Emirates University, UAE",
        "Dr. Shibakali Gupta, University Institute of Technology,  BU, India",
        "Dr. Shiladitya Pujari, University Institute of Technology,  BU, India",
        "Dr. Baisakhi Das, Institute of Engineering and Management, India",
        "Dr. Srijan Bhattacharya, RCC Institute of Information Technology, Kolkata, India",
        "Dr. Manas Chanda, Meghnad Saha Institute of Technology, India",
        "Dr. Satya Sopan Mahato, National Institute of Science and Technology, Berhampore, India",
        "Dr. Pritam Poral, University of Engineering and Management, India",
        "Dr. Arnab Ghosh, University of Engineering and Management, India",
        "Dr. Jinia Datta, AIET, India",
        "Prof. Debashis Jana, Institute of Engineering and Management, India",
        "Dr. Hiranmoy Mondal, Maulana Abul Kalam Azad University of Technology, WB, India",
        "Prof. Bapita Roy, Guru Nanak Institute of Technology, India",
        "Dr. Sunipa Roy, Guru Nanak Institute of Technology, India",
        "Dr. Rajib Ghosh, Institute of Engineering and Management, India",
        "Prof. Nirmal Das, Institute of Engineering and Management, India",
        "Prof. Kaishiki Das, Institute of Engineering and Management, India",
        "Dr. Alok Mukherjee, Government College of Engineering & Ceramic Technology, India",
        "Dr. Monalisha Banerjee, Techno Main Salt Lake, India",
        "Dr. Dola RoyChowdhury, Techno Main Salt Lake, India",
        "Dr. Shibaprosad Sen, Techno Main Salt Lake, India",
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
        "Prof. Anindita Saha, Techno Main Saltlake, Kolkata, India",
        "Prof. Aparajita Chowdhury, Techno Main Saltlake, Kolkata, India",
        "Prof. Bijoly Saha, Techno Main Saltlake, Kolkata, India",
        "Prof. Subhajit Bhowmik, Techno Main Saltlake, Kolkata, India",
        "Prof. Santu Guin, Techno Main Saltlake, Kolkata, India",
        "Prof. Arunava Kabiraj Thakur, Techno Main Saltlake, Kolkata, India",
        "Prof. Reshmita Mallick, Techno Main Saltlake, Kolkata, India",
        "Prof. Surojit Roy, Techno Main Saltlake, Kolkata, India",
        "Prof. Sanghamitra Manna, Techno Main Saltlake, Kolkata, India",
        "Prof. Arizul Haque, Techno Main Saltlake, Kolkata, India",
        "Prof. Prodipta Bhowmick, Techno Main Saltlake, Kolkata, India",
        "Prof. Soumyadip Jana, Techno Main Saltlake, Kolkata, India",
        "Prof. Dibyendu Banerjee, Techno Main Saltlake, Kolkata, India",
        "Prof. Hemant Agarwal, Techno Main Saltlake, Kolkata, India",
        "Prof. Nabanita Banerjee, Techno Main Saltlake, Kolkata, India",
        "Prof. Prodipta Das, Techno Main Saltlake, Kolkata, India",
        "Prof. Suman Ghosh, Techno Main Saltlake, Kolkata, India"
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
