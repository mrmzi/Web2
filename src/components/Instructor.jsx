function Instructor({ instructor }) {
  return (
    <section className="instructor" id="instructor">
      <div className="instructor-image">
        <img src={`/images/${instructor.image}`} alt={instructor.name} />
      </div>
      <div className="instructor-info">
        <h2>{instructor.name}</h2>
        <p className="bio">{instructor.bio}</p>
        <p className="experience">{instructor.experience}</p>

        <div className="skills">
          <h3>تخصص‌ها:</h3>
          <ul>
            {instructor.skills.map((skill, idx) => (
              <li key={idx}>• {skill}</li>
            ))}
          </ul>
        </div>

        <div className="contact">
          <h3>راه‌های ارتباطی:</h3>
          <ul>
            <li>
              📧 ایمیل:{" "}
              <a href={`mailto:${instructor.contact.email}`}>
                {instructor.contact.email}
              </a>
            </li>
            <li>
              🔗 لینکدین:{" "}
              <a
                href={instructor.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                صفحه لینکدین
              </a>
            </li>
            <li>
              🌐 وب‌سایت:{" "}
              <a
                href={instructor.contact.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                rezai-web.dev
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Instructor;
