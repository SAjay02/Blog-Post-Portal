import React from 'react'
const PostAuthor = () => {
    const tit=["Ajay","Sri","Ram","Raghu","Viku"];
    const ran=Math.floor(Math.random()*5);
  return (
    <div>
        {tit[ran]}
    </div>
  )
}
export default PostAuthor