function directorio() {
    return {
        busqueda: '',

        fotoPersona(persona) {
            return persona.foto ? '../public/' + persona.foto : '../public/default.png'
        },

        coincideBusqueda(persona) {
            if (!this.busqueda) return true
                const texto = (persona.nombre + ' ' + persona.puesto).toLowerCase()
                return texto.includes(this.busqueda.toLowerCase())
            },

        direccionGeneralTieneCoincidencias() {
            return (
                this.direccionGeneral.subdirectores.some(p => this.coincideBusqueda(p)) ||
                this.direccionGeneral.jefaturas.some(p => this.coincideBusqueda(p))
            )
        },

        subTieneCoincidencias(sub) {
        if (this.coincideBusqueda(sub.director)) return true
        return sub.jefaturas.some(jef => this.coincideBusqueda(jef))
        },

    direccionGeneral: {
        DGAbierta: true,
        titular: {
            nombre: "L.C. Rosa Aidé Villalobos Betancourt",
            puesto: "Directora General",
            telefono: "228 141 1053 Conmutador: 228 842 1700 ext. 11703",
            
        },
        subdirectores: [
            {
                nombre: "Mtra. Liliana Ruiz Mendoza",
                puesto: "Directora de Personal",
                telefono: "228 842 1705 Conmutador: 228 842 1700 ext. 11705",
                foto: "liliana.png"
            },
            {
                nombre: "Mtra. Evangelina Murcia Villagómez",
                puesto: "Directora de Nóminas",
                telefono: "228 842 1727 Conmutador: 228 842 1700 ext. 11727",
                foto: "evangelina.png"
            },
            {
                nombre: "Mtra. Sandra Rodríguez José",
                puesto: "Directora de Relaciones Laborales",
                telefono: "228 842 1704 Conmutador: 228 842 1700 ext. 11704",
                foto: "sandra.png"
            }
        ],
        jefaturas: [
            {
                nombre: "Mtra. Laura Patricia Reyes Juárez",
                puesto: "Administradora",
                telefono: "228 842-27-00 Ext. 11195"
                // sin foto
            },
            {
                nombre: "Lic. María Guadalupe Vázquez Castillo",
                puesto: "Jefa del Departamento de Evaluación y Desarrollo de Personal",
                telefono: "228 842-27-00 Ext. 11114"
                // sin foto
            },
            {
                nombre: "Mtro. Victor Alfonso Martínez Martínez",
                puesto: "Jefe del Departamento de Asuntos Técnicos",
                telefono: "228 842-27-00 Ext. 11100"
                // sin foto
            }
        ],
        subdirecciones: [
            {
                nombre: "Dirección de Personal",
                abierto: false,
                director: {
                    nombre: "Mtra. Liliana Ruiz Mendoza",
                    puesto: "Directora",
                    telefono: "228 842 1705 Conmutador: 228 842 1700 ext. 11705",
                    foto: "laura.png"
                },
                jefaturas: [
                    {   
                        Dirdep: "Departamento de Control de Personal Académico",
                        nombre: "L.C. José Ladislao Ruíz Baizabal",
                        puesto: "Jefe de Departamento",
                        telefono: "228 200 2222",
                        foto: "carlos.png"
                    },
                    {
                        Dirdep: "Departamento de Control de Personal Administrativo",
                        nombre: "Mtro. Hugo Armenta Cuevas",
                        puesto: "Jefe de Departamento",
                        telefono: "228 200 3333"
                        // sin foto → usa default
                    },
                    {   
                        Dirdep: "Departamento de Prestaciones Sociales",
                        nombre: "Mtra. Karla Henneyssy Fernández Hernández",
                        puesto: "Encargada de Departamento",
                        telefono: "228 200 2222",
                        foto: "carlos.png"
                    },
                    {   
                        Dirdep: "Departamento de Gestión de Personal",
                        nombre: "Lic. Gabriela Guevara Portugal",
                        puesto: "Jefa de Departamento",
                        telefono: "228 200 2222",
                        foto: "carlos.png"
                    },
                    {   
                        Dirdep: "Departamento de Archivo",
                        nombre: "Mtro. Edsel Ortiz Moreno",
                        puesto: "Jefe de Departamento",
                        telefono: "228 200 2222",
                        foto: "carlos.png"
                    }
                ]
            },
            {
                nombre: "Dirección de Nóminas",
                abierto: false,
                director: {
                    nombre: "Mtra. Evangelina Murcia Villagómez",
                    puesto: "Directora",
                    telefono: "228 842 1727 Conmutador: 228 842 1700 ext. 11727",
                    foto: "laura.png"
                },
                jefaturas: [
                    {
                        Dirdep: "Departamento de Validación y Control",
                        nombre: "Mtra. Tania Guadalupe Gutiérrez Salvador",
                        puesto: "Jefa de Departamento",
                        telefono: "228 200 3333"
                        // sin foto → usa default
                    },
                    {   
                        Dirdep: "Departamento de Registro",
                        nombre: "L.C. Ommar Pérez Rojas",
                        puesto: "Jefe de Departamento",
                        telefono: "228 200 2222",
                        foto: "carlos.png"
                    }
                ]
            },
            {
                nombre: "Dirección de Relaciones Laborales",
                abierto: false,
                director: {
                    nombre: "Mtra. Sandra Rodriguez José",
                    puesto: "Directora",
                    telefono: "228 842 1704 Conmutador: 228 842 1700 ext. 11704",
                    foto: "laura.png"
                },
                jefaturas: [
                    {
                        Dirdep: "Departamento de Asesoría y Procedimientos Laborales",
                        nombre: "Lic. José Julián Perea Contreras",
                        puesto: "Jefe de Departamento",
                        telefono: "228 200 3333"
                        // sin foto → usa default
                    },
                    {   
                        Dirdep: "Departamento de Juicios Laborales",
                        nombre: "Mtra. Rita Robles Hernández",
                        puesto: "Jefe de Departamento",
                        telefono: "228 200 2222",
                        foto: "carlos.png"
                    }
                ]
            }
        ]
    }
  }
}