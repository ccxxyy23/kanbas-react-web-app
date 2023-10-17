import React from "react";
import { Link, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { FcOk } from "react-icons/fc";
import "./index.css";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
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
          <Button variant="danger float-end">+ Assignment</Button>
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
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            <BsThreeDotsVertical />
            <AiOutlineBook />
            {assignment.title}
            <BsThreeDotsVertical className="float-end" />
            <FcOk className="float-end" />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
