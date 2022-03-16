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
    <div>
      {
        <>
          <h1>{data?.data.name}</h1>
          <h1>{data?.data.age}</h1>
        </>
      }
    </div>
  )
}

export default CharacterById