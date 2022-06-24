import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
const Users = () => {
    const param=useParams();
    console.log(param.userid);
  return (
    <Fragment>
        <h1 className='text-center text-white pt-4'>Wellcome to Shopping Cart</h1>
    </Fragment>
  )
}

export default Users