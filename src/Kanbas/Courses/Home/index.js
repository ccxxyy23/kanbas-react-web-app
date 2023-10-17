import ModuleList from "../Modules/ModuleList";
import ButtonSet from "../ButtonSet";
import Button from "react-bootstrap/Button";
import { FaFileImport } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaBullhorn } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import { FcHighPriority } from "react-icons/fc";
import { GrFormClose } from "react-icons/gr";
import "./index.css";

function Home() {
  return (
    <div className="row">
      <div className="col-9">
        <br />
        <br />
        <ButtonSet />
        <br />
        <ModuleList />
      </div>
      <div className="col-3">
        <br />
        <br />
        <Button variant="light">
          <FaFileImport />
          Import Existing Content
        </Button>
        <Button variant="light">
          <FaFileImport /> Import from Commons
        </Button>
        <Button variant="light">
          <BiTargetLock />
          Choose Home Page
        </Button>
        <Button variant="light">
          <AiOutlineBarChart />
          View Course Stream
        </Button>
        <Button variant="light">
          <FaBullhorn />
          New Annoucement
        </Button>
        <Button variant="light">
          <AiOutlineBarChart />
          New Analytics
        </Button>
        <Button variant="light">
          <AiFillBell />
          View Course Notifications
        </Button>
        <br />
        <br />
        <h3>To Do</h3>
        <hr />
        <div class="row">
          <div class="col col-2">
            <FcHighPriority />
          </div>
          <div class="col col-9">
            <p class="wd-p">Grade A1 - ENV + HTML</p>
            <p>100 points Sep 18 at 11:59pm</p>
          </div>
          <div class="col col-1">
            <GrFormClose />
          </div>
        </div>
        <div class="row">
          <div class="col col-2">
            <FcHighPriority />
          </div>
          <div class="col col-9">
            <p class="wd-p">Grade A2 - CSS + BOOTSTRAP</p>
            <p>100 points Oct 2 at 11:59pm</p>
          </div>
          <div class="col col-1">
            <GrFormClose />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
