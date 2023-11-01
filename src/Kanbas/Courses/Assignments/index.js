import React from "react";
import { Link, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { FcOk } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";
import "./index.css";
import db from "../../Database";

function Assignments() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <br />
      <br />
      <div class="row">
        <div class="col">
          <Form.Control type="text" placeholder="Search for assignment" />
        </div>
        <div class="col">
          <Button variant="light float-end">
            <BsThreeDotsVertical />
          </Button>
          <Button
            as={Link}
            to={`/Kanbas/Courses/${courseId}/Assignments/Init`}
            variant="danger float-end"
          >
            + Assignment
          </Button>
          <Button variant="light float-end">Group</Button>
        </div>
      </div>
      <hr />
      <div className="list-group wd-assginment">
        <div className="list-group-item">
          <div className="row">
            <div className="col col-8">
              <PiDotsSixVerticalBold />
              <span>Assignments for course {courseId}</span>
            </div>
            <div className="col co1-2">40% of total</div>
            <div className="col co1-1">
              <AiOutlinePlus />
            </div>
            <div className="col co1-1">
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
        <div className="list-group-item">
          {courseAssignments.map((assignment) => (
            <div className="row">
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="col"
                id="wd-link"
              >
                <BsThreeDotsVertical />
                <AiOutlineBook />
                {assignment.name}
              </Link>
              <div className="col">
                <BsThreeDotsVertical className="float-end" />
                <FcOk className="float-end" />
                <Button
                  variant="danger clo"
                  className="float-end"
                  onClick={handleShow}
                >
                  Delete
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Are you sure to delete this assignment?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch(deleteAssignment(assignment._id));
                        handleClose();
                      }}
                    >
                      Yes
                    </Button>
                    <Button variant="light" onClick={handleClose}>
                      No
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;
