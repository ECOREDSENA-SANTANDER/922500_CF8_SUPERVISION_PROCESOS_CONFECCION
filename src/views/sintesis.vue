<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 La industria de la confección, una de las más significativas a nivel global, engloba todo el proceso de producción de indumentaria, desde la selección de telas hasta el empaque y distribución de las prendas finalizadas. Este sector se caracteriza por la necesidad de conocimientos técnicos especializados que abarcan desde la conceptualización hasta la maquinaria específica requerida para la fabricación de ropa, incluyendo la normativa aplicable, accesorios y tipos de costura.
    p.mb-5 La elección de maquinaria en la confección depende directamente del tipo de prenda a elaborar. A continuación, presentamos un esquema gráfico que detalla estos conceptos de manera más visual.

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
