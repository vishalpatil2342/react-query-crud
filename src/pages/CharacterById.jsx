import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

const CharacterById = () => {
  const params = useParams();
  const { data, error } = useQuery("user-by-id", () => {
    return axios.get(`http://localhost:3000/data/${params.id}`);
  })
  return (
    <div className='container mx-auto flex flex-col h-147 bg-cyan-50 justify-center items-center'>
      {
        <div className='h-40 w-40 bg-blue-500 flex justify-center items-center' >
        <div> 
          <h1 className='text-white text-2xl'>{data?.data.name}</h1>
          <h1 className="text-white text-2xl">{data?.data.age}</h1>
        </div>
        </div>
      }
    </div>
  )
}

export default CharacterById