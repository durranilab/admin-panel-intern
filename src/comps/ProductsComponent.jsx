import React from 'react';

const ProductsComponent = ({products=[]}) => {
    return (
        <div className={'px-24  grid grid-cols-3 gap-4'}>

            {products.map((product) =>

                <div key={product.title} className={'flex flex-col justify-center items-center'}>

                    <img src={product.image} className={'w-48 h-48'}/>

                    <div className={'text-xl font-bold text-black'}>
                        {product.title}
                    </div>

                    <div className={'text-xs text-gray-600'}>
                        {product.description}
                    </div>

                    <div className={'text-3xl text-indigo-500'}>
                        ₹ {product.price}
                    </div>


                </div>
            )}


        </div>
    );
};

export default ProductsComponent;
