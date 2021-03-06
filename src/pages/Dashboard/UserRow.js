import React from "react";
import { toast } from 'react-toastify';

const UserRow = ({user,index,refetch}) => {
  const {_id,email,role}=user;

  const makeAdmin=()=>{
    // backend a token patate metho bolte hoi
    fetch(`https://enigmatic-dawn-68660.herokuapp.com/user/admin/${email}`,{
      method:'PUT',
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res=>{
      if(res.status === 403){
        toast.error('failed to make an admin')
      }
      return res.json()})
    .then(data=>{
      if(data.modifiedCount>0){
        refetch()
        toast.success('successfully made an admin')
      }
    })
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs bg-green-500	border-0 text-white">Make Admin</button>}</td>
      <td><button class="btn btn-sm bg-[hsl(9,98%,52%)] border-0 text-white">Remove</button></td>
    </tr>
  );
};

export default UserRow;
