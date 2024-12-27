import React from 'react'

function Card({username = "hitesh", post = "Coder"}) {
    // console.log(props)
  return (
    <div>
        <img src="/sampleImage.jpeg" alt="" />
        <h1 className='text-2xl bg-green p-3 rounded-md'>{username}</h1>
        <p>{post}</p>
    </div>
  )
}

export default Card