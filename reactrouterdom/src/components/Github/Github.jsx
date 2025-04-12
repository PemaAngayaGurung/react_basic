import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/pemaAngayaGurung`)
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [])
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="github_pic" width={300}/>
    </div>
  )
}

export default Github
