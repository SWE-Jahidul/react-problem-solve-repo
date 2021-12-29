import React from "react";

const Pagination = ({ productPerPage, totalProduct,paginate }) => {
  const productNumber = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    productNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {productNumber.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() =>{
                paginate(number)
            }} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
