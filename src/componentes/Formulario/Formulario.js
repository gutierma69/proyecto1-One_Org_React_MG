import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"


const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) => { 
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresa el nombre" 
                required={true} 
                valor={nombre} 
                actualizarValor={actualizarNombre} 
            />                                             {/* Ambas maneras de escribir el "required son adecuadas" */}
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresa el puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            /> 
            
            <Campo 
                titulo="Foto" 
                placeholder="Ingresa la foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresa titulo" 
                required={true} 
                valor={titulo} 
                actualizarValor={actualizarTitulo} 
            />                                             {/* Ambas maneras de escribir el "required son adecuadas" */}
            <Campo 
                titulo="Color" 
                placeholder="Ingresa el color en Hex" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
                Registrar equipo
            </Boton>

        </form> 
    </section>
}

export default Formulario