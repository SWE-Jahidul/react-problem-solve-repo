import React, { useEffect, useState } from "react";

import ReactHTMLTableToExcel from "react-html-table-to-excel";

const ExportDataInJsonFormet = () => {
  const [userdata, setUserData] = useState([]);
  console.log("data", userdata);

  const getdata = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        //    console.log(data);
      });
  };

  useEffect(() => {
    getdata();
  });  

  return (
    <div className="container mt-5">
      <div
        style={{
          backgroundColor: "#F5F6FA",
          padding: 50,
          borderRadius: 10,
          boxShadow: 20,
        }}
      >
        <h1 className="text-center my-2">
          Export React Table into Excle Sheet
        </h1>

        <table class="table" id="table-to-xls">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {userdata?.map((us) => (
              <tr>
                <td>{us.id}</td>

                <td>{us.name}</td>
                <td> {us.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button btn btn-primary my-3"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Export as Excle File"
        />
      </div>
    </div>
  );
};

export default ExportDataInJsonFormet;
