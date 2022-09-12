import React from 'react'

function NewHouseForm(props) {
    return (
        <form onSubmit={props.handleNewHouse}>
            <div className="mb-3 d-flex justify-content-between">
                <div>
                    <label htmlFor="make" className="form-label">Make</label>
                    <input type="text" className="form-control" name="make" id="make" aria-describedby="make"
                        placeholder="Make..." required value="house" />
                </div>
                <div>
                    <label htmlFor="model" className="form-label">Model</label>
                    <input type="text" className="form-control" name="model" id="model" aria-describedby="model"
                        placeholder="Model..." required value="${car.model}" />
                </div>
            </div>
            <div className="mb-3 d-flex justify-content-between">
                <div className="mx-1">
                    <label htmlFor="year" className="form-label">Year</label>
                    <input type="number" className="form-control" name="year" id="year" aria-describedby="year"
                        placeholder="Year..." min="1950" max="2022" required value="${car.year}" />
                </div>
                <div className="mx-1">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" name="price" id="price" aria-describedby="price"
                        placeholder="Price..." min='1' required value="${car.price}" />
                </div>
            </div>
            <div className="mb-3 d-flex justify-content-between">
                <div className="">
                    <label htmlFor="imgUrl" className="form-label">Image Url</label>
                    <input type="url" className="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
                        placeholder="Image Url..." required value="${car.imgUrl}" />
                </div>
                <div className="mx-1 flex-grow-1">
                    <label htmlFor="color" className="form-label">Color</label>
                    <input type="color" className="form-control h-100" name="color" id="color" aria-describedby="color" required value="${car.color}" />
                </div>
            </div>
            <div className="mb-3">
                <div>
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" name="description" id="description"
                        aria-describedby="description" placeholder="No description given." required></textarea>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">
                    Submit
                    {/* ${car.id ? "Edit" : "Create"} */}
                </button>
            </div>
        </form>
    )
}
export default NewHouseForm