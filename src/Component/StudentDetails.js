import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function StudentDetails() {
  const params = useParams()
  const[StudentDetails,setStudentDetails] = useState({})
 
  const fetchStudentdetails = ()=>{
    axios.get(`https://65e894d84bb72f0a9c4fd39d.mockapi.io/Student/${params.id}`).then((res)=>{
      setStudentDetails(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }
useEffect(()=>{
  fetchStudentdetails()
},[]);
return (
  <div>
  <div class="card" style={{width: "18rem;"}}>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{StudentDetails.firstName} {StudentDetails.lastName}</li>
      <li class="list-group-item">{StudentDetails.email}</li>
      <li class="list-group-item">{StudentDetails.password}</li>
      <li class="list-group-item">{StudentDetails.phoneNumber}</li>
      <li class="list-group-item">{StudentDetails.location}</li>
      <li class="list-group-item">{StudentDetails?.skills?.join()}</li>
    </ul>
      
  </div>
  </div>
  );
}

export default StudentDetails