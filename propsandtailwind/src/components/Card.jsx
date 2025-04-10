import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="/img/cover.png" />
  </div>
    <p className="text-2xl font-medium">{props.username}</p>
    <p className="font-medium text-sky-500 m-5">{props.position}</p>
</div>
  )
}

export default Card
