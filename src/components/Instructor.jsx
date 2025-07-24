function Instructor({ instructor }) {
  return (
    <section className="instructor-card" id="instructor">
      <div className="image-wrapper">
        <img src={`${instructor.image}`} alt={instructor.name} />
      </div>

      <div className="info-wrapper">
        <h2 className="name">{instructor.name}</h2>

        <p className="titles">
          {instructor.titles.map((title, idx) => (
            <span key={idx} className="title-item">
              • {title}
            </span>
          ))}
        </p>

        <div className="about-me-section">
          <h3>درباره من</h3>
          <p>{instructor.about}</p>
        </div>

        <div className="skills-section">
          <h3>
            <i className="fas fa-tools"></i> مهارت‌ها
          </h3>
          <div className="skill-groups">
            <div className="skill-box">
              <h4>
                <i className="fas fa-code"></i> مهارت‌های وب
              </h4>
              <ul>
                {instructor.skills.web.map((skill, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check-circle"></i> {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="skill-box">
              <h4>
                <i className="fas fa-flask"></i> مهارت‌های پژوهشی
              </h4>
              <ul>
                {instructor.skills.research.map((skill, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check-circle"></i> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h3>
            <i className="fas fa-address-book"></i> راه‌های ارتباطی
          </h3>
          <div className="contact-cards">
            <a
              href={`mailto:${instructor.contact.email}`}
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
              <span>{instructor.contact.email}</span>
            </a>
            <a
              href={instructor.contact.linkedin}
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a
              href={instructor.contact.website}
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
              <span>Website</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructor;
