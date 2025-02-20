import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <h1 className='text-4xl'>auth layout</h1>
        {children}
    </div>
  )
}

export default layout