import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {
    const parms= useParams()

  return (
    <div>
        <h1>{parms.coursesId} Courses Detail </h1>
    </div>
  )
}

export default CoursesDetail