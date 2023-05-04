import React from 'react'

function CarCard(props) {
  const getImageUrl=(image)=>{
    return "https://localhost:7050/images/" +image;
  }
  return (

    <div className="card justify-aling-center" >
    <img src={"https://localhost:7050/images/" +props.car.image} className="card-img-top" style={{ width:"10rem" , height:"10rem" }} alt="..."></img>
    <div className="card-body">
    <h5 className="card-title">Açıklama: {props.car.description}</h5>
    <p className="card-text">Renk: {props.car.colorName}</p>
    <p className="card-text">Model Adı: {props.car.brandName}</p>
    <p className="card-text">Model Yılı: {props.car.modelYear}</p>
    <p className="card-text">Kira Ücreti: {props.car.dailyPrice}₺</p>
    <p className="card-text">Plaka: {props.car.plate}</p>
    <a href="#" className="btn btn-primary">Detay Gör</a>
  </div>
</div>
  )
}

export default CarCard