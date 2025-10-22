import React from 'react'
import Student from './Student'

const School = () => {
  const students = [
    { id: 1, name: "michal", age: 14, marks: [95, 92, 88] },
    { id: 2, name: "yeal", age: 13, marks: [55, 60, 58] },
    { id: 3, name: "chani", age: 15, marks: [80, 85, 90] }
  ];

const Open=()=>{
    console.log("השער נפתח")
}
  
  return (
    <div>
      <h2>רשימת תלמידים</h2>
      {students.map((student) => (
        <Student
          id={student.id}
          name={student.name}
          age={student.age}
          marks={student.marks}
          onExit={Open}
        />
      ))}
    </div>
  );
}

export default School