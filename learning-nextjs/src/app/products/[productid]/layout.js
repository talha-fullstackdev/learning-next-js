
import React from 'react'
const layout = ({children}) => {
  return (
    <div>
        <h1 className='text-4xl mb-4 '>products details</h1>
        {children}
        <h1 className='text-4xl mt-4'>Feature products</h1>
    </div>
  )
}

export default layout