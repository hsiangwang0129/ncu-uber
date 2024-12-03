import { useContext, useState } from "react";
import CreateForm from "./CreateForm";
import { GroupContext } from "../context/GroupProvider";

function SearchWrapper() {

  const { addGroup } = useContext(GroupContext);

  return (
    <div className="search-wrapper">
      {/* <h1>NCUber</h1> */}
      <CreateForm addGroup={addGroup} />
      {/* <GroupWrapper groups={groups} /> */}
    </div>
  );
}

export default SearchWrapper;
