import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {  useNavigate } from 'react-router-dom';



const Home = () => {

  const quentClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate }= useMutation((newUser) => {
    return axios.post("http://localhost:3000/data", newUser)
  }, {
    onSuccess: () => {
      quentClient.invalidateQueries("user-hello")
    }
  })

  const { register , formState : { errors } , handleSubmit } = useForm();

  const onSuccess = (data,e) => {
    mutate(data);
    navigate("/characters");
  }

  return (
      <form onSubmit={handleSubmit(onSuccess)}>
        <input type="text" {...register("name",{required:[true,"name is require"]})} />
        {errors.name && <h1>{ errors.name.message}</h1>}
        <input type="age" {...register("age",{required:[true,"age is require"]})} />
        {errors.age && <h1>{errors.age.message}</h1>}
        <input type="submit" />
      </form>
  )
}

export default Home