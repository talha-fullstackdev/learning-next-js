import React from 'react'
import Link from 'next/link'
const AboutPage = () => {
  return (
    <div>
      <h1>this is  About Page</h1>
      <Link href="/" className='text-blue-400 hover:underline hover:underline-offset-4' title='back home?'>back to home</Link>
    </div>
    
  )
}

export default AboutPage