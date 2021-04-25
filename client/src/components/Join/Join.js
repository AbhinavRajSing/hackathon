import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [problem, setProblem] = useState('');


  let patients = JSON.parse(localStorage.getItem("patient")) || []
const handleClick=()=>{
  let user ={}
  user.name=name;
  user.problem=problem

  
  
  // console.log(temp)
  patients = [...patients,user]
  localStorage.setItem("patient",JSON.stringify(patients))

}
console.log(patients.length)

  return (
    <>
    <div className="joinOuterContainer">
    <h2 className="heading">MASAI HEALTH-CARE</h2>
      <div className="joinInnerContainer">
  {patients.length == 6 ?<h4>All slots booked for today</h4>:<h4>{6-patients.length} Slots remaining , <br/>join the room with given id</h4>}
        <div>
          <TextField variant="outlined" placeholder="Name"  type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
        <TextField variant="outlined" placeholder="Room" type="text" onChange={(event) => setRoom(event.target.value)}  />
        </div>
        <div>
          <TextField variant="outlined" placeholder="Problem" type="text" onChange={(event) => setProblem(event.target.value)}></TextField>
        </div>
        <Link style={{textDecoration:"none"}} onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <Button variant="contained" disabled={patients.length==6?true:false} color="primary" onClick={handleClick}>JOIN</Button>
        </Link>
      </div>
    </div>
  </>
  );
}
