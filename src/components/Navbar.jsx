import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Navbar({ onAddClick }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar"
      style={{
        transition: "transform 0.3s ease",
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
      }}
    >
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
