<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="zoom-in-right") Normas técnicas para la confección de prendas de vestir
    
    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-7.mb-4
        p.my-4(data-aos="fade-right") A lo largo de los años, el ensamble de prendas de vestir ha adoptado diversas formas en las empresas, no obstante, existen normas técnicas que facilitan la comprensión de la construcción de las prendas en un ambiente óptimo de fabricación, recursos humanos y materiales e insumos. Este proceso de ensamble, cuando se rige por normas, contribuye a la creación de productos con estándares de calidad y entregas oportunas a los clientes; de esta manera, la programación y la planificación de la producción se combinan con la normatividad, permitiendo a las empresas de confección desarrollar sistemas de producción capaces de competir a nivel nacional e internacional con otras que ofrecen el mismo servicio.
      .col-md-10.col-lg-5.col-10.mb-4
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img2.png', alt='')
    
    .row.justify-content-center.align-items-stretch.mb-5       
      .col-sm-12.col-lg-12
        .cajon.color-secundario.caj.p-4
          p.mb-0 El perfeccionamiento de este proceso evita reprocesos tanto a nivel operativo como administrativo en las plantas; es aquí donde la guía de buenas prácticas en la confección de prendas de vestir resume las normas que se deben tener en cuenta para la fabricación de productos que cumplan con los requisitos elegidos por el cliente, desde la presentación de los prototipos en diseño hasta la entrega final del producto. En definitiva, el proceso implica un seguimiento y medición detallados de cada paso, garantizando así su cumplimiento hacia el cliente.

    .row.fondo-grac.align-items-center.py-4.py-md-3.mb-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")
    
          .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
            .col-sm-12.col-lg-10
              .bloque-texto-a.color-acento-contenido.prim.p-4.p-md-5.mb-5 
                .row.m-0.align-items-center.justify-content-between
                  .col-lg-4.mb-4.mb-lg-0
                    img(src='@/assets/ilustraciones/img00.svg', alt='')
                  .col-lg-8
                    .bloque-texto-a__texto.p-4
                      p #[b La norma GTC 230] es una guía para las buenas prácticas en la confección de prendas de vestir (ICONTEC, 2019), la cual fue desarrollada a través de un comité técnico de textiles, en el que participaron diversas empresas colombianas, como centros de formación del SENA, universidades, hilanderías, lavanderías, empresas de confección y textilerías.

        p.mb-5 Es relevante conocer el paso a paso de un proceso productivo con el fin de ofrecerle al cliente un proceso con criterios de calidad,  las buenas prácticas en la confección deben ser tanto de quien presta el servicio como de quien lo recibe, en este caso el cliente; es por esto que el Instituto Colombiano de Normas Técnicas y Certificación -ICONTEC ha puesto a disposición tanto del confeccionista como del cliente varias normas de prendas de vestir de pantalón, camisa, brasier, #[em panty y bóxer;]  identificadas así:


        .row.justify-content-center.align-items-center.mb-4
          .col-sm-12.col-lg-12
            .row.justify-content-center
              .col-lg-7(data-aos="flip-up")    
                LineaTiempoD.color-primario.my-4
                  .row(numero="1" titulo="NTC 2260")
                    .col-12
                      p Establece los requisitos que deben cumplir los confeccionistas en cuanto a los ensayos de las telas utilizadas en la fabricación de pantalones tipo #[em jean] y otros pantalones informales. 
        
                  .row(numero="2" titulo="NTC 2309")
                    .col-12
                      p Aborda la evaluación de características durante el lavado casero de tejido plano en camisas deportivas (informales) y de traje (formales) para hombres y niños. 

                  .row(numero="3" titulo="NTC 2398-1988")
                    .col-12
                      p Establece los requisitos que deben cumplir los confeccionistas en cuanto a los ensayos de materiales, empaque, rotulado y normas de muestreo utilizadas en la fabricación de ropa interior femenina de tejido plano, como #[em panty] y brasier.
    
                  .row(numero="4" titulo="NTC 2339")
                    .col-12
                      p Establece los requisitos que deben cumplir los confeccionistas en cuanto a los ensayos de las telas utilizadas en la fabricación de calzoncillos masculinos elaborados en tejido plano. 
              .col-md-10.col-lg-5.col-10
                img.img-t.img-a.mb-0(data-aos="zoom-in")(src='@/assets/ilustraciones/ntc.png', alt='')
    
    
        .row.justify-content-center.align-items-center.mb-2
          .col-sm-12.col-lg-10 
            .row.justify-content-center.align-items-center       
              .col-lg-12.mb-5
                .cajon.color-acento-contenido.p-4(data-aos="fade-down")
                  p.my-4.mx-3 Para abordar en mayor profundidad las normas técnicas colombianas, visita los documentos de las guías o normas técnicas colombianas, en el sistema de Bibliotecas SENA que permitirá identificar las diferentes normas que existen de las prendas de vestir.
                
              .col-lg-12.mb-4
                .fondo21.p-3.mb-2
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/pdf.svg")
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0         
                          h4.my-0.mb-2 Normas Técnicas Colombianas
                          p.mb-0 A continuación, podrá revisar de manera detallada cada una de las normas técnicas colombianas que regulan los procesos de producción.
                        .col-sm-auto
                          a.boton.color-acento-botones.mx-4(:href="obtenerLink('/downloads/Anexo_1_NORMA_TECNICA_COLOMBIANA.pdf')" target="_blank")
                            span Descargar
                            i.fas.fa-file-download

        p.mb-4 Así mismo, existen otras normas como se presenta en la tabla 1, que permiten que la materia prima e insumos para la fabricación de prendas de vestir sean de óptima calidad y como resultado permiten ofrecer un producto terminado con criterios de calidad en su confección y entrega al cliente. 
        
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          | Referencias Normativas para materia prima e insumos de confección

        .tabla-b.color-acento-contenido.mb-4(alt='La tabla presenta diversas normas técnicas relacionadas con textiles y confecciones. Incluye la norma NTC 228 para la determinación del ancho de las telas, la NTC 2567 para la clasificación de defectos en telas de tejido plano y de punto, y la NTC 230 para la medición de la masa de las telas. También se incluyen normas para el análisis cuantitativo de fibras (NTC 481), requisitos generales y específicos para telas de tejido plano y de punto (NTC 703-1, NTC 703-2, NTC 703-3), así como normas para cierres de cremallera (NTC 2512), botones de poliéster (NTC 2510), hilos de algodón para coser (NTC 2099), e hilos industriales fabricados a partir de fibras sintéticas (NTC 8872).')(data-aos="zoom-in")
          table
            caption Nota: Biblioteca SENA
            tr.bg-1
              td.text-center.coloy #[b Norma]
              td.text-center.coloy #[b Tipo de Norma]
            tr
              td.tab-bold.br-tabble NTC 228 
              td.izq Textiles, Determinación del ancho de las telas. 
            tr
              td.tab-bold.br-tabble NTC 2567 
              td.izq Textiles, telas de tejido plano y tejido de punto, clasificación por defectos. 
            tr
              td.tab-bold.br-tabble NTC 230 
              td.izq Textiles, telas de tejido plano. Método para la medición de la masa por unidad de longitud y de la masa por unidad de área.
            tr
              td.tab-bold.br-tabble NTC 481 
              td.izq Textiles. Análisis cuantitativo de fibras. 
            tr
              td.tab-bold.br-tabble NTC 703-1 
              td.izq Textiles, Telas de tejido plano y telas de tejido de punto. Requisitos generales. 
            tr
              td.tab-bold.br-tabble NTC 703-2 
              td.izq Textiles, Telas de tejido plano. Requisitos específicos. 
            tr
              td.tab-bold.br-tabble NTC 703-3 
              td.izq Textiles, Telas de tejido de punto. Requisitos específicos. 
            tr
              td.tab-bold.br-tabble NTC 2512 
              td.izq Confecciones, Cierres de cremallera. 
            tr
              td.tab-bold.br-tabble NTC 2510
              td.izq Textiles y confecciones. Botones de poliéster. 
            tr
              td.tab-bold.br-tabble NTC 2089 
              td.izq Hilos de algodón para coser 
            tr
              td.tab-bold.br-tabble NTC 5872 
              td.izq Textiles Hilos de coser industriales fabricados, total o parcialmente, a partir de fibras sintéticas.

    p.mb-4(data-aos="fade-left") En definitiva, la norma GTC 230 guía de buenas prácticas en la confección, se constituye en el conjunto de requisitos generales de producción que permiten que cada uno de los procesos o subprocesos de una empresa se ejecuten de manera organizada y completa, para esto se debe tener en cuenta la calidad de las materias primas, insumos y procesos; todo esto con respecto al Instituto Colombiano de Normas Técnicas y Certificación.   
    
    
    
    .row.justify-content-center.align-items-center.mt-5
      .col-sm-12.col-lg-10
        .col-lg-12.mb-4
          .fondo21.p-3.mb-2
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                img.img-t.img-a(src="@/assets/ilustraciones/pdf.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0         
                    h4.my-0.mb-2 Proceso de diseño y desarrollo del producto
                    p.mb-0 En el anexo 2, para ampliar información diríjase al PDF proceso de diseño y desarrollo del producto.
                  .col-sm-auto
                    a.boton.color-acento-botones.mx-4(:href="obtenerLink('/downloads/Anexo_2_Proceso_de_Disenio_y_desarrollo_del_producto.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
          
    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
