(function(e){function a(a){for(var o,i,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"8d5f3127","chunk-0206bfa0":"7e00f54c","chunk-110f1f0b":"267a777d","chunk-13a6037e":"7c783580","chunk-179248a2":"59ae5f34","chunk-18f95272":"6181ad0e","chunk-2a9fce91":"fdf2a1e3","chunk-2c06842c":"a221bc3e","chunk-2d0c5615":"e3bf47c5","chunk-2d0e96ec":"7298c7f8","chunk-2d208d90":"2865485f","chunk-2d21d0e2":"318de356","chunk-2d22c123":"bdeab172","chunk-2e80bb9a":"96fe658e","chunk-319206de":"2abb35c2","chunk-36769079":"bc454c17","chunk-4cdd78c0":"7e5644f2","chunk-515a8379":"715789a0","chunk-53ccb27e":"eab4a925","chunk-55d286b8":"aa2213c0","chunk-59974754":"3e6dda21","chunk-5d1ce150":"e687a640","chunk-60cbc06b":"b40d3411","chunk-623f2040":"b0bb6d9d","chunk-659152b8":"7fea69be","chunk-6a43ec24":"c3aec84e","chunk-6e1e538a":"758e6d67","chunk-6e613899":"2b3da202","chunk-766a929b":"e41306e5","chunk-7794bb60":"af5fdaf9","chunk-c796899c":"84bb9fe7","chunk-e8a7823a":"72ee44a9","chunk-fde47172":"ce556c87",comple:"431439b3",creditos:"af3fa96a",glosario:"d87be692",intro:"ca75b340",referencias:"78334346",sintesis:"68d6a136",tema1:"55a3fa5a",tema2:"2b16df83",tema3:"a86267fa",tema4:"9b4b1e1e",tema5:"ea0067db"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"8f9cd922","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"e4a642db","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"14bc26b9","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"e766caee",creditos:"9ca98631",glosario:"a8263125",intro:"49f3053d",referencias:"47f89f89",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"38f4":function(e,a,n){e.exports=n.p+"img/3.3edf617a.svg"},"417a":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.b6c5b0f4.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),d=Object(s["a"])(c,i,t,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");u["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Ensamble de prendas de vestir",descripcionCurso:"La trazabilidad en la elaboración de prendas de vestir es fundamental, en lo concerniente a las herramientas, maquinarias e insumos utilizados. Asimismo, la comprensión de los procesos que, al combinarse, posibilitan la interpretación de patrones y permiten la materialización de productos en la confección industrial, junto con la supervisión de acabados y terminados basados en criterios técnicos y de calidad.",imagenBannerPrincipal:n("65fa"),fondoBannerPrincipal:n("417a"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1"],imagen:n("9a0a")},{clases:["banner-principal-decorativo-2"],imagen:n("95df")},{clases:["banner-principal-decorativo-3"],imagen:n("38f4")},{clases:["banner-principal-decorativo-4"],imagen:n("f420")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"",numero:"1",titulo:"Normas técnicas para la confección de prendas de vestir",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"",numero:"2",titulo:"Normas generales para la confección de prendas de vestir",desarrolloContenidos:!0,subMenu:[{icono:"",numero:"2.1",titulo:"Normas generales de seguridad para la labor en la confección de prendas",hash:"t_2_1"},{icono:"",numero:"2.2",titulo:"Condiciones y espacios en el trabajo",hash:"t_2_2"}]},{nombreRuta:"tema3",icono:"",numero:"3",titulo:"Confección de prendas de vestir",desarrolloContenidos:!0,subMenu:[{icono:"",numero:"3.1",titulo:"Orden operacional de confección de camisa",hash:"t_3_1"},{icono:"",numero:"3.2",titulo:"\tOrden operacional de la confección de la falda clásica",hash:"t_3_2"},{icono:"",numero:"3.3",titulo:"\tOrden operacional de confección de pantalón ",hash:"t_3_3"},{icono:"",numero:"3.4",titulo:" Orden operacional de confección de prendas en tejido de punto",hash:"t_3_4"}]},{nombreRuta:"tema4",icono:"",numero:"4",titulo:"Terminados en las prendas de vestir",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"",numero:"5",titulo:"Control de calidad",desarrolloContenidos:!0,subMenu:[{icono:"",numero:"5.1",titulo:"Concepto control de calidad",hash:"t_5_1"},{icono:"",numero:"5.2",titulo:"Gestión de calidad total",hash:"t_5_2"},{icono:"",numero:"5.3",titulo:"Puntos y controles en el proceso de confección",hash:"t_5_3"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/CF08_922500_DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Confección de prendas de vestir",referencia:"La costura Diy. (2020). Confección de camisa Slim Fit para hombre",tipo:"Video",link:"https://youtu.be/xD1u53N8sWQ "},{tema:"Orden operacional de confección de camisa ",referencia:"Academia confección a la moda. (2019) Camisa de hombre/cómo hacer/paso a paso/confección ",tipo:"Video",link:"https://youtu.be/DgTaEpPIH1E"},{tema:"Orden operacional de confección de camisa ",referencia:"Informativos. (2012). Ensamble de camisa.",tipo:"Video",link:"https://youtu.be/xD1u53N8sWQ"},{tema:"Orden operacional de confección de camisa ",referencia:"Gutiérrez, B. (2019). Confección de pantalón para caballero.",tipo:"Video",link:"https://youtu.be/NHtzg2UrKHs"},{tema:"Orden operacional de confección de camisa ",referencia:"ISO, Sistema de Gestión de Calidad 9001:2015",tipo:"Pagina",link:"https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:es"}],glosario:[{termino:"Alfileres",significado:"Elementos utilizados para sostener prendas en el proceso de elaboración de prendas."},{termino:"Atributos del producto",significado:"Son las cualidades o características del producto como color, tamaño."},{termino:"Crin",significado:"Insumo para la confección de prendas y accesorios, en algunos casos ayudan a dar soporte a las prendas, esto siempre dependerá de su uso."},{termino:"Defecto",significado:"Es una no conformidad en características requeridas por el cliente o una norma y que causa incumplimiento del requisito y por tanto insatisfacción del cliente."},{termino:"Ergonomía",significado:"Disciplina que estudia las interacciones del ser humano con su entorno, reúne información que permitan medir desempeño y optimización, buscando el bienestar de las personas."},{termino:"Goma o caucho",significado:"Elemento elástico utilizado para la elaboración de cinturillas o en partes que impliquen el recogido para que sea adaptable al cuerpo."},{termino:"Hilvanar",significado:"Cosido manual empleado en diversas técnicas de tejido de acuerdo al proceso empleado en confección de prendas."},{termino:"ISO",significado:"Organización Internacional de Estandarización, ubicada en Ginebra Suiza y tiene presencia en 193 países. Promueve y desarrolla normas para estandarizar productos y servicios."},{termino:"Lote",significado:"Número establecido de una producción, las cuales tienen características comunes y se agrupan dependiendo de un objetivo determinado."},{termino:"Mariposa",significado:"Pieza del panty ubicada entre el tiro y la entrepierna para proteger y dar comodidad en la parte íntima femenina."},{termino:"Pedal",significado:"Elemento que forma parte de las máquinas de coser prendas, su función es permitir el funcionamiento de la máquina con la ayuda del motor."},{termino:"Punto de control",significado:"Son determinados con la metodología del árbol de decisión. Son las operaciones, fases o procesos que requieren realizar inspecciones para controlar la ocurrencia de defectos, lo cual es una medida preventiva."},{termino:"Punto de control crítico",significado:"Operaciones, fases o procesos que requiere de riguroso control debido a que representa alto riesgo de presentar defectos y por tanto no cumplir con los requisitos."},{termino:"Sigma (σ)",significado:"Es una letra del alfabeto griego, utilizada en representar la desviación estándar (unidad estadística de medición), representa la dispersión o variabilidad de un conjunto de datos."},{termino:"Variables de calidad",significado:"Cuantificación de las cualidades del producto. Ejemplo: carta de colores de la prenda."}],referencias:[{referencia:"Calidad Aplicada a la Gestión Empresarial. (2018)",link:"https://calidadaplicagestionempresarial.blogspot.com/2018/09/"},{referencia:"CARVIMSA. (S.F). Embalajes para textiles de exportación. ",link:"https://repositorio.promperu.gob.pe/items/c328f53e-e302-4d3e-8bb2-c9be93a7d959"},{referencia:"Huamán, W. (2003). Ingeniería en la capacitación de operarios para la industria de la confección textil. ",link:"https://sisbib.unmsm.edu.pe/bibvirtual/tesis/ingenie/huaman_ow/contenido.htm"},{referencia:"Knight, L. (2012). Secretos de una buena modista. Editorial Océano Ámbar. ",link:"https://www.casadellibro.com.co/libro-secretos-de-la-buena-modista-guia-completa-sobre-tecnicas-de-cos-tura-de-moda/9788475566030/1610124"},{referencia:"Lara, V. (2017). Fichas técnicas Freelance. ",link:"https://www.behance.net/gallery/50254313/Fichas-tcnicas-Freelance-Spec-Sheets?locale=cs_CZ"},{referencia:"Lean solutions. (2020, junio 2). ¿Qué es Six Sigma?",link:"https://leansolutions.co/que-es-six-sigma/"},{referencia:"Omegaht (2013). Enfoque de calidad de Ishikawa.",link:"https://enfoqdecalidad.wordpress.com/author/omegaht/"},{referencia:"Pellegrino, A. (2011). Secuencia de operaciones",link:"https://ayelenpellegrino.com/2011/01/03/camiseria-secuencia-de-operaciones/"},{referencia:"Sejzer, R. (2018). Industria y Lean 4.0: ¿Estamos realmente frente a una Cuarta Revolución Industrial?  ",link:"https://ctcalidad.blogspot.com/2018/09/industria-y-lean-40-estamos-realmente.html"},{referencia:"SENA. (2020). Programa Técnico en Patronaje Industrial de Prendas de Vestir. ",link:"https://zajuna.sena.edu.co/pdfs/titulada/tecnico/Patronaje_Industrial_Prendas_Vestir.pdf"},{referencia:"SENA. (2021). Programa Técnico en Elaboración de Prendas de Vestir sobre medidas. ",link:"https://zajuna.sena.edu.co/pdfs/titulada/tecnico/elaboracion_de_prendas_de_vestir_sobre_medidas.pdf"},{referencia:"Delta  (2019).Textile Machinery. ",link:"https://deltamaquinastexteis.com.br/es/control-de-calidad-textil-y-preparacion-de-malla/"},{referencia:"SINGER. (2014). Metodología y técnicas de confección del programa mujeres sustentables. Programa Mujeres sustentables.    ",link:"https://es.scribd.com/document/348328553/Metodologia-y-Tecnicas-de-Confeccion"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del Ecosistema",centro:"Dirección General"},{nombre:"Claudia Johanna Gómez Pérez",cargo:"Responsable de Línea de Producción",centro:"Regional Santander - Centro Agroturístico"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Ledy Johana Velásquez Hernández",cargo:"Diseño y Desarrollo Curricular",centro:"Regional Antioquía - Diseño, Confección y Moda. "},{nombre:"Paola Angélica Castro Salazar",cargo:"Diseño y Desarrollo Curricular",centro:"Regional Antioquía - Diseño, Confección y Moda."},{nombre:"Fernelis Mauricio Echeverri",cargo:"Experto Temático",centro:"Regional Antioquía - Diseño, Confección y Moda."},{nombre:"María Inés Machado López",cargo:"Diseño Instruccional",centro:"Regional Cundinamarca – Diseño y Metrología"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Evaluadora Instruccional",centro:"Regional Distrito capital – Centro Gestión Industrial"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Diseñador y Evaluador Instruccional",centro:"Regional Distrito Capital Centro para la Industria de la Comunicación Gráfica. "},{nombre:"Sandra Paola Morales Páez",cargo:"Evaluadora Instruccional",centro:"Regional Santander - Centro Agroturístico"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Carla Liliana Sequera Vargas",cargo:"Diseñadora de Contenidos Digitales",centro:"Regional Santander - Centro Agroturístico"},{nombre:"Pedro Alonso Bolivar González",cargo:"Desarrollador <em>Fullstack</em>",centro:"Regional Santander - Centro Agroturístico"},{nombre:"Maria Alejandra Vera Briceño",cargo:"Animadora y Productora Multimedia",centro:"Regional Santander - Centro Agroturístico"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Yineth Ibette González Quintero",cargo:"Validadora de Recursos Educativos Digitales",centro:"Regional Santander - Centro Agroturístico"},{nombre:"Erika Fernanda Mejía Pinzón",cargo:"Validación de Contenidos Accesibles",centro:"Regional Santander - Centro Agroturístico"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:b,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"65fa":function(e,a,n){e.exports=n.p+"img/banner-principal.47ee4ae6.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"95df":function(e,a,n){e.exports=n.p+"img/2.4ff67d75.svg"},"9a0a":function(e,a,n){e.exports=n.p+"img/1.0d2627dc.svg"},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},f420:function(e,a,n){e.exports=n.p+"img/4.b7307257.svg"}});
//# sourceMappingURL=app.b7b55cae.js.map