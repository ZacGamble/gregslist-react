import React from 'react'

function Car(props) {

  return (
    <>
      <div className='p-2 bg-white col-12 col-md-6 col-lg-4'>
        <div className='bg-warning rounded p-3 shadow'>
          <div className='p-2 fw-bold fs-5'>
            Make/Model: {props.thisCar.make} {props.thisCar.model} <br />
            Price: ${props.thisCar.price} <br />
            Year: {props.thisCar.year} <br />
            Description: {props.thisCar.description} <br />
          </div>
          <div>
            <img src={props.thisCar.imgUrl ? props.thisCar.imgUrl : 'https://thiscatdoesnotexist.com'} alt="automobile" className='img-fluid img-fit' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Car