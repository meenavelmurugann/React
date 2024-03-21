import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import userContext from '../Context/Context'
import honey from "../Images/honeybee.png"

function Dashboard() {
  const value = useContext(userContext)
  const data = [
    {
      name:"Primary Card",
      color:"primary"
    },
    {
      name:"Secondary Card",
      color:"success"
    },
    {
      name:"Warning Card",
      color:"warning"
    },
    {
      name:"Danger Card",
      color:"danger"
    },

  ]
  return (
    <>
      <div className='container'>
        <h1>{value}<img src={honey}/></h1>
        <div className='row'>
          {
            data.map((list)=>{
              return <div className='col-3'>
              <div class={`card bg-${list.color}`}>
                <div class="card-header">{list.name}</div>
                <div class="card-body">
                  <a>View Details</a>
                </div>
              </div>
            </div>
            })
          }
          </div>
          <div>
           <Link to={'Profile'}>
           <button className="btn btn-sm btn-outline-primary my-5">Profile</button></Link>
            
          </div>
          <Outlet/>
      </div>
    </>


  )
}

export default Dashboard