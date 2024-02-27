<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-lg-8.order-2.order-lg-1
        p Este componente formativo se centra en los conceptos esenciales de la arquitectura de sistemas web, incluyendo tanto aspectos físicos como lógicos, tecnologías del lado del cliente y del servidor, así como la comunicación con otros sistemas. Su objetivo es proporcionar un análisis crítico para seleccionar tecnologías adecuadas según los requisitos del proyecto.
        p La evolución de Internet y la web en las últimas décadas ha impulsado aplicaciones más interactivas, rápidas y seguras, desde interfaces móviles hasta plataformas de contenido multimedia. Es crucial entender los fundamentos de esta compleja red para comprender su funcionamiento y desarrollo.
        p.mb-0 La arquitectura web abarca una amplia gama de tecnologías, desde el front-end que se ocupa de la experiencia del usuario hasta el back-end que gestiona la lógica del servidor. HTML5, CSS3, JavaScript y frameworks como React y Angular son elementos clave en la creación de contenido dinámico y en la evolución de la interacción en línea. En conjunto, estas tecnologías continúan transformando nuestra experiencia digital y la conectividad global.
      .col-lg-4.order-1.order-lg-2
        figure
          img(src='@/assets/curso/intro/img1.svg', style="width:350px", alt='').m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
