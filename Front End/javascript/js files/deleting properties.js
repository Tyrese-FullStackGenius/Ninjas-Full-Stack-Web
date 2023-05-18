var student={
    "name":"Tyrese",
    rollNo:135,
    marks:90,
    "2":"two"
  };
  delete student['name'];
  delete student.rollNo;
  console.log(student);