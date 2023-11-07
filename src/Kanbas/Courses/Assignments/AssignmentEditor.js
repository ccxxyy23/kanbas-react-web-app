import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";
import "./Editor.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  let curAssignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="w-75">
      <br />
      <br />
      <h2>Assignment Name</h2>
      <input
        defaultValue={curAssignment.name}
        className="form-control mb-2"
        onChange={(e) =>
          (curAssignment = { ...curAssignment, name: e.target.value })
        }
      />

      <div class="form-floating">
        <textarea
          class="form-control"
          id="floatingTextarea"
          defaultValue={curAssignment.description}
          onChange={(e) =>
            (curAssignment = { ...curAssignment, description: e.target.value })
          }
        ></textarea>
      </div>

      <div class="row mt-3 ">
        <div class="col col-1"></div>
        <div class="col col-1"></div>
        <div class="col col-2">
          <h3 className="text-right">Points</h3>
        </div>
        <div class="col col-8">
          <input defaultValue="100" className="form-control mb-2" />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col col-1"></div>
        <div class="col col-1"></div>
        <div class="col col-2">
          <h3>Assign</h3>
        </div>
        <div class="col col-8 pb-3 border border-1">
          <h4>Due</h4>
          <input
            className="form-control"
            defaultValue={curAssignment.dueDate}
            type="date"
            min="2020-9-11"
            onChange={(e) =>
              (curAssignment = { ...curAssignment, dueDate: e.target.value })
            }
          />
          <br />
          <div className="row pb-3">
            <div className="col col-6">
              <h4>Available from</h4>
              <input
                className="form-control"
                defaultValue={curAssignment.availableFromDate}
                type="date"
                onChange={(e) =>
                  (curAssignment = {
                    ...curAssignment,
                    availableFromDate: e.target.value,
                  })
                }
              />
            </div>
            <div className="col col-6">
              {" "}
              <h4>Until</h4>
              <input
                className="form-control"
                defaultValue={curAssignment.availableUntilDate}
                type="date"
                onChange={(e) =>
                  (curAssignment = {
                    ...curAssignment,
                    availableUntilDate: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>

      <br />
      <hr />
      <button
        onClick={() => {
          dispatch(updateAssignment(curAssignment));
          handleSave();
        }}
        className="btn btn-light me-2 float-end"
      >
        Save
      </button>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-light float-end"
      >
        Cancel
      </Link>
    </div>
  );
}

export default AssignmentEditor;
