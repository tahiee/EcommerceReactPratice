import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../compnents/Card'

const Projects = () => {

    // param for dynamic routes
    const params = useParams()
    console.log(params)

    //useState
    const [data, setData] = useState([])
    //useEffect
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <html>

                <div className='flex justify-center items-center text-center flex-wrap gap-8 mt-4'>
                    {data.length > 0 ? data.map((item, index) => {
                        return <Card key={item.id}
                            title={item.title}
                            description={item.description}
                            src={item.image}
                            price={item.price}
                            id={item.id} />
                    }) : <h1 className='text-center font-lg'>Loading...</h1>}

                </div>
            </html>
        </>
    )
}

export default Projects
