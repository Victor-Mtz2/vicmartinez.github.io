// sources/jsTramites.js

// Lógica para la LISTA de trámites
function portalTramites() {
    return {
        search: '',
        cargando: true,
        categoriaActiva: new URLSearchParams(window.location.search).get('cat') || 'ingreso',
        
        areas: CONFIG_AREAS, // Lee del archivo datos.js
        tramites: DATOS_TRAMITES, // Lee del archivo datos.js

        init() {
            setTimeout(() => { this.cargando = false; }, 500);
        },

        get filteredTramites() {
            return this.tramites.filter(t => {
                const mismoRubro = t.rubro === this.categoriaActiva;
                const coincideBusqueda = t.nombre.toLowerCase().includes(this.search.toLowerCase()) || 
                                       t.area.toLowerCase().includes(this.search.toLowerCase());
                return mismoRubro && coincideBusqueda;
            });
        },

        get tituloSeccion() {
            const titulos = { 'ingreso': 'Ingreso', 'permanencia': 'Permanencia', 'retiro': 'Retiro' };
            return titulos[this.categoriaActiva] || 'Trámites';
        }
    }
}

// Lógica para el DETALLE del trámite
function detalleTramite() {
    return {
        tramite: {},
        areas: CONFIG_AREAS,

        init() {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            
            // Buscamos en la constante global de datos.js
            this.tramite = DATOS_TRAMITES.find(t => t.id == id);
            
            if (!this.tramite) {
                window.location.href = 'index.html';
            }
        }
    }
}