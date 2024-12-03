import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
function CreateForm({ addGroup }) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [maxDateTime, setMaxDateTime] = useState('');
  const [dateTime,setDateTime] = useState('');
  const [total, setTotal] = useState(""); // 預設為 4 人
  const [name, setName] = useState("");
  const { auth } = useContext(AuthContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!auth){
      alert("請先登入再新增群組");
      return;
    }
    addGroup(name, auth.id ,start, end, dateTime, total);
    setStart("");
    setEnd("");
    setDateTime("");
    setTotal("");
    setName("");
  };

  useEffect(() => {
    const now = new Date();
    const current = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    const sixMonthsLater = new Date(now.setMonth(now.getMonth() + 6))
      .toISOString()
      .slice(0, 16);

    setDateTime(current);
    setCurrentDateTime(current);
    setMaxDateTime(sixMonthsLater);
  }, []);




  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="row">
        <input
          type="text"
          placeholder="出發地"
          value={start}
          onChange={(e) => {
            setStart(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="目的地"
          value={end}
          onChange={(e) => {
            setEnd(e.target.value);
          }}
        />
        <input
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
          value={dateTime}
          min={currentDateTime}
          max={maxDateTime}
          className="datetime-local"
          onChange={(e) => {
            setDateTime(e.target.value)
            console.log(e.target.value)
          }}
        />
        <select
          name="headCounts"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        >
          <option value="">尚缺人數</option>
          {[...Array(5)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1} 人
            </option>
          ))}
        </select>
      </div>
      <div className="row">
        <input
          type="text"
          placeholder="為共乘群組命名"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="row button">
        <button type="submit" style={{ marginTop: "60px" }}>
          新增共乘
        </button>
      </div>
    </form>
  );
}

export default CreateForm;
