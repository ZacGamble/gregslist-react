
import React, { useEffect, useState } from 'react'
import { housesService } from '../../services/housesService';
import House from '../House';
import Modal from '../Modal';
import NewHouseForm from '../NewHouseForm';

const bootstrap = require('bootstrap')


function Houses() {
    const [houses, setHouses] = useState(null)
    useEffect(() => {
        (async () => {
            const houses = await housesService.getHouses();
            setHouses(houses)
        })()
    },
        []);
    function toggleModal() {
        // @ts-ignore
        bootstrap.Modal.getOrCreateInstance(document.getElementById("houseForm")).toggle()
    }

    function doCreateHouse() {

    }

    return (
        <>
            <div className='d-flex justify-content-center bg-danger fs-2 fw-bold text-white p-2'>Houses</div>
            <div className="container">
                <div className="row">
                    {// @ts-ignore
                        houses && houses.map(c => <House key={c.id} thisHouse={c} />)}
                    <div>
                        <button className="btn btn-info fab" onClick={toggleModal}>+</button>
                    </div>
                </div>
            </div>
            <Modal id="houseForm" modalBody={<NewHouseForm handleNewCar={doCreateHouse} />} modalTitle="Submit new house listing" />
        </>
    )
}

export default Houses