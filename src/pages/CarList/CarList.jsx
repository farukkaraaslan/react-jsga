import React, { useEffect, useState } from 'react'
import CarCard from '../../components/CarCard/CarCard';
import CarService from '../../components/services/CarService';
import { useNavigate } from 'react-router-dom';

function CarList() {


  const navigate =useNavigate();
    useEffect(()=>{
        fetcCarsFromAPI();
    },[])

    const [cars, setCars] = useState([])
    const fetcCarsFromAPI = async()=>{
        let carService = new CarService();
        let data = await  carService.getAll();
        setCars(data);
    }

    const goTorental= ()=>{
      console.log("rentale girdiliyor");
      navigate('/rental')
    }


  return (
      <div className="container"> 
        <button onClick={goTorental} className='btn btn-primary'> Rentale git</button>
        <div className="row gx-4 ">
          {cars.map((car, index) => {
            return (
              <div key={index} className="col-4 mt-3">
                <CarCard  car={car}></CarCard>
              </div>
            );
          })}
        </div>
      </div>
  )
}

export default CarList