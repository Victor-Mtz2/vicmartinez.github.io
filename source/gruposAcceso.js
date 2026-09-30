const gruposAcceso = {
    xalapa: [
        { grupo: "UV Central", dependencia: "Dirección General de Recursos Humanos" },
        { grupo: "UV Central", dependencia: "Oficina del Abogado General" },
        { grupo: "UV Central", dependencia: "Dirección de Servicios Informáticos Administrativos" },
        { grupo: "Contraloría General", dependencia: "Contraloría General" },
        { grupo: "Editorial", dependencia: "Dirección de Editorial" },
        { grupo: "Editorial", dependencia: "Departamento de Archivo" },
        { grupo: "Rectoria", dependencia: "Secretaría Académica" },
        { grupo: "Rectoria", dependencia: "Secretaría de Administración y Finanzas" },
        { grupo: "Facultades Xalapa", dependencia: "Facultad de Estadística e Informática" },
        { grupo: "Facultades Xalapa", dependencia: "Facultad de Contaduría y Administración" },
        { grupo: "Facultades Xalapa", dependencia: "Facultad de Derecho" }
    ],
    veracruz: [
        { grupo: "Vicerrectoría Veracruz", dependencia: "Vicerrectoría Región Veracruz" },
        { grupo: "Vicerrectoría Veracruz", dependencia: "Secretaría Académica Regional" },
        { grupo: "Facultades Ingeniería", dependencia: "Facultad de Ingeniería Civil" },
        { grupo: "Facultades Ingeniería", dependencia: "Facultad de Ingeniería Mecánica y Eléctrica" },
        { grupo: "Ciencias de la Salud", dependencia: "Facultad de Medicina" },
        { grupo: "Ciencias de la Salud", dependencia: "Facultad de Odontología" },
        { grupo: "Área Económico-Administrativa", dependencia: "Facultad de Contaduría Veracruz" }
    ],
    orizaba_cordoba: [
        { grupo: "Vicerrectoría Orizaba", dependencia: "Vicerrectoría Región Orizaba-Córdoba" },
        { grupo: "Facultades Orizaba", dependencia: "Facultad de Ciencias Químicas" },
        { grupo: "Facultades Orizaba", dependencia: "Facultad de Medicina Ixtaczoquitlán" },
        { grupo: "Facultades Córdoba", dependencia: "Facultad de Arquitectura Córdoba" },
        { grupo: "Facultades Córdoba", dependencia: "Facultad de Negocios y Tecnologías" }
    ],
    poza_rica_tuxpan: [
        { grupo: "Vicerrectoría Poza Rica", dependencia: "Vicerrectoría Región Poza Rica-Tuxpan" },
        { grupo: "Facultades Poza Rica", dependencia: "Facultad de Ingeniería Poza Rica" },
        { grupo: "Facultades Poza Rica", dependencia: "Facultad de Enfermería Poza Rica" },
        { grupo: "Facultades Tuxpan", dependencia: "Facultad de Ciencias Biológicas y Agropecuarias Tuxpan" }
    ],
    coatzacoalcos_minatitlan: [
        { grupo: "Vicerrectoría Coatzacoalcos", dependencia: "Vicerrectoría Región Coatzacoalcos-Minatitlán" },
        { grupo: "Facultades Coatzacoalcos", dependencia: "Facultad de Ingeniería Coatzacoalcos" },
        { grupo: "Facultades Coatzacoalcos", dependencia: "Facultad de Contaduría y Administración Coatzacoalcos" },
        { grupo: "Facultades Minatitlán", dependencia: "Facultad de Enfermería Minatitlán" }
    ]
};

const regionNames = {
    xalapa: "Xalapa",
    veracruz: "Veracruz",
    orizaba_cordoba: "Orizaba - Córdoba",
    poza_rica_tuxpan: "Poza Rica - Tuxpan",
    coatzacoalcos_minatitlan: "Coatzacoalcos - Minatitlán"
};

function initApp() {
    const tabsContainer = document.getElementById('regionTabs');
    const contentContainer = document.getElementById('regionTabContent');
    
    let tabsHTML = '';
    let contentHTML = '';
    let totalCount = 0;

    const regionKeys = Object.keys(gruposAcceso);

    regionKeys.forEach((key, index) => {
        const items = gruposAcceso[key];
        totalCount += items.length;
        const isActive = index === 0 ? 'active fw-bold text-success' : 'text-dark';
        const isShow = index === 0 ? 'show active' : '';

        // Construir pestaña usando Bootstrap nativo
        tabsHTML += `
            <li class="nav-item" role="presentation">
                <button class="nav-link ${isActive} px-3 py-2 border-0 rounded-top" id="${key}-tab" data-bs-toggle="tab" data-bs-target="#${key}-pane" type="button" role="tab" aria-controls="${key}-pane" aria-selected="${index === 0}">
                    <i class="bi bi-geo-alt-fill text-warning me-1"></i> ${regionNames[key]}
                    <span class="badge bg-secondary rounded-pill ms-1">${items.length}</span>
                </button>
            </li>
        `;

        // Construir contenido de la pestaña usando Bootstrap nativo grid y cards
        let itemsCardsHTML = '';
        items.forEach(item => {
            itemsCardsHTML += `
                <div class="col-md-6 mb-3 item-card" data-grupo="${item.grupo.toLowerCase()}" data-dependencia="${item.dependencia.toLowerCase()}">
                    <div class="card h-100 shadow-sm border-0 border-start border-success border-4 rounded-3 bg-light bg-opacity-50">
                        <div class="card-body p-3">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <span class="badge bg-success text-white px-2 py-1">${item.grupo}</span>
                                <small class="text-muted"><i class="bi bi-shield-check text-success"></i> Autorizado</small>
                            </div>
                            <h6 class="card-title fw-bold text-dark mb-1">${item.dependencia}</h6>
                            <p class="card-text small text-muted mb-0"><i class="bi bi-pin-map text-danger me-1"></i> Región: ${regionNames[key]}</p>
                        </div>
                    </div>
                </div>
            `;
        });

        contentHTML += `
            <div class="tab-pane fade ${isShow}" id="${key}-pane" role="tabpanel" aria-labelledby="${key}-tab" tabindex="0">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="fw-bold text-secondary mb-0">Dependencias en la región ${regionNames[key]}</h5>
                    <span class="badge bg-light text-dark border">${items.length} registros</span>
                </div>
                <div class="row">
                    ${itemsCardsHTML}
                </div>
                <div class="no-results-region text-center py-5 d-none">
                    <i class="bi bi-search display-6 text-muted"></i>
                    <p class="text-muted mt-2">No se encontraron dependencias en esta región con el término buscado.</p>
                </div>
            </div>
        `;
    });

    tabsContainer.innerHTML = tabsHTML;
    contentContainer.innerHTML = contentHTML;
    document.getElementById('total-dependencias-badge').innerText = `${totalCount} dependencias`;

    setupSearch();
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        const allPanes = document.querySelectorAll('.tab-pane');

        allPanes.forEach(pane => {
            const cards = pane.querySelectorAll('.item-card');
            const noResultsMsg = pane.querySelector('.no-results-region');
            let visibleCount = 0;

            cards.forEach(card => {
                const grupo = card.getAttribute('data-grupo');
                const dependencia = card.getAttribute('data-dependencia');

                if (grupo.includes(searchTerm) || dependencia.includes(searchTerm)) {
                    card.style.display = '';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (visibleCount === 0) {
                noResultsMsg.classList.remove('d-none');
            } else {
                noResultsMsg.classList.add('d-none');
            }
        });
    });
}

window.onload = function() {
    initApp();
};