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
        tabActiva: 'Funcionarios', // Pestaña inicial
        tipos: TIPOS_PERSONAL,
        areas: CONFIG_AREAS,

        init() {
            const id = new URLSearchParams(window.location.search).get('id');
            this.tramite = DATOS_TRAMITES.find(t => t.id == id);
            
            // Si el trámite no tiene variaciones, podemos manejarlo diferente
            if (this.tramite && !this.tramite.tieneVariaciones) {
                this.tabActiva = 'General';
            }
        },

        get requisitosAMostrar() {
            if (!this.tramite.tieneVariaciones) return this.tramite.requisitos;
            return this.tramite.requisitos[this.tabActiva] || [];
        }        
    }
}