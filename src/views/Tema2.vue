<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Introducción a las tecnologías para el desarrollo #[i web]
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Las tecnologías de desarrollo #[i web] se refieren a una multitud de lenguajes y herramientas de programación que se utilizan para producir sitios #[i web], aplicaciones dinámicas y plataformas, con todas las funciones necesarias para dar alcance a un sin número de necesidades y requerimientos por parte de los usuarios. 
        p.mb-0 Este tipo de tecnologías, cada vez están en evolución, no es necesario hacer un estudio minucioso sobre el estado de transformación de estas tecnologías, solo basta con mirar el nuevo auge de diversos lenguajes de programación que permiten generar mejor y mayores acciones en sitios #[i web]. Por eso es por lo que las tecnologías #[i web] han sido consideradas como multiplataforma. Esta afirmación está asociada según el grupo de expertos de Ingenio Virtual donde indican:
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width:450px" alt='').m-auto
    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p Los modelos y tecnologías de desarrollo #[i web] han evolucionado mucho en la última década, #[b existen multitud de aplicaciones, frameworks, librerías, arquitecturas y sistemas de publicación] en diferentes versiones que a su vez reciben cambios o mejoran con el tiempo.  El progreso también ha tenido lugar en lo relacionado con la administración de sistemas, servicios de alojamiento, técnicas de escalabilidad, monitorización y gestión de centros de procesos de datos. Esta evolución ha dado lugar a la #[b convergencia de una gran cantidad de tecnologías], herramientas y estilos arquitectónicos para desarrollar sitios #[i web] y aplicaciones.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (I, 2018)
    Separador
    .row.bg-c5
      .col-12.px-5
        #t_2_1
        .titulo-segundo.color-acento-contenido
          h2 2.1 Tecnologías del front-end
        .row.mx-0
          .col-12.bg-c3(data-aos="fade-left")
            .p-4
              .row.align-items-center
                .col-lg-auto.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img1.svg', style="width:350px" alt='').m-auto
                .col.bg-white
                  .p-4
                    p.mb-0 Las tecnologías de front-end son usadas para el "lado del cliente", sea de un sitio #[i web] o aplicación. Se utilizan para desarrollar los componentes interactivos y producir los elementos que los usuarios ven e interactúan con ellos. Esto incluye colores y estilos de texto, imágenes, botones y menús de navegación, entre otros objetos interactivos. Normalmente estas tecnologías y lenguajes vienen implementados en los diferentes navegadores.
        Separador
        .titulo-segundo.color-acento-contenido
          h3 2.1.1 HTML5
        .row.mb-5
          .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
            p HTML es la sigla de Hyper Text Markup Language. Es una de las tecnologías fundamentales necesarias para el desarrollo de todo tipo de aplicaciones #[i web]. Proporciona la estructura base para una página #[i web]. El código HTML garantiza que todo el contenido de un sitio #[i web] tenga el formato adecuado y estructurado. Esto es para que cada navegador de internet pueda mostrar el contenido según lo previsto. Sin HTML, un navegador no podría mostrar texto o cargar imágenes y otros elementos.
            p.mb-0 HTML5, la versión más actual de HTML, Contiene un conjunto más amplio de tecnologías que permite a los sitios #[i web] y a las aplicaciones ser más diversas y de gran alcance. A este conjunto se le llama HTML5. En ese sentido, esta tecnología presenta una gran cantidad de recursos, como librerías, plugins y API que se puedan usar con un lenguaje de programación como lo es JavaScript para realizar un sitio #[i web] más interactivo y dinámico. Las tecnologías más usadas por HTML5 son las siguientes:
          .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema2/img2.png', style="width:450px" alt='').m-auto
        TabsA.mb-5.color-acento-botones(data-aos="fade-up")
          .tarjeta.color-acento-contenido.p-4(titulo="Canvas")
            p.mb-0 Es un elemento HTML5 que se utiliza para dibujar imágenes y formas con el fin de manipularlas. También se puede utilizar para casos como gráficos y animaciones de juegos.
          .tarjeta.color-acento-contenido.p-4(titulo="Almacenamiento <em>web</em>")
            p.mb-0 Se utiliza para almacenar información directamente en el navegador. Algunos ejemplos de esto serían almacenar la información de inicio de sesión del usuario y guardar las preferencias del usuario para un sitio #[i web].
          .tarjeta.color-acento-contenido.p-4(titulo="WebWorkers")
            p.mb-0 esta tecnología habilita un script que sigue ejecutándose en segundo plano cuando se abre una página #[i web] y se usa principalmente en sitios #[i web] con capacidades sin conexión. Hace que las páginas estén disponibles sin conexión y permite el uso de notificaciones como #[i Web Push] . Puede enviar estas notificaciones incluso cuando su navegador no está abierto.
          .tarjeta.color-acento-contenido.p-4(titulo="WebSockets")
            p.mb-0 permite una conexión bidireccional persistente entre el usuario y el servidor. Los casos de uso más comunes incluyen chats y notificaciones en aplicaciones #[i web].
    Separador
    .titulo-segundo.color-acento-contenido
      h3 2.1.2 CSS3
    p.mb-3(data-aos="fade-right") Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (en-US) CSS, describe como debe ser renderizado  el elemento estructurado, es decir, se encarga de la apariencia del sitio. De manera adicional, abordamos la definición descomponiendo sus siglas:
    .row.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12.bg-c4
            .p-4
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-atom(style="color:#3EE2A8")
                  | 
                  p.mb-0 Cascading: significa que los estilos que aplicamos a los elementos de una página #[i web] se propagan a los elementos que contiene, se aplican en cascada.
                li.d-flex
                  i.fas.fa-atom(style="color:#3EE2A8")
                  | 
                  p.mb-0 Style: mediante la tecnología CSS se aplican estilos visuales a los distintos elementos de nuestra página #[i web].
                li.d-flex
                  i.fas.fa-atom(style="color:#3EE2A8")
                  | 
                  p.mb-0 Sheets: lo que traduce hojas, porque los estilos de una página #[i web] se añaden en archivos aparte. Estos archivos deben tener la extensión CSS de manera general.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img3.png', style="width:450px" alt='').m-auto
    p(data-aos="fade-right") Desde CSS3, el alcance de las especificaciones se incrementó de forma significativa y el progreso de los diferentes módulos de CSS comenzó a mostrar varias diferencias. De esta forma con CSS3 se tiene mayor control de los elementos del sitio, con sus nuevas funciones y atributos sobre las etiquetas HTML, maximizan las acciones visuales del sitio o plataforma.
    .row.bg-c5
      .col-12.px-5
        Separador
        .titulo-segundo.color-acento-contenido
          h3 2.1.3 JavaScript (JS)
        p.mb-5(data-aos="fade-right") En la literatura hay un sin número de definiciones con respecto a este lenguaje de programación, no obstante, hay una especial la cual se cita de parte del blog de Rafa Ramos de manera literal, él dice:
        .row.justify-content-center.mb-4
          .col-lg-10(data-aos="fade-left")
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p JavaScript es el lenguaje de programación encargado de dotar de mayor interactividad y dinamismo a las páginas #[i web]. Cuando JavaScript se ejecuta en el navegador, no necesita de un compilador. El navegador lee directamente el código, sin necesidad de terceros. Por tanto, se le reconoce como uno de los tres lenguajes nativos de la #[i web] junto a HTML (contenido y su estructura) y a CSS (diseño del contenido y su estructura) ...
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5.mb-0 (Ramos, 2020).
        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema2/img4.png', style="width:450px" alt='').m-auto
          .col-lg-8(data-aos="fade-left")
            .row
              .col-12.bg-c7
                .p-4
                  figure.mb-4
                    img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='')
                  p De manera adicional, JS si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas #[i web], es usado también en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat. 
                  p.mb-0 Como conclusión a estas 3 principales tecnologías, se realiza una analogía con el cuerpo humano, de esta manera los huesos que son la estructura ósea es lo que a su vez hace el lenguaje de etiquetas HTML, los músculos que hacen que el cuerpo se mueva y tenga motricidad y dinámica es lo que a su vez hace JavaScript, y la piel que es la cubierta del cuerpo humano y se puede decir que es la que da apariencia, es lo que hace a su vez el CSS. Con esta analogía se espera que se tenga más comprensión de este tipo de tecnologías del lado del cliente.
        Separador
        .titulo-segundo.color-acento-contenido
          h3 2.1.4 Frameworks del front-end
        p(data-aos="fade-right") Un framework es un tipo de herramienta o recurso, que hace que el desarrollo de cualquier aplicativo sea del lado del cliente o servidor, sea más rápido, fácil y robusto. Este tipo de herramientas incorporan un conjunto de librerías, materiales y adoptan una estructura que van a permitir que todas las aplicaciones tengan un mejor rendimiento.
        p.mb-5(data-aos="fade-right") En ese sentido, se listan los frameworks más importantes a la fecha, con el fin que se tenga un reconocimiento para usos futuros. Este listado es apoyado según la comunidad más grande de gestión de productos llamada Product Coalition (P, 2021):
        .row.justify-content-center
          .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/img4.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  .row.justify-content-center
                    .col-auto
                      h2.text-center.txt-c3 React
                  p.text-center Está hecho por un desarrollador de Facebook, Jordan Walke. La biblioteca se utilizó por primera vez en el servicio de noticias de Facebook en 2011, luego en Instagram en 2012, y en 2013 el código se abrió para todos.
          .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-up")
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/img5.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  .row.justify-content-center
                    .col-auto
                      h2.text-center.txt-c3 Vue.Js
                  p.text-center Más de 36,000 aplicaciones están escritas en Vue. Entre las empresas que lo eligieron como herramienta de desarrollo, se encuentran Stackoverflow y PlayStation, según lo define la comunidad de Product Coalition. (P, 2021)
          .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/img6.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  .row.justify-content-center
                    .col-auto
                      h2.text-center.txt-c3 Angular
                  p.text-center Es en realidad un proyecto de Google que se utiliza principalmente para el desarrollo de aplicaciones móviles y de escritorio. Hay muchas funciones útiles. El sitio oficial de Framework dice: 'Concéntrese en crear sitios impresionantes en lugar de hacer que su código funcione'. (Angular, 2021).
        Separador
        #t_2_2
        .titulo-segundo.color-acento-contenido
          h2 2.2 Tecnologías del back-end
        .row.justify-content-center
          .col-lg-10.bg-c8(data-aos="fade-down")
            .p-4
              .row.align-items-center
                .col.mb-4.mb-lg-0
                  p.mb-0 Este tipo de tecnologías son aquellas que se utilizan en el lado Servidor. En ese sentido el Servidor las utiliza para gestionar y/o procesar las diferentes peticiones de información que le llegan, además realiza gestión sobre las bases de datos alojadas en los mismos. La información una vez tratada se envía devuelta al dispositivo para que sea visualizada en el dispositivo a través de las tecnologías front-end. Las tecnologías más conocidas y usadas en el backEnd son PHP, Java, .NET, Python, MySQL, etc.
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema2/img7.svg', style="width:180px" alt='').m-auto
    .row.bg-c5
      .col-12.px-5
        Separador
        .titulo-segundo.color-acento-contenido
          h3 2.2.1 Lenguajes del servidor
        .row.mb-5
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema2/img5.png', style="width:450px" alt='').m-auto
          .col-lg-8(data-aos="fade-left")
            p.mb-0 En el lado del servidor, el back-end potencia el funcionamiento del sitio #[i web] debido a que es en esta instancia donde se realizan los procesos más robustos de información, por lo que se necesitan de igual manera lenguajes de programación con una diversidad de funciones para el tratamiento de esos datos. Además, los programas escritos aquí por los desarrolladores de back-end se utilizan para comunicar la información de la base de datos al navegador. La empresa de base tecnológica Third Rock Techkno indica que: “En 2021, el desarrollo de BackEnd será aún más vital a medida que las empresas busquen expandirse a un ritmo rápido. Además, esta empresa muestra los lenguajes de programación del servidor que están en tendencia”. (Third Rock Techkno, 2021)
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul2")(data-aos="fade-down")
          .row(titulo="Node.JS")
            .col-12
              p.mb-0 Este lenguaje tiene su propio entorno de ejecución. Esta es la razón por la que es popular entre la comunidad de desarrolladores. Además, como Node.js en la literatura de esta disciplina del desarrollo #[i software] es comúnmente visto como uno de los lenguajes más eficientes, se prefiere desarrollar aplicaciones de alta gama para el desarrollo de sitios #[i web], así como para la transmisión de video.
          .row(titulo="Kotlin")
            .col-12
              p.mb-0 Se presenta como un lenguaje de programación BackEnd para Java Virtual Machine. Es muy preferido para el desarrollo de Android, ya que cuenta con el soporte oficial de Google. Kotlin se muestra de cara como uno de los lenguajes que tiene una curva de aprendizaje muy fácil según Third Rock Techkno. Por lo tanto, el lenguaje es menos propenso a fallos y brinda a los desarrolladores la oportunidad de encontrar los errores fácilmente. (Third Rock Techkno, 2021).
          .row(titulo="Ruby")
            .col-12
              p.mb-0 Se estima que este lenguaje actualmente jugará un papel fundamental, ya que ayuda a reducir el tiempo dedicado a tareas estandarizadas.
          .row(titulo="PHP")
            .col-12
              p.mb-0 Es un lenguaje de programación de BackEnd conveniente que es muy flexible y tiene características impecables. Es uno de los programas donde su comunidad se ha venido actualizando y hay gran mayoría de frameworks basados en este lenguaje. Es por eso por lo que PHP se considera el futuro del desarrollo BackEnd en 2021. Además, la sintaxis de PHP es muy expresiva, lo que brinda libertad creativa a los desarrolladores.
    Separador
    .titulo-segundo.color-acento-contenido
      h3 2.2.2 Frameworks del back-end
    p.mb-5(data-aos="fade-right") Como se mencionó en el apartado de frameworks del lado del front-end, este tipo de recurso ayuda a los desarrolladores a realizar sus trabajos de manera más ágil, segura y robusta. En ese sentido se presentan los frameworks del lado del back-end que son tendencia. Según indica una de las empresas de desarrollo #[i web] más importantes de Canadá Monocubed. (Mistry, 2021)
    .tarjeta--container.row
      .col-lg.tarjeta.color-secundario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/img9.svg', alt='')
        .row
          .col-auto
            h2.text-center.txt-c3 Laravel
        p Este framework tiene una excelente estructura del lenguaje, la capacidad de adaptarse a grupos gigantes y la efectividad de sus recursos como es la llamada toolbox. Basado en el lenguaje PHP, sigue una sintaxis elegante y expresiva. Laravel permite a los desarrolladores #[i web] ser flexibles y creativos mientras se encargan de los detalles de fondo a diferencia de otros frameworks.
      .col-lg.tarjeta.color-acento-botones.p-5(data-aos="fade-down")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/img10.svg', alt='')
        .row
          .col-auto
            h2.text-center.txt-c3 Django
        p Es un framework de alto nivel que se desarrolla con la noción de 'baterías incluidas'. Esto significa que casi todo lo que necesitaría cualquier desarrollador ya está incluido. Django es utilizado principalmente para el desarrollo de aplicaciones #[i web] interactivas a gran escala impulsadas por bases de datos. Es altamente personalizable y escalable. Tiene una amplia comunidad, una importante documentación.
      .col-lg.tarjeta.color-secundario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/img11.svg', alt='')
        .row
          .col-auto
            h2.text-center.txt-c3 Ruby On Rails
        p Está escrito en el lenguaje de programación Ruby. Es fácil de probar y compilar, junto con el amplio apoyo de la comunidad y una gran cantidad de recursos disponibles, lo que lo convierte en una alternativa viable para los principiantes.

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

<style lang="sass"></style>
