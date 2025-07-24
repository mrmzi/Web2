import { useEffect, useState } from "react";
import CourseInfo from "../components/CourseInfo";
import Instructor from "../components/Instructor";
import StudentCard from "../components/StudentCard";
import Hero from "../components/Hero";
import { getCourseInfo, getInstructorInfo, getStudents } from "../services/api";

function Home({ students, setStudents }) {
  const [course, setCourse] = useState(null);
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    getCourseInfo().then((res) => setCourse(res.data));
    getInstructorInfo().then((res) => setInstructor(res.data));
    getStudents().then((res) => setStudents(res.data));
  }, [setStudents]);

  return (
    <div className="main-container">
      {course && <Hero title={course.title} description={course.description} />}
      {course && <CourseInfo course={course} />}
      {instructor && <Instructor instructor={instructor} />}
      <div className="students-grid" id="students">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default Home;
