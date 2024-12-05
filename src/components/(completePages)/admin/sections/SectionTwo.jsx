import './Sections.css'

export default function SectionTwo({ sectionTitle }) {
    return (
        <div className="SectionOne__contentContainer">
            <div className="SectionOne__content">
                <div>
                    <h1>{sectionTitle}</h1>
                </div>
                <div></div>
                <div></div>

                <div className="SectionOne__contentItemOne">
                    <div className="SectionOne__UI__blur">
                        <h2>Ver empresas que han confirmado participación</h2>
                        <br />
                        <button type="button" className="Admin__btn">ver reportes</button>
                    </div>
                </div>
                <div className="SectionOne__contentItemTwo">
                    <div className="SectionOne__UI__blur">
                        <h2>Generar contraseñas para estudiantes</h2>
                        <br />
                        <button type="button" className="Admin__btn">iniciar entrevista</button>
                    </div>
                </div>
                <div className="SectionOne__contentItemTwo">
                    <div className="SectionOne__UI__blur">
                        <h2>Crear grupos de estudiantes y asignarlos a una empresa</h2>
                        <br />
                        <button type="button" className="Admin__btn">iniciar entrevista</button>
                    </div>
                </div>
            </div>
        </div>
    )
}