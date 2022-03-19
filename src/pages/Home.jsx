import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const quentClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate } = useMutation((newUser) => {
    return axios.post("http://localhost:3000/data", newUser)
  }, {
    onSuccess: () => {
      quentClient.invalidateQueries("user-hello")
    }
  })

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSuccess = (data, e) => {
    mutate(data);
    navigate("/characters");
  }

  return (
    <div className='container mx-auto bg-blue-100 h-146  flex justify-center items-center'>
      <div className='bg-green-300 h-110 w-110 flex justify-center items-center shadow-xl rounded-sm'>

        <form onSubmit={handleSubmit(onSuccess)} className="flex flex-col gap-5">
          <input type="text" {...register("name", { required: [true, "name is require"] })}
            className="p-5 rounded-md text-xl"
            placeholder='Enter the Name'
          />
          {errors.name && <h1>{errors.name.message}</h1>}
          <input type="age" {...register("age", { required: [true, "age is require"] })}
            className="p-5 rounded-md text-xl"
            placeholder='Enter the Age' autoSave='false'
          />
          {errors.age && <h1 className='text-black'>{errors.age.message}</h1>}
          <input type="submit"
            className='bg-blue-800 h-10 rounded-lg text-white'
          />
        </form>
      </div>
    </div>
  )
}

export default Home