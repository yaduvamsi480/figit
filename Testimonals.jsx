import React, { useState,useEffect} from 'react'
import Button from '../components/Button'
import {BsFillFileEarmarkPostFill} from "react-icons/bs"
import {FaUserAlt} from "react-icons/fa"
import {BiCommentDetail} from "react-icons/bi"
function Testimonals() {

    const [testimonials,settestimonials]=useState('');
    const [items,setItems]=useState([]);
    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then(response => response.json())
      .then(json => setItems(json));
    },[testimonials]);
  return (
    <div>Testimonals
        <br></br>
        <Button onClick={()=>settestimonials("posts")} icon={<BsFillFileEarmarkPostFill className='mr-2'/>}></Button>
        <Button onClick={()=>settestimonials("users")} text={'users'} icon={<FaUserAlt/>}> </Button>
        <Button  onClick={()=>settestimonials("comments")} icon={<BiCommentDetail/>}> </Button>
        
        <div >{!testimonials ? "choose above:" : testimonials}</div>
       <div> {!items ? null : items.map((item)=>{
            return <div className='card card-primary mb-2'>{item.id}</div>;

        })}
        </div>
    </div>
  );
    
}

export default Testimonals