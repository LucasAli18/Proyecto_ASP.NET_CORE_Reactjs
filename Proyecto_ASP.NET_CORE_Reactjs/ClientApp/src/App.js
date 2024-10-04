//Primero importaremos bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";


const App = () => {

    const [personas, setPersona] = useState([]);

    const ConsumirAPI = async () => {
        const response = await fetch("api/persona/ObtenerPersona"); //ejecutar nuestra api
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setPersona(data)
        }
    }
    useEffect(() => {
        ConsumirAPI();
    },[])
    return (
        <div className="container">
            <h5>Lista de Personas</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        personas.map((item) => (
                            <tr key={item.id }>
                                <td>{item.nombre }</td>
                                <td>{item.correo}</td>
                                <td>{item.direccion}</td>
                                <td>{item.telefono}</td>
                            </tr>
                            
                            ))
                    }

                </tbody>
            </table>
        </div>

        )
    
}

export default App;