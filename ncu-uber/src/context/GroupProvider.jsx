// GroupProvider.jsx
import { createContext, useEffect, useState } from "react";


export const GroupContext = createContext();



function GroupProvider({ children }) {
  const [groups, setGroups] = useState([]);
  const apiurl = import.meta.env.VITE_BACKEND_URL;
  // const apiurl = 'localhost:4000';

  useEffect(() => {
    const fetchData = async () => {

      try {
        const res = await fetch(`http://${apiurl}/api/groups`);
        const data = await res.json();
        setGroups(data.items);
      } catch (error) {
        console.error("Failed to fetch groups:", error);
      }
    };
    fetchData();
  }, []);

  const addGroup = async (name, owner, start, end, dateTime, total) => {
    if (!start || !end || !dateTime || !total || !name) {
      alert("有選項尚未填寫");
      return; // 跳出函數，不繼續執行下面的代碼
    }

    const newGroup = {
      name,
      owner,
      start,
      end,
      dateTime,
      total,
    };

    try {
      const res = await fetch(`http://${apiurl}/api/groups`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGroup), // 將資料轉換成 JSON 格式
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const addedGroup = await res.json();
      setGroups((prevGroups) => [...prevGroups, addedGroup]); // 更新狀態，將新資料加到現有的 groups 陣列中
    } catch (error) {
      console.error("Failed to add group:", error);
    }
  };

  const addMember = async (groupId, userId) => {
    if(!userId){
      alert("請先登入再加入群組");
      return;
    }
    try {
      const res = await fetch(
        `http://${apiurl}/api/groups/${groupId}/join`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        console.log(errorData);
        return;
      }

      const updatedGroup = await res.json();
      setGroups((prevGroups) =>
        prevGroups.map((group) =>
          group._id === groupId ? updatedGroup.group : group
        )
      );
    } catch (error) {
      console.error("Failed to join group:", error);
    }
  };

  const removeMember = async (groupId, userId) => {
    try {
      const res = await fetch(
        `http://${apiurl}/api/groups/${groupId}/drop`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        console.log(errorData);
        return;
      }

      const updatedGroup = await res.json();
      setGroups((prevGroups) =>
        prevGroups.map((group) =>
          group._id === groupId ? updatedGroup.group : group
        )
      );
    } catch (error) {
      console.error("Failed to remove user from group:", error);
    }
  };

  const deleteGroup = async (id) => {
    try {
      const res = await fetch(`http://${apiurl}/api/groups/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      // 更新狀態，從 groups 陣列中移除刪除的項目
      setGroups((prevGroups) => prevGroups.filter((group) => group._id !== id));
    } catch (error) {
      console.error("Failed to delete group:", error);
    }
  };

  return (
    <GroupContext.Provider value={{ groups, addGroup, deleteGroup, addMember ,removeMember}}>
      {children}
    </GroupContext.Provider>
  );
}

export default GroupProvider;
