import React, { useState } from "react";
import Data from "./Data";
import * as XLSX from "xlsx";

const ExcelDataShowing = () => {
  const [exclFile, setExcelFile] = useState(null);
  const [exclFileError, setExcelFileError] = useState(null);
  console.log(exclFile);
  const [excleData, setExcelData] = useState(null);

  //   Handle file
  let fileType = ["application/vnd.ms-excel"];
  const handleFile = (e) => {
    let selectFile = e.target.files[0];
    if (selectFile) {
      console.log("Initial test");
      // console.log(selectFile.type);
      if (selectFile) {
        console.log("test");
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError("Please Select only one Excel file ");
        setExcelFile(null);
      }
    } else {
      console.log("you are not selected any file ");
    }
  };

  //   Submit Function

  const handelSubmit = (e) => {
    e.preventDefault();
    if (exclFile !== null) {
      const workbook = XLSX.read(exclFile, { type: "buffer" });
      const Worksheetname = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[Worksheetname];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    } else {
      setExcelData(null);
    }
  };

  return (
    <div className="">
      <h1 className="mb-5"> Excle Data Convert Into json And Showing this Data </h1>
      <div
        style={{
          backgroundColor: "white",
          padding: 40,
          borderRadius: 10,
          boxShadow: 20,
        }}
      >
        <form className="form-group" autoComplete="off" onSubmit={handelSubmit}>
          <label style={{ margin: 10 }}>
            {" "}
            <span className="text-danger">* </span>Upload a XLSX File{" "}
          </label>
          <br></br>

          <input
            type="file"
            className="form-control"
            onChange={handleFile}
            accept=".xlsx"
            required
          ></input>
          {exclFileError && <div className="text-danger"> {exclFileError}</div>}
          <button
            type="submit"
            className="my-3"
            style={{
              backgroundColor: "#80bfff",
              padding: "10px",
              border: 0,
              borderRadius: 5,
            }}
          >
            submit
          </button>
        </form>
      </div>

      <br></br>

      <div
        className="viewer"
        style={{
          backgroundColor: "white",
          padding: 60,
          borderRadius: 10,
          boxShadow: 20,
        }}
      >
        <h5>View Excel Record </h5>

        {excleData === null && <>No file selected</>}
        {excleData !== null && (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>

                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                </tr>
              </thead>
              <tbody>
                <Data excleData={excleData} />
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExcelDataShowing;
