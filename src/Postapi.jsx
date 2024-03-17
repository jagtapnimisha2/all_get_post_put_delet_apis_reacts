import React, { useState } from 'react'
import axios from 'axios';

const Postapi = () => {
    const data = {fname:"", lname:""};
    const [inputData,setInputdata] = useState(data);
    const handleData=(e)=>{
        setInputdata({...inputData,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputData)
        .then((response)=>{
            console.log(response);
        })
    }
    const handleUpadte = (e) =>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((response)=>{
            console.log(response);
        })
    }
const handleDelete =(e)=>{
e.preventDefault();
axios.delete("https://jsonplaceholder.typicode.com/users/1")
.then((response)=>{
    console.log(response);
})
}
  return (
    <div>
        <label>Name</label>
        <input type="text" name='fname' value={inputData.fname}  onChange={handleData}/>
        <br />
        <label>Last name</label>
        <input type="text" name='lname' value={inputData.lname} onChange={handleData}/>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleUpadte}>Update</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Postapi