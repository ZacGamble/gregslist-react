import React from 'react'

function House(props) {

    return (
        <>
            <div className='p-3 bg-white col-12 col-md-6 col-lg-4'>
                <div className='bg-warning rounded p-3 shadow'>
                    <div className='p-2 fw-bold fs-5'>
                        {props.thisHouse.bedrooms} Bed - {props.thisHouse.bathrooms} Bath  <br />
                        Price: ${props.thisHouse.price} <br />
                        Year: {props.thisHouse.year} <br />
                        Description: {props.thisHouse.description} <br />
                    </div>
                    <div>
                        <img src={props.thisHouse.imgUrl ? props.thisHouse.imgUrl : 'https://thiscatdoesnotexist.com'} alt="automobile" className='img-fit img-fluid' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default House