import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select';
import { List, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import swal from 'sweetalert';
import { locationOption, skillOption } from './Form';

function Studentlist() {
    const navigate = useNavigate()
    const [studentList, setStudentList] = useState([])
    const [loading, setloading] = useState(true)
    const [isEdit, setIsEdit] = useState(false)
    const [editStudent,setEditStudent] = useState({})

    const fetchStudentlist = () => {
        axios.get('https://65e894d84bb72f0a9c4fd39d.mockapi.io/Student').then((res) => {
            setStudentList(res.data);
            setloading(false)
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        fetchStudentlist()
    }, [])

    const deleteStudent = (studentId) => {
        console.log(studentId)

    }

    const onDelete = (studentId) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete the file?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                axios.delete(`https://65e894d84bb72f0a9c4fd39d.mockapi.io/Student/${studentId}`).then((res) => {
                    swal("Successfully deleted!", {
                        icon: "success",
                    });
                    fetchStudentlist()
                }).catch((err) => {
                    console.log(err);
                })
            } else {
                swal("Your imaginary file is safe!");
            }
        })
    }

    const onEdit = (data) => {
        setIsEdit(!isEdit);
        setEditStudent(data);
    }

    const handlechange = (e, name) => {
        let value = e.target.value
        //   console.log(name,value);
        setEditStudent({ ...editStudent, [name]: value })
    }

    const editUpdate =()=>{
        console.log(editStudent);
        axios.put(`https://65e894d84bb72f0a9c4fd39d.mockapi.io/Student/${editStudent.id}`,editStudent).then((res)=>{
            console.log(res);
            setIsEdit(!isEdit)
            fetchStudentlist()
        }).catch((err)=>{
            console.log(err)
        })
    }



    return (
        <div className='container mt-5'>
            {/* table */}
            <div className='d-flex justify-content-between align-item-center'>
                <div><h1>Student List</h1></div>
                <div>
                    <button className='btn btn-sm btn-outline-primary' onClick={() => navigate('/form')}>Add +</button>
                </div>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Password</th>
                        <th scope="col">location</th>
                        <th scope="col">Skill</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                {loading ? (
                    <div className='text-center w-100'>
                        <div class="spinner-border text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <tbody>
                        {studentList.map((list, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{list.firstName}</td>
                                    <td>{list.lastName}</td>
                                    <td>{list.email}</td>
                                    <td>{list.phoneNumber}</td>
                                    <td>{list.password}</td>
                                    <td>{list.location}</td>
                                    <td>{list?.Skill?.join()}</td>
                                    <td>
                                        <button className='btn btn-sm btn-outline-primary rounded mx-1' onClick={() => navigate(`/Student/detail/${list.id}`)}><i class="fa fa-eye" aria-hidden="true"></i></button>
                                        <button className='btn btn-sm btn-outline-success rounded mx-2' onClick={() => onEdit(list)}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                        <button className='btn btn-sm btn-outline-danger rounded mx-1' onClick={() => onDelete(list.id)}>
                                            <i class="fa fa-trash" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                )}
            </table>
            <Modal isOpen={isEdit} toggle={() => setIsEdit(!isEdit)} size="lg" centered>
                <ModalHeader toggle={() => setIsEdit(!isEdit)}>Edit Student</ModalHeader>
                <ModalBody>
                    <div className='container w-75 m-auto'>
                        <div className='row'>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" maxLength={15}
                                    value={editStudent.firstName} 
                                    onChange={(e) => handlechange(e, "firstName")} 
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                     value={editStudent.lastName} 
                                    onChange={(e) => handlechange(e, "lastName")} 
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                    value={editStudent.email} 
                                    onChange={(e) => handlechange(e, "email")} 
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                                    <input type="tel" class="form-control" id="exampleInputEmail1"
                                    value={editStudent.phoneNumber} 
                                    onChange={(e) => handlechange(e, "phoneNumber")} 
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputEmail1"
                                    value={editStudent.password} 
                                    onChange={(e) => handlechange(e, "password")}
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="">
                                    <label for="exampleInputEmail1" class="form-label">Location</label>
                                </div>
                                <Select
                                options={locationOption}
                                value={locationOption.filter((op) => op.value === editStudent.location)}
                                onChange={(e) => setEditStudent({ ...editStudent, location: e.value })}
                                />
                            </div>
                            <div className='col-6'>
                                <div className="">
                                    <label for="exampleInputEmail1" class="form-label">Skill</label>
                                </div>
                                <Select
                                    isMulti
                                options={skillOption}
                                    value={skillOption.filter((op) => {
                                        return editStudent?.Skill?.some((pt) => pt === op.value)})}                                    
                                    onChange={(e) => setEditStudent({ ...editStudent, Skill: e.map((op) => op.value) })} 
                                />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div>
                        <button>Cancel</button>
                        <button onClick={()=>editUpdate()}>Update</button>
                    </div>
                </ModalFooter>
            </Modal>

        </div>
    );
}

export default Studentlist