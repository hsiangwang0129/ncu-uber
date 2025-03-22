import { createContext, useEffect, useState } from "react";

export const CoffeeGroupContext = createContext();

function CoffeeMapProvider({ children }) {
  const apiurl = import.meta.env.VITE_BACKEND_URL;
  const [coffeeGroups, setCoffeeGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/coffee");
        const data = await res.json();
        setCoffeeGroups(data.results);
      } catch (error) {
        console.error("Failed to fetch groups:", error);
      }
    };
    fetchData();
  }, []);

  const searchGroup = async (keyword) => {
    if (!keyword) {
      alert(keyword, "請輸入地圖名字");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:4000/api/coffee/${encodeURIComponent(keyword)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        try {
          const errorData = await res.json();
          console.error("API Error:", errorData);
        } catch {
          console.error("Failed to parse error response:", await res.text());
        }
        alert("伺服器錯誤，請稍後再試！");
        return;
      }

      const newdata = await res.json();

      if (newdata && Array.isArray(newdata.results)) {
        setCoffeeGroups(newdata.results);
      } else {
        console.error("Unexpected API response format:", newdata);
        alert("無法處理伺服器返回的數據！");
      }
    } catch (error) {
      console.error("Failed to join group:", error);
    }
  };

  return (
    <CoffeeGroupContext.Provider value={{ coffeeGroups, searchGroup }}>
      {children}
    </CoffeeGroupContext.Provider>
  );
}

export default CoffeeMapProvider;
