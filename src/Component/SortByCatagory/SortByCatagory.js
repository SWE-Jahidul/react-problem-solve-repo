import React, { useEffect, useState } from "react";
import Catagories from "./catagories";

const SortByCatagory = () => {
  // const [user, setUser] = useState(Catagories);

  const [user, setUser] = useState(Catagories);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUser(data);
  //       // console.log(data);
  //       // console.log(data);
  //     });
  // }, []);

  const filterResult = (catItem) => {
    // console.log("test",user);

    // console.log("user data ", user);
    const result = Catagories.filter((curdata) => {
      return curdata.category === catItem;
    });
    setUser(result);
  };

  return (
    <div className="row mt-5">
      <div className="col-md-4  ps-5">
   
      <button
          className="btn btn-warning w-75 my-3 "
          onClick={() => setUser(Catagories)}
        >
          {" "}
          All
        </button>
        <button
          className="btn btn-warning w-75 my-3 "
          onClick={() => filterResult("Women")}
        >
          {" "}
          Wo-Mens
        </button>
        <button
          className="btn btn-warning w-75"
          onClick={() => {
            console.log("press");
            filterResult("Men");
          }}
        >
          {" "}
          Mens
        </button>
      </div>

      <div className="col-md-8 row">
        {user?.map((us) => (
          <div
            style={{
              height: 200,
              width: 200,
              backgroundColor: "gray",
              color: "black",
              margin: 10,
              padding: 30,
            }}
          >
            <h4> {us.title} </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortByCatagory;
