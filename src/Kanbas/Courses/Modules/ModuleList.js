import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="container-fiuled">
      <div className="d-grid gap-3">
        <li className="list-group-item">
          <input
            className="form-control"
            value={module.name}
            onChange={(e) =>
              dispatch(
                setModule({
                  ...module,
                  name: e.target.value,
                })
              )
            }
          />
          <textarea
            className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          <br />
          <button
            className="btn btn-light float-end"
            onClick={() => {
              dispatch(addModule({ ...module, course: courseId }));
            }}
          >
            Add
          </button>

          <button
            className="btn btn-light float-end"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
        </li>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div key={index} className="p-2 bg-light border">
              <div class="row">
                <div class="col col-9">
                  <p class="d-inline-flex gap-1">
                    <PiDotsThreeOutlineVerticalFill
                      data-bs-toggle="collapse"
                      data-bs-target={"#collapseId" + index}
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    />

                    <h3>{module.name}</h3>
                  </p>
                  <div class="collapse" id={"collapseId" + index}>
                    <div class="card card-body">{module.description}</div>
                  </div>
                </div>
                <div class="col col-1">
                  <button
                    className="btn btn-light"
                    onClick={() => {
                      dispatch(setModule(module));
                    }}
                  >
                    Edit
                  </button>
                </div>
                <div class="col col-1">
                  <button
                    className="btn btn-light"
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    Delete
                  </button>
                </div>
                <div class="col col-1">
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default ModuleList;
