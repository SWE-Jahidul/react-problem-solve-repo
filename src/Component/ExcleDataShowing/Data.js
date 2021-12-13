import React from "react";
import { IndividualData } from "./IndividualData";

const Data = ({excleData}) => {
  return excleData.map((individualExcelData) => (
    <tr key={individualExcelData.Id}>
      <IndividualData individualExcelData={individualExcelData} />
    </tr>
  ));
};

export default Data;
