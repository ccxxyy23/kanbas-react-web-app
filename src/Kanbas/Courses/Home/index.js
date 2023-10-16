import ModuleList from "../Modules/ModuleList";
import ButtonSet from "../ButtonSet";
import Button from "react-bootstrap/Button";
import { FaFileImport } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaBullhorn } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import "./index.css";

function Home() {
  return (
    <div className="row">
      <div className="col-9">
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
        <p class="wd-p">Grade A1 - ENV + HTML</p>
        <p class="wd-p">Grade A2 - CSS + BOOTSTRAP</p>
      </div>
    </div>
  );
}
export default Home;
