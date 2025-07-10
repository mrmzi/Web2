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
      <div
        className="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        وب ۲
      </div>
      <div className="nav-links">
        <NavLink
          to="/"
          end
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
        <a onClick={onAddClick} style={{ cursor: "pointer" }}>
          اضافه کردن دانشجو
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
