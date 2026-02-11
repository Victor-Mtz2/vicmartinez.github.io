// sources/datos.js
const DATOS_TRAMITES = [
    { 
        id: 1, 
        rubro: 'ingreso', 
        nombre: 'Alta de Expediente', 
        area: 'Dirección de Personal', 
        descripcion: 'Este trámite es indispensable para formalizar la relación laboral. Consiste en la entrega física y digital de documentos de identidad.',
        requisitos: ['Copia de RFC', 'CURP actualizada (3 meses)', 'Título original y copia', 'Acta de nacimiento'],
        recepcion: 'Ventanilla Única, Edificio Central',
        formato: 'formato_ingreso_01.pdf',
        horario: '9:00 AM a 2:00 PM'
    },
    { 
        id: 2, 
        rubro: 'permanencia', 
        nombre: 'Solicitud de Escalafón', 
        area: 'Evaluación y desarrollo', 
        descripcion: 'Proceso para la actualización de nivel salarial basado en antigüedad y méritos académicos.',
        requisitos: ['Constancia de antigüedad', 'Último talón de pago', 'Certificaciones recientes'],
        recepcion: 'Oficinas de Desarrollo Humano',
        formato: 'escalafon_2026.pdf',
        horario: 'Lunes a Jueves, 10:00 AM a 13:00 PM'
    },
    { 
        id: 3, 
        rubro: 'retiro', 
        nombre: 'Baja Administrativa', 
        area: 'Dirección de Relaciones Laborales', 
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