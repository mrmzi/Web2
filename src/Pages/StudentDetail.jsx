import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStudentById, updateStudent, deleteStudent } from "../services/api";
import "./StudentDetail.css";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
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
      toast.success("تغییرات با موفقیت ذخیره شد.");
      navigate("/");
    });
  };


const handleDelete = () => {
  Swal.fire({
    title: "آیا مطمئن هستی؟",
    text: "دانشجو به صورت دائمی حذف خواهد شد.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33", // رنگ قرمز
    cancelButtonColor: "#3085d6",
    confirmButtonText: "بله، حذف کن",
    cancelButtonText: "انصراف",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteStudent(id).then(() => {
        toast.error("دانشجو با موفقیت حذف شد.");
        navigate("/");
      });
    }
  });
};

  if (!student)
    return <div className="loading">در حال بارگذاری اطلاعات...</div>;

  return (
    <div className="student-detail-container">
      <div className="student-card-section">
        {student.image &&
        /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(student.image) ? (
          <img
            src={student.image}
            alt={student.name}
            className="student-image-section"
          />
        ) : (
          <FontAwesomeIcon
            icon={faUserCircle}
            className="student-image-section default-avatar"
          />
        )}

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
