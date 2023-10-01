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
        "Dr Subhasis Biswas, Techno India Group, India"
    ],
    "Honorary General Chairs": [
        "Dr. Kalyanmoy Deb, Michigan State University, India",
        "Dr. Rajkumar Buyya, The University of Melbourn, India",
    ],
    "General Chairs": [
        "Dr Siddhartha Bhattacharya, Rajnagar Mahavidyalaya, India",
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
        " Prof. Saman K. Halgamuge, The University of Melbourne, Australia",
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
        " Pawan Lingras, Saint Mary's University, Halifax, Nova Scotia, Canada",
        " Prof. Sukumar Nandy, Indian Institute of Technology Guwahati, India",
        " Prof. L. M. Patnaik, Indian Institute of Science, Bangalore, India",
        " Prof. K. V. S. Hari, IISc Bangalore, India",
        " Dr. Paramartha Dutta, Visva-Bharati University, India",
        " Dr. Mariofanna Milanova, University of Arkansas  Little Rock, USA",
        " Dr. Asit K. Datta, University of Calcutta, India",
        " Xiao-Zhi Gao, University of Eastern Finland, Finland",
        " Dr. Kaori Yoshida, Kyushu Institute of Technology, Japan",
        " Dr. Cesare Alippi, Politecnico di Milano, Italy",
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
    ],
    "Technical Program Committee": [
        "Dr.Tuhina Samanta, IIEST Shibpur, India",
        "Dr.Indrajit Banerjee, IIEST Shibpur, India",
        "Dr.Debasis De, MAKAUT, WB, India",
        "Dr.Indrajit Pan, RCC Institute of Information Technology, Kolkata, India",
        "Dr.Abhijit Das, RCC Institute of Information Technology, Kolkata, India",
        "Dr.Dipankar Majumdar, RCC Institute of Information Technology, Kolkata, India",
        "Dr.Shyamapada Mukherjee, NIT Rourkela, India",
        "Dr.Debaditya Barman, Visva - Bharati University, India",
        "Dr.Baisakhi Das, IEM, India",
        "Dr.Srijan Bhattacharya, RCC Institute of Information Technology, Kolkata, India",
        "Dr.Manas Chanda, MSIT, India",
        "Dr.Satya Sopan Mahato, NIST, India",
        "Dr.Rajib Ghosh, IEM, India",
        "Dr.Pritam Poral, UEM, India",
        "Dr.Arnab Ghosh, UEM, India",
        "Dr.JiniaDatta, AIET, India",
        "Prof.Debashis Jana, IEM, India",
        "Dr.Hiranmoy Mondal, MAKAUT, WB, India",
        "Prof.Bapita Roy, GNIT, India",
        "Dr.Sunipa Roy, GNIT, India",
        "Dr.Shibaprosad Sen, Techno Main Salt Lake, India",
        "Prof.Nirmal Das, IEM, India",
        "Prof.Kaishiki Das, IEM, India",
        "Dr.Monalisha Banerjee, Techno Main Salt Lake, India",
        "Dr.Dola RoyChowdhury, Techno Main Salt Lake, India",
        "Dr.Alok Mukherjee, Government College of Engineering & amp; Ceramic Technology, India",
        "Dr.Shibakali Gupta, University of Burdwan, Burdwan, India",
        "Dr.Sudip Ghosh, Indian Institute of Engineering Science and Technology, Shibpur, India",
        "Dr.Arijit Ghosal, St.Thomas College of Engineering & amp; Technology, Kolkata, India",
        "Dr.Abhishek Bhattacharya, Institute of Engineering and Management, Kolkata, India",
        "Dr.Sachi Nandan Mohanty, KIIT University, India",
        "Dr.Anirban Das, University of Engineering and Management, Kolkata, India",
        "Dr.Biswarup Neogi, JIS College of Engineering, India",
        "Dr.Swarnendu Chakraborty, National Institute of Technology, Arunachal Pradesh, India",
        "Dr.Soumi Dutta, Institute of Engineering and Management, Kolkata, India",
        "Dr.Debashis Mondal, RCC Institute of Information Technology, Kolkata, India",
        "Dr.Anup Kumar Kolya, RCC Institute of Information Technology, Kolkata, India",
        "Dr.Sutirtha Kumar Guha, Meghnad Saha Institute of Technology, Kolkata, India",
        "Dr.Shiladitya Pujari, University Institute of Technology, Burdwan, India",
        "Prof.Sanjib Saha, Dr.B.C.Roy Engineering College, Durgapur, India",
        "Prof.Uddalak Chatterjee, BITM, Santiniketan, India",
        "Prof.Rabi Narayan Behera, Institute of Engineering and Management, Kolkata, India",
        "Prof.Sudipta Bhattacharya, Bengal Institute of Technology, Kolkata, India",
        "Prof.Anjan Bandyopadhyay, KIIT, Bhubaneswar, India",
        "Prof.Anirban Bhar, Narula Institute of Technology, Kolkata, India",
        "Dr. Hirak Mazumdar, Woxsen University, India",
        "Dr. Debanjan Konar, Purdue University, USA",
        "Dr. N. K. Mondal, Burdwan University, India",
        "Dr. Sergey Gorbachev, Russian Academy of Engineering, Moscow, Russia",
        "Dr. Avishek Ray, K.C.College of Engineering and Management atusies and Research, Thane (E), India",
        "Dr. Poulami Das, SVKM's NMIMS (Deemed to be University), India",
        "Dr. Abhijit Das, RCC Institute of Information Technology, India",
        "Prof. Sabyasachi Mukhopadhyay, Centre For Computational And Data Sciences, IIT Kharagpur, India",
        "Dr. Kousik Dasgupta, Kalyani Government Engineering College, India",
        "Dr. Pijush Barthakur, KLS Gogte Institute of Technology, India",
        "Dr. B. Balamurugan, Galgotias University, India",
        "Prof. Tulika Dutta, presidency University, India",
        "Dr. Debashis De, MAKAUT, India",
        "Dr. Indradip Banerjee, University Institute of Technology (UIT), India",
        "Dr. Wellington Pinheiro dos Santos, Universidade Federal de Pernambuco, Recife, Brasil",
        "Dr. Ashish Mani, Amity University, Noida, India",
        "Dr. Leo Mršić, Algebra University College, Croatia",
        "Dr. Somenath Chakraborty, West Virginia University Institute of Technology, USA",
        "Dr. Nilanjan Dey, Techno International New Town, Kolkata, India",
        "Dr. Mausumi Goswami, Christ University, India",
        "Dr. Ashutosh Kumar Dubey, Chitkara University, Himachal Pradesh, India",
        "Dr. Arpan Deyasi, RCC Institute of Information Technology, India",
        "Dr. Jyoti Prakash Singh, NIT patna, India",
        "Prof. Pampa Debnath, RCC Institute of Information Technology, India",
        "Prof. Debaditya Barman, Visva-bharati University, India",
        "Dr. Shibakali Gupta, University Institute of Technology (UIT), India",
        "Dr. Abhishek Basu, RCC Institute of Information Technology, India",
        "Dr. Anirban Mukherjee, RCC Institute of Information Technology, India",
        "Dr. Sandip Dey, Sukanta Mahavidyalaya, India",
        "Dr. SK Hafizul Islam, IIIT Kalyani, India",
        "Dr. Samarendra Nath Sur, Sikkim Manipal Institute of Technology. India",
        "Dr. Sourav De, Cooch Behar Government Engineering College, India",
        "Prof. Alokananda Dey, RCC Institute of Information Technology, India",
        "Dr. Y. Jayanta Singh, NIELET, India",
        "Dr. Soumyajit Goswami, IBM India Pvt. Ltd., India",
        "Dr. Pijush Samui, NIT Patna, India",
        "Dr. Balakrushna Tripathy, VIT University, India",
        "Dr. Hiranmoy Roy, RCC Institute of Information Technology, India",
        "Prof. Koyel Chakraborty, Supreme Knowledge Foundation Group of Institutions, India",
        "Dr. Ditipriya Sinha, NIT Patna, India",
        "Dr. Jan Platoš, VSB Technical University of Ostrava, Czech Republic",
        "Dr. Soumyadip Dhar, RCC Institute of Information Technology, India",
        "Dr. Ayan Das. BIT Messra, India",
        "Dr. Debabrata Samanta, RIT Kosovo (A.U.K), Kosovo",
        "Dr. Goran Klepac, Raiffeisenbank Austria, Croatia",
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