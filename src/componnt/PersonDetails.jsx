import React from 'react'
import CourseDetails from './CourseDetails'

const PersonDetails = ({name,age}) => {

  return (
    <>
      <div>
      <h2>פרטי אדם</h2>
      <p>שם: {name}</p>
      <p>גיל: {age}</p>     
      <CourseDetails courseName="מתמטיקה" grade={95} />
    
      <CourseDetails  courseName="היסטוריה" grade={88} />

    </div>
    </>
  )
}

export default PersonDetails