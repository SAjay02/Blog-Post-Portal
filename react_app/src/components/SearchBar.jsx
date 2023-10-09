import React from 'react'
import {useState} from "react"
import { Button, Col, Container, Form, Row,Modal } from "react-bootstrap";
import PostTitl from './PostTitl';
import Blog from '../Pages/Blog';
import PostContent from './PostContent';
import PostAuthor from './PostAuthor';
let val="";
const SearchBar = () => {
    const[title,setTitle]=useState('');
    const[display,setDisplay]=useState(false);
    const handleChange= async(event)=>
    {
      setTitle(event.target.value);
       val=event.target.value;
    }
    const handleSubmit = async(event) => 
    {
      val=title;
      setDisplay(true);
    }
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={4} className="container">
          <Form className="d-flex">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button className="rounded-pill" variant="outline-primary" type="button" onClick={handleSubmit}>
              Search
            </Button>
          </Form>
        </Col>
        {display && <PostTitl tit={title} titset={setTitle}/>}
      </Row>
    </Container>
  )
}
export default SearchBar
