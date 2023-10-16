import Button from "react-bootstrap/Button";
import { BiDotsVertical } from "react-icons/bi";
import { FcOk } from "react-icons/fc";
function ButtonSet() {
  return (
    <div>
      <Button variant="light">Collapse All</Button>
      <Button variant="light">View Progress</Button>
      <Button variant="light">
        <FcOk />
        Publish All
      </Button>
      <Button variant="danger">+ Module</Button>
      <Button variant="light">
        <BiDotsVertical />
      </Button>
    </div>
  );
}

export default ButtonSet;
