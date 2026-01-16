const datos = [
  { titulo: "1a enero", fechaTexto: "17 de enero", fechaNomina:"1a febrero", fecha: "2026-01-13" },
  { titulo: "2a enero", fechaTexto: "05 de febrero", fechaNomina:"2a febrero", fecha: "2026-02-05" },
  { titulo: "1a febrero", fechaTexto: "30 de enero", fechaNomina:"1a marzo", fecha: "2026-01-30" },
  { titulo: "2a febrero", fechaTexto: "30 de enero", fechaNomina:"2a marzo", fecha: "2026-01-30" },
  { titulo: "1a marzo", fechaTexto: "30 de enero", fechaNomina:"1a abril", fecha: "2026-01-30" },
  { titulo: "2a marzo", fechaTexto: "30 de enero", fechaNomina:"2a abril", fecha: "2026-01-30" },
  { titulo: "1a abril", fechaTexto: "30 de enero", fechaNomina:"1a mayo", fecha: "2026-01-30" },
  { titulo: "2a abril", fechaTexto: "30 de enero", fechaNomina:"2a mayo", fecha: "2026-01-30" },
  { titulo: "1a mayo", fechaTexto: "30 de enero", fechaNomina:"1a junio", fecha: "2026-01-30" },
  { titulo: "2a mayo", fechaTexto: "30 de enero", fechaNomina:"2a junio", fecha: "2026-01-30" },
  { titulo: "1a junio", fechaTexto: "30 de enero", fechaNomina:"1a julio", fecha: "2026-01-30" },
  { titulo: "2a junio", fechaTexto: "30 de enero", fechaNomina:"2a julio", fecha: "2026-01-30" },
  { titulo: "1a julio", fechaTexto: "30 de enero", fechaNomina:"1a agosto", fecha: "2026-01-30" },
  { titulo: "2a julio", fechaTexto: "30 de enero", fechaNomina:"2a agosto", fecha: "2026-01-30" },
  { titulo: "1a agosto", fechaTexto: "30 de enero", fechaNomina:"1a septiembre", fecha: "2026-01-30" },
  { titulo: "2a agosto", fechaTexto: "30 de enero", fechaNomina:"2a septiembre", fecha: "2026-01-30" },
  { titulo: "1a septiembre", fechaTexto: "30 de enero", fechaNomina:"1a octubre", fecha: "2026-01-30" },
  { titulo: "2a septiembre", fechaTexto: "30 de enero", fechaNomina:"2a octubre", fecha: "2026-01-30" },
  { titulo: "1a octubre", fechaTexto: "30 de enero", fechaNomina:"1a noviembre", fecha: "2026-01-30" },
  { titulo: "2a octubre", fechaTexto: "30 de enero", fechaNomina:"2a noviembre", fecha: "2026-01-30" },
  { titulo: "1a noviembre", fechaTexto: "30 de enero", fechaNomina:"1a diciembre", fecha: "2026-01-30" },
  { titulo: "2a noviembre", fechaTexto: "30 de enero", fechaNomina:"2a diciembre", fecha: "2026-01-30" },
  { titulo: "1a diciembre", fechaTexto: "30 de enero", fechaNomina:"1a enero/2027", fecha: "2026-01-30" },
  { titulo: "2a diciembre", fechaTexto: "30 de enero", fechaNomina:"2a enero/2027", fecha: "2026-01-30" } 
];

function fechasApp() {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  return {
      datos,
      hoy,
      esVencida(fecha) {
      return new Date(fecha) < this.hoy;
      }
  }
}

function abrirPdf(){
    window.open("../Public/Calendario.pdf")
}