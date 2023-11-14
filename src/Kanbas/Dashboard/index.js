import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import db from "../Database";

function Dashboard({
  courses,
  course,
  setCourse,
  addCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div class="container-fiuled ms-2 px-2">
      <h1>Dashboard</h1>
      <hr />
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control w-75"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />

      <input
        value={course.startDate}
        className="form-control w-75"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control w-75"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button className="btn btn-light" onClick={addCourse}>
        Add
      </button>
      <button className="btn btn-light my-2" onClick={updateCourse}>
        Update
      </button>

      <br />
      <h2>Published Courses ({courses.length})</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course, index) => (
          <div className="col">
            <div class="card h-100">
              <img src="/images/blue1.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{course.name}</h5>

                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>

                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                  <button className="btn btn-light">{course.name}</button>
                  <br />
                  <br />
                  <button
                    className="btn btn-light"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-light"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
