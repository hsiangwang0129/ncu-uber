import { PiArrowFatRightBold } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import { RiDeleteBin2Fill } from "react-icons/ri";
function Group({ group , deleteGroup}) {
  return (
    <div className="group">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>{group.name}</h1>
        <h1>
          <RiDeleteBin2Fill onClick = {() => {deleteGroup(group._id)}}className="delete-icon"/>
        </h1>
      </div>

      <h1>
        {group.month}月{group.date}號{" "}
        <IoPeople style={{ marginLeft: "8px", verticalAlign: "middle" }} />{" "}
        {group.hasIn}/{group.total}
      </h1>
      <h1>
        {group.start}{" "}
        <PiArrowFatRightBold
          style={{ marginLeft: "8px", verticalAlign: "middle" }}
        />{" "}
        {group.end}
      </h1>
      <div className="row button">
        <button>加入</button>
      </div>
    </div>
  );
}

export default Group;
