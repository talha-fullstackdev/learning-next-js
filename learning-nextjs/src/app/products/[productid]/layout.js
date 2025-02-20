
// import React from 'react'
// const layout = ({children}) => {
//   return (
//     <div>
//         <h1 className='text-4xl mb-4 '>products details</h1>
//         {children}
//         <h1 className='text-4xl mt-4'>Feature products</h1>
//     </div>
//   )
// }
// export const metadata ={
//   title:{
//     absolute:"",
//     default:"",
//     template:""
//   }
// }
// export default layout
import React from "react";

export const metadata = {
  title: {

    default: "Product Details",
    template: "%s | My Store",
  },
  description: "Find detailed information about our products.",
};

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-4xl mb-4">Product Details</h1>
      {children}
      <h1 className="text-4xl mt-4">Featured Products</h1>
    </div>
  );
};

export default Layout;
