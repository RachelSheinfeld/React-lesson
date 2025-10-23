import React from 'react'

const CourseDetails = ({ courseName, grade }) => {
  return (
    <div>
      <h3>פרטי קורס</h3>
      <p>שם הקורס: {courseName}</p>
      <p>ציון: {grade}</p>
    </div>
  )
}
export default CourseDetails