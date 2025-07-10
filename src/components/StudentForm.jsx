import { useState } from "react";

const StudentForm = ({ isOpen, onClose, onAddStudent }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null; // اگر مودال بسته است، چیزی نمایش نده

  const handleSubmit = (e) => {
    e.preventDefault();

    // اعتبارسنجی ساده
    if (!name.trim() || !image.trim() || !description.trim()) {
      setError("لطفاً همه فیلدها را پر کنید.");
      return;
    }

    // ساخت شیء دانشجو جدید
    const newStudent = {
      name,
      image,
      description,
    };

    onAddStudent(newStudent);

    // ریست فرم و بستن مودال
    setName("");
    setImage("");
    setDescription("");
    setError("");
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>افزودن دانشجو جدید</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>نام:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />

          <label>نام تصویر (مثلاً ali.jpg):</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <label>توضیحات:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="modal-buttons">
            <button type="button" onClick={onClose}>
              انصراف
            </button>
            <button type="submit">ذخیره</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
