// =====================================================
// PROJECT: Techpro Cohort Manager
// STUDENT COPY — no answer key included
// =====================================================
// This project combines everything from both Objects
// lessons: object literals, dot notation, constructor
// functions, and methods.
//
// Guidance below is intentionally light. Plan your own
// approach before writing code.

// CONTEXT:
// Techpro needs a simple way to represent students in a
// cohort using JavaScript objects.


// =====================================================
// PART 1: Object Literal
// =====================================================
// Create a single object literal called student1
// representing one student. Decide for yourself which
// properties are relevant. Include at least one property
// whose value is an array.
//
// Then use dot notation to log a sentence introducing
// that student using at least two of its properties.

// Your code here
let student1 = {
    name: "Oye",
    stateOfOrigin: "Oyo",
    age: 21,
    courseOfStudy: "Web Development",
    courseDuration: 3 +"months",
    nextOfKin: "Mr Jimoh",
    nextofKinContact: "08135456711",
    languages: ["English","Yoruba","Hausa"]
}


console.log("Hi, my name is"+" "+ student1.name +" and"+ " "+ "I am a student of"+" "+ student1.courseOfStudy);


// =====================================================
// PART 2: Constructor Function
// =====================================================
// You now need many students, not just one. Refactor your
// approach: create a constructor function called Student
// that can produce new student objects on demand, using
// the same properties you decided on in Part 1.
//
// Use it to create at least three different student
// objects.

// Your code here
function Student (name, age, stateOfOrigin, courseOfStudy, courseDuration, nextOfKin, nextofKinContact, languages){
    this.name = name;
    this. age = age;
    this. stateOfOrigin = stateOfOrigin;
    this. courseOfStudy = courseOfStudy;
    this. courseDuration = courseDuration;
    this. nextOfKin = nextOfKin;
    this. nextofKinContact = nextofKinContact;
    this. languages = languages;
}
let student1 = new Student("Jackson",18,"Imo", "Graphic"+" "+ "Design", 3+ "months", "Victor","07030021000", ["Igbo", "English"]);

let student2 = new Student("Jasmine",22,"Enugu", "Data"+" "+ "Analysis", 3+ "months", "Godwin","07030021023", ["Igbo", "English"]);

let student3 = new Student("Sa-adatu",25,"Niger", "Product"+" "+ "Management", 3+ "months", "Adamu","07030021000", ["Gwari", "English"]);


console.log(student2.courseOfStudy);
console.log(student1);
console.log(student3);
// =====================================================
// PART 3: Methods
// =====================================================
// Add a method to your Student constructor function so
// every student object created from it can perform some
// action relevant to being a student. Decide what the
// method should do and what it should output.
//
// Call this method on at least two of your student
// objects.

// Your code here

function Student (name, age, stateOfOrigin, courseOfStudy, courseDuration, nextOfKin, nextofKinContact, languages){
    this.name = name;
    this. age = age;
    this. stateOfOrigin = stateOfOrigin;
    this. courseOfStudy = courseOfStudy;
    this. courseDuration = courseDuration;
    this. nextOfKin = nextOfKin;
    this. nextofKinContact = nextofKinContact;
    this. languages = languages;
    this. resumeToClass = function () { alert("Resume to class at exactly 9:00am")};
    this. participateInClass = function () {alert("Be active in class")};
    this. leaveSchool = function() {alert("leave class by 4pm")};
}
// two student
const student1 = new Student("John", 20, "Osun", "Cyber Security", "4 months", "Mr Josh", "08012345678", ["English", "Yoruba"]);
const student2 = new Student("Nkechi", 24, "Owerri", "Project Management", "3 months", "Mr Agbo", "08102345673", ["English", "Yoruba", "Igbo"]);

// calling the method
student1.resumeToClass();
student1.leaveSchool();
student1.participateInClass();

student2.resumeToClass();
student2.leaveSchool();
student2.participateInClass();

// =====================================================
// REFLECTION
// =====================================================
// In a comment, explain in your own words why a
// constructor function is more useful than writing out
// three separate object literals by hand, once you need
// more than a handful of similar objects.

// Your answer here
// It simplifies the process of declearing each variable name and assigning values to it. It also serve as a reusable template for creating multiple objects.
