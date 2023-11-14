import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <div className="container-fiuled ms-1">
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
          <button className="btn btn-light float-end" onClick={handleAddModule}>
            Add
          </button>

          <button
            className="btn btn-light float-end"
            onClick={handleUpdateModule}
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
                    onClick={() => handleDeleteModule(module._id)}
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
