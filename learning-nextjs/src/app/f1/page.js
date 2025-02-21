import React from 'react'
import Link from 'next/link'
const F1 = () => {
  return (
    <div>
        <p>F1</p>
        <Link className='text-blue-400 underline underline-offset-4' href="/f1/f2">go to F2</Link>
    </div>
  )
}

export default F1