import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PostTitl from '../components/PostTitl';
import PostContent from '../components/PostContent';
import PostAuthor from '../components/PostAuthor';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
const Blog = (props) => {
  return (
     <div
     className="modal show"
     style={{ display: 'flex', position: 'initial' }}>
     <Modal.Dialog>
       <Modal.Header closeButton>
         <Modal.Title>{props.val1}</Modal.Title>
       </Modal.Header>
       <Modal.Body>
        { <PostContent/>}
       </Modal.Body>
       <Modal.Footer>
         {<PostAuthor/>}
       </Modal.Footer>
     </Modal.Dialog>
   </div>
  )
}
export default Blog