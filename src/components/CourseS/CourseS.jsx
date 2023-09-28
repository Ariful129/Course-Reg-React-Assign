import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const CourseS = ({handleCourse}) => {
    const [courses,setCourses]=useState([])

    useEffect(()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])

    return (
        <div className=" w-full md:w-2/3">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
               {
                courses.map(x => <Course 
                    key={x.ID} 
                    handleCourse={handleCourse}
                    course={x}></Course>)
               }
             </div>
        </div>
    );
};

export default CourseS;