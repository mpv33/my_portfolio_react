import React from 'react';
import data_courses from './data/courses_data'
import CoursesCard from './coursesCard';
const Courses = () => {
    return (
        <div className="container projects">
                 <h6 className='text-center'> All Certificates of Courses and Internship </h6>
                <div className="row">

                {
                    data_courses.map(course =>
                        <CoursesCard course={course} />)
                }

                </div>
    </div>
    );
};

export default Courses;
