<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 La industria de la confección es una de las más importantes del mundo. Abarca la producción de prendas de vestir, desde la selección de las telas hasta el empaque y la distribución. En este componente, se abordaron conocimientos técnicos en la conceptualización de la industria de la confección. Conocimientos sobre la maquinaria a utilizar en la elaboración de prendas de vestir, incluyendo normatividad, aditamentos y tipos de puntadas. La maquinaria a utilizar en la industria de la confección varía según el tipo de prenda que se desee producir. A continuación, puede revisar un esquema gráfico que explica estos conceptos.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El diagrama muestra el proceso de ensamblaje de prendas de vestir, destacando aspectos técnicos, de seguridad, de control de calidad y de terminados. En los técnicos, se incluyen normas como NTC 2289 y NTC 2316-1989. En seguridad, se consideran factores como ruido, temperatura, iluminación y ventilación. El control de calidad abarca la detección de fallas y la mejora de la productividad, costos, trazabilidad y satisfacción del cliente. Los terminados incluyen el planchado, el despachado y el empaque de las prendas.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
