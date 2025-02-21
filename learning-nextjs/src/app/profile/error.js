"use client"
import React from 'react'
const error = ({error,reset}) => {
  return (
    <div>
        <p>error has occured</p>
        <p>{error.message}</p>
        <button onClick={reset}>try again</button> //reset the error (some error could be fixed by simply trying again reset is for that)
    </div>
  )
}

export default error