import React, { useEffect, useState } from 'react'
import UserPost from '../UserPost/UserPost'

const Post = () => {
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments/')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

  return (
    <div >
        <h1 className='mb-5 text-center font-bold border-b-2 pb-2 mt-5'>User Post: {user.length}</h1>
        <div className=' grid md:grid-cols-2 lg:grid-cols-4  gap-5'>
        {
            user.map( userss=> <UserPost users={userss} key={userss.id}></UserPost>)
        }
        </div>
    </div>
  )
}

export default Post