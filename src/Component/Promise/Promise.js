import React from 'react';

const Promise = () => {

    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(body =>{
      body.map(data =>  console.log(data.name))
  })
  .catch((err ) => console.log(err));
    return (
        <div>
            test
        </div>
    );
};

export default Promise;