import axios from 'axios';
import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { NavLink } from 'react-router-dom';

const Charactes = () => {

  const queryClient = useQueryClient();
  
  const { data, error, status } = useQuery("user-hello", () => {
    return axios.get("http://localhost:3000/data")
  });


  const { mutate:updateUser } = useMutation(({id,name,age}) => {
    return axios.put(`http://localhost:3000/data/${id}`, { name, age });
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries("user-hello")
    }
  })


  const { mutate:deleteUser } = useMutation((id) => {
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
    <div>
      { 
        data?.data.map(user => {
          return (
            <div key={user.id}>
              <NavLink to={`/characters/${user.id}`}><h1>{ user.name}</h1></NavLink>
              <h1>{user.age}</h1>
              <button onClick={()=>handleDelete(user.id)}>delete</button>
              <button onClick={()=>handleUpdate(user.id)}>Edit</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Charactes