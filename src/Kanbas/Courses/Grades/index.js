import db from "../../Database";
import { useParams } from "react-router-dom";
import { FcCloth } from "react-icons/fc";
import { BsFillGearFill } from "react-icons/bs";
import { FaFileExport } from "react-icons/fa";
import { FaFileImport } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div>
      <br />
      <br />
      <div className="row">
        <div className="col">
          <p className="wd-red"> Grade book</p>
        </div>
        <div className="col">
          <FcCloth />
        </div>
        <div className="col">
          <button type="button" class="btn btn-light float-end">
            <BsFillGearFill />
          </button>
          <button type="button" class="btn btn-light float-end">
            <FaFileExport />
            Export
          </button>
          <button type="button" class="btn btn-light float-end">
            <FaFileImport />
            Import
          </button>
        </div>
      </div>

      <br />

      <div class="container text-left">
        <div class="row row-cols-2">
          <div class="col wd-bold">Student Names</div>
          <div class="col wd-bold">Assignment Names</div>
          <div class="col">
            <div class="dropdown-center">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Search Students
              </button>
            </div>
          </div>
          <div class="col">
            <div class="dropdown-center">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Search Assignments
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />

      <button type="button" class="btn btn-light">
        <FiFilter />
        Apply Filters
      </button>

      <br />

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
