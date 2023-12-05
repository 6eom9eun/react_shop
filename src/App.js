/* eslint-disable */

import { useState } from "react"
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import data from './data.js'
import Detail from './routes/detail.js'



function App(){

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>캠핑</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/') }}>홈</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/detail') }}>상세페이지</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
        <>
          <div className="main-bg"></div> 
          <div className="container">
            <div className="row">
              {
                shoes.map((a, i)=>{
                  return(<Card shoes={shoes[i]} i={i}></Card>)
                })
              }
            </div>
          </div>
        </>
        }></Route>

        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}></Route>
              
      <Route path="/about" element={ <About/> } >  
        <Route path="frontend" element={ <div>프론트엔드</div> } />
        <Route path="backend" element={ <div>백엔드</div> } />
      </Route>

        <Route path="*" element={<div>없는페이지</div>}></Route>
      </Routes>


    </div>
  )

  function Card(props){ 
    return (
      <>
          <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width="80%" />
            <h4>{ props.shoes.title }</h4>
            <p>{ props.shoes.price }</p>
          </div>
      </>
    )
  }

  function About(){
    return(
      <>
      <div>
        <h4>정보</h4>
        <Outlet></Outlet>
      </div>
      </>
    )
  }

}

export default App;
