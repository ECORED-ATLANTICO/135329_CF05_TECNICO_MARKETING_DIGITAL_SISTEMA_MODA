<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-sm-8.col-lg-4
        figure
          img(src="@/assets/curso/1.png", alt="")
      .col-lg-8
        p El componente formativo Interacción con clientes para el proceso de venta ofrece al aprendiz una comprensión sobre el proceso de ventas y la interacción con clientes en contextos empresariales y digitales. A través del estudio del concepto de venta, los tipos de venta y el proceso comercial, se analizan etapas como prospección, preparación, argumentación, cierre y posventa. Asimismo, se presentan los canales de venta y el #[em social selling], destacando la importancia de las estrategias de comunicación y relación con clientes en el entorno digital.
        .p-4.bg-azul-claro.rounded-4
          p.mb-0 El componente también desarrolla temas relacionados con la comunicación asertiva con clientes y la redacción para medios digitales, así como las bases para la planificación de medios digitales orientados al posicionamiento de marca. Además, aborda la implementación de sistemas CRM y su relación con personas, procesos y tecnología. Finalmente, se estudian estrategias de fidelización de clientes mediante el uso de bases de datos, trazabilidad del servicio y mantenimiento de relaciones comerciales en redes sociales.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La imagen presenta un esquema sobre la interacción con clientes en el proceso de venta, organizado en cuatro ejes principales: primero, los fundamentos de la venta, que incluyen el proceso, los canales y el social selling; segundo, la comunicación asertiva con clientes, enfocada en la redacción y planificación de medios digitales; tercero, la introducción al CRM como herramienta de gestión; y cuarto, la fidelización y mantenimiento del servicio al cliente en redes sociales, mediante la implementación, generación de bases de datos y trazabilidad del servicio.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
