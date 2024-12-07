import './RoundCard.css'

export default function RoundCard({ nombre, direccion, grupo_id }) {
    return (
        < div className="Prueba__card" >
            <div className="Prueba__card__internalContainer">
                <div className="Prueba__card-header">
                    <div className="Prueba__title-container">
                        <div className="Prueba__title">{nombre}</div>
                        <div className="Prueba__subtitle">{direccion}</div>
                    </div>
                    <div className="Prueba__title-container">
                        <div className="Prueba__subtitle">{"06-DIC-2024"}</div>
                    </div>
                </div>
                <div style={{display:'grid',padding:'0 0 0 1rem'}}>
                    <div>
                        <p>
                            {direccion}
                        </p>
                    </div>
                    <div className="Prueba__tags">
                        <span>Atendido por</span>
                        <span>{grupo_id}</span>
                    </div>
                </div>
            </div>
        </div >
    )
}