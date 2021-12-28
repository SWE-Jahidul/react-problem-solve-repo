import React from "react";
import ReactToPdf from "react-to-pdf";
const ref = React.createRef();

const PdfGenarator = () => {
  return (
    <div>
      hii raju !!
      <div>
        <ReactToPdf targetRef={ref} filename="div-blue.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
        </ReactToPdf>
        <div
        //   style={{ width: 500, height: 500, background: "blue" }}
          ref={ref}
        />
       
      </div>
    </div>
  );
};

export default PdfGenarator;
