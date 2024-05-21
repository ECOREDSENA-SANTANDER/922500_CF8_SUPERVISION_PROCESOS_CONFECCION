<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="zoom-in-right") Normas generales para la confección de prendas de vestir 

    .row.fondo-gr.align-items-center.py-4.py-md-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center(data-aos="fade-down")
    
          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-7
              p Los oficios de la confección de prendas implican varios procesos, desde la manipulación del textil cortado hasta la ejecución a través de maquinaria de acuerdo con cada proceso en particular.   Dichos procesos requieren, por ejemplo, de la manipulación de sujetadores y de arranques en los que el operario, es su principal actor para el funcionamiento de cada una de estas partes.  Al tener presente que es la persona quien está implícita dentro de cada uno de estos procesos es importante identificar las normas de seguridad que permitan considerar el concepto de ergonomía dentro de la labor para que no tenga afectaciones de ningún tipo.
            .col-md-10.col-lg-5.col-10
              img.img-t.img-a.mt-4.mb-4(data-aos="zoom-in")(src='@/assets/ilustraciones/aa.png', alt='tema2') 
  
    p.mt-4(data-aos="fade-left") La ergonomía,  incluye especialidades como la industrial y la biomecánica orientadas al ámbito ocupacional, se enfoca en aspectos físicos del trabajo como la fuerza, la postura y la realización de tareas repetitivas por tiempos prolongados. Es crucial considerar estos elementos en cada tarea, siendo responsabilidad del supervisor en procesos de confección asegurar que su equipo cuente con espacios y herramientas que protejan su bienestar. A continuación, se ofrecerán lineamientos para apoyar esta supervisión. 
    
    Separador
    #t_2_1.titulo-segundo
      .h2 2.1  Normas generales de seguridad para la labor en la confección de prendas  


    p.mt-5(data-aos="fade-right") Antes de iniciar cualquier actividad comprendida en la confección es importante que la persona se disponga físicamente para la labor, por ello se recomiendan algunos estiramientos y contar con la disposición para iniciar, dado que se presentan molestias como las que puede explorar en el Figura 1.
    
    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-sm-12.col-lg-12
        .row.justify-content-center
          .col-lg-6.col-md-10.col-10.mb-4 
            img.img-t.img-a.my-0(src='@/assets/ilustraciones/abc.png', alt='tema2')                  
          .col-lg-6.bg-35.mb-3.p-5
            .row.justify-content-center.align-items-center
              .col-lg-12.mt-4
                .BorTit #[b Figura 1] Molestias más comunes
                .bg34   
                  .row.justify-content-center.align-items-center.mt-4
                    .col-lg-6 
                      img.img-t.img-a.my-2.d-none.d-lg-block(src='@/assets/ilustraciones/img4.svg', alt='Una persona sentada ligeramente inclinada hacia adelante, en donde se señalan con flechas las posibles dolencias o molestias que puede causar mucho tiempo en esa posición, la cual simula el trabajo como operario de maquina.')                  
                    .col-lg-6.p-3.my-1 
                      p.mb-0 14%: dolor de cabeza.
                      p.mb-0 24%: dolor en cuerpo y hombros.
                      p.mb-0 57%: dolor en la espalda.
                      p.mb-0 16%: dolor en las nalgas.
                      p.mb-0 19%: dolor en los muslos.
                      p.mb-0 29%: dolor en rodillas y piernas.   
                  .row.justify-content-center.align-items-center
                    .col-lg-12                        
                      figcaption Nota: Singer (2014) 
    
    p.mb-5 Por ello para esa misma disposición en esta actividad se deben contemplar:             
    

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-10
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/ilustraciones/infro.png', alt='tema2')
              

          .tarjeta.color-acento-botonesr.p-3(x="19%" y="26%" numero="")
            p.mb-2 #[b Comodidad:] en el desplazamiento de los puntos dentro del espacio de trabajo.

          .tarjeta.color-acento-botonesr.p-3(x="11%" y="55%" numero="")
            p.mb-2 #[b Dotación:] dotación para el operario; bata, lentes de protección, preferiblemente no usar accesorios que impliquen el contacto con los materiales, herramientas o maquinarias, usar zapato cerrado para evitar accidentes por la caída de elementos cortopunzantes.
          
          .tarjeta.color-acento-botonesr.p-3(x="25.5%" y="80%" numero="")
            p.mb-2 #[b Protección:] protección de puntos eléctricos, tener presente que es preferible que dentro del espacio de trabajo no tener bebidas o comida.
          
          .tarjeta.color-acento-botonesr.p-3(x="55%" y="89%" numero="")
            p.mb-2 #[b Orden:] orden, limpieza y cuidado de los elementos.

          .tarjeta.color-acento-botonesr.p-3(x="81%" y="73%" numero="")
            p.mb-2 #[b Ruido:] control del ruido generado por la maquinaria.

          .tarjeta.color-acento-botonesr.p-3(x="89%" y="45%" numero="")
            p.mb-2 #[b Ventilación:] ventilación adecuada.

          .tarjeta.color-acento-botonesr.p-3(x="73%" y="18%" numero="")
            p.mb-2 #[b Temperatura:] factores relacionados a la temperatura, aireación del lugar o control de la temperatura del sitio.	

          .tarjeta.color-acento-botonesr.p-3(x="45%" y="11%" numero="")
            p.mb-2 #[b Luz:] la luz e iluminación del espacio de trabajo.	
    
    p.mt-5.mb-4 Por lo anterior, se sugieren las siguientes condiciones iniciales como en la figura 2 para evitar molestias durante la práctica:      

    .bg1.mb-5
      SlyderA
        .row.justify-content-center.align-items-top.p-5
          .col-lg-3.col-md-10.col-10.mb-4
            .titulo-sexto.color-acento-contenido
              h5 Figura 2
              | Postura ideal
            .cajablanca.p-2
              img.img-a.img-t(src='@/assets/ilustraciones/img5.svg' alt="La imagen presenta la silueta de una persona sentada en una silla, con la espalda recta, los pies completamente apoyados en el suelo y la mirada al frente. ")
            figcaption.segundo Nota. Singer (2014)
          .col-lg-5.col-md-12.col-12.mb-4 
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-car-side.mx-3
                | Mantener la espalda erguida y alineada, apoyando la columna contra el respaldo de la silla.
              li.d-flex.mb-0
                i.fas.fa-car-side.mx-3
                | Repartir el peso entre la parte inferior de los glúteos.
              li.d-flex.mb-0
                i.fas.fa-car-side.mx-3
                | Las rodillas en ángulo recto con las caderas.
              li.d-flex.mb-0
                i.fas.fa-car-side.mx-3
                | Si los pies no llegan al suelo hacer uso de un reposapiés.
              li.d-flex.mb-0
                i.fas.fa-car-side.mx-3
                | No permanecer demasiado tiempo en la misma posición.

        .row.justify-content-center.align-items-top.p-5
          .col-lg-12.col-md-10.col-10
            p.text-center Una vez se tienen presentes los lineamientos anteriores en torno a la postura se debe implementar una postura como en la figura 3:
            .row.justify-content-center.align-items-top.my-5
              .col-lg-3.col-md-10.col-10
                .titulo-sexto.color-acento-contenido
                  h5 Figura 3
                  | Postura en máquina
                .cajablanca.p-2
                  img.img-a.img-t(src='@/assets/ilustraciones/img12.svg' alt="La imagen presenta la silueta de una persona sentada en una silla, con los brazos sobre en una mesa accionando una máquina de coser, y con los pies apoyados en un reposapiés. ")
                figcaption.segundo Nota. Singer (2014)
              .col-lg-5.col-md-12.col-12.mb-4    
                ul.lista-ul--color
                  li.d-flex.mb-0
                    i.fas.fa-car-side.mx-3
                    | La silla debe estar próxima a la mesa de trabajo para evitar inclinarse hacia adelante.
                  li.d-flex.mb-0
                    i.fas.fa-car-side.mx-3
                    | Es preferible que la silla tenga bordes redondeados y que sea ergonómica en la que repose un asiento siliconado o con cojín.
                  li.d-flex.mb-0
                    i.fas.fa-car-side.mx-3
                    | La altura de la mesa y la silla debe ser acorde a la estatura del operario y los brazos a la altura de la mesa.
                  li.d-flex.mb-0
                    i.fas.fa-car-side.mx-3
                    |El material para confeccionar estará a la mano del operario para evitar estiramientos y desplazamientos innecesarios.
                  li.d-flex.mb-0
                    i.fas.fa-car-side.mx-3
                    | En la mesa solo deben estar los elementos necesarios para el desarrollo de la labor.

        .row.justify-content-center.align-items-center.p-5
          .col-lg-12.col-md-10.col-10
            p.text-center Si la labor en la confección implica estar de pie para la realización de alguna labor contemplada en la ruta operacional se sugiere como en la figura 4:
            .row.justify-content-center.align-items-top.my-5
              .col-lg-3.col-md-8.col-8
                .titulo-sexto.color-acento-contenido
                  h5.per Figura 4
                  | Postura de pie
                .cajablanca.p-2
                  img.img-a.img-t(src='@/assets/ilustraciones/img13.svg' alt="La imagen presenta la silueta de una persona de pie, apoyando los brazos sobre una mesa y uno de los pies descansando sobre un escalón bajo la mesa. ")
                figcaption.segundo Nota. Singer (2014)
              .col-lg-5.col-md-12.col-12  
                ul.lista-ul--color
                  li.d-flex.mb-0
                    i.fas.fa-car-side.mx-3
                    | Mantener un pie en alto apoyándolo sobre un escalón que pueda tener la mesa o se puede adherir como elemento un reposapiés.
                  li.d-flex.mb-0
                    i.fas.fa-car-side.mx-3
                    | Evitar estar agachado o encorvado.
                  li.d-flex.mb-0
                    i.fas.fa-car-side.mx-3
                    | Utilizar calzado ergonómico.
      

        .row.justify-content-center.align-items-center.p-5
          .col-lg-12.col-md-12.col-12
            p.text-center Si la labor implica levantar algún peso es importante de igual manera tener presente lo ilustrado en la figura 5:
            .row.justify-content-center.align-items-top.my-5
              .col-lg-3.col-md-10.col-10
                .titulo-sexto.color-acento-contenido
                  h5.per Figura 5
                  | Carga de elementos
                .cajablanca.p-2
                  img.img-a.img-t(src='@/assets/ilustraciones/img14.svg' alt="La imagen presenta la manera correcta para ponerse de pie levantando una carga desde el piso: espalda recta, rodillas flexionadas, cuello erguido y brazos extendidos. Carga siempre cerca al cuerpo. ")
                figcaption.segundo Nota. Singer (2014)
              .col-lg-5.col-md-12.col-12
                ul.lista-ul--color
                  li.d-flex.mb-0
                    i.fas.fa-car-side.mx-3
                    | Flexionar las rodillas, no la espalda y tener los pies firmes bien apoyados.
                  li.d-flex.mb-0
                    i.fas.fa-car-side.mx-3
                    | Levantarse con las piernas no con la espalda y sostener los objetos junto al cuerpo.
                  li.d-flex.mb-0
                    i.fas.fa-car-side.mx-3
                    | Si el peso es excesivo es preferible solicitar ayuda.
      
    Separador
    #t_2_2.titulo-segundo
      .h2(data-aos="fade-right") 2.2 Condiciones y espacios en el trabajo  

    p.mt-5 El entorno laboral debe diseñarse prioritariamente para salvaguardar la integridad física y psicológica de los trabajadores, creando condiciones óptimas que promuevan su bienestar. La falta de un ambiente de trabajo adecuado o la ausencia de elementos de protección adecuados puede tener consecuencias negativas, destacando la importancia de priorizar la seguridad y la salud en el trabajo.  Evitando así lo siguiente:
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-7.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-t.img-a.my-2(src='@/assets/ilustraciones/img6.svg', alt='tema2')           
          .col-lg-10(data-aos="fade-left")
            p.tab-bolde.mb-0 Aumento de fatiga.
        .hr    

        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-t.img-a.my-2(src='@/assets/ilustraciones/img7.svg', alt='tema2')           
          .col-lg-10(data-aos="fade-left")
            p.tab-bolde.mb-0 Aumento en accidentes laborales en los espacios de trabajo.
        .hr  

        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-t.img-a.my-2(src='@/assets/ilustraciones/img8.svg', alt='tema2')           
          .col-lg-10(data-aos="fade-left")
            p.tab-bolde.mb-0 Enfermedades profesionales.
        .hr  

        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-t.img-a.my-2(src='@/assets/ilustraciones/img9.svg', alt='tema2')           
          .col-lg-10(data-aos="fade-left")
            p.tab-bolde.mb-0 Tensión nerviosa.
        .hr  

        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-t.img-a.my-2(src='@/assets/ilustraciones/img10.svg', alt='tema2')           
          .col-lg-10(data-aos="fade-left")
            p.tab-bolde.mb-0 Disminución en la producción y resultados.
        .hr  

        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-t.img-a.my-2(src='@/assets/ilustraciones/img11.svg', alt='tema2')           
          .col-lg-10(data-aos="fade-left")
            p.tab-bolde.mb-0 Insatisfacción, desinterés, etc.
      .col-sm-9.col-lg-5.col-9
        img.img-t.img-a.my-2(src='@/assets/ilustraciones/imageen.png', alt='tema2')           
    
    p.mt-5(data-aos="fade-right") Estos factores pueden incidir directamente en la baja de la producción y por ende afectar a la empresa a nivel general, si bien la producción es importante, se debe tener presente que el principal recurso y más importante es el humano y se debe priorizar su bienestar. Por ello se deben tener presente las condiciones que a continuación se describen.



    TabsC.color-acento-botones.mb-5(data-aos="zoom-in-left")
      .py-3.py-md-4.bg26.px-3(titulo="Temperatura")
        .row.align-items-center.justify-content-center
          .col-lg-11.col-md-12.my-3
            p Influye directamente en el bienestar del trabajador, en su rendimiento y seguridad de los operarios, una excesiva temperatura ya sea de frío o calor puede producir fatiga, requiriendo tiempos extendidos de recuperación o descanso, en este caso se vigila la humedad del ambiente.
            p En espacios con maquinaria industrial, que generan calor durante su operación simultánea, el ambiente de trabajo puede verse afectado. Para mantener un entorno confortable, se recomienda una temperatura de 18°C. 
      
      .py-3.py-md-4.bg26.px-3(titulo="Ruido")
        .row.align-items-center.justify-content-center
          .col-lg-11.col-md-12.my-3
            p Las operaciones mecanizadas y el ruido de las máquinas pueden causar incomodidades debido a sonidos de vibración constante. En fábricas con numerosas máquinas, superando los niveles de decibeles recomendados (50 – 80), se aconseja el uso de protectores auditivos especializados, pues las consecuencias de no atender estas condiciones pueden incluir efectos patológicos, fatiga, confusión y pérdida de audición.

      
      .py-3.py-md-4.bg26.px-3(titulo="Iluminacion")
        .row.align-items-center.justify-content-center
          .col-lg-11.col-md-12.my-3
            p Generar espacios de trabajo en los que la iluminación es un factor importante es imprescindible, pero esta debe ser adecuada, dado que puede llegar afectar tanto por insuficiente o excesiva, ya que toda la actividad es guiada por la vista y en este ejercicio el ojo se contrae y se dilata constantemente.  Si este factor no es vigilado, puede ocasionar efectos como: irritación visual, inseguridad en los movimientos, ardor y resequedad en la retina.
            p A continuación en la tabla 2, se presentan los mínimos de intensidad recomendada.
            .BorTit.mt-5 #[b Tabla 2] Mínimos de intensidad recomendada en espacios de trabajo            
            .tabla-b.color-acento-contenido.mt-5(data-aos="zoom-in")
              table
                caption Nota: Biblioteca SENA
                tr.bg-1
                  td.text-center.colortt Clase de actividad
                  td.text-center.colortt Intensidad de iluminación recomendada
                tr
                  td.tab-bold.br-tabble.ertt Recinto destinado solo a estancia orientación
                  td.ertt 60 lux 
                tr
                  td.tab-bold.br-tabble.ert Trabajos en los que el ojo debe percibir grandes detalles con elevados contrastes
                  td.ert 120-150  lux
                tr
                  td.tab-bold.br-tabble.ertt Actividades que hacen necesario el reconocer detalles con reducidos contrastes
                  td.ertt 500-700 lux
                tr
                  td.tab-bold.br-tabble.ert Trabajos de precisión que requieren un reconocimiento de detalles muy precisos con unos contrastes muy reducidos
                  td.ert 1000-5100 lux 
                tr
                  td.tab-bold.br-tabble.ertt Trabajos de precisión que requieren un reconocimiento de detalles muy precisos con unos contrastes muy reducidos
                  td.ertt 2000-3000 lux
      
      
      .py-3.py-md-4.bg26.px-3(titulo="Ventilación")
        .row.align-items-center.justify-content-center
          .col-lg-11.col-md-12.my-3
            p Se debe comprender que la ventilación debe ser proporcional al espacio de trabajo, y se debe evitar confundir ventilación con circulación de aire, dado que la ventilación sustituye el aire vaciado por aire fresco y la circulación de aire mueve el aire, pero sin renovarlo. Por ello es importante que los espacios no sean completamente cerrados dado que se necesita renovar el aire, para evitar así posibles enfermedades que afectan en cadena a los trabajadores de un taller (Huamán, 2003). Algunos de los aspectos a cuidar de este factor son:
            .row.justify-content-center.align-items-center
              .col-lg-11            
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-car-side.mx-3.mb-0
                    | Dispersar el calor producido por la maquinaria y los trabajadores.
                  li.d-flex
                    i.fas.fa-car-side.mx-3.mb-0
                    | Disminución de la contaminación atmosférica.
                  li.d-flex
                    i.fas.fa-car-side.mx-3.mb-0
                    | Mantener un espacio fresco.
      
      
      .py-3.py-md-4.bg26.px-3(titulo="Descripción del puesto de trabajo")
        .row.align-items-center.justify-content-center
          .col-lg-11.col-md-12.my-3
            p Como se ha mencionado anteriormente el espacio de trabajo contribuye a un buen desarrollo de las actividades en la labor de la confección, por ello es importante tener en cuenta:
            .row.justify-content-center.align-items-center
              .col-lg-12            
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 1.
                    .list__txt 
                        span #[b El trabajador:] la persona que desarrolla la actividad debe considerar su estatura, peso, fuerza, rangos de movimiento y características físicas generales, de esta forma establecer su espacio en cuanto a mesas, sillas etc.              

                .list.mt-2
                    .list__item
                        .list__item__number
                            span 2.
                    .list__txt 
                        span #[b El puesto de trabajo:] comprende la maquinaria, herramientas, mobiliario, controladores, puntos de luz, ambientación y objetos de trabajo.
                .list.mt-2
                    .list__item
                        .list__item__number
                            span 3.
                    .list__txt 
                        span #[b Ambiente de trabajo:] temperatura, iluminación, ruido, vibraciones y demás características implícitas en el bienestar del trabajador.
              p.mt-3 Así mismo se debe tener en cuenta para prevenir lesiones:

            .row.justify-content-center.align-items-center
              .col-lg-11            
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-car-side.mx-3.mb-0
                    | Sillas adecuadas, ajustables y ergonómicas.
                  li.d-flex
                    i.fas.fa-car-side.mx-3.mb-0
                    | Soporte para pies: es importante cuando se trabaja sentado por extensas jornadas, así le puede ayudar a que el nivel de 90 grados se cumpla cuando requiera una labor en esta posición.
                  li.d-flex
                    i.fas.fa-car-side.mx-3.mb-0
                    | Ajuste de equipo: altura de mesas y máquinas de confección.
                  li.d-flex
                    i.fas.fa-car-side.mx-3.mb-0
                    | Iluminación: suficiente acorde al espacio de trabajo, en el que no genere que la persona deba esforzarse para realizar actividades en la labor de la confección.



</template>

<script>
export default {
  name: 'Tema2',
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
