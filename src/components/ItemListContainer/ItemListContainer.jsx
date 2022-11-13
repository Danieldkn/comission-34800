import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'


const ItemListContainer = (obj) => {  
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
    
    // useEffect(() => {
    // const url= 'https://pokeapi.co/api/v2/ability/?limit=10&offset=20'
    // fetch(url)
    // .then(resp => resp.json()) 
    // .then(data => console.log(data.results))  
    // }, [])
    useEffect(()=> {
        if (categoriaId) {
            gFetch()
            .then(resp =>  setProducts(resp.filter(prod => prod.categoria === categoriaId)))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false)) 
            
        }else{
            gFetch()
            .then(resp =>  setProducts(resp))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false)) 
        }
        
        
    }, [categoriaId])
    
    // .then(respuesta => console.log(respuesta))

    const cambiarEstado = () => {
        setBool(!bool)
    }
    console.log(categoriaId)

    // [1,2,3] => [<li>1</li>, <li>2</li>,<li>3</li>]

    return (
        loading 
            ? 
                <h2>CArgando...</h2>            
            :
                <div>
                    <h1>ItemListContainer</h1>  
                    {/* <button onClick={cambiarEstado}>cambiar estado</button>    */}
                    
                    <ItemList products={products}/>

                </div>
    )
}
// los eventos me disparan una nueva ejecución del componente donde se esta ejecutando 

export default ItemListContainer