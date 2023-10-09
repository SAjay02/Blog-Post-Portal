import React, { useState } from 'react'
import PostContent from './PostContent';
import PostAuthor from './PostAuthor';
import { Modal } from 'react-bootstrap';

const PostTitl = (props) => {
    const[display,setDisplay]=useState(false);
    const tit=["A Step-By-Step Guide","The Advanced Guide To","A Start-To-Finish Guide","The In-Depth Guide To","The Only Guide You Need"];
    const arr=[
      {
        tit:"A Step-By-Step Guide",
        con:"a set of content rules that keeps the tone of voice and other elements of brand voice consistent across pieces of content, regardless of who creates it",
        auth:"Ajay"
      },
      {
        tit:"A Start-To-Finish Guide",
        con:"Content guidelines spell out the rules people should follow when they create content for your organization. Part instructions, part advice, they lay out everything you need to know about how to create consistent content at your company.",
        auth:"Sri"
      },
      {
        tit:"The Advanced Guide To",
        con:"Content strategy refers to a brand's overarching content process and practices including planning, creation, publication, management, and content governance.",
        auth:"Raghu"
      },
      {
        tit:"The In-Depth Guide To",
        con:"In-depth content is designed to meet a reader's needs with expert knowledge on a variety of related subjects around a focus topic.",
        auth:"Wiku"
      },
      {
        tit:"The Only Guide You Need",
        con:"Content writing is the process of writing, editing, and publishing content in a digital format. That content can include blog posts, video or podcast scripts, ebooks or whitepapers, press releases, product category descriptions, landing page or social media copy",
        auth:"ram"
      },
    ]
    let store="";
    let store1="";
    let store2="";
    tit.map((val)=>
    {
      if(val===props.tit)
      {
        store=props.tit;
        props.titset(store);
      }
    });
    arr.filter((val)=>val.tit===props.tit).map((val)=>{
      store1=val.con;
      store2=val.auth;
    });
  return (
    <div>
        <div className="modal show" style={{ display: 'flex', position: 'initial' }}>
     <Modal.Dialog>
       <Modal.Header closeButton>
         <Modal.Title>{store}</Modal.Title>
       </Modal.Header>
       <Modal.Body>
        {store1}
       </Modal.Body>
       <Modal.Footer>
         {store2}
       </Modal.Footer>
     </Modal.Dialog>
   </div>
    </div>
  )
}

export default PostTitl