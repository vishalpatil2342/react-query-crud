import axios from 'axios';
import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { NavLink } from 'react-router-dom';

const Charactes = () => {

  const queryClient = useQueryClient();

  const { data } = useQuery("user-hello", () => {
    return axios.get("http://localhost:3000/data")
  });


  const { mutate: updateUser } = useMutation(({ id, name, age }) => {
    return axios.put(`http://localhost:3000/data/${id}`, { name, age });
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries("user-hello")
    }
  })


  const { mutate: deleteUser } = useMutation((id) => {
    return axios.delete(`http://localhost:3000/data/${id}`)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries("user-hello")
    }
  })


  const handleDelete = (id) => {
    deleteUser(id);
  }


  const handleUpdate = (id) => {
    const name = prompt("Enter the name");
    const age = prompt("Enter the age");
    const data = { id, name, age };
    updateUser(data);
  }
  return (
    <div className="container mx-auto flex flex-col items-center h-145 bg-blue-100 overflow-auto">
      {
        data?.data.map(user => {
          return (
            <div key={user.id} className='bg-green-300 text-center min-h-60 w-60 shadow-xl mt-7 rounded-xl flex flex-col justify-center' >
              <NavLink to={`/characters/${user.id}`} className="no-underline font-bold text-2xl text-black "><h1>{user.name}</h1></NavLink>
              <h1 className='text-lg font-bold'>{user.age}</h1>
              <div className='flex flex-row justify-center gap-4 m-5'>
                <button onClick={() => handleDelete(user.id)}
                  className="bg-blue-700 p-2 rounded-lg text-white font-serif"
                >delete</button>
                <button onClick={() => handleUpdate(user.id)}
                  className="bg-red-700 p-3 rounded-lg text-white font-serif"
                >Edit</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Charactes