import React from 'react';

const Product = ({products }) => {
   
    
    return (
        <div>
            {products.map(product =>(
                <li key={product.id} className='list-group-item'>
                {product.title}
                </li>
              )  )  }
        </div>
    );
};

export default Product;