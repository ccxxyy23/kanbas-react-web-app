import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  useParams,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import AssignmentInit from "./Assignments/AssignmentInit";
import Grades from "./Grades";
import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsEyeglasses } from "react-icons/bs";

function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;
  //just for recommit
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const { pathname } = useLocation();
  const [empty, kanbas, course_name, id, screen] = pathname.split("/");

  return (
    <div>
      <div class="row">
        <div class="col col-9">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <div className="wd-icon">
                <GiHamburgerMenu />
              </div>
              <li class="breadcrumb-item">Courses {course.name}</li>
              <li class="breadcrumb-item active" aria-current="page">
                {screen}
              </li>
            </ol>
          </nav>
        </div>
        <div class="col col-3">
          <button
            type="button"
            id="wd-studentview"
            class="btn btn-light float-end"
          >
            <BsEyeglasses />
            Student View
          </button>
        </div>
      </div>

      <hr />

      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Assignments/Init" element={<AssignmentInit />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
