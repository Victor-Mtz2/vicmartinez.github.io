// Estructura de datos completa por región
const gruposAcceso = {
    xalapa: [
        { grupo: 'UV Central', dependencia: 'Dirección General de Recursos Humanos' },
        { grupo: 'UV Central', dependencia: 'Oficina del Abogado General' },
        { grupo: 'UV Central', dependencia: 'Dirección de Servicios Informáticos Administrativos' },
        { grupo: 'Contraloría General', dependencia: 'Contraloría General' },
        { grupo: 'Editorial', dependencia: 'Dirección de Editorial' },
        { grupo: 'Editorial', dependencia: 'Departamento de Archivo' }
    ],
    veracruz: [
        { grupo: 'Vicerrectoría Veracruz', dependencia: 'Vicerrectoría Regional' },
        { grupo: 'Vicerrectoría Veracruz', dependencia: 'Secretaría Académica Regional' },
        { grupo: 'Facultades Veracruz', dependencia: 'Facultad de Medicina' },
        { grupo: 'Facultades Veracruz', dependencia: 'Facultad de Ingeniería' }
    ],
    orizaba: [
        { grupo: 'Vicerrectoría Orizaba', dependencia: 'Vicerrectoría Regional' },
        { grupo: 'Facultades Orizaba', dependencia: 'Facultad de Ciencias Químicas' },
        { grupo: 'Facultades Orizaba', dependencia: 'Facultad de Contaduría y Administración' }
    ],
    pozarica: [
        { grupo: 'Vicerrectoría Poza Rica', dependencia: 'Vicerrectoría Regional' },
        { grupo: 'Facultades Poza Rica', dependencia: 'Facultad de Ingeniería' }
    ],
    coatzacoalcos: [
        { grupo: 'Vicerrectoría Coatzacoalcos', dependencia: 'Vicerrectoría Regional' },
        { grupo: 'Facultades Coatzacoalcos', dependencia: 'Facultad de Contaduría y Negocios' }
    ]
};

// Función para procesar y agrupar las dependencias por nombre de grupo
function agruparPorGrupo(lista) {
    const agrupado = {};
    lista.forEach(item => {
        if (!agrupado[item.grupo]) {
            agrupado[item.grupo] = [];
        }
        agrupado[item.grupo].push(item.dependencia);
    });
    return agrupado;
}

// Renderizar los acordeones dinámicamente
function renderizarAcordeones() {
    const mapeoRegiones = {
        xalapa: 'accordionXalapa',
        veracruz: 'accordionVeracruz',
        orizaba: 'accordionOrizaba',
        pozarica: 'accordionPozarica',
        coatzacoalcos: 'accordionCoatzacoalcos'
    };

    for (const [region, contenedorId] of Object.entries(mapeoRegiones)) {
        const contenedor = document.getElementById(contenedorId);
        const datos = gruposAcceso[region] || [];
        const gruposAgrupados = agruparPorGrupo(datos);

        let html = '';
        let index = 0;

        for (const [grupo, dependencias] of Object.entries(gruposAgrupados)) {
            const collapseId = `collapse_${region}_${index}`;
            const headingId = `heading_${region}_${index}`;

            html += `
                <div class="accordion-item mb-2 shadow-sm border-0 rounded overflow-hidden" data-grupo="${grupo.toLowerCase()}" data-dependencias="${dependencias.join(' ').toLowerCase()}">
                    <h2 class="accordion-header" id="${headingId}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                            <span class="flex-grow-1">${grupo}</span>
                            <span class="badge-count ms-2">${dependencias.length}</span>
                        </button>
                    </h2>
                    <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="${headingId}" data-bs-parent="#${contenedorId}">
                        <div class="accordion-body bg-white">
                            <h6 class="text-muted text-uppercase fs-7 mb-3"><i class="fas fa-sitemap me-2"></i>Dependencias asociadas:</h6>
                            <ul class="dependency-list list-unstyled mb-0">
                                ${dependencias.map(dep => `<li><i class="fas fa-angle-right text-success me-2"></i>${dep}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            index++;
        }
        contenedor.innerHTML = html || '<p class="text-center text-muted py-4">No hay registros disponibles para esta región.</p>';
    }
}

// Filtrado en tiempo real con el buscador
document.getElementById('buscadorGeneral').addEventListener('input', function(e) {
    const termino = e.target.value.toLowerCase().trim();
    const itemsAcordeon = document.querySelectorAll('.accordion-item');

    itemsAcordeon.forEach(item => {
        const grupo = item.getAttribute('data-grupo');
        const dependencias = item.getAttribute('data-dependencias');

        if (grupo.includes(termino) || dependencias.includes(termino)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

// Inicializar la vista al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderizarAcordeones();
});