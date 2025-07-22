import { NavLink } from "react-router-dom";

function Navbar({ onAddClick }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink
          to="/"
          end
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          صفحه اصلی
        </NavLink>
        <a
          href="#course"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("course");
          }}
        >
          معرفی درس
        </a>
        <a
          href="#instructor"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("instructor");
          }}
        >
          معرفی استاد
        </a>
        <a
          href="#students"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("students");
          }}
        >
          لیست دانشجویان
        </a>
      </div>

      <div className="addstudent">
        <a onClick={onAddClick} style={{ cursor: "pointer" }}>
          اضافه کردن دانشجو
        </a>
        <img
          className="addstudenticon"
          src="../../public/images/user.png"
          alt="add-male-user"
        />
      </div>
    </nav>
  );
}

export default Navbar;
