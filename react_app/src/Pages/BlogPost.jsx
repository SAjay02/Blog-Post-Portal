import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PostTitl from '../components/PostTitl';
import PostContent from '../components/PostContent';
import PostAuthor from '../components/PostAuthor';
import Blog from './Blog';
import SearchBar from '../components/SearchBar';
let val;
const BlogPost = () => {
  const[shown,setShown]=useState(false);
  const[shown1,setShown1]=useState(false);
const firstBlog=(event)=>
{
  setShown(current=>!current);
  val=event.target.innerHTML;
}
  return (
    <div className="container mt-5 d-flex ">
      <div className="container">
            <Button className="mx-1 mb-1"  onClick={firstBlog}>A Step-By-Step Guide</Button>
            {shown && <PostTitl tit={val}/>}
            <Button className="mx-1 mb-1" onClick={firstBlog}>The Advanced Guide To…</Button>
            {shown1 && <PostTitl tit={val}/>}
            <Button className="mx-1 mb-1" onClick={firstBlog}>A Start-To-Finish Guide…</Button>
            {shown1 && <PostTitl tit={val}/>}
            <Button className="mx-1 mb-1" onClick={firstBlog}>The In-Depth Guide To…</Button>
            {shown1 && <PostTitl tit={val}/>}
            <Button className="mx-1 mb-1" onClick={firstBlog}>The Only Guide You Need</Button>
            {shown1 && <PostTitl tit={val}/>}
            </div>
    </div>
  )
}
export default BlogPost