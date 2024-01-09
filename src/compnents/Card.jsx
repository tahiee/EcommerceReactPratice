import React from 'react'
import { useNavigate } from 'react-router-dom'


const Card = ({ src, title, price, description,id }) => {
    const Navigate = useNavigate()

    function SingelProductPage() {
        Navigate(`/singleproduct/${id}`)
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={src} alt="Shoes" className="rounded-xl w-[160px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <h4>{description}</h4>
                    <p>{price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={SingelProductPage}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
