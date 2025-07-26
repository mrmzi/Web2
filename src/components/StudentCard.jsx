import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function StudentCard({ student }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/students/${student.id}`);
  };

  const isValidImage = (url) => {
    return /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(url);
  };

  const showImage = student.image && isValidImage(student.image);

  return (
    <div
      className="student-card"
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-pressed="false"
    >
      <div className="student-image">
        {showImage ? (
          <img src={`/images/${student.image}`} alt={student.name} />
        ) : (
          <FontAwesomeIcon icon={faUserCircle} className="default-avatar" />
        )}
      </div>
      <div className="student-info">
        <h3>
          <FontAwesomeIcon icon={faUserGraduate} className="icon" />
          {student.name}
        </h3>
        <p>{student.description}</p>
      </div>
    </div>
  );
}

export default StudentCard;
