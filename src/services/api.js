
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

// دریافت اطلاعات درس
export const getCourseInfo = () => axios.get(`${BASE_URL}/course`);

// دریافت اطلاعات استاد
export const getInstructorInfo = () => axios.get(`${BASE_URL}/instructor`);

// دریافت لیست دانشجویان
export const getStudents = () => axios.get(`${BASE_URL}/students`);

// دریافت دانشجوی خاص
export const getStudentById = (id) => axios.get(`${BASE_URL}/students/${id}`);

// افزودن دانشجو
export const addStudent = (student) => axios.post(`${BASE_URL}/students`, student);

// ویرایش دانشجو
export const updateStudent = (id, updatedStudent) => axios.put(`${BASE_URL}/students/${id}`, updatedStudent);

// حذف دانشجو
export const deleteStudent = (id) => axios.delete(`${BASE_URL}/students/${id}`);
