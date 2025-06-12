const student = {
  name: "Asinth",
  age: 20,
  course: "Computer Science",
  address: {
    street: "123 Main St",
    city: "Chennai",
    pincode: 600001
  },
  marks: {
    math: 85,
    science: 90,
    english: 88
  }
};

const {name,marks,address}=student;
console.log("name:",name)
console.log("mark:",marks.english)
console.log("Address:",address)
