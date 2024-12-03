import { PiArrowFatRightBold } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import { RiDeleteBin2Fill } from "react-icons/ri";

function Group({ group, deleteGroup, currentUserId, addMember, removeMember }) {
  return (
    <div className={group.owner === currentUserId ? "ownergroup" : "group"}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>{group.name}</h1>
        {group.owner === currentUserId && ( // 僅當 ownerId 與當前用戶 id 相等時顯示按鈕
          <h1>
            <RiDeleteBin2Fill
              onClick={() => {
                deleteGroup(group._id);
              }}
              className="delete-icon"
            />
          </h1>
        )}
      </div>

      <h1>
        {group.dateTime.slice(5, 7)}月{group.dateTime.slice(8, 10)}號{" "}
        {group.dateTime.slice(11, 13)}:{group.dateTime.slice(14, 16)}{" "}
        <IoPeople style={{ marginLeft: "8px", verticalAlign: "middle" }} />{" "}
        {group.members.length + 1}/{group.total + 1}
      </h1>
      <h1>
        {group.start}{" "}
        <PiArrowFatRightBold
          style={{ marginLeft: "8px", verticalAlign: "middle" }}
        />{" "}
        {group.end}
      </h1>
      {group.owner === currentUserId && (
        <div className="transparent">
          <button>加入</button>
        </div>
      )}
      {group.owner != currentUserId && !group.members.includes(currentUserId) && (
        <div className="row button">
          <button
            onClick={() => {
              addMember(group._id, currentUserId);
            }}
          >
            加入
          </button>
        </div>
      )}
      {group.owner != currentUserId && group.members.includes(currentUserId) && (
        <div className="row button">
          <button className = "quitbutton"
            onClick={() => {
              removeMember(group._id, currentUserId);
            }}
          >
            退出
          </button>
        </div>
      )}
    </div>
  );
}

export default Group;
