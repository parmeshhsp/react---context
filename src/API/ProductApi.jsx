import React, { useCallback, useEffect, useState } from "react";

const URL = `https://jsonplaceholder.typicode.com`

function useProductApi(props) {
    const [user, setProduct] = useState([])


    const getProducts = useCallback(() => {
        const readProduct = async () => {
            await fetch(`${URL}/products`)
                .then(out => out.json())
                .then(res => {
                    setProduct(res)
                }).catch(err => console.log(err.message))
        }
        readProduct()
    }, [])

    useEffect(() => {
        getProducts()
    }, [])


    return {
        users: [user, setProduct]
    }
}

export default useProductApi