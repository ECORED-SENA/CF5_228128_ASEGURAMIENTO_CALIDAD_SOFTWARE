<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Introducción a la arquitectura orientada a servicios
    p.mb-5(data-aos="fade-right") Hasta el momento se han venido revisando las tecnologías para el desarrollo #[i web], por lo que es necesario entender que aparte de crear aplicaciones también se pueden crear servicios. Para esto es necesario abordar de manera sucinta el concepto de la Arquitectura Orientada a Servicios llamada SOA. Al respecto es un tipo de arquitectura de #[i software], la cual se basa en la integración de aplicaciones mediante servicios. Según IBM, se define SOA, como:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p ...una manera de hacer que los componentes de #[em software] sean reutilizables a través de interfaces de servicio. Estas interfaces utilizan estándares de comunicación comunes entre sí, de tal manera que pueden incorporarse rápidamente a nuevas aplicaciones sin tener que realizar una integración profunda cada vez... 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (SOA, 2021)
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
        p En ese sentido, es interesante el desarrollo de #[i software] en sí, la reutilización de componentes, y la comunicación con distintas aplicaciones sin tener la necesidad de crear un desarrollo a la medida para cada aplicación al cual se quiera conectar. Es por eso por lo que nace el concepto de servicio y de interoperabilidad. 
        p.mb-0 Como una de las implementaciones de SOA existen las arquitecturas REST y SOAP, las dos siguen los mismos “principios” de SOA. Por tanto, REST y SOAP son dos vías distintas para la transmisión de datos en línea. Específicamente, ambas definen cómo diseñar interfaces de programación de aplicaciones (API), que no es más que una tecnología que sirve como un medio para que dos aplicaciones o plataformas se puedan comunicar entre sí y lo hacen exponiendo o publicando un conjunto de servicios y reglas para cómo acceder a ellos. La principal diferencia es que SOAP es un protocolo, y REST no lo es. Por lo general, alguno de ellos regirá a las API, es decir, definirá una serie de reglas para la publicación de los servicios como también del acceso, según el caso práctico y las preferencias del desarrollador.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.svg', style="width:450px" alt='').m-auto
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 SOAP
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width:450px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Por sus siglas, protocolo simple de acceso a objetos. Se define como un protocolo o reglas estándar que se creó principalmente para permitir la comunicación entre las aplicaciones que estaban desarrolladas con diferentes lenguajes y además que reposaban en distintas plataformas tecnológicas. Por tener la naturaleza de un protocolo, existen reglas integradas que aumentan la complejidad y la sobrecarga en los servidores, lo cual causa que pueda haber retrasos en el tiempo que tardan las páginas en cargarse o dar alguna respuesta. No obstante, estos estándares por su estructura y seguridad son más demandados en el sector empresarial. (RedHat, 2021)
        .row
          .cajon-b1
            p.mb-0 Adicionalmente, el envío de una solicitud de datos a una API de SOAP se puede administrar a través de cualquiera de los protocolos de la capa de la aplicación, por ejemplo, HTTP que es usado por los exploradores #[i web], SMTP que es protocolo usado por los correos electrónicos, TCP, entre otros. No obstante, una vez que se recibe una solicitud, los mensajes SOAP de retorno devuelve por defecto documentos XML, que es un lenguaje de etiquetas comprensible tanto para las máquinas como para las personas.
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 REST
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
        p Por sus siglas en inglés, #[i Representational State Transfer], traduce transferencia de estado representacional. Se define como un compendio de lineamientos que se ajustan a las necesidades de los servicios #[i web] y especialmente a las aplicaciones móviles por la velocidad de transmisión y por lo ligero de la información. Cuando se envía una solicitud de datos a una API de REST, se hace a través de un protocolo de transferencia de hipertexto, comúnmente denominado HTTP. Una vez que reciben la solicitud, las API diseñadas para REST (conocidas como API o servicios #[i web] de RESTful) dan como respuesta mensajes en diversos formatos como pueden ser HTML, XML, JSON, entre otros. El formato más usado para los mensajes es la notación de objetos JavaScript (JSON). Este formato puede leerlo cualquier lenguaje de programación, es liviano y es comprensible para las máquinas como para las personas. De esta forma, las API de RESTful son más flexibles y se pueden configurar con mayor facilidad. (RedHat, 2021).
        .row
          .cajon-b2
            p.mb-0 Como conclusión se tiene una comparación de estas dos arquitecturas: las API de REST son livianas, así que son ideales para los escenarios tecnológicos más nuevos, como lo son el internet de las cosas (IoT), el desarrollo de aplicaciones móviles y la informática sin servidor. Los servicios #[i web] de SOAP ofrecen seguridad y cumplimiento de las operaciones que están asociadas a la dinámica operativa de una empresa, sin embargo, al tener la rigurosidad de abarcar tantas reglas puede ser también muy pesada la gestión de la información.
      .col-lg-4.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img2.svg', style="width:380px" alt='').m-auto

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

<style lang="sass"></style>
