import { useEffect, useState } from "react";

const useProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
          fetch('https://mysterious-shelf-06800.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setProducts(data))
        }, []);
        return [products, setProducts];
}


export default useProduct;