import React from "react";

const UploadImages = () => {
  const upload = (e) => {
    console.log(e.target.files);
    const files = e.target.files;
    const formData = new FormData();
    formData.append("img", files[0]);
    fetch("http://localhost:5000/products", {
      method: "POST",
      body: formData,
    }).then((res) => {
      res.json().then((result) => {
        console.log(result);
      });
    });
  };

  return (
    <div>
      <h1> Upload an Image File </h1>
      <input type="file" name="img" onChange={upload}></input>
    </div>
  );
};

export default UploadImages;
