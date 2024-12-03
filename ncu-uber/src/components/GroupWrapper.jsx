import { useContext, useState } from "react";
import Group from "./Group";
import { GroupContext } from "../context/GroupProvider";
import { AuthContext } from "../context/AuthProvider";
function GroupWrapper() {
  const { groups, deleteGroup, addMember, removeMember } = useContext(GroupContext);
  const { auth } = useContext(AuthContext);
  return (
    <div className="group-wrapper">
      {groups.map((group) => {
        return (
          <Group
            key={group._id}
            group={group}
            deleteGroup={deleteGroup}
            currentUserId={auth?.id}
            addMember={addMember}
            removeMember ={removeMember}
          />
        );
      })}
    </div>
  );
}

export default GroupWrapper;
