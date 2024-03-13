<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center
      .col-md-8.col-lg-4.bg-c13(data-aos="fade-right")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/intro/img1.svg', style="width:180px" alt='').m-auto
          p.mb-0 Este componente formativo se centra en los conceptos esenciales de la arquitectura de sistemas #[i web], incluyendo tanto aspectos físicos como lógicos, tecnologías del lado del cliente y del servidor, así como la comunicación con otros sistemas. Su objetivo es proporcionar un análisis crítico para seleccionar tecnologías adecuadas según los requisitos del proyecto.
      .col-md-8.col-lg-4.bg-c14(data-aos="fade-down")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/intro/img2.svg', style="width:197px" alt='').m-auto
          p.mb-0 La evolución de Internet y la web en las últimas décadas ha impulsado aplicaciones más interactivas, rápidas y seguras, desde interfaces móviles hasta plataformas de contenido multimedia. Es crucial entender los fundamentos de esta compleja red para comprender su funcionamiento y desarrollo.
      .col-md-8.col-lg-4.bg-c15(data-aos="fade-left")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/intro/img3.svg', style="width:200px" alt='').m-auto
          p.mb-0 La arquitectura web abarca una amplia gama de tecnologías, desde el #[i front-end] que se ocupa de la experiencia del usuario hasta el #[i back-end] que gestiona la lógica del servidor. HTML5, CSS3, JavaScript y #[i frameworks] como React y Angular son elementos clave en la creación de contenido dinámico y en la evolución de la interacción en línea. En conjunto, estas tecnologías continúan transformando nuestra experiencia digital y la conectividad global.
      
    
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
