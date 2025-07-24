import { useState, useEffect } from "react";

const StudentForm = ({ isOpen, onClose, onAddStudent }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  useEffect(() => {
    if (!uploadedImage) {
      setPreview("");
      return;
    }
    const objectUrl = URL.createObjectURL(uploadedImage);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [uploadedImage]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      (!imageUrl.trim() && !uploadedImage) ||
      !description.trim()
    ) {
      setError(
        "لطفاً همه فیلدها را پر کنید. (آدرس تصویر یا فایل آپلود شده لازم است)"
      );
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    const newStudent = {
      name,
      image: uploadedImage ? preview : imageUrl,
      description,
    };

    onAddStudent(newStudent);

    setName("");
    setImageUrl("");
    setUploadedImage(null);
    setPreview("");
    setDescription("");
    setError("");
    onClose();
  };

  const clearImage = () => {
    setUploadedImage(null);
    setImageUrl("");
    setPreview("");
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`modal-content ${shake ? "shake" : ""}`}
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: "80vh", overflowY: "auto", width: "400px" }} // محدودیت ارتفاع و اسکرول
      >
        <h2>
          <i className="fas fa-user-plus animated-icon"></i> افزودن دانشجو جدید
        </h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit} noValidate>
          <label>نام و نام خانوادگی :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            className={error && !name.trim() ? "input-error" : ""}
          />

          <label>تصویر دانشجو (آدرس یا آپلود فایل):</label>
          <div className="image-input-container">
            <input
              type="text"
              placeholder="آدرس تصویر را وارد کنید"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
                if (e.target.value) setUploadedImage(null);
              }}
              className="image-url-input"
            />
            <label
              htmlFor="image-upload"
              className="upload-btn"
              style={{ color: "white" }}
            >
              آپلود عکس
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setUploadedImage(e.target.files[0]);
                  setImageUrl("");
                }
              }}
              className="file-input"
            />
          </div>

          {preview && (
            <div className="image-preview" style={{ position: "relative" }}>
              <img
                src={preview || imageUrl}
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "150px",
                  display: "block",
                  margin: "10px 0",
                }}
                onError={(e) => (e.target.style.display = "none")}
              />
              <button
                type="button"
                onClick={clearImage}
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  background: "#e74c3c",
                  border: "none",
                  color: "white",
                  borderRadius: "50%",
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  lineHeight: "22px",
                }}
                title="حذف تصویر"
              >
                ×
              </button>
            </div>
          )}

          <label>علاقه مندی ها :</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={error && !description.trim() ? "input-error" : ""}
          />

          <div className="modal-buttons">
            <button type="button" className="cancel-btn" onClick={onClose}>
              <i className="fas fa-times-circle"></i> انصراف
            </button>
            <button type="submit" className="save-btn">
              <i className="fas fa-save"></i> ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
