import { Link } from "react-router-dom"



const ItemList = (products) =>{
    return(
        products.map( product => <item key={product.product} /> )
    )
}