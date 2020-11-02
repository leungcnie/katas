const organizeInstructors = function (instructors) {
  //keep an array of courses we've looked at
  let checkedCourses = [instructors[0].course];
  let list = {};
  //create first category with first instructor
  list[instructors[0].course] = [instructors[0].name];
  for (let i = 1; i < instructors.length; i++) {
    if (checkedCourses.includes(instructors[i].course)) {
      list[instructors[i].course].push(instructors[i].name);
    } else {
      list[instructors[i].course] = [instructors[i].name];
      checkedCourses.push(instructors[i].course);
    }
  }
  return list;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));
