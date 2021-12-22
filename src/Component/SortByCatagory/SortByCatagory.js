import React, { useEffect, useState } from "react";

const SortByCatagory = () => {
  const [user, setUser] = useState([]);



  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        // console.log(data);
        // console.log(data);
      });
  }, []);


  const filterResult = () => {
  
    console.log("test",user);

  };

  return (
    <div className="row mt-5">
      <div className="col-md-4  ps-5">
        <button
          className="btn btn-warning w-75 my-3 "
          onClick={() => filterResult("Gwenborough")}
        >
          {" "}
          Clementine Bauch
        </button>
        <button
          className="btn btn-warning w-75"
          onClick={() => {
            console.log("press");
            filterResult("Wisokyburgh");
          }}
        >
          {" "}
          Patricia Lebsack
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
            <h4> {us.name} </h4>
            <p>{us.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortByCatagory;
