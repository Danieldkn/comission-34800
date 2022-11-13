import Titulo from "../Titulo/Titulo"

const Form = ({tituloForm}) => {

    //variable de estado
    return  <form>
                <Titulo 
                    titulo={tituloForm}
                    // subtitulo={subtituloApp}
                />
                <input type="text" placeholder='ingrese nombre' />
                <br />
                <input type="text" placeholder='ingrese apellido' />
            </form>
}

export default Form