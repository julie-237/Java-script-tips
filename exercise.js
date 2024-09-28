let courseName = "100days of code";
// alert(courseName);

let coursePrice = "34.99 US";
// alert(coursePrice);

let courseGoals = [
  "Creativity",
  "Personal skills development",
  "Develop problem-solving",
];
// alert(courseGoals);

let course = {
  name: "100 days of code",
  price: "34.99 US",
  goals: [
    "Creativity",
    "Personal skills development",
    "Develop problem-solving",
  ],
};
 
// alert(course.name);
// alert(course.price);
// alert(course.goals);
// alert(course.goals[1]);

function showElmentById(array, id) {
 if (id>=array.length) {
    alert("The provided identifier doesn't exist");
 } else {
    alert(array[id]);
 }
 return array
}

//courseGoals.push("goal4");
//courseGoals.push("goal5");
//showElmentById(courseGoals, 4);

let courseGoals2 = ["activity", "skills", "Develop"];
//showElmentById(courseGoals2, 1);
//showElmentById(courseGoals2, 4);


// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" ane save it in a variable with a name of your choice
// 2. Use the variable from (1) and get access to the "parent" element of the stored <h1> element (i.e to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the sibling element (i.e the <p> element next to the <h1> element)
// 3. Select the <h1> element with getElementById and store in the same or a new variable (up to you)
// 4. Select the second <p> element with querySelector (you might need to add something in the HTML code, e.g. a class) and store 
//    it in a new variable with a name of your choice
// 5. BONUS TASK: Try changing the text content of the <p> element you selected in (4) and set it to any ather text of your choice

let h1Element = document.body.children[0]
console.log(h1Element)
console.log(h1Element.parentElement)
console.log(h1Element.nextElementSibling)
h1Element = document.getElementById("first-child")
console.log(h1Element)
let paragraph = document.querySelector(".paragragh")
console.log(paragraph)
paragraph.textContent = "Trying a bonus task "
console.dir(paragraph)
//console.dir(document)