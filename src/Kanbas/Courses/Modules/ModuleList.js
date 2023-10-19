import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FcOk } from "react-icons/fc";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="container-fiuled">
      <div className="d-grid gap-3">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div key={index} className="p-2 bg-light border">
              <div class="row">
                <div class="col col-1">
                  <PiDotsThreeOutlineVerticalFill />
                  <PiDotsThreeOutlineVerticalFill />
                </div>
                <div class="col col-8">
                  <h3>{module.name}</h3>
                  <p>{module.description}</p>
                </div>
                <div class="col col-1">
                  <FcOk />
                </div>
                <div class="col col-1">
                  <AiOutlinePlus />
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
