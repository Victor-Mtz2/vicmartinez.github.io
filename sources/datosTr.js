// sources/datos.js
const DATOS_TRAMITES = [
    { 
        id: 1, 
        rubro: 'permanencia', 
        nombre: 'Adhesión o mantenimiento al Sistema de Pago de Nómina por Depósito Bancario', 
        area: 'Dirección de Nóminas', 
        resumen: 'Alta o modificación de número de tarjeta bancaria para el pago de la nómina.',
        tieneVariaciones: false,
        descripcion: 'Trámite que debe realizarse por el trabajador de la Universidad Veracruzana o beneficiarios de pensión alimenticia para ser incorporados al sistema de pago de nómina por depósito bancario o notificar el cambio de número de tarjeta por sustitución, debido a fin de vigencia, reposición por robo o extravío.',
        requisitos: ['Formato de adhesión debidamente requisitado.', 'Identificación oficial.', 'Estado de cuenta o documento expedido por el banco en donde sea visible la CLABE.'],
        recepcion: 'Ventanilla única de oficialía de partes de la DGRH',
        formato: 'https://www.uv.mx/dgrh/files/2023/02/Formato-adhesion-a-la-nomina-arh-p-f-70-A.pdf',
        horario: 'Lunes a Viernes de 9:00 a 20:50 hrs.'
    },
    { 
        id: 2, 
        rubro: 'permanencia', 
        nombre: 'Licencia sin goce de sueldo Académica', 
        area: 'Dirección de Personal', 
        resumen: 'Licencias sin goce de sueldo en experiencia educativa, tiempo completo y medio tiempo',
        tieneVariaciones: false,
        descripcion: 'Licencias sin goce de sueldo en experiencia educativa, tiempo completo y medio tiempo.',
        requisitos: ['Oficio en formato libre, el cual debera contener: nombre, no. de personal, puesto, categoria, dependencia de adscripcion o dependencia donde se encuentre laborando, el no. de plaza, nombre de la EE, sección y horas, periodo de la licencia sin goce de sueldo y sello de conocimiento del titular de la entidad académica'],
        consideraciones:['Se otorgará en razón de su antigüedad de acuerdo a lo estipulado en el Contrato Colectivo de Trabajo.', 
                         'Podrán solicitarse únicamente antes del inicio del semestre correspondiente; y en casos plenamente justificados, durante el transcurso del mismo.',
                         'Podrán otorgarse licencias sin goce de sueldo hasta por un mes calendario durante un semestre lectivo en casos plenamente justificados siempre y cuando el trabajador académico interesado tenga un año de antigüedad, en caso del que el periodo de licencia incluya el examen de termino de semestre, para conceder a el trabajador académico se obliga a entregar a la dirección de la entidad de su adscripción , el exámenes que deban aplicarse a los alumnos a su cargo, así como la clave de respuestas o en su caso, obligarse a calificarse.',
                         'Para desempeñar un empleo, cargo o comisión en el servicio público. En el oficio de petición deberá indicar el periodo de licencia, adjuntando la documentación que avala el servicio público que prestará. En cada inicio de periodo escolar, el interesado deberá presentar una constancia que acredite que continua en el servicio público.'],
        recepcion: 'Ventanilla única de oficialía de partes de la DGRH',
        horario: 'Lunes a Viernes de 9:00 a 20:50 hrs.'
    },
    { 
        id: 3, 
        rubro: 'retiro', 
        nombre: 'Baja Administrativa', 
        area: 'Dirección de Relaciones Laborales', 
        resumen: 'resumen',
        tieneVariaciones: false,
        descripcion: 'Cierre de ciclo laboral por renuncia voluntaria o jubilación. Incluye la entrega de activos institucionales.',
        requisitos: ['Carta de renuncia', 'Hoja de no adeudo', 'Identificación oficial'],
        recepcion: 'Departamento Jurídico',
        formato: 'baja_general.pdf',
        horario: 'Viernes de 9:00 AM a 12:00 PM'
    }
];

const CONFIG_AREAS = {
    'Dirección de Personal': { color: 'is-link', icon: 'fa-user-tie', border: 'border-personal' },
    'Dirección de Nóminas': { color: 'is-success', icon: 'fa-money-check-alt', border: 'border-nominas' },
    'Dirección de Relaciones Laborales': { color: 'is-warning', icon: 'fa-handshake', border: 'border-relaciones' },
    'Evaluación y desarrollo': { color: 'is-danger', icon: 'fa-chart-line', border: 'border-evaluacion' },
    'Asuntos tecnicos': { color: 'is-info', icon: 'fa-tools', border: 'border-tecnicos' }
};

const TIPOS_PERSONAL = ['Funcionarios', 'ATM', 'Confianza', 'Académico', 'Eventual'];