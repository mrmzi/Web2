function CourseInfo({ course }) {
  return (
    <section className="course-info" id="course">
      <div className="course-header">
        <h2>{course.title}</h2>
        <p>
          <strong>ترم:</strong> {course.semester}
        </p>
        <p>
          <strong>تعداد واحد:</strong> {course.units}
        </p>
        <p>
          <strong>زمان کلاس:</strong> {course.schedule}
        </p>
        <p className="description">{course.description}</p>
      </div>

      {/* پیش‌نیازها */}
      <div className="card-section">
        <h3>🧩 پیش‌نیازها</h3>
        <div className="cards">
          {course.prerequisites.map((item, idx) => (
            <div key={idx} className="card">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* اهداف آموزشی - تایم‌لاین */}
      <div className="timeline-section">
        <h3>🎯 اهداف آموزشی</h3>
        <ul className="timeline">
          {course.objectives.map((goal, idx) => (
            <li key={idx} style={{ "--i": idx }}>
              <div className="circle"></div>
              <div className="content">{goal}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* سرفصل‌ها - تایم‌لاین شماره‌دار */}
      <div className="timeline-section">
        <h3>📚 سرفصل‌ها</h3>
        <ul className="timeline numbered">
          {course.topics.map((topic, idx) => (
            <li key={idx} style={{ "--i": idx }}>
              <div className="circle">{idx + 1}</div>
              <div className="content">{topic}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* منابع پیشنهادی */}
      <div className="card-section">
        <h3>🔹 منابع پیشنهادی</h3>
        <div className="cards">
          {course.resources.map((res, idx) => (
            <div key={idx} className="card">
              {res}
            </div>
          ))}
        </div>
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
