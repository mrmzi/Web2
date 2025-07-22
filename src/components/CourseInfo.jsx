function CourseInfo({ course }) {
  return (
    <section className="course-info" id="course">
      <h2>{course.title}</h2>
      <p className="semester">ترم: {course.semester}</p>
      <p className="units">تعداد واحد: {course.units}</p>
      <p className="schedule">زمان کلاس: {course.schedule}</p>

      <p className="description">{course.description}</p>

      <div className="section">
        <h3>پیش‌نیازها:</h3>
        <ul>
          {course.prerequisites.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>اهداف آموزشی:</h3>
        <ul>
          {course.objectives.map((goal, idx) => (
            <li key={idx}>✔ {goal}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>سرفصل‌ها:</h3>
        <ol>
          {course.topics.map((topic, idx) => (
            <li key={idx}>
              {idx + 1}. {topic}
            </li>
          ))}
        </ol>
      </div>

      <div className="section">
        <h3>منابع پیشنهادی:</h3>
        <ul>
          {course.resources.map((res, idx) => (
            <li key={idx}>🔹 {res}</li>
          ))}
        </ul>
      </div>

      {course.syllabusLink && (
        <a
          className="syllabus-link"
          href={course.syllabusLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 دانلود برنامه درس
        </a>
      )}
    </section>
  );
}

export default CourseInfo;
