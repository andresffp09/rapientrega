import React from 'react';


class Badge extends React.Component {
    DataDimensiones(){
        return(
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Ancho</span>
                <input type="text" className="form-control" placeholder="cm" aria-label="Username"/>
                <span className="input-group-text" id="basic-addon1">Alto</span>
                <input type="text" className="form-control" placeholder="cm" aria-label="Server"/>
                <span className="input-group-text" id="basic-addon1">Largo</span>
                <input type="text" className="form-control" placeholder="cm" aria-label="Server"/>
            </div>
        )
    }
}

class Badge extends React.Component {
    DataInformacion(){
        return(
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Dirección</span>
                <input type="text" className="form-control" placeholder="Ej: Carrera 111A # ..." aria-label="Username"/>
                <span className="input-group-text" id="basic-addon1">Ciudad</span>
                <input type="text" className="form-control" placeholder="Ej: Bogotá" aria-label="Server"/>
                <span className="input-group-text" id="basic-addon1">Dia</span>
                <input type="text" className="form-control" placeholder="AAAA-MM-DD" aria-label="Server"/>
            </div>
        )
    }
}











