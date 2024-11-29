import { useState } from "react";

function CreateForm({ addGroup }) {
    
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [total, setTotal] = useState(""); // 預設為 4 人
  const [name, setName] = useState(""); 
  const hasIn = "0"; // 預設為 1 人已加入

  const handleSubmit = (e) => {
    e.preventDefault();
    addGroup(start, end, month, date, total, hasIn, name);
    setStart("");
    setEnd("");
    setMonth("");
    setDate("");
    setTotal("");
    setName("");
  };

  return (
    <form className="create-form" onSubmit = {handleSubmit}>
      <div className="row">
        <input
          type="text"
          placeholder="出發地"
          value={start}
          onChange={(e) => {
            setStart(e.target.value);
          }}
        />
        <input type="text" placeholder="目的地" value = {end} onChange={(e) => {setEnd(e.target.value)}}/>
        <select name="Months" value = {month} onChange={(e) => setMonth(e.target.value)}>
          <option value="">選擇月份</option>
          {[...Array(12)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1} 月
            </option>
          ))}
        </select>
        <select name="Dates" value = {date} onChange={(e) => setDate(e.target.value)}>
          <option value="">選擇日期</option>
          {[...Array(31)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1} 日
            </option>
          ))}
        </select>
        <select name="headCounts" value={total} onChange={(e) => setTotal(e.target.value)}>
          <option value="">尚缺人數</option>
          {[...Array(5)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1} 人
            </option>
          ))}
        </select>
      </div>
      <div className="row">
        <input type="text" placeholder="姓名" value = {name} onChange={(e) => {setName(e.target.value)}}/>
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
