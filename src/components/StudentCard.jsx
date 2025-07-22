import { useNavigate } from "react-router-dom";

function StudentCard({ student }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/students/${student.id}`);
  };
  return (
    <div
      className="student-card"
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-pressed="false"
    >
      <div className="student-image">
        <img src={`/images/${student.image}`} alt={student.name} />
      </div>
      <div className="student-info">
        <h3>{student.name}</h3>
        <p>{student.description}</p>
      </div>
    </div>
  );
}

export default StudentCard;
