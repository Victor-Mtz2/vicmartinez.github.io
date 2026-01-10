const datos = [
  { titulo: "1a enero ", fechaTexto: "07 de enero", fechaNomina:"14 de enero", fecha: "2026-01-07" },
  { titulo: "2a enero", fechaTexto: "16 de enero", fechaNomina:"29 de enero", fecha: "2026-01-16" },
  { titulo: "1a febrero", fechaTexto: "30 de enero", fechaNomina:"12 de febrero", fecha: "2026-01-30" },
  { titulo: "2a febrero", fechaTexto: "30 de enero", fechaNomina:"26 de febrero", fecha: "2026-01-30" },
  { titulo: "1a marzo", fechaTexto: "30 de enero", fechaNomina:"12 de marzo", fecha: "2026-01-30" },
  { titulo: "2a marzo", fechaTexto: "30 de enero", fechaNomina:"26 de marzo", fecha: "2026-01-30" },
  { titulo: "1a abril", fechaTexto: "30 de enero", fechaNomina:"14 de abril", fecha: "2026-01-30" },
  { titulo: "2a abril", fechaTexto: "30 de enero", fechaNomina:"29 de abril", fecha: "2026-01-30" },
  { titulo: "1a mayo", fechaTexto: "30 de enero", fechaNomina:"13 de mayo", fecha: "2026-01-30" },
  { titulo: "2a mayo", fechaTexto: "30 de enero", fechaNomina:"28 de mayo", fecha: "2026-01-30" },
  { titulo: "1a junio", fechaTexto: "30 de enero", fechaNomina:"12 de junio", fecha: "2026-01-30" },
  { titulo: "2a junio", fechaTexto: "30 de enero", fechaNomina:"29 de junio", fecha: "2026-01-30" },
  { titulo: "1a julio", fechaTexto: "30 de enero", fechaNomina:"08 de julio", fecha: "2026-01-30" },
  { titulo: "2a julio", fechaTexto: "30 de enero", fechaNomina:"09 de julio", fecha: "2026-01-30" },
  { titulo: "1a agosto", fechaTexto: "30 de enero", fechaNomina:"13 de agosto", fecha: "2026-01-30" },
  { titulo: "2a agosto", fechaTexto: "30 de enero", fechaNomina:"28 de agosto", fecha: "2026-01-30" },
  { titulo: "1a septiembre", fechaTexto: "30 de enero", fechaNomina:"11 de septiembre", fecha: "2026-01-30" },
  { titulo: "2a septiembre", fechaTexto: "30 de enero", fechaNomina:"29 de septiembre", fecha: "2026-01-30" },
  { titulo: "1a octubre", fechaTexto: "30 de enero", fechaNomina:"14 de octubre", fecha: "2026-01-30" },
  { titulo: "2a octubre", fechaTexto: "30 de enero", fechaNomina:"29 de octubre", fecha: "2026-01-30" },
  { titulo: "1a noviembre", fechaTexto: "30 de enero", fechaNomina:"12 de noviembre", fecha: "2026-01-30" },
  { titulo: "2a noviembre", fechaTexto: "30 de enero", fechaNomina:"27 de noviembre", fecha: "2026-01-30" },
  { titulo: "1a diciembre", fechaTexto: "30 de enero", fechaNomina:"09 de diciembre", fecha: "2026-01-30" },
  { titulo: "2a diciembre", fechaTexto: "30 de enero", fechaNomina:"10 de diciembre", fecha: "2026-01-30" } 
];

const hoy = new Date();
hoy.setHours(0, 0, 0, 0);

const tbody = document.querySelector('#tablaFechas tbody');
const cards = document.querySelector('#cardsFechas');

datos.forEach(item => {
  const fechaItem = new Date(item.fecha);
  const vencida = fechaItem < hoy;

  /* -------- TABLA -------- */
  const tr = document.createElement('tr');
  if (vencida) tr.classList.add('table-danger', 'text-muted');

  tr.innerHTML = `
    <td>${item.titulo}</td>
    <td>${item.fechaTexto}</td>
    <td>${item.fechaNomina}</td>
  `;
  tbody.appendChild(tr);

  /* -------- CARD (MÓVIL) -------- */
  const card = document.createElement('div');
  card.className = `card mb-2 fecha-card ${vencida ? 'fecha-vencida' : ''}`;

  card.innerHTML = `
    <div class="card-body py-2">
      <div class="fw-semibold">${item.titulo}</div>
      <div class="small">${item.fechaTexto}</div>
    </div>
  `;
  cards.appendChild(card);
});



function abrirPdf(){
    window.open("pdfs/Calendario.pdf")
}