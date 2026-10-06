<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Introducción al CRM

    img(data-aos="fade-up")(src="@/assets/curso/tema3/1.png", alt="")

    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--azul
          p.mb-0 El CRM o #[em Customer Relationship Management], que puede traducirse al español como "gestión de las relaciones con los clientes", se ha convertido en una increíble herramienta para las ventas haciendo uso de las nuevas tecnologías. Según el portal web RD Station, un CRM es un proceso de negocio optimizado para mejorar el desempeño de quien la usa; es decir, el CRM combina tanto procesos tecnológicos como talento humano e información en su estrategia para lograr una mayor organización en el logro de ventas y conexión con los clientes.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema3/2.png", alt="")
      .col-lg-9
        .p-4.bg-azul-claro.rounded-4.mb-3
          p.mb-0 El CRM está muy enfocado al #[em marketing] relacional y se basa en construir una conexión cercana entre el cliente y las empresas, buscando el bienestar de aquel, para desarrollar mayor fidelización que genere como resultado un beneficio económico. Entre las ventajas significativas del CRM, se destaca la automatización de los procesos, que optimiza los recursos, el tiempo, la gestión de datos; y personaliza los servicios para brindar una mejor experiencia al cliente. Esto significa mayores ventas y lealtad hacia la empresa. Esta herramienta explica que, a mayor felicidad del cliente, más ganancias, lo que supone conocer a dicho cliente.
        p.mb-0 Implementar un CRM dentro de las empresas conlleva una inversión, por lo que es importante que el retorno de esta inversión se vea reflejado en los resultados de esta estrategia, logrados por medio de la fusión de diversos factores. De acuerdo con el portal web Tenebit (2020), la implementación del CRM debe estar basada en tres importantes pilares. Estos son:

    TabsB.color-secundario
      .py-4.py-md-5.px-3(titulo="Personas" :icono="require('@/assets/curso/tema3/3.png')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            h5 Personas
            p.mb-4.mb-lg-0 El talento humano es un factor fundamental para llevar a cabo una estrategia de CRM. Formar a las personas para que se adapten a los cambios que supone la empresa con la adopción de este sistema es crucial; por ello, el retorno a la inversión lo proveerá el personal que implemente y haga un uso adecuado.
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/tema3/6.png', alt='')
      .py-4.py-md-5.px-3(titulo="Procesos" :icono="require('@/assets/curso/tema3/4.png')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            h5 Procesos
            p.mb-4.mb-lg-0 Es necesario evaluar los procesos que se llevan a cabo al interior de la empresa para que el CRM se efectúe correctamente, es decir, buscar que la herramienta se adapte a la empresa, entendiendo todo el potencial que esta permite y la manera en que se direcciona para lograr los objetivos propuestos. El manejo de datos es imprescindible para el desarrollo de la estrategia.
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/tema3/7.png', alt='')
      .py-4.py-md-5.px-3(titulo="Tecnología" :icono="require('@/assets/curso/tema3/5.png')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            h5 Tecnología
            p.mb-4.mb-lg-0 Las soluciones tecnológicas a través de los sistemas de recopilación y organización de datos permiten obtener información de los clientes, lo que, a su vez, permite el éxito de un proceso de ventas. A partir de la automatización de los procesos, se pueden deducir infinidad de datos que sean necesarios según la estrategia de #[em marketing]; en ellos está el verdadero valor para la empresa.
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/tema3/8.png', alt='')

</template>

<script>
export default {
  name: 'Tema3',
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
