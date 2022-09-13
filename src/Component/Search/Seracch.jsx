import React, { useState } from "react";

// import JSONDATA from './MOCK_DATA.json';
import JSONDATA from "./data.json";

const Seracch = () => {
  const [searchTerm, setSearcTerm] = useState("");
  console.log(searchTerm);
  return (
    <div className="p-5">
      <input
        type="text"
        placeholder="Search.."
        onChange={(event) => {
          setSearcTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        //   ? icon : close
        if (setSearcTerm === "") {
          return val;
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div key={key.id}>
            {searchTerm.length != 0 && (
              <a className="dataitem" href={val.link} target="_blank">
                <p> {val.title}</p>
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Seracch;
