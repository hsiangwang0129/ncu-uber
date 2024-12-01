import { useContext, useState } from "react";
import Group from "./Group";
import { GroupContext } from "../context/GroupProvider";

function GroupWrapper() {
  const { groups, deleteGroup } = useContext(GroupContext);
  
  return (
    <div className="group-wrapper">
      {groups.map((group) => {
        return <Group key={group._id} group={group} deleteGroup = {deleteGroup}/>;
      })}
    </div>
  );
}

export default GroupWrapper;
