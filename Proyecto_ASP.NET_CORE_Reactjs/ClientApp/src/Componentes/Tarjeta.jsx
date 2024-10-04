
const Tarjeta = ({titulo, parrafo, textoboton, children }) => {
    return (
        <div className="card text-center bg-dark mt-5">
            <div className="card-body">
                <h1 className="card-title text-info">{titulo}</h1>
                <p className="card-text text-light">{parrafo}</p>
                <a href="#" className="btn btn-danger">{textoboton}</a>
                {children}
            </div>
        </div>

        )
}

export default Tarjeta;