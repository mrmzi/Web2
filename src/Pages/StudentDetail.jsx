import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStudentById, updateStudent, deleteStudent } from "../services/api";
import "./StudentDetail.css";
function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [editData, setEditData] = useState({ name: "", description: "" });

  useEffect(() => {
    getStudentById(id).then((res) => {
      setStudent(res.data);
      setEditData({
        name: res.data.name,
        description: res.data.description,
      });
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const updatedStudent = {
      ...student,
      name: editData.name,
      description: editData.description,
    };

    updateStudent(id, updatedStudent).then(() => {
      alert("تغییرات با موفقیت ذخیره شد.");
      navigate("/");
    });
  };

  const handleDelete = () => {
    if (
      window.confirm("آیا مطمئن هستید که می‌خواهید این دانشجو را حذف کنید؟")
    ) {
      deleteStudent(id).then(() => {
        alert("دانشجو با موفقیت حذف شد.");
        navigate("/");
      });
    }
  };

  if (!student)
    return <div className="loading">در حال بارگذاری اطلاعات...</div>;

  return (
    <div className="student-detail-container">
      <div className="student-card">
        <img src={student.image} alt={student.name} className="student-image" />
        <h2 className="student-title">{student.name}</h2>

        <div className="form-group">
          <label>نام:</label>
          <input
            type="text"
            name="name"
            value={editData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>توضیحات:</label>
          <textarea
            name="description"
            rows="4"
            value={editData.description}
            onChange={handleChange}
          />
        </div>

        <div className="button-group">
          <button className="btn save" onClick={handleUpdate}>
            ذخیره تغییرات
          </button>
          <button className="btn delete" onClick={handleDelete}>
            حذف دانشجو
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentDetail;
