import { parse } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import React from "react";
import { useState } from "react";

const PostData = () => {
  const url = "./test.json";
  const [data, setData] = useState({
    name: "",
    age: "",
    id:""
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        name: data.name,
        age: data.age,
        id:parseInt(data.id)
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  function handel(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handel(e)}
          id="name"
          value={data.name}
          placeholder="name"
          type="text"
        ></input>
        <br></br>
        <br></br>
        <input
          onChange={(e) => handel(e)}
          id="age"
          value={data.age}
          placeholder="Age"
          type="number"
        ></input>

        <button type="submit"> Sumit From </button>
      </form>
    </div>
  );
};

export default PostData;
