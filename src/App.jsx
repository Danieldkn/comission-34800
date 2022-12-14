import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Menu from './components/Menu/Menu'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart/Cart'

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   console.log('App')

    // estan las llamadas a las api

    const saludo = 'saludando' // estado

    const saludar = () => {
        console.log('hola soy app')
    } 

    return (
        // Me da el contexto para poder usar todas las funciones de la librería
        <BrowserRouter> 
            <Menu  />    
            <Routes>
                <Route path='/' element={<ItemListContainer greeting={saludo} saludar={ saludar } />} />
                <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={saludo} saludar={ saludar } />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart'  element={<Cart />}/>
                {/* <Route path='/404Notfound' element={<NotFound404 />} />   */}

                <Route path='*' element={<Navigate to='/' />} />             
            </Routes>
        </BrowserRouter>
    )
}
export default App




