import React, { useEffect, useState } from 'react';

const AllProductsAdminDetails = () => {
  const [isOpen,setIsOpen] = useState(false);
  // const {loginDetails} = useSelector(state=>state.cart)
  const [allProducts,setAllProducts] = useState();
  // useEffect(()=>{
  //   async function getProducts(){
  //     const response = await fetch("http://localhost:3000/getallproducts",{
  //       method:"GET",
  //       headers:{
  //         "Authorization" : `Bearer ${loginDetails.token}`
  //       }
  //     })
  //     if(response.ok){
  //       const {products} = await response.json()
  //       setAllProducts(products)
  //     }
  //   }
  //   getProducts();
  // },[])
  return (
    <div style={{ background: "linear-gradient(to right, #141e23, #243b67)"}} className='w-full h-screen  flex flex-col relative'>
      <div className='flex justify-between items-center mt-10'>
      <span style={{ fontSize: '18px' }} className='text-center font-semibold text-gray-700 mt-7 mb-4'>
        ALL PRODUCTS
      </span>
      
      </div>
      <table className='pl-4 w-3/4'>

        <tbody className='w-3/4'>
        <tr className='text-sm font-semibold text-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-10 pl-2'>
            <td>Requst Id</td>
            <td>Patient Status</td>
            <td>Accendent Type</td>
            <td>Area</td>
            <td>City</td>
        </tr>
        <tr className='text-sm font-semibold text-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-10 pl-2'>
            <td>Product Id</td>
            <td>Product Name</td>
            <td>Instock</td>
            <td>Price</td>
            <td>Actions</td>
        </tr>
        <tr className='text-sm font-semibold text-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-10 pl-2'>
            <td>Product Id</td>
            <td>Product Name</td>
            <td>Instock</td>
            <td>Price</td>
            <td>Actions</td>
        </tr>
        <tr className='text-sm font-semibold text-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-10 pl-2'>
            <td>Product Id</td>
            <td>Product Name</td>
            <td>Instock</td>
            <td>Price</td>
            <td>Actions</td>
        </tr>
        <tr className='text-sm font-semibold text-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-10 pl-2'>
            <td>Product Id</td>
            <td>Product Name</td>
            <td>Instock</td>
            <td>Price</td>
            <td>Actions</td>
        </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default AllProductsAdminDetails;

