const cronogramaApp = () => {
    return {
        meses: ['marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto'],
        datos: CRONO,
        busqueda: '', // Para filtrar actividades
        
        // Función para filtrar en tiempo real
        get datosFiltrados() {
            return this.datos.filter(i => 
                i.actividad.toLowerCase().includes(this.busqueda.toLowerCase()) ||
                i.responsable.toLowerCase().includes(this.busqueda.toLowerCase())
            );
        },

        // Color dinámico: si la celda tiene texto (fecha), resaltarla
        claseCelda(valor) {
            return valor && valor.trim() !== "" 
                ? 'has-background-link-light has-text-weight-bold has-text-link' 
                : 'has-text-grey-lighter';
        }
    }
}