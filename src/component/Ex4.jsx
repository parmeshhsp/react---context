import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Product from "../screens/Product";

function Ex4(props) {

    const context = useContext(DataContext)
    const [products] = context.productApi.products
    return (
        <div className="DataContext">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className=" display-3 text-success" >
                        Product
                    </h3>
                </div>
            </div>
            <div className="row">
                {
                    products && products.map((item, index) => {
                        return (
                            < Product key={index} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ex4