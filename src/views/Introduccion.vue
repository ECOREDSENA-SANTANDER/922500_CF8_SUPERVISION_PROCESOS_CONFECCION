<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF")
          i.fas.fa-info
      h1(data-aos="zoom-in-right") Introducción
    
    p(data-aos="fade-right") La confección de prendas es un proceso en que se logra observar con mucha precisión la técnica empleada, pues esta se evidencia desde la prenda final, hasta en el patronaje y los trazos aplicados para que sea posible su materialización. Dentro de la confección es importante establecer y conocer bajo qué rutas operacionales se hará posible el paso a paso para el ensamble de las partes de una prenda, cuellos, mangas, botoneras, dobladillos, sistemas de cierre, entre otros, hasta llegar a la prenda final.    
    img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img1.png', alt='')
    p.mt-5(data-aos="fade-left") Por lo anterior, en este componente se abordarán las operaciones básicas en el ensamble de complementos desde el paso a paso hasta llegar a su implementación, de acuerdo con los procesos técnicos e industriales en la confección de prendas de vestir, comprendiendo ésta como la construcción secuencial de sus partes. Esto genera que las rutas operacionales en la construcción de cada uno de los apartados de una prenda sean entendidas en la interpretación de diseños que independientemente de cuán diferentes sean, dependen de procesos y lineamientos establecidos y generalizados dentro de la confección.  
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p.mb-0 Dentro de todos estos procesos y lineamientos es indispensable entender que la confección de una prenda no es el proceso final, ya que esto se logrará una vez se aprueben los procesos de revisión de acuerdo con criterios técnicos y de calidad para llegar a la entrega del producto.    
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
