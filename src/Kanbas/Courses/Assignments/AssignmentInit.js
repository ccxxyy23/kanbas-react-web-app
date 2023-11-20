import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";
import * as client from "./client";

function AssignmentInit() {
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  let curAssignment = assignment;

  const handleAddAssignment = () => {
    client.createAssignment(courseId, curAssignment).then((curAssignment) => {
      dispatch(addAssignment(curAssignment));
    });
  };
  return (
    <div>
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

      <h3>Points</h3>
      <input defaultValue="100" className="form-control mb-2" />

      <h3>Due</h3>
      <input
        defaultValue={curAssignment.dueDate}
        type="date"
        min="2020-9-11"
        onChange={(e) =>
          (curAssignment = { ...curAssignment, dueDate: e.target.value })
        }
      />
      <h3>Available from</h3>
      <input
        defaultValue={curAssignment.availableFromDate}
        type="date"
        onChange={(e) =>
          (curAssignment = {
            ...curAssignment,
            availableFromDate: e.target.value,
          })
        }
      />
      <h3>Until</h3>
      <input
        defaultValue={curAssignment.availableUntilDate}
        type="date"
        onChange={(e) =>
          (curAssignment = {
            ...curAssignment,
            availableUntilDate: e.target.value,
          })
        }
      />
      <br />

      <button
        onClick={() => {
          handleAddAssignment();
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

export default AssignmentInit;
