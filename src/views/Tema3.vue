<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="zoom-in-right") Confección de prendas de vestir
    
    .row.justify-content-center.align-items-center.mt-2
      .col-sm-12.col-lg-5
        img.img-t.img-a.my-2(src='@/assets/ilustraciones/bru.png', alt='tema3')      
      .col-sm-12.col-lg-7
        p.mb-4.my-4 En el proceso de confección o ensamble de prendas masculinas y femeninas, se identifican necesidades como el manejo y dominio básico de las máquinas de coser y sus aditamentos en el momento de elaborar cualquier tipo de prenda, si bien la destreza en el manejo es importante, tener claro que todo molde, patrón, plano o desarrollo de diseño que se realiza debe ir acompañado de una ruta u orden operacional como especificaciones para el ensamble, las cuales van de la mano con el área de prototipado o muestreo.  


    .row.fondo-pabg.align-items-center.py-4.py-md-3.mb-4.my-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")    

        .row.justify-content-center.align-items-center.mt-5
          .col-sm-12.col-lg-8
            p.mb-4 Es importante recordar que hay procesos previos que se deben tener claros para llegar a este punto como son:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-car-side.mb-0
                | Diseño o propuesta de la prenda.
              li.d-flex
                i.fas.fa-car-side.mb-0
                | Fichas técnicas de los geometrales o planos de la prenda con las especificaciones y observaciones suficientes que permitan comprender la prenda con sus acabados como se muestra en la figura 6.
              li.d-flex
                i.fas.fa-car-side.mb-0
                | Patronaje y escalado de las prendas. 
              li.d-flex
                i.fas.fa-car-side.mb-0
                | Trazo y corte de las prendas. 
              li.d-flex
                i.fas.fa-car-side.mb-0
                | Separado, etiquetado y dispuesto para la distribución en planta.
              li.d-flex
                i.fas.fa-car-side.mb-0
                | Fichas técnicas de confección u orden operacional.
          .col-sm-12.col-lg-4
            img.img-t.img-a.my-2(src='@/assets/ilustraciones/ropa.png', alt='tema3')       

    .row.justify-content-center.align-items-center
      .col-auto
        a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
          span Abrir modal figura 6: ficha técnica de prenda de vestir
          .indicador--click(v-if="mostrarIndicador")
    
          
    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center.align-items-center
        .col-lg-6.col-md-10.col-10.mb-4
          .fondo4.p-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 6 
              | Ficha técnica de prenda de vestir
            figure
              img.img-a.img-t(src='@/assets/ilustraciones/img15.jpg', alt='tema3')
              figcaption Nota: Lara (2017).

    

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-lg-12.col-md-12.col-12
        .cajontt.color-acento-contenido.p-3 
          .row.justify-content-center.align-items-center
            .col-lg-2
              img.img-t.img-a.mx-5.my-3.d-none.d-lg-block(src='@/assets/ilustraciones/ane.svg', alt='tema3')       
            .col-lg-7
              a.anexo.mb-4.mb-lg-0.my-4.mx-5(href="https://www.youtube.com/watch?v=Sv7X27S7MSE" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web].A continuación, puede revisar las indicaciones de insumos con referencias como por ejemplo el tipo de hilos.
        
    
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-10
        .row 
          .col-lg-8
            .cajon.color-acento-contenido.p-2.mb-4 
              p.mx-3.my-4 Dentro de las funciones de un supervisor en procesos de confección está el velar porque cada uno de estos se haya dado y cuente con las especificaciones y orientaciones que permitan y faciliten el proceso de producción en planta para las prendas de vestir, ello asegura el cumplimiento en tiempos y requerimientos de calidad establecidos.
            p.mb-4 Es importante tener presente los saberes adquiridos en cuanto a identificar el tipo de maquinaria y su respectivo funcionamiento, por ello en los videos de este módulo se encontrarán las operaciones básicas que pueden ser implementadas de manera genérica en las prendas como lo son bolsillos, ribetes, puños, etc.
          .col-lg-4
            img(src='@/assets/ilustraciones/pal.svg', alt='tema3')       


    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-sm-12.col-lg-12
        .cajontt.color-acento-contenido.p-5 
          .row.justify-content-center
            .col-lg-4.col-md-9.col-9.p-3
              h4.mx-5.mb-2 Operaciones máquina plana industrial
              img.my-3(src='@/assets/ilustraciones/cacu.svg', alt='tema3')       
            .col-lg-4.p-3
              a.anexo.my-2(href="https://www.youtube.com/watch?v=m6Bda8bTNxk" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web]. Operaciones básicas para el manejo en máquina plana una aguja Paso 1 Costuras rectas a ¼ pulgada. 
              a.anexo.my-2(href="https://www.youtube.com/watch?v=Sv7X27S7MSE" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web]. Operaciones básicas para el manejo en máquina plana una aguja Paso 3 Costuras a alforzas de 1 16”. 
              a.anexo.my-2(href="https://www.youtube.com/watch?v=wULIEdIahzE" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web]. Operaciones básicas para el manejo en máquina plana una aguja Paso 5 Bolsillo de ribete sencillo.
              a.anexo.my-2(href="https://www.youtube.com/watch?v=V8PrD9bgvb8" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web]. Operaciones básicas para el manejo en máquina plana una aguja Paso 7 Coser pechera sencilla.
            .col-lg-4.p-3
              a.anexo.my-2(href="https://www.youtube.com/watch?v=5vxh3RXCw8c" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web]. Operaciones básicas para el manejo en máquina plana una aguja Paso 2 Costuras a alforzas de ¼”.
              a.anexo.my-2(href="https://www.youtube.com/embed/fUW6xKvpzs0" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web]. Operaciones básicas para el manejo en máquina plana una aguja Paso 4 Pegar bolsillos. 
              a.anexo.my-2(href="https://www.youtube.com/watch?v=4kT8atODsIQ" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web]. Operaciones básicas para el manejo en máquina plana una aguja Paso 6 Bolsillo de ribete doble:.


      .row.justify-content-center.align-items-center.mt-5
        .col-sm-12.col-lg-7
          p.or.mb-4 #[b Para llevar a cabo la ejecución de labores cuando se fabrica una prenda, en este caso; la camisa, se realiza mediante un paso a paso por operación y con tiempos establecidos, a este proceso se le denomina orden operacional.]
          p.mb-4 Las operaciones corresponden al ensamble de una de las piezas, partes o detalles que componen una prenda, la finalidad es poder tener el ensamble de pieza por pieza, para que al final pueda unirse cada una de las piezas y tener la prenda completa.
          p.mb-4 Cada empresa implementa su propia ruta o modelos de fichas de orden operacional y dependerá de los lineamientos que se establecen desde producción, a continuación, se muestran algunos ejemplos de orden operacional de algunas prendas, en las figuras 7 y 8.
        .col-sm-12.col-lg-5
          img.img-t.img-a.my-2(src='@/assets/ilustraciones/ptr.png', alt='tema3')       

      
    .row.justify-content-center.align-items-center
      .col-auto
        a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
          span Abrir modal figura 7: Orden operacional de camisa 
          .indicador--click(v-if="mostrarIndicador")
    
          
    ModalA(:abrir-modal.sync="modal2")
      .row.justify-content-center.align-items-center
        .col-lg-6.col-md-10.col-10.mb-4
          .fondo4.p-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 7
              | Orden operacional de camisa
            figure
              img.img-a.img-t(src='@/assets/ilustraciones/img17.jpg', alt='tema3')
              figcaption Nota. Pellegrino (2011).


    .row.fondo-pabg4.align-items-center.py-4.py-md-3.mb-4.my-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")
    
    
    
        .row.justify-content-center.align-items-center.mt-5
          .col-lg-12.bg-4.p-5
            .row.justify-content-center.align-items-center.mt-5
              .col-lg-8.bg-4
                .titulo-sexto.color-acento-contenido
                  h5 Figura 8
                  | Orden operacional de blusa
                figure
                  img(src='@/assets/ilustraciones/img18.jpg', alt='tema3')
                  figcaption Nota. Pellegrino (2011). 


        p.mt-5 Como se puede observar en las dos figuras anteriores, aunque son fichas distintas comparten las indicaciones en cada proceso a desarrollar dentro de la confección.  Como material para este componente se puede visualizar una ficha de orden operacional que puede ser tenida en cuenta para ejercicios futuros por parte del aprendiz.
    
        .row.justify-content-center.align-items-center.mb-3
          .col-sm-12.col-lg-12
            .tarje.color-primario.he-4-cus.px-4.my-4.pt-4
              .row
                .col-sm-12.col-lg-6  
                  .fondo21.p-3.mb-4
                    .row.justify-content-around.align-items-center
                      .col-3.col-sm-2.col-lg-2
                        img(src="@/assets/ilustraciones/pef.svg", alt="tema3")
                      .col
                        .row.justify-content-between.align-items-center
                          .col.mb-3.mb-sm-0          
                            p.my-2 Anexo. Ficha técnica de orden operacional SENA
                          .col-sm-auto
                            a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3_FICHA_RUTA_OPERACIONAL_SENA.pdf')" target="_blank")
                              span Descargar
                              i.fas.fa-file-download 

                .col-sm-12.col-lg-6  
                  .fondo21.p-3.mb-4
                    .row.justify-content-around.align-items-center
                      .col-3.col-sm-2.col-lg-2
                        img(src="@/assets/ilustraciones/pef.svg", alt="tema3")
                      .col
                        .row.justify-content-between.align-items-center
                          .col.mb-3.mb-sm-0          
                            p.my-2 Anexo. Ejemplos de fichas de orden operacional de empresa
                          .col-sm-auto
                            a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_4_Ejemplos_de_orden_operacional_de_empresa.pdf')" target="_blank")
                              span Descargar
                              i.fas.fa-file-download 
    
    .row 
      .col-sm-12.col-lg-4
        img.img-t.img-a.my-2(data-aos="zoom-in")(src='@/assets/ilustraciones/gts.png',alt='tema3') 
      .col-sm-12.col-lg-8
        p.mb-4 A su vez dentro de los procesos de confección hay procesos mecánicos y genéricos para el ensamble de prendas en cada una de las partes que la comprenden, por ello en el siguiente material  se hallarán los recursos necesarios para identificar, proceso en el paso a paso para ensamble de cremalleras, bolsillos, mangas, puños, dobladillos, entre otros, esta información puede ser de utilidad para comprender dichos procesos, claro está que cada planta de producción establece también el paso a paso que ayudados de máquinas especializadas agilizan este proceso, como siempre dependerá de cada empresa el establecer las rutas y los procesos.
              .row
                .col-sm-12.col-lg-12  
                  .fondo21.p-3.mb-4
                    .row.justify-content-around.align-items-center
                      .col-3.col-sm-2.col-lg-2
                        img.img-t.img-a(src="@/assets/ilustraciones/pef.svg",alt='tema3')
                      .col
                        .row.justify-content-between.align-items-center
                          .col.mb-3.mb-sm-0          
                            p.my-2 Anexo. Paso a paso en confección de complementos
                          .col-sm-auto
                            a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_5._PASO_A_PASO_EN_CONFECCION_DE_COMPLEMENTOS.docx')" target="_blank")
                              span Descargar
                              i.fas.fa-file-download
    

    
    Separador
    #t_3_1.titulo-segundo
      .h2 3.1 Orden operacional de confección de camisa
    
    
    p.my-5(data-aos="fade-right") Para el desarrollo de la ruta operacional en confección de camisa se irán haciendo una serie de ejercicios con diferentes ejemplos trazos, cortes, formas, que al final permitirán el ensamble de la camisa.

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-8  
        .fondo21.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-t.img-a(src="@/assets/ilustraciones/pdf.svg",alt='tema3')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0          
                  h4.my-1 Orden operacional de confección de camisa 
                  p.mb-3 En la siguiente tabla se presenta detalladamente el proceso para la preparación de las piezas.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_5._PASO_A_PASO_EN_CONFECCION_DE_COMPLEMENTOS.docx')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    
    .mb-4.d-flex.mb-5
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white.mx-4(data-aos="fade-right") Confeccion de blusa
        img.clase2.col-lg.d-none.d-lg-flex(src='@/assets/ilustraciones/vot.svg' data-aos="fade-left",alt='tema3') 
    
    
    .row.justify-content-center.align-items-center.mb-5 
      .col-sm-12.col-lg-2
        img.img-t.img-a.mb-3(src="@/assets/ilustraciones/case.svg",alt='tema3')
      .col-sm-12.col-lg-5
        .bloque-texto-d.bg13.p-1.mb-3
          i.fas.fa-quote-left.pre.my-1
          p.mx-3 Una camisa es una prenda de vestir que cubre el tronco hasta la cadera o medio muslo, con cuello, manga corta o larga, que se abrocha por delante con botones; suele llevar un canesú en la espalda que permite dar amplitud al cuerpo de la prenda.
          h5.d-flex.justify-content-end (Rae, 2021)
            i.fas.fa-quote-right.pre
    
    p.mb-5.text-center Para realizar su confección, a continuación encontrará 18 pasos ilustrados, que le permitirán realizar un buen trabajo. Bienvenido.
    
    .bg99.p-5.mb-5
      LineaTiempoC
        .row.justify-content-center.align-items-top(titulo="Paso 1")
          .col-lg-10 
            p.rojo #[b Paso 1. Alistamiento en la confección de la blusa camisera]           
            p Para iniciar la confección de la blusa camisera, deberá las partes correspondientes, estas son:
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-5             
                  ol.lista-ol
                    li.mb-0 
                      p.mb-0 1. Cuello.
                    li.mb-0
                      p.mb-0 2. Banda o pie de cuello.
                    li.mb-0
                      p.mb-0 3. Pechera.
                .col-lg-5
                  ol.lista-ol
                    li.mb-0
                      p.mb-0 4. Puño.
                    li.mb-0
                      p.mb-0 5. Espalda.
                    li.mb-0 
                      p.mb-0 6.  Portañuela.

            p.mb-4 En el siguiente vídeo podrá revisar este paso a paso:
                
            .row.justify-content-center.align-items-center.mb-2
              .col-sm-12.col-lg-10  
                .fondo21.p-3.mb-4
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          h5.my-0 Alistamiento en la confección de la blusa camisera
                          p.mb-0 Adicionalmente, observe con atención el video “Alistamiento en la confección de la blusa camisera. Paso 1”, que se encuentra en el material complementario.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=nDQqLI5_VPo&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video              

        .row.justify-content-center.align-items-top(titulo="Paso 2") 
          .col-lg-10                
            p.rojo #[b Paso 2. Preparar cuello]    
            p Para la preparación del cuello de la blusa camisera, se debe tener en cuenta algunas recomendaciones, que le permitirán un producto con mejores acabados, para esto le invito a ver el siguiente vídeo en donde encontrará de manera detallada todo el procedimiento de la confección del cuello.
            p En el siguiente vídeo podrá revisar este paso a paso                
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10  
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Preparar cuello
                              p.mb-0 Adicionalmente, observe con atención el video “Preparar cuello. Paso 2”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=jwt4avwp6y0&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=5" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video 
          
        .row.justify-content-center.align-items-top(titulo="Paso 3") 
          .col-lg-10 
            p.rojo #[b Paso 3. Preparar manga: coser portapañuela]           
            p Para la preparación de la manga, requiere unos sencillos pasos que involucran piezas claves como el sesgo, la portañuela y, los puños, recordando que estos últimos debes estar previamente prehormado. 
            p En el siguiente vídeo podrá revisar este paso a paso:                
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10 
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Preparar manga: coser portapañuela
                              p.mb-0 Adicionalmente, observe con atención el video “Preparar manga: coser portapañuela. Paso 3”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=vxmsXHHBXWc&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=4" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
                
        .row.justify-content-center.align-items-top(titulo="Paso 4") 
          .col-lg-10 
            p.rojo #[b Paso 4. Preparar delantero, coser pinzas y pespuntear pechera]
            p La preparación de los delanteros consiste en marcar previamente las pinzas, posteriormente coser.
            p La pechera deberá estar previamente prehormada, y de esta forma a proceder a la unión de piezas, tal como se muestra en el paso a paso del siguiente 
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10  
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Preparar delantero, coser pinzas y pespuntear pechera
                              p.mb-0 Adicionalmente, observe con atención el video “Preparar delantero, coser pinzas y pespuntear pechera. Paso 4”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=8zurivBBOsE&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=3" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
                
        .row.justify-content-center.align-items-top(titulo="Paso 5") 
          .col-lg-10 
            p.rojo #[b Paso 5. Preparar posterior, coser pinzas]        
            p En el posterior las preparaciones del posterior consiste en coser las pinzas, para seguir paso a paso esta confección, te invito a ver el siguiente vídeo:                
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10 
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Preparar posterior, coser pinzas
                              p.mb-0 Adicionalmente, observe con atención el video “Preparar posterior, coser pinzas. Paso 5”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Vde63W5SJVA&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=12" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
                              
        .row.justify-content-center.align-items-top(titulo="Paso 6") 
          .col-lg-10 
            p.rojo #[b Paso 6. Unir por hombros]
            p El ensamble se inicia con la operación de unir hombros, es importante tener en cuenta la alineación de piezas. 
            p En el siguiente vídeo podrá revisar este paso a paso:             
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10 
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Unir por hombros
                              p.mb-0 Adicionalmente, observe con atención el video “Unir por hombros. Paso 6”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=gHQJfaPkahw&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=13" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
                
        .row.justify-content-center.align-items-top(titulo="Paso 7") 
          .col-lg-10 
            p.rojo #[b Paso 7. Pespuntar hombros] 
            p Se requiere de un pie 1/16 compensador, derecho, según se indica en la firma técnica de este procedimiento.
            p En el siguiente vídeo podrá revisar este paso a paso:             
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10 
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Pespuntar hombros
                              p.mb-0 Adicionalmente, observe con atención el video “Pespuntar hombros. Paso 7”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=0aF-nOKG1tA&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=17" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
                              
        .row.justify-content-center.align-items-top(titulo="Paso 8") 
          .col-lg-10 
            p.rojo #[b Paso 8. Pegar cuello]
            p Debe marcarse tenuemente alrededor del cuello, que nos indique en donde se deberá pasar la puntada y pegar la pieza, teniendo especial cuidado en ser prolijo en la tarea y que coincidan con los medios de la pieza de destino.
            p En el siguiente vídeo podrá revisar este paso a paso:             
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10  
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Pegar cuello
                              p.mb-0 Adicionalmente, observe con atención el video “Pegar cuello. Paso 8”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=-r-B9BBPN4k&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=9" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
                
        .row.justify-content-center.align-items-top(titulo="Paso 9") 
          .col-lg-10 
            p.rojo #[b Paso 9. Pespuntar cuello]
            p La marquilla, se pegará en el centro del cuello, posteriormente se une la pieza, teniendo especial cuidado de ocultar los bordes de la costura dentro del cuello.
            p En el siguiente vídeo podrá revisar este paso a paso:          
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10  
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Pespuntar cuello
                              p.mb-0 Adicionalmente, observe con atención el video “Pespuntar cuello. Paso 9”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=-fYx-VI0_tE&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=10" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
                              
        .row.justify-content-center.align-items-top(titulo="Paso 10") 
          .col-lg-10 
            p.rojo #[b Paso 10. Pegar mangas]
            p La unión de las mangas en la blusa, requiere que se preste especial atención en pegar derecho con derecho de la tela, para esto tenga en cuenta que debe de coincidir la parte del posterior de la manga (portañuela), con el posterior de la blusa
            p En el siguiente vídeo podrá revisar este paso a paso:             
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10  
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Pegar mangas
                              p.mb-0 Adicionalmente, observe con atención el video “Pegar mangas. Paso 10”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=qOpxd29hxko&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=8" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
                
        .row.justify-content-center.align-items-top(titulo="Paso 11") 
          .col-lg-10 
            p.rojo #[b Paso 11. Pespuntar mangas]
            p Para iniciar el pespunte de las mangas, se debe tumbar hacia el cuerpo de la blusa, y luego usando el pie compensado derecho, se da inicio al pespunte con remate al inicio y respetando la curva que tiene la manga. 
            p Es un procedimiento sencillo, y que requiere atención, para una mejor explicación le invitamos a revisar el siguiente paso a paso en el vídeo:
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10  
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Pespuntar mangas
                              p.mb-0 Adicionalmente, observe con atención el video “Pespuntar mangas. Paso 11”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=L2Tv-blhRnM&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=14" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
                              
        .row.justify-content-center.align-items-top(titulo="Paso 12") 
          .col-lg-10 
            p.rojo #[b Paso 12. Cerrar costados]
            p La unión por costados de la blusa, debe tenerse en cuenta que el derecho filete debe quedar por el delantero, se alinean las piezas y se revisa que coincidan los piquetes de costura. Este paso requiere especial atención a los detalles.
            p En el siguiente vídeo podrá encontrar una amplia explicación al respecto.
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10 
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Cerrar costados
                              p.mb-0 Adicionalmente, observe con atención el video “Cerrar costados. Paso 12”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=gOtAib9rMwQ&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=11" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
        
        .row.justify-content-center.align-items-top(titulo="Paso 13") 
          .col-lg-10 
            p.rojo #[b Paso 13. Pegar puños]
            p Con el puño previamente preparado, vamos a pegarlo a la manga por la marcación que se ha realizado, teniendo en cuenta que no se recoja la tela. 
            p En el siguiente vídeo podrá revisar este paso a paso:             
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10  
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Pegar puños
                              p.mb-0 Adicionalmente, observe con atención el video “Pegar puños. Paso 13”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=budtB_UPjtU&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=15" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
                            
        .row.justify-content-center.align-items-top(titulo="Paso 14") 
          .col-lg-10 
            p.rojo #[b Paso 14. Pespuntar puño]
            p Pespuntar el puño, se inicia empatando la costura en donde se había anteriormente despuntado el puño (paso 13), para esto se requiere el pie de pespunte compensado o de guía fija de 1/16. Tal y como se indica en el vídeo del paso a paso que encuentra a continuación:                
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10 
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Pespuntar puño
                              p.mb-0 Adicionalmente, observe con atención el video “Pespuntar puño. Paso 14”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=xnaxcqqKfTw&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=16" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
      
        .row.justify-content-center.align-items-top(titulo="Paso 15") 
          .col-lg-10 
            p.rojo #[b Paso 15. Dobladillar ruedo]
            p En el ensamble, dobladillar el ruedo se utiliza el pie compensado de 1/16 lado derecho.
            p Se dobladilla doble vez un centímetro, de esta forma se inicia a coser, tal como se indica en el paso a paso del vídeo que encuentra a continuación:
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10  
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Dobladillar ruedo
                              p.mb-0 Adicionalmente, observe con atención el video “Dobladillar ruedo. Paso 15”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=pTroSaIBKDs&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=6" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
                                
        .row.justify-content-center.align-items-top(titulo="Paso 16") 
          .col-lg-10 
            p.rojo #[b Paso 16. Marcar ojales y ojalar]
            p Las operaciones de terminado se inicia con la marcación de los ojales. Para esto hacemos uso de la plantilla, de esta forma marcar e iniciar el ciclo del ojal.
            p En el siguiente vídeo podrá revisar este paso a paso:                
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10  
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Marcar ojales y ojalar
                              p.mb-0 Adicionalmente, observe con atención el video “Marcar ojales y ojalar. Paso 16”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=LemTAGq3BwI&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=7" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
              
        .row.justify-content-center.align-items-top(titulo="Paso 17") 
          .col-lg-10 
            p.rojo #[b Paso 17. Marcar botones y botonar] 
            p Antes de pegar los botones es necesario marcar el lugar exacto en donde irá el botón, para esto es necesario ayudarnos de los ojales, tanto en el cuerpo de la camisa como en los puños de esta.
            p El vídeo que encuentra a continuación explica de forma clara el paso a paso para pegar los botones.               
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10 
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Marcar botones y botonar
                              p.mb-0 Adicionalmente, observe con atención el video “Marcar botones y botonar. Paso 17”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Zwx_QULWajg&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=18" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video
                            
        .row.justify-content-center.align-items-top(titulo="Paso 18") 
          .col-lg-10 
            p.rojo #[b Paso 18. Limpiar, revisar y planchar]
            p La últimas operaciones consisten en pulir y limpiar nuestra prenda, retirando hebras o cortando de raíz aquellas que hayan quedado, posteriormente planchar y empacar.
            p En el siguiente vídeo podrá revisar este paso a paso:               
                .row.justify-content-center.align-items-center.mb-5
                  .col-sm-12.col-lg-10  
                    .fondo21.p-3.mb-4
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-2
                          img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                        .col
                          .row.justify-content-between.align-items-center
                            .col.mb-3.mb-sm-0          
                              h5.my-0 Limpiar, revisar y planchar
                              p.mb-0 Adicionalmente, observe con atención el video “Limpiar, revisar y planchar. Paso 18”, que se encuentra en el material complementario.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=azhymYdHJBw&list=PLkc5n6npRWkink2WtHYTQCrNkLrWX2L12&index=19" target="_blank")
                                span Ir al sitio
                                i.fas.fa-video

    .row.justify-content-center.align-items-center.mt-3.mb-5
      .col-sm-12.col-lg-12
        .cajontt.color-acento-contenido.p-3 
          .row
            .col-lg-2
              img.img-t.img-a.mx-5.my-3.d-none.d-lg-block(src='@/assets/ilustraciones/ftr.svg',alt='tema3')       
            .col-lg-8
              p.my-5 A continuación, se presentan dos vídeos tutoriales para el ensamble de camisa, en relación a la confección de camisa Slim fit para hombre, y la confección de una camisa artesanalmente.
        .row.justify-content-center 
          .col-lg-4.mb-4
            a.anexo.subir.my-2(href="https://www.youtube.com/watch?v=4kT8atODsIQ" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web]. Confección de camisa Slim Fit para hombre.
          .col-lg-4
            a.anexo.subir.my-2(href="https://www.youtube.com/watch?v=4kT8atODsIQ" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web]. Cómo se confecciona una camisa artesanalmente.


    Separador
    #t_3_2.titulo-segundo
      .h2 3.2 Orden operacional de la confección de la falda clásica
    
    p.mb-2 A continuación, se presenta el orden de operación para la confección de una falda clásica.

    .row.justify-content-center.align-items-stretch.mt-4.mb-5
      .col-sm-12.col-lg-8.row-img-color.mb-5 
        .row.justify-content-center.align-items-center
          .col-lg-12.col-md-9.col-9.p-0      
            img.img-t.img-a(src='@/assets/ilustraciones/img66.png',alt='tema3')
            p.mb-0.px-4.py-3 Es necesario que para la confección de la falda clásica se tengan ya los elementos que fueron previamente trazados y patronados, así como el material textil, cierre e insumos necesarios para generar los acabados.
      .col-sm-12.col-lg-4
        .row.justify-content-center.align-items-center
          .col-lg-12.bg-3.p-5
            .row.justify-content-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
                  h5 Figura 9. 
                  |  Falda clásica
                figure(data-aos="zoom-in-up")
                  img.img-a.img-t(src='@/assets/ilustraciones/img21.svg' ,alt='tema3')
                  figcaption Fuente: Moldes Unicosé
    
    
    .row.justify-content-center 
      .col-sm-12.col-lg-9
        TabsA.color-acento-contenido.mb-5(data-aos="zoom-in")
          .tarjeta.color-primate.p-4(titulo="Paso 1")
            h4 Paso 1
            p.mb-4 Una vez se tenga el material cortado se unirán costados de la falda con maquina plana y posteriormente se pasa la fileteadora.
          .tarjeta.color-primate.p-4(titulo="Paso 2")
            h4 Paso 2
            p.mb-5 El centro espalda se dejará abierto para colocar el cierre con la pretina.
          .tarjeta.color-primate.p-4(titulo="Paso 3")
            h4 Paso 3
            p.mb-5 Unir la pretina, en este caso es una pretina recta con corte a los costados y corte centro espalda, estas deberán estar previamente fusionadas con el interlón.
          .tarjeta.color-primate.p-4(titulo="Paso 4")
            h4 Paso 4
            p.mb-5 Pegar la pretina a la falda.
          .tarjeta.color-primate.p-4(titulo="Paso 5")
            h4 Paso 5
            p.mb-5 Colocar el cierre (invisible o normal).
          .tarjeta.color-primate.p-4(titulo="Paso 6")
            h4 Paso 6
            p.mb-5 Cerrar centro espalda.
          .tarjeta.color-primate.p-4(titulo="Paso 7")
            h4 Paso 7
            p.mb-5 Realizar dobladillo.
      .col-sm-6.col-lg-3
        img.img-a.img-t.mb-5(src='@/assets/ilustraciones/ded.jpg',alt='tema3')


    .bg99.p-5.mb-5
      LineaTiempoC
        .row.justify-content-center.align-items-top.mb-5(titulo="Paso 1")
          .col-lg-10 
            p.rojo #[b Introducción]           
            p Para todo proceso de patronaje es necesario el conocimiento de fibras textiles, propiedades, tejidos básicos, características y usos.
            p Así  mismo se requiere de un conocimiento acertado que oriente sobre el material más recomendado para la elaboración de la falda básica.
            p En el siguiente vídeo podrá encontrar todas las orientaciones a este respecto, ¡Bienvenido!
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9 
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p Adicionalmente, observe con atención el video “Introducción”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=iMD25Zp__uM" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video              

        .row.justify-content-center.align-items-top.mb-5(titulo="Paso 2") 
          .col-lg-10                
            p.rojo #[b Alistamiento de materiales para la falda básica]    
            p Los materiales a utilizar en la confección de una falda básica, que podrá seguirse mediante el paso a paso que encuentra a continuación, son:                          
            .list.mt-2
                .list__item
                    .list__item__number
                        span 1.
                .list__txt 
                    span Tela para la confección, en este caso hemos utilizado lino, de 1.50 m, de ancho, por 1 m.
            .list.mt-2
                .list__item
                    .list__item__number
                        span 2.
                .list__txt 
                    span Un botón de 20 líneas.
            .list.mt-2
                .list__item
                    .list__item__number
                        span 3.
                .list__txt 
                    span Hilo, e hilaza a base de poliéster
            .list.mt-2
                .list__item
                    .list__item__number
                        span 4.
                .list__txt 
                    span Entretela fisionable.
            .list.mt-2
                .list__item
                    .list__item__number
                        span 5.
                .list__txt 
                    span Cremallera en nylon de 15 cm, de largo
            p.mt-4 Siga el paso a paso en el siguiente vídeo
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p Adicionalmente, observe con atención el video “Alistamiento de materiales para la falda básica”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Ded13sVkftw" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video 
          
        .row.justify-content-center.align-items-top.mb-5(titulo="Paso 3") 
          .col-lg-10 
            p.rojo #[b Trazo de la falda básica]            
            p No olvide que se requiere de algunos elementos para dar inicio al trazo de la falda estos son:               
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Patrones
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Tijeras
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Pesos
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Metro
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Tiza 
            p.mt-3 Una vez doblada la tela, haciendo coincidir sus extremos como lo muestra el vídeo del paso a paso:
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p Adicionalmente, observe con atención el video “Trazo de la falda básica”.             
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=BHbdXNmFjnI&t=19s" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
            p.mt-4 Este instructivo le permitirá confeccionar un producto de calidad.
        
        .row.justify-content-center.align-items-top.mb-5(titulo="Paso 4") 
          .col-lg-10 
            p.rojo.mb-4 #[b Patronaje posterior de falda]
            p El patronaje posterior de cadera se trabaja de igual forma como se ha explicado en el paso anterior. No debes olvidar que se trabaja con el cuarto de control de cadera que es de 24 cm, y el largo de la falda que son 60 cm.
            p De esta forma se hace un rectángulo base, teniendo en cuenta que la parte superior del rectángulo se dejará como cintura, y la parte inferior se dejará como la base de la falda.
            p Todos los pasos requeridos para llevar a cabo el patronaje posterior de la falda los podrás encontrar en el siguiente vídeo:
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p Adicionalmente, observe con atención el video “Patronaje posterior de falda”.             
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=dsuuUlFiRFU" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
                
        .row.justify-content-center.align-items-top.mb-5(titulo="Paso 5") 
          .col-lg-10 
            p.rojo #[b Patronaje delantero de falda ]        
            p Es necesario que antes de iniciar con el patronaje delantero, se tengan precisas las medidas que se van a requerir, para la explicación de este paso se han tenido en cuenta las siguientes:               
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Contorno de cintura: 68 cm
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Contorno de cadera: 96 cm
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Alto de cadera: 18 cm
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Largo de falda: 60 cm
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Separación de busto: 18 cm
            p.mt-3 Te invito a seguir el paso a paso de este patronaje en el siguiente vídeo
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p Adicionalmente, observe con atención el video “ Patronaje delantero de falda”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=ljWlKVgj-Hw" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
                              
        .row.justify-content-center.align-items-top.mb-5(titulo="Paso 6") 
          .col-lg-10 
            p.rojo #[b Despiece, costura e industrialización de patrones]
            p Una vez que hemos finalizado el paso 4: patronaje posterior de falda; y  el paso 5: patronaje delantero de falda, procedemos al despiece e industrialización de patrones. 
            p Es muy importante tener en cuenta que se debe dejar i cm de costura en la cintura, 1 cm de costura en los costados, y 3 cm en la línea de ruedo.         
            p Así mismo no se debe olvidar dejar las marcaciones de pinza en la parte superior, y la marcación de cadera en el respectivo costado, junto con la marcación del ruedo.
            p Es importante nombrar los moldes, esto con el fin de evitar errores al realizar los cortes.
            p Estos y otros pasos, podrás encontrarlos en el siguiente vídeo:
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9 
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p Adicionalmente, observe con atención el video “Despiece, costura e industrialización de patrones”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=g03DnF8CVng" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
                
        .row.justify-content-center.align-items-top.mb-5(titulo="Paso 7") 
          .col-lg-10 
            p.rojo #[b Corte de pretina en entretela] 
            p Para llevar a cabo el corte de la entretela, deberá fijarse el respectivo patrón de la pretina, mediante pesos, con el fin de evitar errores de medida en el corte
            p El siguiente vídeo explica de manera precisa cómo realizar el proceso:             
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p Adicionalmente, observe con atención el video “Corte de pretina en entretela”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Rq3OQSxBFas" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
                              
        .row.justify-content-center.align-items-top.mb-5(titulo="Paso 8") 
          .col-lg-10 
            p.rojo #[b Corte de corte de la falda básica]
            p Como ya lo hemos visto en el vídeo anterior, es necesario antes de iniciar el corte, poner pesas sobre la tela, esto con el fin de evitar errores en el corte.
            p Una vez señalizado el patrón sobre la tela, y posterior fijar ésta mediante pesas, se procede a realizar el respectivo corte. A medida que se avanza el corte, se debe ir realizando las marcas con piquete. Todo esto lo hacemos sosteniendo la tela, con el fin de evitar deslizamiento del material, y errores en el corte.
            p Se debe ser preciso, tanto al marcar como al cortar el patrón signado, por lo que te invito a revisar el pasos a paso de manera detallada en el siguiente vídeo:           
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p Adicionalmente, observe con atención el video “Corte de corte de la falda básica”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=w9GGdFRgpzY" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
                
        .row.justify-content-center.align-items-top.mb-5(titulo="Paso 9") 
          .col-lg-10 
            p.rojo #[b Piezas cortadas, revisión]
            p Una vez cortadas las piezas, se dispone del delantero, que está en una sola pieza, la parte posterior de la falda, que la encontramos en dos piezas separadas, izquierda y derecha, y por último la pretina.
            p Posteriormente se marcan pinzas, para continuar con la confección de la falda básica.
            p Con el fin de facilitarle la identificación en el corte las piezas, te invitamos a ver el paso a paso en el siguiente vídeo        
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9 
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p Adicionalmente, observe con atención el video “Piezas cortadas, revisión”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=haKjHIqWpGU" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
                              
        .row.justify-content-center.align-items-top.mb-5(titulo="Paso 10") 
          .col-lg-10 
            p.rojo #[b Procesos de preparación en ensamble de falda]
            p Hemos llegado a la preparación para llevar a cabo el ensamble de la falda que estamos confeccionando, para esto es muy importante tener en cuenta las partes que componen cada una de las piezas en las cuales estamos trabajando:            
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Cintura
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Costados
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Centro atrás, para la parte posterior.
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Ruedo 
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Pretina
            p.mt-3 Para la marcación del eje de pinza se coloca la plantilla sobre el delantero, se ubica según los piquetes de pinza y el costado de forma que coincida, se hace la marcación del eje de pinza utilizando la plantilla.
            p En la parte posterior, además de la marcación, se debe colocar una entretela de 2 cm de ancho por 20 cm de largo, con el fin de dar mayor cuerpo o firmeza en la parte donde irá puesta la cremallera.
            p No olvidar seguir las instrucciones del entretelado, tal como nos lo explica el vídeo a continuación:
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p Adicionalmente, observe con atención el video “Procesos de preparación en ensamble de falda”. 
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=qYml4Zt6HwQ" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
                
        .row.justify-content-center.align-items-top.mb-5(titulo="Paso 11") 
          .col-lg-10 
            p.rojo #[b Ensamble de la falda básica]
            p Para realizar el ensamble de falda, iniciamos por cerrar los costados a 1 cm del margen de la tela. Se debe comenzar a cerrar de la base hacia la cintura, sin olvidar el margen de costura indicado anteriormente.
            p Los piquetes realizados en la prenda, nos servirán de guía en este paso. Una vez cerrados los costados, se procede asentar la costura, usando la plancha, y después se procede a abrir las costuras, para esta acción, nos ayudamos del burro de planchar, teniendo en cuenta que el costado esté sobre el burro. Siempre se debe verificar la calidad del planchado, limpio y sin arrugas.
            p Para colocar la pretina, se debe hacer la marcación tanto al lado derecho, como al izquierdo de la cremallera, para que no quede coja la pretina al momento de pegarla, esta marcación se hace midiendo la cintura hacia abajo 1 cm.
            p Para pegar la pretina, se debe iniciar desde el centro donde está la caja, allí ubicar el orillo de la pretina derecho con derecho.
            p Una explicación más detallada de este paso a paso, podrá encontrarlo en el siguiente vídeo.
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p Adicionalmente, observe con atención el video “Ensamble de la falda básica”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=N_HOblGA_SU" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
                              
        .row.justify-content-center.align-items-top.mb-5(titulo="Paso 12") 
          .col-lg-10 
            p.rojo #[b Proceso de terminación de falda ]
            p La terminación de la falda básica, requiere unos pasos muy sencillos, estos son:
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Marcación del ojal, éste debe quedar en todo el centro de la pretina y a 1 cm del borde.
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Marcación del botón; una vez realizado el ojal, levantamos la pretina y marcamos el punto de ubicación en donde irá el botón.
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg",alt='tema3').img-icon 
                .list__txt 
                    span Pegar botón, para este paso ubicamos el botón en las  mordazas de la máquina botonadora, teniendo en cuenta que los orificios queden alineados a la aguja, posteriormente ubicamos la pretina por la marcación, y unimos botón y tela. 
            p.mt-3 Una clara explicación de este paso, se encuentra en el vídeo. Esperamos que la confección de su falda básica quede con todas las condiciones de calidad esperadas. 
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p Adicionalmente, observe con atención el video “Proceso de terminación de falda”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Q4TtVwonSdQ" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video

    
    p(data-aos="fade-right") A continuación, se presenta un vídeo tutorial sobre 
      strong.color los hilos utilizados en la confección
      |, que esperamos sirva como complemento a la información que se encuentra en el componente formativo.

    .video.mt-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/3jnetG5VBEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Video. Description

    Separador
    #t_3_3.titulo-segundo
      .h2 3.3 Orden operacional de confección de pantalón
    
    p.mb-4 En la siguiente tabla se muestra el proceso de confección de un pantalón.

    .BorTit.mt-5 #[b Tabla 4]  Orden operacional de pantalón clásico      
    .tabla-b.color-acento-contenido.mt-5(data-aos="zoom-in")
      table.mb-4
        caption Nota: Biblioteca SENA
        tr.bg-1
          td.text-center #[b Preparación de las piezas]
          td.text-center #[b Proceso de plantillado fusionado y pre-hormado]
        tr
          td.tab-bold.br-tabble Montaje de cierre, cremallera, corredera o zipper (aletilla y aletillón). 
          td Para el montaje de una cremallera con sistema de aletilla y aletillón, es necesario identificar cada una de las piezas y tener en cuenta que los acabados y los pasos para el ensamble y el desarrollo pueden variar.
            .col-lg-7
              a(data-aos="zoom-in").anexo.mt-3.mb-lg-0(href="https://www.youtube.com/watch?v=4pMSfzpnmYg&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web]. Montaje de Cremallera - Aletilla y Aletillón.
        tr
          td.tab-bold.br-tabble Preparación de bolsillos. 
          td En la elaboración de bolsillos, existen diferentes tipos, formas y cantidad de piezas que permiten tener un óptimo desarrollo de la operación, es necesario identificar el tipo de prenda, material y calidad con la que se debe desarrollar la prenda, cada uno de estos elementos varían otorgando más operaciones.
        tr
          td.tab-bold.br-tabble Bolsillo de ribete sencillo.
          td Existen diferentes tipos de bolsillos de ribete, de igual manera infinidad de formas para confeccionarlos, se debe tener en cuenta que su orden varía dependiendo el tipo de complemento del bolsillo.
        

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-12.col-lg-8
        .tarje.color-primario.he-4-cus.px-4.my-4.pt-4
          p.mb-4.mx-4.text-center #[b A continuación, se presentan un vídeo tutorial sobre Confección de pantalón de hombre, que esperamos sirva como complemento de la información que se encuentra en el curso.]
          .row.justify-content-center.align-items-center.mb-5
            .col-sm-12.col-lg-10.mb-3 
              .fondo21.p-3.mb-4
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img.img-a.img-t(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0          
                        p.my-2 Adicionalmente, observe con atención el video “Confección pantalón hombre”.
                      .col-sm-auto
                        a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=NHtzg2UrKHs" target="_blank")
                          span Ir al sitio
                          i.fas.fa-video     

    Separador
    #t_3_4.titulo-segundo
      .h2 3.4 Orden operacional de confección de prendas en tejido de punto
    
    p.mt-5 En la siguiente tabla se muestra el proceso operacional para la confección de prendas en tejido de punto.   
    
    .BorTit.mt-5 Tabla 5  Orden operacional de camiseta tipo polo      
    .tabla-b.color-acento-contenido.my-3.mb-5(data-aos="zoom-in")
      .teb.tabla-b__header
        h4.mb-0  Confección de camiseta tipo polo     
      table
        caption Nota: Biblioteca SENA
        tr
          td.tab-bold.br-tabble Operaciones preparación
          td Pechera, cuello, bolsillo entre otras.
        tr
          td.tab-bold.br-tabble Operaciones ensamble 
          td Unir por hombros, montar mangas, cerrar por costados, dobladillar ruedo, entre otras.
        tr
          td.tab-bold.br-tabble Operaciones de terminados
          td Ojalar, botonar, revisar, planchar, empacar, entre otras.

    
    .mb-4.d-flex.mb-5
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white.mx-4(data-aos="fade-right") Confección de camiseta tipo polo
        img.clase2.col-lg.d-none.d-lg-flex(src='@/assets/ilustraciones/vot.svg' data-aos="fade-left",alt='tema3') 


    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-5
        img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/ilustraciones/polo.png',alt='tema3')
      .col-sm-12.col-lg-7
        p.mb-4 Un polo es una prenda de punto para el tronco que tiene la misma forma que una camiseta o playera, pero además tiene cuello, llegando también hasta la cintura y que puede tener manga larga o corta. Típicamente tiene una abertura delantera con dos o tres botones para ajustar el cuello y puede tener un bolsillo e incluso sustituir los botones por una cremallera. Esta fue ideada en el siglo XX para uniformar a los equipos que practicaban deporte.
        p.mb-4 En el siguiente paso a paso, podrá encontrar una clara orientación para la fabricación de éste tipo de prenda.
        p.mb-4 ¡Bienvenido!      
  

    .bg99.p-5.mb-5  
      LineaTiempoC
        .row.justify-content-center.align-items-center(titulo="Paso 1")
          .col-lg-10
            h5.rojo Alistamiento en la confección de la camiseta tipo polo
            p Para iniciar la confección de la camiseta tipo polo, deberás tener a mano lo correspondiente a:
            .row  
              .col-lg-5
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 1.
                    .list__txt 
                        span Ficha técnica.
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 2.
                    .list__txt 
                        span Muestra física.
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 3.
                    .list__txt 
                        span El paquete de patrones.
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 4.
                    .list__txt 
                        span Las herramientas y utensilios de trabajo, incluidos los pies de la máquina y la guía dobladilladora, para llevar a cabo la confección.
              .col-lg-5                      
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 5.
                    .list__txt 
                        span Material para la confección, previamente cortado.
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 6.
                    .list__txt 
                        span Insumos como: hiladillo, botones, tallas y marquillas, puños y cuello tejidos, y por último la hilaza
              
            p.mt-4 En el siguiente vídeo podrá revisar este paso a paso
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 1: Alistamiento para la confección de la camiseta tipo polo ”. 
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=wsb9glAu1qk&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=12" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
          
        .row.justify-content-center.align-items-center(titulo="Paso 2")
          .col-lg-10
            h5.rojo Prehormar pechera y hacer quiebre en delantero
            p La preparación de este paso inicia haciendo quiebre por el centro frente, en donde se tiene el delantero doblado, esto se hace para ubicar la pechera, la cual debe estar previamente fusionada, con el fin de tener un producto más prolijo, se usa una plantilla, para hacer el quiebre del doblez y así proceder a dobladillar la pechera.
            p En el siguiente vídeo podrá revisar este paso a paso de forma detallada
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 2: Prehormar pechera y hacer quiebre en delantero”.  
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=v_yemOgg9Rw&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=11" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video

        .row.justify-content-center.align-items-center(titulo="Paso 3")
          .col-lg-10
            h5.rojo Pegar pechera 
            p La confección de la pechera, debe contar con una guía técnica que especifique el tipo de camiseta y modelo.
            p En la parte del patronaje, se indican las piezas de confección, es necesario revisar que estas vengan completas, así como sus medidas, con el fin de verificar tallas.
            p También es necesario contar con la ficha técnica de insumos y confección, en donde se indique todos los requerimientos de hilos e insumos. Y por último algo muy importante, que son las indicaciones de confección con la ruta operacional de la prenda, es decir, el paso a paso.
            p Esta guía técnica, también incluye las condiciones de calidad en cada una de las operaciones de confección.          
            p En el siguiente vídeo podrá revisar el paso a paso para pegar la pechera
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 3: Pegar pechera ”.  
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=5B1k2XznFlg&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=20" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
            
        .row.justify-content-center.align-items-center(titulo="Paso 4")
          .col-lg-10
            h5.rojo Unir por hombros
            p La unión de la prenda por hombros, inicia al colocar las piezas de enfrentando derecho con derecho, de tal forma que queden alineadas y se procede a coser por el orillo.
            p La forma de llevar a cabo este procedimiento podrá ser visualizada en el siguiente vídeo
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 4: Unir por hombros ”.  
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=rBrE6bikCRw&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=10" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video   

        .row.justify-content-center.align-items-center(titulo="Paso 5")
          .col-lg-10
            h5.rojo Pegar puños tejidos a mangas
            p Para realizar la operación de pegar puños tejidos a mangas, debe tenerse en cuenta que se debe alinear la tela, y después de colocar el puño, se ayuda del prensatela para iniciar la costura.
            p Es importante tener cuidado la alineación de las telas, tanto al principio como al final de la manga, evitando así que se corran estas.
            p En el siguiente vídeo, podrá apreciar el paso a paso de esta operación
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 5: Pegar puños tejidos a mangas ”. 
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=WiAEkGtqQG4&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=9" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video   
            
        .row.justify-content-center.align-items-center(titulo="Paso 6")
          .col-lg-10
            h5.rojo Pespuntar puños de mangas
            p Esta operación se realiza por el lado derecho y con ayuda del pie prensatela especial de ¼ con prensado derecho.
            p Es un proceso fácil de realizar, y en el siguiente vídeo podrá revisar este paso a paso
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 6: Pespuntar puños de mangas ”.  
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=HBleW0yTvAg&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=8" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video    

        .row.justify-content-center.align-items-center(titulo="Paso 7")
          .col-lg-10
            h5.rojo Pespuntar hombros
            p Se requiere de un pie con prensado 1/4, derecho, según se indica en la firma técnica de este procedimiento.
            p En el siguiente vídeo podrá revisar este paso a paso:           
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 7: Pespuntar hombros ”. 
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=SKK9Trf8254&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=7" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video    
                                      
        .row.justify-content-center.align-items-center(titulo="Paso 8")
          .col-lg-10
            h5.rojo fijar puntas de cuello
            p Para llevar a cabo esta operación, primero se debe refilar las puntas que tienen los cuellos tejidos, procediendo a pegar desde la pechera, fijándola a 7 milímetros, solo la punta (medio centímetro aproximadamente).
            p Posteriormente se hace lo mismo con el otro extremo, tal como se nos indica en el paso a paso que encontrará en el siguiente vídeo:
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 8: Fijar puntas de cuello”.  
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Z_XH8YaJIlA&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=6" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video    

        .row.justify-content-center.align-items-center(titulo="Paso 9")
          .col-lg-10
            h5.rojo Pegar cuello
            p Para este paso, se utiliza el pie de hiladillo, que se debe colocar en donde va el escote que ya está fijo el cuello, teniendo en cuenta las marcaciones que se han hecho en la pieza.
            p Se explica de forma clara este paso en el siguiente vídeo:
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 9: Pegar cuello ”.  
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=NXY9Tb77E3o&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=5" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video    
            
        .row.justify-content-center.align-items-center(titulo="Paso 10")
          .col-lg-10
            h5.rojo Pespuntar cuello
            p Utilizando el pie compensado 1/16 izquierdo, se da inicio al pespunte del cuello, nos vamos guiando, abriendo la costura, evitando los prenses y las arrugas.
            p En el siguiente vídeo podrá revisar este paso a paso:            
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 10: Pespuntar cuello ”.  
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=9c0_G42xbeI&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=3" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video    

        .row.justify-content-center.align-items-center(titulo="Paso 11")
          .col-lg-10
            h5.rojo pespuntar pechera
            p Para iniciar el pespunte de la pechera, retomamos la parte de la pechera que había quedado sin coser, de acuerdo con el paso a pasos anterior.
            p En el siguiente vídeo podrá observar este paso a paso.
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 11: Pespuntar pechera”.  
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Eth7yvWIiEc&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video    
            
        .row.justify-content-center.align-items-center(titulo="Paso 12")
          .col-lg-10
            h5.rojo Pegar mangas
            p Las mangas se apegan, teniendo la camiseta al derecho y se coloca la manga de igual forma (al derechos), teniendo en cuenta que el piquete quede en la parte posterior de la tela.
            p Las indicaciones precisas de esta operación, pueden ser observadas en el siguiente vídeo
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 12: Pegar mangas ”.  
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=K571s6w4_Xg&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=19" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video   

        .row.justify-content-center.align-items-center(titulo="Paso 13")
          .col-lg-10
            h5.rojo Pespuntar mangas
            p En la operación de pespuntar mangas, se debe tumbar la tela hacia el cuerpo de la camiseta, se recomienda utilizar el pie compensado de ¼ derecho 
            p En el siguiente vídeo podrá revisar este paso a paso          
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 13: Pespuntar mangas ”.  
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Dh4-NQONpuY&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=18" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video    
            
        .row.justify-content-center.align-items-center(titulo="Paso 14")
          .col-lg-10
            h5.rojo Unir por costados 
            p La operación de unir de costados, se realiza con solo filete, o también con puntada de refuerzo o puntada de seguridad.
            p Esta operación requiere atención especial, por lo que le invito a revisar el siguiente vídeo en donde se detalla el paso a paso:
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 14: Unir por costados ”.  
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=oEu8URPgkVI&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=17" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video    

        .row.justify-content-center.align-items-center(titulo="Paso 15")
          .col-lg-10
            h5.rojo Filetear pechera
            p El filete en la pechera requiere hacer remates, al inicio de la labor, así como trabajar de un lado de la pieza, cada uno de estos pasos están descritos en el siguiente vídeo.            
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 15: Filetear pechera ”.  
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=qpEL-O1k2I0&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=16" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video    
        
        .row.justify-content-center.align-items-center(titulo="Paso 16")
          .col-lg-10
            h5.rojo Dobladillar ruedo
            p La última operación de ensamble es dobladillar ruedo, para esto se ayuda de la guía dobladilladora graduable, colocándola a 2 ½ cm, ya que éste es el ancho del dobladillo. Se trabaja con la puntada con dos agujas, con una distancia entre agujas, de ¼ de pulgada.
            p Para llevar a cabo la operación, revisar el siguiente vídeo, en donde encontrará el respectivo paso a paso:           
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 16: Dobladillar ruedo ”.  
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=CBhvm1ICgs8&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=15" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video    

        .row.justify-content-center.align-items-center(titulo="Paso 17")
          .col-lg-10
            h5.rojo Marcar ojales y ojalar
            p La operaciones de terminado inician con marcar los ojales. Para esto se utiliza una plantilla, y haciendo uso del prensa tela se procede a su confección.
            p El vídeo que encuentra a continuación explica de forma clara el paso a paso para marcar ojales y ojalar.           
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 17: Marcar ojales y ojalar ”. 
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=e2WGjWOmIzA&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=14" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video    
              
        .row.justify-content-center.align-items-center(titulo="Paso 18")
          .col-lg-10
            h5.rojo Marcar botones y botonar
            p Primero se marca en donde van los botones, ayudándose del ojal previamente hecho, una vez marcado se procede a pegar el botón
            p En el siguiente vídeo podrá revisar este paso a paso:            
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección camiseta tipo polo. Paso 18: Marcar botones y botonar ”. 
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=BYFyy5WU-Uo&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=13" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video   

    .BorTit.mt-5 Tabla 6  Orden operacional de pantalón sudadera       
    .tabla-b.color-acento-contenido.my-5(data-aos="zoom-in")
      .tabla-b__header
        h5.mb-0.text-white Confección de pantalón sudadera      
      table
        caption Nota: Biblioteca SENA
        tr
          td.tab-bold.br-tabble Operaciones preparación
          td Colocar bolsillo lateral, bolsillos posteriores, unir forro entre otras.
        tr
          td.tab-bold.br-tabble Operaciones ensamble 
          td Unir por entrepierna, unir por costados, pegar elástico incluyendo forro, dobladillar botas entre otras.
        tr
          td.tab-bold.br-tabble Operaciones de terminados
          td Revisar, empacar entre otras.                                              

    
    .mb-4.d-flex.mb-5
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white.mx-4(data-aos="fade-right") Confección de pantalones deportivos
        img.clase2.col-lg.d-none.d-lg-flex(src='@/assets/ilustraciones/vot.svg' data-aos="fade-left",alt='tema3') 

    .row.justify-content-center.align-items-center 
      .col-sm-12.col-lg-7.mb-5
        p.mb-3 Los pantalones deportivos son un tipo de pantalón diseñado para practicar actividad deportiva, o bien, para brindar comodidad al descansar. También son usados en otros ámbitos como ropa casual.
        p.mb-3 En Colombia les conoce como
          strong.color “sudadera o pantalón sudadera”
          |, en Chile buzo, en Ecuador como calentador y en Venezuela como mono.
        p.mb-3 Esperamos que el paso a paso que encontrará a continuación, oriente la confección de esta prenda.
        p ¡Bienvenido!
      .col-sm-12.col-lg-5.mb-5
        img.img-t.img-a(src='@/assets/ilustraciones/chic.png',alt='tema3')     

    .bg99.p-5.mb-5
      LineaTiempoC
        .row.justify-content-center.align-items-center(titulo="Paso 1")
          .col-lg-10
            h5.rojo Alistamiento para la confección de pantalón de sudadera
            p Para iniciar la confección del pantalón de sudadera femenino, deberás tener a mano lo correspondiente a:
            .row.justify-content-center.align-items-stretch
              .col-lg-6
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 1.
                    .list__txt 
                        span Ficha técnica.
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 2.
                    .list__txt 
                        span Los patrones.
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 3.
                    .list__txt 
                        span Moldes, delantero, posterior y el bolsillo.
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 4.
                    .list__txt 
                        span Muestra física.
              .col-lg-6
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 5.
                    .list__txt 
                        span Las herramientas y utensilios de trabajo, incluidos el pie guía físico de ¼  de la máquina y la guía dobladilladora, para llevar a cabo la confección.
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 6.
                    .list__txt 
                        span Material para la confección, previamente cortado.
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 7.
                    .list__txt 
                        span Insumos como: hilo, sesgo de embone, el elástico de 4 cm.
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección pantalón de sudadera. Paso 1: Alistamiento para la confección de pantalón sudadera”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=G-cwBVckDq4&list=PLkc5n6npRWkiqk_Ipq85h4kbZPH6Pl4xu&index=13" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video   

        .row.justify-content-center.align-items-center(titulo="Paso 2")
          .col-lg-10
            h5.rojo Medir, cortar, coser elástico y marcación 
            p Se inicia con las operaciones de preparación.
            p Se mide el elástico, y posteriormente se corta y se cose, a 1 cm.
            p Una vez realizado esto, se marcan las cuartas partes del elástico, para dar inicio a la confección de la pieza.
            p En el siguiente vídeo podrá revisar este paso a paso de forma detallada
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección pantalón de sudadera. Paso 2: Medir, cortar, coser elástico y marcación”. 
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=uuWDflzDFGA&list=PLkc5n6npRWkiqk_Ipq85h4kbZPH6Pl4xu&index=12" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video

        .row.justify-content-center.align-items-center(titulo="Paso 3")
          .col-lg-10
            h5.rojo Coser bolsillos laterales
            p Para iniciar la confección del bolsillo lateral, deberemos ayudarnos de una plantilla lateral, que nos marca éste.
            p previamente el bolsillo tiene sus piquetes y así se procede a coser, teniendo en cuenta la marcación hecha anteriormente
            p En el siguiente vídeo podrá revisar el paso a paso para coser bolsillos laterales  
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección pantalón de sudadera. Paso 3: Coser bolsillos laterales”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Zwfp0oWJftk&list=PLkc5n6npRWkiqk_Ipq85h4kbZPH6Pl4xu&index=11" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
            
        .row.justify-content-center.align-items-center(titulo="Paso 4")
          .col-lg-10
            h5.rojo Filetear bolsillos
            p Para filetear los bolsillos debe cerrarse el fondo del bolsillo, con filete o puntada de seguridad.
            p El paso a paso de esta operación, se observa en el siguiente vídeo
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección pantalón de sudadera. Paso 4: Filetear bolsillos”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Mie5EoCZVMw&list=PLkc5n6npRWkiqk_Ipq85h4kbZPH6Pl4xu&index=10" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video

        .row.justify-content-center.align-items-center(titulo="Paso 5")
          .col-lg-10
            h5.rojo Unir costados incluyendo sesgo
            p Para realizar la operación de unir costados incluyendo sesgo de embone, se hace en la máquina plana, o también se puede utilizar un folder, para colocar el sesgo en la fileteadora.
            p El respectivo paso a paso se encuentra disponible en el siguiente vídeo 
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección pantalón de sudadera. Paso 5: Unir costados incluyendo sesgo”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=9A3TteZcgno&list=PLkc5n6npRWkiqk_Ipq85h4kbZPH6Pl4xu&index=9" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
            
        .row.justify-content-center.align-items-center(titulo="Paso 6")
          .col-lg-10
            h5.rojo Filetear costado
            p Esta operación se realiza una vez que se ha colocado el embone en ambas piernas, se procede a filetear los costados, revisando las costuras, por derecho y revés.
            p Es un proceso fácil de realizar, y en el siguiente vídeo podrá revisar este paso a paso:
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección pantalón de sudadera. Paso 6: Filetear costado”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=9ph3Sel-9Bs&list=PLkc5n6npRWkiqk_Ipq85h4kbZPH6Pl4xu&index=8Unir por entrepierna" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video

        .row.justify-content-center.align-items-center(titulo="Paso 7")
          .col-lg-10
            h5.rojo Unir por entrepierna
            p Para unir la entrepierna, se sigue ensamblando la pierna, con filete de puntada de seguridad, teniendo en cuenta los piquetes que tenga la pieza, para que así coincidan las pieza. 
            p En el siguiente vídeo podrá revisar este paso a paso:
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección pantalón de sudadera. Paso 7: Unir por entrepierna”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=79XxGyuhmQg&list=PLkc5n6npRWkiqk_Ipq85h4kbZPH6Pl4xu&index=7" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
        
        .row.justify-content-center.align-items-center(titulo="Paso 8")
          .col-lg-10
            h5.rojo Unir tiros
            p Para llevar a cabo esta operación, primero se une por tiros iniciando por la parte posterior, guiándose por los piquetes hechos anteriormente.
            p Es necesario controlar permanentemente la unión de las piezas y las costuras, tal como se nos indica en el paso a paso que encontrará en el siguiente vídeo:
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección pantalón de sudadera. Paso 8: Unir tiros”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=MriPZnacsDI&list=PLkc5n6npRWkiqk_Ipq85h4kbZPH6Pl4xu&index=6Fijar elástico" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video

        .row.justify-content-center.align-items-center(titulo="Paso 9")
          .col-lg-10
            h5.rojo Fijar elástico
            p El elástico previamente preparado, se fija por la cintura, teniendo en cuenta la costura de la unión, coincidiendo el orillo de la tela y del elástico
            p Se explica de forma clara este paso en el siguiente vídeo:
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección pantalón de sudadera. Paso 9: Fijar elástico”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Eg9HQYZVyKA&list=PLkc5n6npRWkiqk_Ipq85h4kbZPH6Pl4xu&index=5" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
        
        .row.justify-content-center.align-items-center(titulo="Paso 10")
          .col-lg-10
            h5.rojo Dobladillar botas
            p Para la operación de dobladillar la bota, debe hacerse un dobladillo a 2.5 cm, con ayuda de la guía dobladilladora
            p En el siguiente vídeo podrá revisar este paso a paso:  
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección pantalón de sudadera. Paso 10: Dobladillar botas”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=0qf5jZGpnZo&list=PLkc5n6npRWkiqk_Ipq85h4kbZPH6Pl4xu&index=4" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video

        .row.justify-content-center.align-items-center(titulo="Paso 11")
          .col-lg-10
            h5.rojo Sentar elástico
            p utiliza una guía como la cinta de enmascarar o una guía imantada.   
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección pantalón de sudadera. Paso 11: Sentar elástico”.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=qVoGjoahb7g&list=PLkc5n6npRWkiqk_Ipq85h4kbZPH6Pl4xu&index=3" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video
            
        .row.justify-content-center.align-items-center(titulo="Paso 12")
          .col-lg-10
            h5.rojo Limpiar y revisar prenda
            p La operaciones de terminado inician al limpiar, revisar y pulir la prenda, se inicia con la parte superior, por el revés, después se revisa el posterior, desde la parte superior a la inferior.
            p Luego se hace la misma operación por el derecho de la prenda, incluyendo bolsillos y botas.
            p Las indicaciones precisas de esta operación, pueden ser observadas en el siguiente:  
            .row.justify-content-center.align-items-center.mt-5
              .col-sm-12.col-lg-9  
                .fondo21.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-t.img-a(src="@/assets/ilustraciones/videop.svg",alt='tema3')
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0          
                          p.my-1 Adicionalmente, observe con atención el video “Confección pantalón de sudadera. Paso 12: Limpiar y revisar prenda”. 
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=_ubzS_tkjNE&list=PLkc5n6npRWkiqk_Ipq85h4kbZPH6Pl4xu&index=2" target="_blank")
                            span Ir al sitio
                            i.fas.fa-video

</template>
<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
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
