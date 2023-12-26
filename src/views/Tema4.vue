<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 4
      h1(data-aos="zoom-in-right") Terminados en las prendas de vestir
    p(data-aos="fade-right") En los terminados de la prenda vestir se deben contemplar pasos que van unidos a criterios de calidad para que pueda disponerse de un producto el cual cumpla con lo requerido para su distribución.  En este apartado se dará un acercamiento a lo que pasa después de que la prenda sale de la planta de producción en confección.
    p(data-aos="fade-right") Una vez la prenda es terminada por los operarios, hay personal dispuesto encargado de recoger las prendas y volverlas a organizar por referencia, tipología y tallas por paquetes, de tal manera que puedan apilarse ordenadamente para los siguientes pasos:

    TabsA.color-acento-contenido.mt-5(data-aos="flip-up")
      .tarjeta.color-acento-contenido--borde.p-4(titulo="1. Despeluce")
        .row.justify-content-center.align-items-center
          .col-lg-11
            h4 Despeluce de cada una de las prendas
            p Acorde a referencia y talla, este proceso consiste en quitar todas las hebras sobrantes a una prenda y que quede limpia en cada terminación. 

      .tarjeta.color-acento-contenido--borde.p-4(titulo="2. Revisión detallada")
        .row.justify-content-center.align-items-center
          .col-lg-11
            h4 Revisión detallada de costuras y ensamble
            p Cuyos criterios de calidad son establecidos desde la supervisión en las áreas de cada empresa, aquella prenda que haya quedado con costura torcida o si no hay una buena terminación es devuelta.
            .row.justify-content-center.align-items-stertch.mt-5       
              .col-lg-8               
                .BorTit #[b Figura 10] Revisión de prendas
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img22.jpg', alt='')
                figcaption  Nota. C.I. JEANS (2012).        

      .tarjeta.color-acento-contenido--borde.p-4(titulo="3. Planchado de prendas")
        .row.justify-content-center.align-items-center
          .col-lg-11
            h4 Planchado de las prendas
            p Dependiendo de cada prenda y de las bases textiles, se procede a pasar al departamento de plancha para que quede acorde criterios de planchado como en la figura 11.
            .row.justify-content-center.align-items-stertch.mt-5       
              .col-lg-8             
                .BorTit #[b Figura 11] Planchado manual de prendas
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img23.png', alt='')             
            .row.justify-content-center.align-items-center.mt-5       
              .col-lg-8
                .cajon.color-acento-contenido.p-4
                  p.mb-0 Cada empresa emplea las herramientas industriales para las áreas de planchado, existen máquinas en el mercado que pueden planchar automáticamente las prendas, esto es implementado cuando la producción es a gran escala para agilidad y cumplimiento de tiempos en producción de referencias.              

      .tarjeta.color-acento-contenido--borde.p-4(titulo="4. Etiquetado de prendas")
        .row.justify-content-center.align-items-center
          .col-lg-11
            h4 Etiquetado de prendas
            p En este paso se dispone a la respectiva colocación de etiquetas de la empresa o cliente al que está destinada la entrega de una producción determinada como se observa en la figura 12.
            .row.justify-content-center.align-items-stertch.mt-5       
              .col-lg-8           
                .BorTit #[b Figura 12] Etiquetado de prendas
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img24.png', alt='')             
            .row.justify-content-center.align-items-center.mt-5      
              .col-lg-8
                .cajon.color-acento-contenido.p-4
                  p.mb-0 Hay fábricas dedicadas a la confección de prendas de vestir que solo maquilan, es decir realizan pedidos para otras marcas y en este proceso de etiquetado una empresa maquiladora deberá velar porque la etiqueta corresponda a cada referencia y a las especificaciones de cada cliente.  
      .tarjeta.color-acento-contenido--borde.p-4(titulo="5. Empaque de prendas")
        .row.justify-content-center.align-items-center
          .col-lg-11 
            h4 Empaque de prendas
            p Al pasar a bodega es importante destacar que cada empresa determina el empaque para bodega y para entrega, no todas desarrollan los parámetros para este proceso de la misma manera, dado que pueden ser dos pasos que implementen por separado, es decir, que una vez en bodega dependiendo del cliente se despachará la mercancía con indicaciones particulares como se muestra en las figuras 13 y 14.  
            .row.justify-content-center.align-items-stertch.mt-5       
              .col-lg-6
                .BorTit #[b Figura 13] Empaque de prendas
                img.img-t.img-a.my-2(data-aos="zoom-in")(src='@/assets/ilustraciones/img25.png', alt='')
                figcaption   Nota. Rintex (2014).

              .col-lg-4
                .BorTit #[b Figura 14] Embalaje de prendas
                img.img-t.img-a.my-2(data-aos="zoom-in")(src='@/assets/ilustraciones/img26.png', alt='')
                figcaption Nota. CARVIMSA. (S.F.). 

    p.mt-5(data-aos="fade-left") A continuación, se muestra un ejemplo en donde se documenta con detalle las piezas, la construcción, las telas y medidas de piezas terminadas. 
    .video.mt-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/I8adPpXG-n8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
    
    
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

<style lang="sass" scoped></style>
