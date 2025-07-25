import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import StudentDetail from "./Pages/StudentDetail";
import { addStudent } from "./services/api";
import StudentForm from "./components/StudentForm";
import { ToastContainer } from "react-toastify";
function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    addStudent(newStudent).then((res) => {
      setStudents((prev) => [...prev, res.data]);
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
      />
      <Navbar onAddClick={() => setIsFormOpen(true)} />
      <Routes>
        <Route
          path="/"
          element={<Home students={students} setStudents={setStudents} />}
        />
        <Route path="/students/:id" element={<StudentDetail />} />
      </Routes>
      <StudentForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onAddStudent={handleAddStudent}
      />
    </>
  );
}

export default App;
// Version 2.0