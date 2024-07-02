<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="zoom-in-right") Introducción
    
    .row.justify-content-center.align-items-stretch.mb-5       
      .col-sm-12.col-lg-12
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/30VxDeGsd3E?si=dwYS4nyrt_j2iRgy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)     
        figcaption.mb-5 Video. Ensamble de prendas de vestir
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
