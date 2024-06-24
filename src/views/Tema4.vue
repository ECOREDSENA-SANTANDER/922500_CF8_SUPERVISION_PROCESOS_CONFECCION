<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1(data-aos="zoom-in-right") Terminados en las prendas de vestir
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-5.col-10
        img.img-t.img-a.mb-4(src='@/assets/ilustraciones/cuatro.png',alt='tema4')             
      .col-sm-12.col-lg-7
        p.mb-4 En los terminados de la prenda vestir se deben contemplar pasos que van unidos a criterios de calidad para que pueda disponerse de un producto el cual cumpla con lo requerido para su distribución.  En este apartado se dará un acercamiento a lo que pasa después de que la prenda sale de la planta de producción en confección.
        p Una vez la prenda es terminada por los operarios, hay personal dispuesto encargado de recoger las prendas y volverlas a organizar por referencia, tipología y tallas por paquetes, de tal manera que puedan apilarse ordenadamente para los siguientes pasos:

    TabsA.color-acento-botones.mb-4(data-aos="flip-up")
      .tarjeta.color-acento-conte--borde.p-4(titulo="1. Quitar hebras")
        .row.justify-content-center.align-items-center
          .col-lg-11
            h4 1. Quitar hebras de cada una de las prendas
            p Acorde a referencia y talla, este proceso consiste en quitar todas las hebras sobrantes a una prenda y que quede limpia en cada terminación. 

      .tarjeta.color-acento-conte--borde.p-4(titulo="2. Revisión detallada")
        .row.justify-content-center.align-items-center
          .col-lg-11
            h4.text-dark 2. Revisión detallada
            p.text-dark Cuyos criterios de calidad son establecidos desde la supervisión en las áreas de cada empresa, aquella prenda que haya quedado con costura torcida o si no hay una buena terminación es devuelta.
            .row.justify-content.align-items.mb-4       
              .col-lg-8               
                .BorTit.mb-4 #[b Figura 10.] Revisión de prendas
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img22.jpg',alt='Se almacenan las prendas para que las operarias puedan hacer revisión y control de calidad para que no lleve hilos o imperfecciones')
                figcaption  Nota. C.I. JEANS (2012)       

      .tarjeta.color-acento-conte--borde.p-4(titulo="3. Planchado de prendas")
        .row.justify-content-center.align-items-center
          .col-lg-11.mb-3
            h4 3. Planchado de prendas
            p Dependiendo de cada prenda y de las bases textiles, se procede a pasar al departamento de plancha para que quede acorde criterios de planchado como en la figura 11.
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-7             
                .BorTit.mb-3 #[b Figura 11.] Planchado manual de prendas
                img.img-t.img-a.mb-5(src='@/assets/ilustraciones/img23.png',alt='En la imagen se puede apreciar, un planchado manual, esto se puede hacer cuando la producción no es alta.')             
              .col-lg-5
                .cajon.color-acento-contenido.p-3
                  p.mt-4.mb-2.mx-3 Cada empresa emplea las herramientas industriales para las áreas de planchado, existen máquinas en el mercado que pueden planchar automáticamente las prendas, esto es implementado cuando la producción es a gran escala para agilidad y cumplimiento de tiempos en producción de referencias.              

      .tarjeta.color-acento-conte--borde.p-4(titulo="4. Etiquetado de prendas")
        .row.justify-content-center.align-items-center
          .col-lg-11
            h4 4. Etiquetado de prendas
            p En este paso se dispone a la respectiva colocación de etiquetas de la empresa o cliente al que está destinada la entrega de una producción determinada como se presenta en la figura 12.
            .row.justify-content-center.align-items-center.mb-0 
              .col-lg-7             
                .BorTit.mb-4 #[b Figura 12.] Etiquetado de prendas
                img.img-t.img-a.mb-5(src='@/assets/ilustraciones/img24.png',alt='Las prendas pasan a proceso de etiquetado con los equipos necesarios para que queden con las especificaciones de la prenda.')             
              .col-lg-5
                .cajon.color-acento-contenido.p-2
                  p.mt-4.mb-5.mx-3 Hay fábricas dedicadas a la confección de prendas de vestir que solo maquilan, es decir realizan pedidos para otras marcas y en este proceso de etiquetado una empresa maquiladora deberá velar porque la etiqueta corresponda a cada referencia y a las especificaciones de cada cliente.
      
      .tarjeta.color-acento-conte--borde.p-4(titulo="5. Empaque de prendas")  
        .row.justify-content-center.align-items-center
          .col-lg-11 
            h4 5. Empaque de prendas
            p Al pasar a bodega es importante destacar que cada empresa determina el empaque para bodega y para entrega, no todas desarrollan los parámetros para este proceso de la misma manera, dado que pueden ser dos pasos que implementen por separado, es decir, que una vez en bodega dependiendo del cliente se despachará la mercancía con indicaciones particulares como se presenta  en las figuras 13 y 14. 
            .row.justify-content-center.align-items-center.mt-5       
              .col-lg-7
                .BorTit.mb-4 #[b Figura 13.] Empaque de prendas
                img.img-t.img-a.my-0(src='@/assets/ilustraciones/img25.png',alt='Se expone un espacios con operarios, en donde tienen a su alcance las prendas debidamente planchadas y con revisión de calidad, para luego pasar a empacado una por una')
                figcaption   Nota. Rintex (2014)
              .col-lg-5
                .BorTit.mb-4 #[b Figura 14.] Embalaje de prendas
                img.img-t.img-a.my-0(src='@/assets/ilustraciones/img26.png',alt='Después de empacar prenda a prenda, se procede al embalaje  dependiendo el destino a donde deben llegar las prendas.')
                figcaption Nota. CARVIMSA. (S.F.)

    p.mb-4.text-center A continuación, se presenta un ejemplo en donde se documenta con detalle las piezas, la construcción, las telas y medidas de piezas terminadas. 

    .row.justify-content-center.align-items-center.mt-5
      .col-sm-12.col-lg-6  
        .fondo21.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0          
                  p.my-1 Inspección producto terminado.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/uP1zR8I56gU" target="_blank")
                    span Ir al sitio
                    i.fas.fa-video

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
