import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";



export const locationOption = [
    { label: "Chennai", value: "Chennai" },
    { label: "kerala", value: "kerala" },
    { label: "Andhra", value: "Andhra" },
    { label: "Delhi", value: "Delhi" },
    { label: "Goa", value: "Goa" },
]

export const skillOption = [
    { label: "HTML", value: "HTML" },
    { label: "CSS", value: "CSS" },
    { label: "JS", value: "JS" },
    { label: "React", value: "React" },
    { label: "Bootstrap", value: "Bootstrap" },
]

function Form() {
    const navigate = useNavigate()
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        location: "",
        Skill: [],
        Language: []

    })

    const [studentList, setStudentList] = useState([])




    const handlechange = (e, name) => {
        let value = e.target.value
        //   console.log(name,value);
        setStudent({ ...student, [name]: value })
    }

    const handlesubmit = () => {
        if (student.firstName === "") {
            return toast.error("First Name is Required")
        }
        if (student.firstName.length < 3) {
            return toast.error("min 3 words requried")
        }
        if (student.lastName === "") {
            return toast.error("Last Name is Required")
        }

        if (student.email === "") {
            return toast.error("Email is Required")
        }


        if (student.phoneNumber === "") {
            return toast.error("Phone Number is Required")
        }


        if (student.password === "") {
            return alert("Password is Required")
        }

        axios.post("https://65e894d84bb72f0a9c4fd39d.mockapi.io/Student",student).then((res)=>{
            toast.success("Student Created")
          navigate ('/Student')
        }).catch((err)=>{
            console.log(err);
        })
        setStudentList([...studentList, student]);
        setStudent({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            location: "",
            Skill: [],
            Language: []
        })
    };

    const deleteStudent = (index) => {
        studentList.splice(index, 1)
        setStudentList([...studentList])
    }
    const handleCheckBox = (e, name) => {
        if (e.target.checked) {
            setStudent({ ...student, Language: [...student.Language, name] })
        } else {
            let index = student.Language.findIndex((item) => item === name)
            student.Language.splice(index, 1) 
            setStudent({ ...student })
        }
    }
    console.log(student)
    return (
        <div className='container w-75 m-auto'>
            <h1>Creating Form </h1>
            <div className='row'>
                <div className='col-6'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" maxLength={15} value={student.firstName} onChange={(e) => handlechange(e, "firstName")} />
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" value={student.lastName} onChange={(e) => handlechange(e, "lastName")} />
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" value={student.email} onChange={(e) => handlechange(e, "email")} />
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                        <input type="tel" class="form-control" id="exampleInputEmail1" value={student.phoneNumber} onChange={(e) => handlechange(e, "phoneNumber")} />
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputEmail1" value={student.password} onChange={(e) => handlechange(e, "password")} />
                    </div>
                </div>
                <div className='col-6'>
                    <div className="">
                        <label for="exampleInputEmail1" class="form-label">Location</label>
                    </div>
                    <Select options={locationOption}
                        value={locationOption.filter((op) => op.value === student.location)}
                        onChange={(e) => setStudent({ ...student, location: e.value })} />
                </div>
                <div className='col-6'>
                    <div className="">
                        <label for="exampleInputEmail1" class="form-label">Skill</label>
                    </div>
                    <Select isMulti options={skillOption}
                        value={skillOption.filter((op) => {
                            return student.Skill.some((pt) => pt === op.value)
                        })}
                        onChange={(e) => setStudent({ ...student, Skill: e.map((op) => op.value) })} />
                </div>
            </div>
            <div className='col-6'>
                <label className='my-3'>Language</label>
                <div className='d-flex '>
                    <div class="form-check mx-3">
                        <input class="form-check-input" type="checkbox" value=""
                            onChange={(e) => handleCheckBox(e, "Tamil")} />
                        <label class="form-check-label" >
                            Tamil
                        </label>
                    </div>
                    <div class="form-check mx-3">
                        <input class="form-check-input" type="checkbox" value=""
                            onChange={(e) => handleCheckBox(e, "English")} />
                        <label class="form-check-label" >
                            English
                        </label>
                    </div>
                    <div class="form-check mx-3">
                        <input class="form-check-input" type="checkbox" value=""
                            onChange={(e) => handleCheckBox(e, "Hindi")} />
                        <label class="form-check-label" >
                            Hindi
                        </label>
                    </div>
                </div>

            </div>

            <div>
                <button className="btn btn-sm btn-outline-success my-5" onClick={() => handlesubmit()}>Submit</button>
            </div>

            <div className='mt-5'>
                {/* table */}
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Password</th>
                            <th scope="col">Location</th>
                            <th scope="col">Skill</th>
                            <th scope="col">Language</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentList.map((list, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{list.firstName}</td>
                                        <td>{list.lastName}</td>
                                        <td>{list.email}</td>
                                        <td>{list.phoneNumber}</td>
                                        <td>{list.password}</td>
                                        <td>{list.location}</td>
                                        <td>{list.Skill.join()}</td>
                                        <td>{list.Language}</td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-danger rounded' onClick={() => deleteStudent(index)}>X</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Form