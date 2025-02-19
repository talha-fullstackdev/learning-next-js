import React from 'react'
const page = ({params}) => {
    const productID = params.productid
  return (
    <div>This is page of product id {productID}</div>
  )
}

export default page
////////////getting params value by useParams hooks also we need to make this component client because we can only use hooks inside clients components
// "use client"
// import React from 'react'
// import { useParams } from 'next/navigation'
// const page = () => {
//     const params = useParams()
//   return (
//     <div>This is page of product id {params.productid}</div>
//   )
// }

// export default page