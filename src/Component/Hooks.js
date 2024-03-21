import React, { useContext, useState } from 'react'
import userContext from '../Context/Context'

function Hooks() {
    const value = useContext(userContext)
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false)
    const [Name,setName]= useState('')
    return (
        <>
        <h1>{value}</h1>
            <div className='text-center'>
                <button className='btn btn-sm btn-outline-danger m-5' onClick={() => setCount(count - 1)} disabled={count <= 0}>-</button>
                {count}
                <button className='btn btn-sm btn-outline-primary m-5' onClick={() => setCount(count + 1)} disabled={count >= 10}>+</button>
            </div>
            <div className='mx-5'>
                <button className={show ? 'btn btn-sm btn-outline-warning my-5' : 'btn btn-sm btn-outline-primary my-5'} onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
                {
                    show ? <p>
                        The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. jsx-a11y/anchor-is-valid.The href attribute requires a valid value to be accessible.
                    </p> : ""
                }
            </div>
            <div className='my-5'>
                Name: {Name}
                <div>
                    <label>Name: </label>
                    <input placeholder="Name" onChange={(event)=>setName(event.target.value)} />
                </div>

            </div>
        </>
    )
}

export default Hooks