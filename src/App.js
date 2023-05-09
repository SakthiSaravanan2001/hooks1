import { useState } from "react";
import box from "./box";
import './App.css';
import Ss from './ss';
export default function Sakthi(){
  const promise=new Promise((resolve,reject)=>{
    
    reject("hello saravanana")
  })
  


  return(
    <div>
      <h1>Sakthi</h1>
      <h2>{console.log(promise.then((data)=>{console.log(data)}).catch((dat)=>{console.log(dat)}))}</h2>

    </div>
  )
}
