import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingelProduct = ({ id }) => {
  const [data, setData] = useState([])
  const params = useParams()
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  function Hehe() {
    alert('Ruk ja Pagly Khareed lena')
  }
  return (
    <div className='flex justify-center items-center text-center'>
      <div className="card w-96 bg-base-100 shadow-xl mt-6 ">
        <figure className="px-10 pt-10">
          <img src={data.image} alt="Shoes" className="rounded-xl w-[160px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{data.title}</h2>
          <h4>{data.description}</h4>
          <p>{data.price}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={Hehe} >Buy Now</button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default SingelProduct
