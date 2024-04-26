console.log("Java Fundamentals SBA")
// The provided course infconst CourseInfo = {
    id: 451,
 { name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
      
       
    ];

  
    return result;
   
    
  }
  {
    const id = ["Learner_id_125"]
   
    console.log("Learner_id_125")
    const text1 = "avg: 0.985"
    console.log(text1)
    // Assign the value 150 to x
    let x = 150;
// Assign the value 47 to y
let y = 47;
// Assign the value x + y to z
let z = x + y;
// Display z
console.log(z)
 // Assign the value 50 to x1
 let x1 = 50;
 // Assign the value 150 to y1
 let y1 = 150;
 // Assign the value x1 + y1 to z1
 let z1 = (y1 + x1);
 // Display z1
 console.log(z1)
 let z3= (z1 + z) % 2;  "<br>";
 console.log(z3)

  }

  {

 const id = ["Learner_id_132"]

 console.log("Learner_id_132")
 const text2 = "avg: 0.82"
 console.log(text2)

  // Assign the value 39 to a
  let a = 39;
  // Assign the value 125 to b
  let b = 125;
  // Assign the value a + b to c
  let c = a + b;
  // Display z
  console.log(c)
   // Assign the value 50 to a1
   let a1 = 50;
   // Assign the value 150 to b1
   let b1 = 150;
   // Assign the value b1 + a1 to c1
   let c1 = (a1 + b1);
   // Display c1
   console.log(c1)
   let c3= (c1 + c) % 2; 
   console.log(c3)
   
   var booleanValue = 'A';
   function someFunction(){
   if(booleanValue === .95){
      return "A"; 
   }

} let grade = 'a'; Number() .getScore();
   let: result1;
   
   if (grade < .95) {
     result1 = "Ending Grade A";
   } else if (result1 > .94) {
    result1 = "Early Dismissal";
   } else {
     result1 ="No Capstone";
   }
   
  
  





  
  
  const result = getLearnerData("CourseInfo, AssignmentGroup, LearnerSubmissions");
  
  console.log(result);
}
