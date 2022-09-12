import React, { useEffect, useState } from 'react'
import Car from '../Car'
import { carsService } from '../../services/carsService'
import NewCarForm from '../NewCarForm';
import Modal from '../Modal';

const bootstrap = require('bootstrap');


function Cars() {
    const [cars, setCars] = useState(null)
    useEffect(() => {
        (async () => {
            const cars = await carsService.getCars();
            setCars(cars)
        })()
    },
        []);

    function toggleModal() {
        // @ts-ignore
        bootstrap.Modal.getOrCreateInstance(document.getElementById("carForm")).toggle()
    }

    function doCreateCar() {

    }

    return (
        <>
            <div className='d-flex justify-content-center bg-danger fs-2 fw-bold text-white p-2'>Cars</div>
            <div className="container">
                <div className="row">
                    {// @ts-ignore
                        cars && cars.map(c => <Car key={c.id} thisCar={c} />)}
                    <div>
                        <button className="btn btn-info fab" onClick={toggleModal}>+</button>
                    </div>
                </div>
            </div>
            <Modal id="carForm" modalBody={<NewCarForm handleNewCar={doCreateCar} />} modalTitle="Submit new car listing" />
        </>
    )
}

export default Cars