import { useState } from "react";

const productOption = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Mango",
    value: "mango",
  },
  {
    label: "Banana",
    value: "banana",
  },
  {
    label: "Pineapple",
    value: "pineapple",
  },
];

const ProductPrice = [
  {
    value: 100,
  },
  {
    value: 200,
  },
  {
    value: 300,
  },
  {
    value: 400,
  },
];

function Dropdown() {
  const [product, setProduct] = useState();
  const [productPrice, setProductPrice] = useState();
  const [allInfoProduct, setAllInfoProduct] = useState([]);
  const [allProductPrice, setAllProductPrice] = useState([]);

  return (
    <>
      <div
        className="d-flex justify-content-center pt-5  "
        style={{
          display: "flex",
        }}
      >
        <div className="select-container ">
          <select
            style={{
              width: "15rem",
              padding: 10,
              marginRight: "1rem",
            }}
            onChange={handleChangeProduct}
            disabled={product}
          >
            {productOption.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div className="select-container">
          <select
            style={{
              width: "15rem",
              padding: 10,
              marginRight: "1rem",
            }}
            onChange={handleChangeProductPrice}
            disabled={productPrice}
          >
            {ProductPrice.map((price) => (
              <option value={price.value}>{price.value}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary " onClick={showResult}>
          Show Result
        </button>
      </div>

      <div className="container pt-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name </th>
              <th scope="col">Price </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{allInfoProduct}</td>
              <td>{allProductPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );

  function showResult(v) {
    setAllInfoProduct(product);
    setAllProductPrice(productPrice);
  }

  function handleChangeProduct(e) {
    // console.log("Fruit Selected!!", e.target.value);
    setProduct(e.target.value);
  }

  function handleChangeProductPrice(e) {
    //   console.log("selected value!!", e.target.value);
    setProductPrice(e.target.value);
  }
}

export default Dropdown;
