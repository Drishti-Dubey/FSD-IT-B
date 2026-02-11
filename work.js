import { useState } from "react";

function Work() {

  const [data, setData] = useState("");

  const getData = async (type) => {
    const res = await fetch(`http://localhost:5000/${type}`);
    const result = await res.text();
    setData(result);
  };

  return (
    <div style={{ marginTop: "40px" }}>

      <h1>
        OS With React ⚙️
      </h1>

      <button onClick={() => getData("userinfo")}>UserInfo</button>
      <button onClick={() => getData("arch")} style={{ marginLeft: "10px" }}>Arch</button>
      <button onClick={() => getData("hostname")} style={{ marginLeft: "10px" }}>Hostname</button>
      <button onClick={() => getData("totalmemory")} style={{ marginLeft: "10px" }}>Total Memory</button>
      <button onClick={() => getData("freememory")} style={{ marginLeft: "10px" }}>Free Memory</button>

      <p style={{ marginTop: "20px" }}>{data}</p>

    </div>
  );
}

export default Work;
