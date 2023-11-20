const { getSeatingPlan, createSeatingPlan } = require("../actions/Seating");

export const batch1arr = [
  {
    name: "Ansuman kumar",
    email: "ansuman.23bcs10072@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Saksham jain",
    email: "saksham.23bcs10063@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Nayanshi singh",
    email: "nayanshi.23bcs10073@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Manish rachakonda",
    email: "manish.23bcs10099@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Amlan Buragohain",
    email: "amlan.23bcs10032@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Suryansh Shakya",
    email: "suryansh.23bcs10041@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Sachin",
    email: "sachin.23bcs10070@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Sourashis Sarkar",
    email: "sourashis.23bcs10038@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Parth Arora",
    email: "parth.23bcs10084@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Adarsh Singh Tomar",
    email: "adarsh.23bcs10031@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Amritesh Indal",
    email: "amritesh.23bcs10150@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Vinayak Paka",
    email: "vinayaka.23bcs10118@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Pooja Talele",
    email: "pooja.23bcs10151@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Prem B Shah",
    email: "prem.23bcs10060@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Pranav Aggarwal",
    email: "pranav.23bcs10145@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Bhavya Jain",
    email: "bhavya.23bcs10088@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Zaid Sharieff",
    email: "zaid.23bcs10120@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  ABHINAV KUMAR JHA",
    email: "abhinav.23bcs10045@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Jenish Thapa",
    email: "jenish.23bcs10016@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Aatmik Panse",
    email: "aatmik.23bcs10082@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Mahak Juriani",
    email: "mahak.23bcs10008@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  KOHANTIKA NATH",
    email: "kohantika.23bcs10097@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  SHRIMAY SOMANI",
    email: "shrimay.23bcs10117@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Sudharsan S",
    email: "sudharsan.23bcs10077@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Pritam Raj",
    email: "pritam.23bcs10108@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Lokendra Singh Rajawat",
    email: "lokendra.23bcs10075@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Rudra Kumar Chauhan",
    email: "rudra.23bcs10137@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Rajat Tyagi",
    email: "rajat.23bcs10053@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Medha Shree",
    email: "medha.23bcs10049@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Suraj Guduru",
    email: "guduru.23bcs10012@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Shrinibas Mahanta",
    email: "shrinibas.23bcs10067@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Satish",
    email: "satish.23bcs10018@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Arjun Kshirsagar",
    email: "arjun.23bcs10157@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Vishesh Paliwal",
    email: "vishesh.23bcs10013@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Abhinav Nagar",
    email: "abhinav.23bcs10047@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Kushi Varadaraj",
    email: "kushi.23bcs10035@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  V Shravanth",
    email: "v.23bcs10030@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Shivansh Singh",
    email: "shivansh.23bcs10109@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Amrutha C A",
    email: "amrutha.23bcs10158@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  prathmesh bhardwaj",
    email: "prathmesh.23bcs10025@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Harsh Kumar",
    email: "harsh.23bcs10066@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Samrudh",
    email: "samrudh.23bcs10123@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Sandip Dey",
    email: "sandip.23bcs10114@ms.sst.scaler.com",
    batchNumber: 1,
  },
];

export const batch2arr = [
  {
    name: "Abhinav Gupta",
    email: "abhinav.23bcs10090@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Abhishek  Kumar Shah",
    email: "abhishek.23bcs10065@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Aditya Jaiswal",
    email: "aditya.23bcs10007@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Aditya Prasad Dash",
    email: "aditya.23bcs10138@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Aditya singh",
    email: "aditya.23bcs10148@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Aman yadav",
    email: "aman.23bcs10055@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Anuj",
    email: "anuj.23bcs10028@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Arnavya Chettri",
    email: "arnavya.23bcs10119@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Arth",
    email: "arth.23bcs10017@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Atharv sanjay jain",
    email: "atharv.23bcs10113@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Ayaan Khan",
    email: "ayaan.23bcs10029@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Ayush Kesharwani",
    email: "ayush.23bcs10112@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  deepak",
    email: "deepak.23bcs10092@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Divyanshu Pandey",
    email: "divyanshu.23bcs10085@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  GARVIT JAIN",
    email: "garvit.23bcs10091@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Harsh Kumar Patwa",
    email: "harsh.23bcs10021@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Harshini Reddy",
    email: "harshini.23bcs10135@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Karan Das A",
    email: "karan.23bcs10023@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Krupakar Reddy",
    email: "krupakar.23bcs10086@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Loukik",
    email: "loukik.23bcs10059@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  MAYANK GUPTA",
    email: "mayank.23bcs10069@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Naresh Biradar",
    email: "naresh.23bcs10081@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Nishant Dwivedi",
    email: "nishantkumar.23bcs10064@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Sai Venkatesh Alampally",
    email: "sai.23bcs10095@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Shreshtha Sharma",
    email: "shreshtha.23bcs10093@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Shruti Verma",
    email: "shruti.23bcs10057@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Siddharth R",
    email: "siddharth.23bcs10076@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Siva Rama Krishna Gogineni",
    email: "sivaram.23bcs10153@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Souvik Kumar",
    email: "souvik.23bcs10132@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  srikrrishn choudhary",
    email: "srikrrishn.23bcs10010@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  suraj kumar",
    email: "suraj.23bcs10146@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  SWARNIM",
    email: "swarnim.23bcs10139@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Thirunagari Rohith",
    email: "thirunagari.23bcs10039@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  THRISHAL",
    email: "thrishalmadasu@gmail.com",
    batchNumber: 2,
  },
  {
    name: "  Tushar Khurana",
    email: "tushar.23bcs10051@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Udit Kumar Nayak",
    email: "uditkumar.23bcs10159@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Varun Deep Saini",
    email: "varun.23bcs10048@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Vatsal Omar",
    email: "vatsal.23bcs10101@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Vibhu",
    email: "vibhu.23bcs10147@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Vijay gaurav kummetha",
    email: "kvijay.23bcs10003@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Vinay Kumar Reddy",
    email: "vinay.23bcs10083@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Vivek Yadav",
    email: "vivek.23bcs10062@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Y N V S D L SANJANA",
    email: "sanjana.23bcs10009@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Yash Agarwal",
    email: "yash.23bcs10121@ms.sst.scaler.com",
    batchNumber: 2,
  },
];

export const batch3arr = [
  {
    name: "Abhinav Kumar Narayan",
    email: "abhinav.23bcs10014@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Ajai Sharan",
    email: "ajai.23bcs10154@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Aman Anand",
    email: "aman.23bcs10130@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Archisman Midya",
    email: "archisman.23bcs10027@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Arjun Ojha",
    email: "arjun.23bcs10068@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Bhargav M",
    email: "bhargav.23bcs10140@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Bishal Jena",
    email: "bishal.23bcs10096@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Chikoti Ruthwik",
    email: "chikoti.23bcs10111@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Daksh jain",
    email: "daksh.23bcs10125@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Daksh Kanaujia",
    email: "daksh.23bcs10089@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Dipti Hatwar",
    email: "dipti.23bcs10033@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Harsh kumar",
    email: "harsh.23bcs10098@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Harsh Kumar",
    email: "harsh.23bcs10066@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  HARSH KUMAR PANCHAL",
    email: "harsh.23bcs10087@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Harshit",
    email: "harshit.23bcs10046@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Harshit Goel",
    email: "harshit.23bcs10149@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Hemkesh kantawala",
    email: "hemkesh.23bcs10040@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Ishan Avasthi",
    email: "ishan.23bcs10042@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Jiya Singhal",
    email: "jiya.23bcs10043@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  K Manoj krishna",
    email: "krishna.23bcs10128@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  kartik deshpande",
    email: "kartik.23bcs10141@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Keshav Makkad",
    email: "keshav.23bcs10002@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Krishna Patidar",
    email: "krishna.23bcs10036@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Kumar Kartikay",
    email: "kumar.23bcs10129@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Naga Chaitanya",
    email: "naga.23bcs10054@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  narasimha",
    email: "narasimha.23bcs10026@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Naresh Kumar Thodupunoori",
    email: "naresh.23bcs10006@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Neel Dholiya",
    email: "neel.23bcs10022@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Nymish Kashivishwanath",
    email: "nymish.23bcs10127@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Prashant Singh Chauhan",
    email: "prashant.23bcs10058@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Prince kumar",
    email: "prince.23bcs10071@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  priyanshu baul majumder",
    email: "priyanshu.23bcs10019@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Rohan Danny Skaria",
    email: "rohan.23bcs10122@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Rudraksh Rankawat",
    email: "rudraksh.23bcs10004@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Shivam Goel",
    email: "shivam.23bcs10131@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Shreyas Garg",
    email: "shreyas.23bcs10155@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Siddham Jain",
    email: "siddham.23bcs10103@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Srujan Dharma",
    email: "srujan.23bcs10107@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Sushant Singh Chauhan",
    email: "sushant.23bcs10020@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Tamanna Mohan",
    email: "tamanna.23bcs10133@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Utkersh Basnet",
    email: "utkersh.23bcs10105@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Vikramaditya",
    email: "vikramaditya.23bcs10061@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Yashraj Sunil Kupekar",
    email: "yashraj.23bcs10102@ms.sst.scaler.com",
    batchNumber: 3,
  },
];

export const batch4arr = [
  {
    name: "Aarya Harshal Patil",
    email: "aarya.23bcs10170@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "Shailendra Jurel",
    email: "shailendra23bcs10201@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Aayush Khopade",
    email: "aayush.23bcs10050@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Abhay Raj",
    email: "abhay.23bcs10181@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Aditya Kumar Singh",
    email: "adityakumar.23bcs10152@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Aman singh",
    email: "aman.23bcs10164@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Anant Shukla",
    email: "anant.23bcs10217@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  ANANYA SRIVASTAVA",
    email: "ananya.23bcs10195@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Aniruddha patil",
    email: "aniruddha.23bcs10156@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Ankur Kalita",
    email: "ankur.23bcs10185@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Arpit Srivastava",
    email: "arpit.23bcs10194@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Aryan Choudhary",
    email: "aryan.23bcs10080@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Ashwin Saklecha",
    email: "ashwin.23bcs10212@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Ayush Saxena",
    email: "ayush.23bcs10175@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Charanjeet",
    email: "charanjeet.23bcs10074@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Debashis Maharana",
    email: "debashis.23bcs10209@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Devi Charan",
    email: "chitluri.23bcs10211@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Garvit Dadheech",
    email: "garvit.23bcs10203@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Gowtham",
    email: "gowtham.23bcs10168@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Harsh",
    email: "harsh.23bcs10171@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Harsh Verma",
    email: "harsh.23bcs10183@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  harshit sachan",
    email: "harshit.23bcs10134@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Himanshu Sainani",
    email: "himanshu.23bcs10126@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  INDRAJEET YADAV",
    email: "indrajeet.23bcs10199@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Ishita Khot",
    email: "ishita.23bcs10188@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Jash Savaliya",
    email: "jash.23bcs10163@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Kanan Arora",
    email: "kanan.23bcs10180@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Kushagra S",
    email: "kushagra.23bcs10165@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Manan Agrawal",
    email: "manan.23bcs10206@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Manjari Rathore",
    email: "manjari.23bcs10192@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Mayank Vashisht",
    email: "mayank.23bcs10177@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  NAITIK JAIN",
    email: "naitik.23bcs10214@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Navneet",
    email: "navneet.23bcs10136@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  om Annasaheb waghchavare",
    email: "annasaheb.23bcs10142@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Om Mishra",
    email: "om.23bcs10191@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Paawanjot Kaur",
    email: "paawanjot.23bcs10186@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Paramjeet Kaur Matharu",
    email: "paramjeet.23bcs10189@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Pradyut Fogla",
    email: "pradyut.23bcs10193@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Purab Ray",
    email: "purab.23bcs10196@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Purvansh Sahu",
    email: "purvansh.23bcs10169@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Riya Bhurse",
    email: "riya.23bcs10187@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Rushabh Mistry",
    email: "rushabh.23bcs10197@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Rushil Choudhary",
    email: "rushil.23bcs10178@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Sarthak Pandey",
    email: "sarthak.23bcs10179@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Satyam",
    email: "satyam.23bcs10198@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Sheza mishal",
    email: "sheza.23bcs10184@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Shivam Singh",
    email: "shivam.23bcs10162@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Shivam Tiwari",
    email: "shivam.23bcs10104@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Shubh",
    email: "shubh.23bcs10190@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Siddharth Baleja",
    email: "siddharth.23bcs10161@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Spoorthy",
    email: "spoorthy.23bcs10144@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Suryansh Dubey",
    email: "suryansh.23bcs10167@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Suswetha",
    email: "suswetha.23bcs10166@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Syed Ayaan Ali",
    email: "syed.23bcs10094@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Syeda noorain",
    email: "syeda.23bcs10221@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  tanvi",
    email: "tanvi.23bcs10143@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Tejas Ghatule",
    email: "tejas.23bcs10056@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Vinay Kumar Chopra",
    email: "vinay.23bcs10174@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Vivek",
    email: "vivek.23bcs10172@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Yash Arya",
    email: "yash.23bcs10160@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Yash athwani",
    email: "yash.23bcs10173@ms.sst.scaler.com",
    batchNumber: 4,
  },
];

export const totalStudentList = [
  {
    name: "Ansuman kumar",
    email: "ansuman.23bcs10072@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Saksham jain",
    email: "saksham.23bcs10063@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Nayanshi singh",
    email: "nayanshi.23bcs10073@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Manish rachakonda",
    email: "manish.23bcs10099@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Amlan Buragohain",
    email: "amlan.23bcs10032@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Suryansh Shakya",
    email: "suryansh.23bcs10041@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Sachin",
    email: "sachin.23bcs10070@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Sourashis Sarkar",
    email: "sourashis.23bcs10038@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Parth Arora",
    email: "parth.23bcs10084@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Adarsh Singh Tomar",
    email: "adarsh.23bcs10031@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Amritesh Indal",
    email: "amritesh.23bcs10150@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Vinayak Paka",
    email: "vinayaka.23bcs10118@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Pooja Talele",
    email: "pooja.23bcs10151@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Prem B Shah",
    email: "prem.23bcs10060@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Pranav Aggarwal",
    email: "pranav.23bcs10145@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Bhavya Jain",
    email: "bhavya.23bcs10088@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Zaid Sharieff",
    email: "zaid.23bcs10120@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  ABHINAV KUMAR JHA",
    email: "abhinav.23bcs10045@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Jenish Thapa",
    email: "jenish.23bcs10016@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Aatmik Panse",
    email: "aatmik.23bcs10082@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Mahak Juriani",
    email: "mahak.23bcs10008@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  KOHANTIKA NATH",
    email: "kohantika.23bcs10097@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  SHRIMAY SOMANI",
    email: "shrimay.23bcs10117@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Sudharsan S",
    email: "sudharsan.23bcs10077@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Pritam Raj",
    email: "pritam.23bcs10108@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Lokendra Singh Rajawat",
    email: "lokendra.23bcs10075@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Rudra Kumar Chauhan",
    email: "rudra.23bcs10137@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Rajat Tyagi",
    email: "rajat.23bcs10053@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Medha Shree",
    email: "medha.23bcs10049@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Suraj Guduru",
    email: "guduru.23bcs10012@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Shrinibas Mahanta",
    email: "shrinibas.23bcs10067@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Satish",
    email: "satish.23bcs10018@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Arjun Kshirsagar",
    email: "arjun.23bcs10157@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Vishesh Paliwal",
    email: "vishesh.23bcs10013@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Abhinav Nagar",
    email: "abhinav.23bcs10047@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Kushi Varadaraj",
    email: "kushi.23bcs10035@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  V Shravanth",
    email: "v.23bcs10030@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Shivansh Singh",
    email: "shivansh.23bcs10109@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Amrutha C A",
    email: "amrutha.23bcs10158@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  prathmesh bhardwaj",
    email: "prathmesh.23bcs10025@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Harsh Kumar",
    email: "harsh.23bcs10066@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Samrudh",
    email: "samrudh.23bcs10123@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "  Sandip Dey",
    email: "sandip.23bcs10114@ms.sst.scaler.com",
    batchNumber: 1,
  },
  {
    name: "Abhinav Gupta",
    email: "abhinav.23bcs10090@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Abhishek  Kumar Shah",
    email: "abhishek.23bcs10065@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Aditya Jaiswal",
    email: "aditya.23bcs10007@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Aditya Prasad Dash",
    email: "aditya.23bcs10138@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Aditya singh",
    email: "aditya.23bcs10148@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Aman yadav",
    email: "aman.23bcs10055@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Anuj",
    email: "anuj.23bcs10028@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Arnavya Chettri",
    email: "arnavya.23bcs10119@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Arth",
    email: "arth.23bcs10017@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Atharv sanjay jain",
    email: "atharv.23bcs10113@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Ayaan Khan",
    email: "ayaan.23bcs10029@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Ayush Kesharwani",
    email: "ayush.23bcs10112@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  deepak",
    email: "deepak.23bcs10092@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Divyanshu Pandey",
    email: "divyanshu.23bcs10085@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  GARVIT JAIN",
    email: "garvit.23bcs10091@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Harsh Kumar Patwa",
    email: "harsh.23bcs10021@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Harshini Reddy",
    email: "harshini.23bcs10135@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Karan Das A",
    email: "karan.23bcs10023@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Krupakar Reddy",
    email: "krupakar.23bcs10086@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Loukik",
    email: "loukik.23bcs10059@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  MAYANK GUPTA",
    email: "mayank.23bcs10069@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Naresh Biradar",
    email: "naresh.23bcs10081@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Nishant Dwivedi",
    email: "nishantkumar.23bcs10064@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Sai Venkatesh Alampally",
    email: "sai.23bcs10095@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Shreshtha Sharma",
    email: "shreshtha.23bcs10093@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Shruti Verma",
    email: "shruti.23bcs10057@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Siddharth R",
    email: "siddharth.23bcs10076@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Siva Rama Krishna Gogineni",
    email: "sivaram.23bcs10153@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Souvik Kumar",
    email: "souvik.23bcs10132@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  srikrrishn choudhary",
    email: "srikrrishn.23bcs10010@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  suraj kumar",
    email: "suraj.23bcs10146@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  SWARNIM",
    email: "swarnim.23bcs10139@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Thirunagari Rohith",
    email: "thirunagari.23bcs10039@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  THRISHAL",
    email: "thrishalmadasu@gmail.com",
    batchNumber: 2,
  },
  {
    name: "  Tushar Khurana",
    email: "tushar.23bcs10051@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Udit Kumar Nayak",
    email: "uditkumar.23bcs10159@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Varun Deep Saini",
    email: "varun.23bcs10048@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Vatsal Omar",
    email: "vatsal.23bcs10101@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Vibhu",
    email: "vibhu.23bcs10147@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Vijay gaurav kummetha",
    email: "kvijay.23bcs10003@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Vinay Kumar Reddy",
    email: "vinay.23bcs10083@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Vivek Yadav",
    email: "vivek.23bcs10062@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Y N V S D L SANJANA",
    email: "sanjana.23bcs10009@ms.sst.scaler.com",
    batchNumber: 2,
  },
  {
    name: "  Yash Agarwal",
    email: "yash.23bcs10121@ms.sst.scaler.com",
    batchNumber: 2,
  },

  {
    name: "Abhinav Kumar Narayan",
    email: "abhinav.23bcs10014@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Ajai Sharan",
    email: "ajai.23bcs10154@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Aman Anand",
    email: "aman.23bcs10130@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Archisman Midya",
    email: "archisman.23bcs10027@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Arjun Ojha",
    email: "arjun.23bcs10068@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Bhargav M",
    email: "bhargav.23bcs10140@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Bishal Jena",
    email: "bishal.23bcs10096@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Chikoti Ruthwik",
    email: "chikoti.23bcs10111@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Daksh jain",
    email: "daksh.23bcs10125@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Daksh Kanaujia",
    email: "daksh.23bcs10089@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Dipti Hatwar",
    email: "dipti.23bcs10033@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Harsh kumar",
    email: "harsh.23bcs10098@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Harsh Kumar",
    email: "harsh.23bcs10066@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  HARSH KUMAR PANCHAL",
    email: "harsh.23bcs10087@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Harshit",
    email: "harshit.23bcs10046@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Harshit Goel",
    email: "harshit.23bcs10149@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Hemkesh kantawala",
    email: "hemkesh.23bcs10040@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Ishan Avasthi",
    email: "ishan.23bcs10042@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Jiya Singhal",
    email: "jiya.23bcs10043@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  K Manoj krishna",
    email: "krishna.23bcs10128@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  kartik deshpande",
    email: "kartik.23bcs10141@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Keshav Makkad",
    email: "keshav.23bcs10002@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Krishna Patidar",
    email: "krishna.23bcs10036@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Kumar Kartikay",
    email: "kumar.23bcs10129@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Naga Chaitanya",
    email: "naga.23bcs10054@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  narasimha",
    email: "narasimha.23bcs10026@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Naresh Kumar Thodupunoori",
    email: "naresh.23bcs10006@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Neel Dholiya",
    email: "neel.23bcs10022@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Nymish Kashivishwanath",
    email: "nymish.23bcs10127@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Prashant Singh Chauhan",
    email: "prashant.23bcs10058@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Prince kumar",
    email: "prince.23bcs10071@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  priyanshu baul majumder",
    email: "priyanshu.23bcs10019@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Rohan Danny Skaria",
    email: "rohan.23bcs10122@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Rudraksh Rankawat",
    email: "rudraksh.23bcs10004@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Shivam Goel",
    email: "shivam.23bcs10131@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Shreyas Garg",
    email: "shreyas.23bcs10155@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Siddham Jain",
    email: "siddham.23bcs10103@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Srujan Dharma",
    email: "srujan.23bcs10107@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Sushant Singh Chauhan",
    email: "sushant.23bcs10020@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Tamanna Mohan",
    email: "tamanna.23bcs10133@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Utkersh Basnet",
    email: "utkersh.23bcs10105@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Vikramaditya",
    email: "vikramaditya.23bcs10061@ms.sst.scaler.com",
    batchNumber: 3,
  },
  {
    name: "  Yashraj Sunil Kupekar",
    email: "yashraj.23bcs10102@ms.sst.scaler.com",
    batchNumber: 3,
  },

  {
    name: "Aarya Harshal Patil",
    email: "aarya.23bcs10170@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Aayush Khopade",
    email: "aayush.23bcs10050@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Abhay Raj",
    email: "abhay.23bcs10181@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Aditya Kumar Singh",
    email: "adityakumar.23bcs10152@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Aman singh",
    email: "aman.23bcs10164@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Anant Shukla",
    email: "anant.23bcs10217@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  ANANYA SRIVASTAVA",
    email: "ananya.23bcs10195@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Aniruddha patil",
    email: "aniruddha.23bcs10156@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Ankur Kalita",
    email: "ankur.23bcs10185@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Arpit Srivastava",
    email: "arpit.23bcs10194@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Aryan Choudhary",
    email: "aryan.23bcs10080@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Ashwin Saklecha",
    email: "ashwin.23bcs10212@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Ayush Saxena",
    email: "ayush.23bcs10175@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Charanjeet",
    email: "charanjeet.23bcs10074@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Debashis Maharana",
    email: "debashis.23bcs10209@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Devi Charan",
    email: "chitluri.23bcs10211@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Garvit Dadheech",
    email: "garvit.23bcs10203@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Gowtham",
    email: "gowtham.23bcs10168@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Harsh",
    email: "harsh.23bcs10171@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Harsh Verma",
    email: "harsh.23bcs10183@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  harshit sachan",
    email: "harshit.23bcs10134@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Himanshu Sainani",
    email: "himanshu.23bcs10126@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  INDRAJEET YADAV",
    email: "indrajeet.23bcs10199@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Ishita Khot",
    email: "ishita.23bcs10188@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Jash Savaliya",
    email: "jash.23bcs10163@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Kanan Arora",
    email: "kanan.23bcs10180@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Kushagra S",
    email: "kushagra.23bcs10165@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Manan Agrawal",
    email: "manan.23bcs10206@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Manjari Rathore",
    email: "manjari.23bcs10192@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Mayank Vashisht",
    email: "mayank.23bcs10177@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  NAITIK JAIN",
    email: "naitik.23bcs10214@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Navneet",
    email: "navneet.23bcs10136@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  om Annasaheb waghchavare",
    email: "annasaheb.23bcs10142@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Om Mishra",
    email: "om.23bcs10191@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Paawanjot Kaur",
    email: "paawanjot.23bcs10186@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Paramjeet Kaur Matharu",
    email: "paramjeet.23bcs10189@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Pradyut Fogla",
    email: "pradyut.23bcs10193@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Purab Ray",
    email: "purab.23bcs10196@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Purvansh Sahu",
    email: "purvansh.23bcs10169@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Riya Bhurse",
    email: "riya.23bcs10187@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Rushabh Mistry",
    email: "rushabh.23bcs10197@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Rushil Choudhary",
    email: "rushil.23bcs10178@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Sarthak Pandey",
    email: "sarthak.23bcs10179@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Satyam",
    email: "satyam.23bcs10198@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Sheza mishal",
    email: "sheza.23bcs10184@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Shivam Singh",
    email: "shivam.23bcs10162@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Shivam Tiwari",
    email: "shivam.23bcs10104@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Shubh",
    email: "shubh.23bcs10190@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Siddharth Baleja",
    email: "siddharth.23bcs10161@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Spoorthy",
    email: "spoorthy.23bcs10144@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Suryansh Dubey",
    email: "suryansh.23bcs10167@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Suswetha",
    email: "suswetha.23bcs10166@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Syed Ayaan Ali",
    email: "syed.23bcs10094@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Syeda noorain",
    email: "syeda.23bcs10221@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  tanvi",
    email: "tanvi.23bcs10143@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Tejas Ghatule",
    email: "tejas.23bcs10056@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Vinay Kumar Chopra",
    email: "vinay.23bcs10174@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Vivek",
    email: "vivek.23bcs10172@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Yash Arya",
    email: "yash.23bcs10160@ms.sst.scaler.com",
    batchNumber: 4,
  },
  {
    name: "  Yash athwani",
    email: "yash.23bcs10173@ms.sst.scaler.com",
    batchNumber: 4,
  },
];

const createSeatsWithAvavilability = () => {
  const seatingAvailabilityData = []; // this will create a blank row which we will use for storing seatin row wise

  for (let i = 0; i < 9; i++) {
    seatingAvailabilityData.push([]); // this will run 9 times and create 9 rows for seating

    for (let j = 0; j < 23; j++) {
      var col = "A";
      var available = true;

      var currentIndex = 0;

      if (j < 4) {
        col = "A";
        // available = false;
        currentIndex = j;
      } else if (j >= 4 && j < 7) {
        col = "B";
        available = true;

        currentIndex = j - 4;
      } else if (j >= 7 && j < 10) {
        col = "C";
        available = true;
        currentIndex = j - 7;
      } else if (j >= 10 && j < 13) {
        col = "D";
        available = true;
        currentIndex = j - 10;
      } else if (j >= 13 && j < 16) {
        col = "E";
        available = true;
        currentIndex = j - 13;
      } else if (j >= 16 && j < 20) {
        col = "F";
        available = true;
        currentIndex = j - 16;
      } else if (j >= 20) {
        col = "G";
        available = true;
        currentIndex = j - 20;
      }

      // Above whole code is for assigning column to each seat and making them available

      //Now Below code is for hiding seats for specific row and col which we can do by making available false

      if (col == "D" && i == 8) {
        available = false;
      }

      //Behind TV

      if (col == "B" && i == 2 && j == 5) {
        available = false;
      }

      //Behing Pillars

      if (col == "B" && i == 3) {
        available = false;
      }

      //Behind Pillars

      if (col == "F" && i == 3 && (j == 18 || j == 19 || j == 20)) {
        available = false;
      }
      if (col == "F" && i == 2 && j == 20) {
        available = false;
      }
      if (col == "F" && i == 4 && (j == 17 || j == 18)) {
        available = false;
      }

      // const randomBatch = Math.floor(Math.random() * 4); // now i am selecting a random batch for each seat

      let randomUser = {}; // we will store our current user here

      if (available && totalStudentList.length > 0) {
        // now we are checking if seat is available or not , if yes then we will assign a random user to it from our total student list

        randomUser = getRandomAndRemove(totalStudentList); // call the function which returns a random user and remove it from the list so that we dont get same user again

        seatingAvailabilityData[i].push({
          id: generateUniqueIdFromString(randomUser.name),
          name: randomUser.name,
          location: `${col}-${i}-${currentIndex}`,
          email: randomUser.email,
          available: available,
          batchNumber: randomUser.batchNumber,
        }); // now we are pushing the user to our seating row
      } else {
        seatingAvailabilityData[i].push({
          id: `${col}-${i}-${j}`,
          name: "Blank",
          location: `${col}-${i}-${currentIndex}`,
          email: "Blank",
          available: available,
          batchNumber: 0,
        }); //  we are pushing the blank seat to our seating row
      }
    }
  } // now we have created a seating row wise with random users and blank seats

  return seatingAvailabilityData; // now we are returning the seating data
};

// const seatingList = () => {
//   const currentDate = new Date();
//   const dayOfMonth = currentDate.getDate();

//   let batch1, batch2, batch3;

//   if (dayOfMonth >= 1 && dayOfMonth <= 10) {
//     batch1 = ["B", "C"];
//     batch2 = ["D", "E"];
//     batch3 = ["F", "G"];
//   } else if (dayOfMonth >= 11 && dayOfMonth <= 20) {
//     batch3 = ["B", "C"];
//     batch1 = ["D", "E"];
//     batch2 = ["F", "G"];
//   } else if (dayOfMonth >= 21 && dayOfMonth <= 31) {
//     batch2 = ["B", "C"];
//     batch3 = ["D", "E"];
//     batch1 = ["F", "G"];
//   }

//   const mainGrid = [];

//   for (let i = 0; i < 9; i++) {
//     const row = [];

//     for (let j = 1; j <= 23; j++) {
//       var col = "A";
//       var available = true;

//       if (j <= 4) {
//         col = "A";
//         available = false;
//       } else if (j > 4 && j <= 7) {
//         col = "B";
//         available = true;
//       } else if (j > 7 && j <= 10) {
//         col = "C";
//         available = true;
//       } else if (j > 10 && j <= 13) {
//         col = "D";
//         available = true;
//       } else if (j > 13 && j <= 16) {
//         col = "E";
//         available = true;
//       } else if (j > 16 && j <= 20) {
//         col = "F";
//         available = true;
//       } else if (j > 20) {
//         col = "G";
//         available = true;
//       }

//       //Hiding Seats

//       if (col == "D" && i == 8) {
//         available = false;
//       }

//       //Behind TV

//       if (col == "B" && i == 2 && j == 5) {
//         available = false;
//       }

//       //Behing Pillars

//       if (col == "B" && i == 3) {
//         available = false;
//       }

//       //Behind Pillars

//       if (col == "F" && i == 3 && (j == 18 || j == 19 || j == 20)) {
//         available = false;
//       }
//       if (col == "F" && i == 2 && j == 20) {
//         available = false;
//       }
//       if (col == "F" && i == 4 && (j == 17 || j == 18)) {
//         available = false;
//       }

//       row.push({
//         id: j + i,
//         name: "",
//         batch: 1,
//         availablilty: available,
//         column: col,
//       });
//     }
//     mainGrid.push(row);
//   }

//   const finalData = [];

//   for (let i = 0; i < mainGrid.length; i++) {
//     const row = [];

//     finalData.push(row);

//     for (let j = 0; j < mainGrid[i].length; j++) {
//       let currentCol = mainGrid[i][j].column;
//       let batch = 0;

//       let currentUser = null;

//       if (mainGrid[i][j].availablilty) {
//         if (batch1.includes(currentCol)) {
//           batch = 1;
//           currentUser = getRandomAndRemove(batch1arr);
//         } else if (batch2.includes(currentCol)) {
//           batch = 2;
//           currentUser = getRandomAndRemove(batch2arr);
//         } else if (batch3.includes(currentCol)) {
//           batch = 3;
//           currentUser = getRandomAndRemove(batch3arr);
//         }

//         if (currentUser != null) {
//           row.push({
//             id: generateUniqueIdFromString(currentUser),
//             name: currentUser,
//             batch: batch,
//             availablilty: mainGrid[i][j].availablilty,
//             column: mainGrid[i][j].column,
//           });
//         } else {
//           row.push({
//             id: generateUniqueIdFromString("NUlL"),
//             name: "Blank",
//             batch: batch,
//             availablilty: mainGrid[i][j].availablilty,
//             column: mainGrid[i][j].column,
//           });
//         }
//       } else {
//         row.push({
//           id: generateUniqueIdFromString("NullUser"),
//           name: "Blank",
//           batch: batch,
//           availablilty: mainGrid[i][j].availablilty,
//           column: mainGrid[i][j].column,
//         });
//       }
//     }
//   }

//   return finalData;
// };  // V1 Code to create seating list with blank and user data

const getDate = () => {
  const date = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const monthAbbreviation = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${day}${monthAbbreviation}${year}`;
  return formattedDate;
}; // this function will return the current date in format of 1Jan2021

export const fetchData = async () => {
  const date = getDate(); // this will return the current date in format of 1Jan2021

  const finalData = createSeatsWithAvavilability();

  try {
    const result = await getSeating({ date, finalData });
    if (result === "Not Available") {
      // console.log("create Data");
      const updateResult = await updateSeating({ date, finalData });
      // console.log(updateResult, "this is updatedReult");
      return updateResult;
    } else {
      // console.log(result[0].seatingList, "this is from server");
      return result[0].seatingList;
    }
  } catch (error) {
    return "Error";
  }
};

const getSeating = async ({ date, finalData }) => {
  return await getSeatingPlan({
    date,
    finalData,
  });
};

const updateSeating = async ({ date, finalData }) => {
  return await createSeatingPlan({
    date,
    finalData,
  });
};

function generateUniqueIdFromString(inputString) {
  const uniqueId = inputString.replace(/\s+/g, "").toLowerCase();
  return uniqueId;
}

function getRandomAndRemove(arr) {
  if (arr.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * arr.length);

  const randomElement = arr[randomIndex];

  arr.splice(randomIndex, 1);

  return randomElement;
}
