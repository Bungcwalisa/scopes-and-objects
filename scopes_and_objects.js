let globalCount = 0;

function showLocalScope() {
  let localCount = 10;

  console.log("Inside showLocalScope - localCount:", localCount);
  console.log("Inside showLocalScope - globalCount:", globalCount);
}

function modifyCounts() {
  globalCount += 1; 
  let localCount = 5;
  localCount += 2;

  console.log("Modified globalCount:", globalCount);

  console.log("Modified localCount (only inside this function):", localCount);
}

function Student(name, age, major) {
  this.name = name;
  this.age = age;
  this.major = major;
  this.introduce = function () {
    console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.major} major.`);
  };
}

const student1 = new Student("Bungcwalisa", 21, "Computer Science");
const student2 = new Student("Likhona", 22, "Mathematics");
const student3 = new Student("John", 19, "Physics");

const school = {
  name: "University of Cape Town",
  location: {
    city: "Cape Town",
    province: "Western Cape",
  },
  departments: {
    Science: ["Physics", "Chemistry", "Biology"],
    Arts: ["History", "Literature"],
    Engineering: ["Mechanical", "Computer", "Electrical"],
  },
  students: [student1, student2, student3],
};


showLocalScope();
modifyCounts();

student1.introduce();
student2.introduce();
student3.introduce();

console.log("School info:", school);