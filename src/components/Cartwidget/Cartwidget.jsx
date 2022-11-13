import imagen from '../../assets/react.svg'


const Cartwidget = () => {
  return (
    <div className='w-25'>
        <img src={imagen} alt="carrito" />
        {/* <img className='w-50' src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="carrito" /> */}
    </div>
  )
}

export default Cartwidget