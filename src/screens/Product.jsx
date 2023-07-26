import React from "react";

function Product(props) {
    return (
        <div className="col-md-3 mt-2 mb-2">
            <div className="card">
                <div className="card-header">
                    <h5 className="text-center text-primary"> {props.title}</h5>
                </div>

                <div className="card-body">
                    <p className="text-justify">
                        {props.body}
                    </p>
                </div>

                <div className="card-footer">
                    <p className="float-end text-warning"> productid= {props.id}</p>
                </div>

            </div>
        </div>

    )
}

export default Product