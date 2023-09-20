const { getSeatingPlan, createSeatingPlan } = require("../actions/Seating");

export const batch1arr = [
  "Aatmik Panse",
  "ABHINAV KUMAR JHA",
  "Abhinav Nagar",
  "Adarsh Singh Tomar",
  "Amlan Buragohain",
  "Amritesh Indal",
  "Amrutha c a",
  "Ansuman kumar",
  "Arjun Kshirsagar",
  "Aryan Choudhary",
  "BHAVYA JAIN",
  "Charanjeet",
  "DHANUSH PAGOTI",
  "Harsh Kumar",
  "Jenish Thapa",
  "KARTIK  JAIN",
  "Kohantika",
  "Kushi Varadaraj",
  "Lokendra",
  "Mahak Juriani",
  "Manish Rao Rachakonda",
  "Medha Shree",
  "Navneet",
  "Nishant Raj Tiwari",
  "Parth Arora",
  "Pooja Talele",
  "Pranav Aggarwal",
  "prathmesh bhardwaj",
  "Prem B Shah",
  "Pritam Raj",
  "Rajat Tyagi",
  "Rudra Chauhan",
  "Sachin Beniwal",
  "Saksham jain",
  "Samrudh V V",
  "Sandip Dey",
  "Satish Pandit Rathod",
  "Shivam Tiwari",
  "SHRIMAY SOMANI",
  "Shrinibas Mahanta",
  "Sourashis Sarkar",
  "Sudharsan S",
  "Suraj",
  "Suryansh Shakya",
  "Syed Ayaan Ali",
  "V Shravanth",
  "Vinayaka Madhava",
  "Vishesh",
  "Zaid",
];

export const batch2arr = [
  "AAYUSH ASHOK KHOPADE",
  "Abhinav Gupta",
  "ABHISHEK KUMAR SHAH",
  "Aditya Jaiswal",
  "Aditya Prasad Dash",
  "Aditya singh",
  "Aman Yadav",
  "Aniruddha Patil",
  "Anuj",
  "Arnavya Chettri",
  "Arth Thapa",
  "Atharv sanjay jain",
  "Ayaan Khan",
  "Ayush Kesharwani",
  "Divyanshu Pandey",
  "Garvit jain",
  "GSivaRam",
  "Harsh Kumar",
  "Harshini Reddy Nellore",
  "KARAN DAS A",
  "Krupakar Reddy",
  "Kvijay gaurav",
  "loukik",
  "MAYANK GUPTA",
  "Naresh Biradar",
  "Navneet",
  "Nishant kumar Dwivedi",
  "Rudraksh Rankawat",
  "Sai Deepak",
  "Sai Venkatesh Alampally",
  "Sanjana",
  "Shreshtha Sharma",
  "Shruti Verma",
  "Siddharth R",
  "Souvik Kumar",
  "Spoorthy",
  "srikrrishn choudhary",
  "suraj kumar",
  "SWARNIM",
  "Tejas Ghatule",
  "Thirunagari Rohith",
  "THRISHAL",
  "Tushar Khurana",
  "UDIT KUMAR NAYAK",
  "Varun Deep Saini",
  "Vatsal Omar",
  "Vibhu",
  "Vinay Reddy Yedula",
  "Vivek Yadav",
  "Yash Agarwal",
];

export const batch3arr = [
  "Abhinav",
  "Aditya Kumar Singh",
  "Ajai Sharan",
  "Aman Anand",
  "Archisman Midya",
  "Arjun",
  "Bhargav M",
  "Bishal Jena",
  "Chikoti Ruthwik",
  "Daksh jain",
  "Daksh Kanaujia",
  "Dipti Hatwar",
  "HARSH KUMAR PANCHAL",
  "Harsh Kumar Prabhakar",
  "Harsh umesh kumar",
  "Harshit Goel",
  "harshit sachan",
  "Harshit Shah",
  "Hemkesh V Kantawala",
  "Himanshu Sainani",
  "Ishan Avasthi",
  "Jiya Singhal",
  "K Manoj krishna",
  "kartik deshpande",
  "Keshav Makkad",
  "Krishna Patidar",
  "Kumar Kartikay",
  "Naga",
  "narasimha",
  "Naresh Kumar Thodupunoori",
  "Nayanshi singh",
  "Neel Dholiya",
  "Nymish Kashivishwanath",
  "OM Annasaheb waghchavare",
  "Prashant Singh Chauhan",
  "Prince kumar",
  "Priyanshu Baul Majumder",
  "Rohan Danny Skaria",
  "Samrat",
  "Shivam Goel",
  "Shivansh Singh",
  "Shreyas Garg",
  "Siddham Jain",
  "Srujan",
  "Sushant Singh Chauhan",
  "Tamanna Mohan",
  "tanvi",
  "Utkersh Basnet",
  "Vikramaditya",
  "Yashraj Sunil Kupekar",
];

export const mainBatch1arr = [
  "Aatmik Panse",
  "ABHINAV KUMAR JHA",
  "Abhinav Nagar",
  "Adarsh Singh Tomar",
  "Amlan Buragohain",
  "Amritesh Indal",
  "Amrutha c a",
  "Ansuman kumar",
  "Arjun Kshirsagar",
  "Aryan Choudhary",
  "BHAVYA JAIN",
  "Charanjeet",
  "DHANUSH PAGOTI",
  "Harsh Kumar",
  "Jenish Thapa",
  "KARTIK  JAIN",
  "Kohantika",
  "Kushi Varadaraj",
  "Lokendra",
  "Mahak Juriani",
  "Manish Rao Rachakonda",
  "Medha Shree",
  "Navneet",
  "Nishant Raj Tiwari",
  "Parth Arora",
  "Pooja Talele",
  "Pranav Aggarwal",
  "prathmesh bhardwaj",
  "Prem B Shah",
  "Pritam Raj",
  "Rajat Tyagi",
  "Rudra Chauhan",
  "Sachin Beniwal",
  "Saksham jain",
  "Samrudh V V",
  "Sandip Dey",
  "Satish Pandit Rathod",
  "Shivam Tiwari",
  "SHRIMAY SOMANI",
  "Shrinibas Mahanta",
  "Sourashis Sarkar",
  "Sudharsan S",
  "Suraj",
  "Suryansh Shakya",
  "Syed Ayaan Ali",
  "V Shravanth",
  "Vinayaka Madhava",
  "Vishesh",
  "Zaid",
];

export const mainBatch2arr = [
  "AAYUSH ASHOK KHOPADE",
  "Abhinav Gupta",
  "ABHISHEK KUMAR SHAH",
  "Aditya Jaiswal",
  "Aditya Prasad Dash",
  "Aditya singh",
  "Aman Yadav",
  "Aniruddha Patil",
  "Anuj",
  "Arnavya Chettri",
  "Arth Thapa",
  "Atharv sanjay jain",
  "Ayaan Khan",
  "Ayush Kesharwani",
  "Divyanshu Pandey",
  "Garvit jain",
  "GSivaRam",
  "Harsh Kumar",
  "Harshini Reddy Nellore",
  "KARAN DAS A",
  "Krupakar Reddy",
  "Kvijay gaurav",
  "loukik",
  "MAYANK GUPTA",
  "Naresh Biradar",
  "Navneet",
  "Nishant kumar Dwivedi",
  "Rudraksh Rankawat",
  "Sai Deepak",
  "Sai Venkatesh Alampally",
  "Sanjana",
  "Shreshtha Sharma",
  "Shruti Verma",
  "Siddharth R",
  "Souvik Kumar",
  "Spoorthy",
  "srikrrishn choudhary",
  "suraj kumar",
  "SWARNIM",
  "Tejas Ghatule",
  "Thirunagari Rohith",
  "THRISHAL",
  "Tushar Khurana",
  "UDIT KUMAR NAYAK",
  "Varun Deep Saini",
  "Vatsal Omar",
  "Vibhu",
  "Vinay Reddy Yedula",
  "Vivek Yadav",
  "Yash Agarwal",
];

export const mainBatch3arr = [
  "Abhinav",
  "Aditya Kumar Singh",
  "Ajai Sharan",
  "Aman Anand",
  "Archisman Midya",
  "Arjun",
  "Bhargav M",
  "Bishal Jena",
  "Chikoti Ruthwik",
  "Daksh jain",
  "Daksh Kanaujia",
  "Dipti Hatwar",
  "HARSH KUMAR PANCHAL",
  "Harsh Kumar Prabhakar",
  "Harsh umesh kumar",
  "Harshit Goel",
  "harshit sachan",
  "Harshit Shah",
  "Hemkesh V Kantawala",
  "Himanshu Sainani",
  "Ishan Avasthi",
  "Jiya Singhal",
  "K Manoj krishna",
  "kartik deshpande",
  "Keshav Makkad",
  "Krishna Patidar",
  "Kumar Kartikay",
  "Naga",
  "narasimha",
  "Naresh Kumar Thodupunoori",
  "Nayanshi singh",
  "Neel Dholiya",
  "Nymish Kashivishwanath",
  "OM Annasaheb waghchavare",
  "Prashant Singh Chauhan",
  "Prince kumar",
  "Priyanshu Baul Majumder",
  "Rohan Danny Skaria",
  "Samrat",
  "Shivam Goel",
  "Shivansh Singh",
  "Shreyas Garg",
  "Siddham Jain",
  "Srujan",
  "Sushant Singh Chauhan",
  "Tamanna Mohan",
  "tanvi",
  "Utkersh Basnet",
  "Vikramaditya",
  "Yashraj Sunil Kupekar",
];

const seatingList = () => {
  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();

  let batch1, batch2, batch3;

  if (dayOfMonth >= 1 && dayOfMonth <= 10) {
    batch1 = ["B", "C"];
    batch2 = ["D", "E"];
    batch3 = ["F", "G"];
  } else if (dayOfMonth >= 11 && dayOfMonth <= 20) {
    batch3 = ["B", "C"];
    batch1 = ["D", "E"];
    batch2 = ["F", "G"];
  } else if (dayOfMonth >= 21 && dayOfMonth <= 31) {
    batch2 = ["B", "C"];
    batch3 = ["D", "E"];
    batch1 = ["F", "G"];
  }

  const mainGrid = [];

  for (let i = 0; i < 9; i++) {
    const row = [];

    for (let j = 1; j <= 23; j++) {
      var col = "A";
      var available = true;

      if (j <= 4) {
        col = "A";
        available = false;
      } else if (j > 4 && j <= 7) {
        col = "B";
        available = true;
      } else if (j > 7 && j <= 10) {
        col = "C";
        available = true;
      } else if (j > 10 && j <= 13) {
        col = "D";
        available = true;
      } else if (j > 13 && j <= 16) {
        col = "E";
        available = true;
      } else if (j > 16 && j <= 20) {
        col = "F";
        available = true;
      } else if (j > 20) {
        col = "G";
        available = true;
      }

      if (col == "D" && i == 8) {
        available = false;
      }
      if (col == "B" && i == 2 && j == 5) {
        available = false;
      }

      row.push({
        id: j + i,
        name: "",
        batch: 1,
        availablilty: available,
        column: col,
      });
    }
    mainGrid.push(row);
  }

  const finalData = [];

  for (let i = 0; i < mainGrid.length; i++) {
    const row = [];

    finalData.push(row);

    for (let j = 0; j < mainGrid[i].length; j++) {
      let currentCol = mainGrid[i][j].column;
      let batch = 0;

      let currentUser = null;

      if (mainGrid[i][j].availablilty) {
        if (batch1.includes(currentCol)) {
          batch = 1;
          currentUser = getRandomAndRemove(batch1arr);
        } else if (batch2.includes(currentCol)) {
          batch = 2;
          currentUser = getRandomAndRemove(batch2arr);
        } else if (batch3.includes(currentCol)) {
          batch = 3;
          currentUser = getRandomAndRemove(batch3arr);
        }

        if (currentUser != null) {
          row.push({
            id: generateUniqueIdFromString(currentUser),
            name: currentUser,
            batch: batch,
            availablilty: mainGrid[i][j].availablilty,
            column: mainGrid[i][j].column,
          });
        } else {
          row.push({
            id: generateUniqueIdFromString("NUlL"),
            name: "Blank",
            batch: batch,
            availablilty: mainGrid[i][j].availablilty,
            column: mainGrid[i][j].column,
          });
        }
      } else {
        row.push({
          id: generateUniqueIdFromString("NullUser"),
          name: "Blank",
          batch: batch,
          availablilty: mainGrid[i][j].availablilty,
          column: mainGrid[i][j].column,
        });
      }
    }
  }

  return finalData;
};

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
};

export const fetchData = async () => {
  const date = getDate();
  console.log(date, "this is date");
  const finalData = seatingList();
  try {
    const result = await getSeating({ date, finalData });
    if (result === "Not Available") {
      console.log("create Data");
      const updateResult = await updateSeating({ date, finalData });
      console.log(updateResult, "this is updatedReult");
      return updateResult;
    } else {
      console.log(result[0].seatingList, "this is from server");
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
