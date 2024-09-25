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

courseGoals.push("goal4");
courseGoals.push("goal5");
showElmentById(courseGoals, 4);

let courseGoals2 = ["activity", "skills", "Develop"];
showElmentById(courseGoals2, 1);
showElmentById(courseGoals2, 4);
