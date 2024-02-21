<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-4
      .video(data-aos="fade-right")
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row
      .col-12.p-4.bg-c1(data-aos="fade-left")
        .row.align-items-center
          .col-12.col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/intro/img1.png', style="width:100px" alt='').m-auto
          .col
            p.text-white En este componente formativo se estudiarán los conceptos básicos sobre la arquitectura de un sistema web, desde la naturaleza de su comportamiento, comprendiendo los componentes físicos y lógicos para su funcionamiento, pasando por la identificación y caracterización de tecnologías web del lado del cliente y del servidor, hasta la identificación de tecnologías que permiten la comunicación y el traspaso de información o generación de servicios con otros sistemas.
            p.text-white.mb-0 En ese sentido, este componente busca generar un análisis crítico para la selección de una determinada tecnología, dependiendo de los requerimientos y alcance de un proyecto estimado, a partir de la fundamentación y rasgos distintivos que en cada apartado de este documento se detallan.
    
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
