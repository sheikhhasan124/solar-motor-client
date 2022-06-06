import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const User = () => {
  // here isloading work like default value in useState([])
  const { data: users, isLoading ,refetch} = useQuery("users", () =>
    fetch("https://enigmatic-dawn-68660.herokuapp.com/user",{
        method:'GET',
        headers:{
           authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-center py-4">All Users</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className='text-gray-500'>All Youser</th>
              <th className='text-gray-500'>Make Admin</th>
              <th className='text-gray-500'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <UserRow key={user._id} refetch={refetch} index={index} user={user}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
