<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 La Internet y la web
    .row.bg-c5
      .col-12.px-5
        .row
          .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
            p.mb-0 El desarrollo de las aplicaciones y sistemas web, han sido una tendencia desde las últimas tres décadas y sus mejoras han ido evolucionando conforme a las innovaciones de la infraestructura tecnológica que las soporta. Hoy en día vemos que las aplicaciones son mucho más interactivas, más rápidas, más seguras y usables, un ejemplo de esto es cuando se ingresa a un sitio web desde un dispositivo móvil, en el cual se observa cómo la interfaz del sitio se ajusta o responde de una mejor manera a la pantalla del móvil, otro ejemplo es cuando vemos un video de YouTube, cuando conversamos por WhatsApp o vemos una serie en Netflix. Todas estas condiciones y aspectos se dan gracias a una robusta infraestructura de #[i hardware] que permite el despliegue no solo de aplicaciones sino de servicios que son usualmente utilizados día a día. En ese sentido, es importante comprender los primeros componentes que enriquecen y dan rigurosidad a la construcción de esta naturaleza de sistemas.
          .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema1/img1.png', style="width:450px" alt='').m-auto
        Separador
        #t_1_1
        .titulo-segundo.color-acento-contenido
          h2 1.1 Funcionamiento de la Internet
        .row.align-items-center
          .col-lg-3.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img14.svg', style="width:250px" alt='').m-auto
          .col-lg-9
            p.mb-0(data-aos="fade-down") La aparición de la Internet tuvo lugar cuando se dio la necesidad de comunicación y de interacción con distintas personas en cualquier lugar del mundo. De esta manera se ha considerado esta tecnología como una columna vertebral de la web, y se concibe como la infraestructura técnica que la hace posible. Desde lo más básico, se presenta como una gran red de computadoras que se comunican simultáneamente.
        Separador
        .row.mb-5
          .col-auto.bg-c12(data-aos="fade-down")
            .px-3.pb-0
              .row.align-items-end
                .col-auto.pe-0
                  figure.fig-p1
                    img(src='@/assets/curso/tema1/img15.svg', style="width:50px" alt='').m-auto
                .col
                  h3 Historia de la Internet
        .row
          .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
            p.mb-0 Su historia se remonta al comienzo de la década de 1960, como un proyecto de investigación llamado ARPANET, financiado por el ejército de los Estados Unidos y más adelante se convirtió en una infraestructura pública en la década de 1980, con el apoyo de muchas instituciones del sector público y privado. Las distintas tecnologías que soporta Internet han evolucionado con el tiempo, especialmente para satisfacer la gran demanda existente por parte de la población, no obstante, la forma en que funciona no ha cambiado mucho. En este sentido la Internet se muestra como una forma de conectividad entre todos los equipos de cómputo, y por su distribución y organización, propenderá a que se encuentre la mejor manera de mantenerse conectados.
          .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema1/img3.png', style="width:450px" alt='').m-auto
        Separador
        .row.mb-5
          .col-auto.bg-c12(data-aos="fade-down")
            .px-3.pb-0
              .row.align-items-end
                .col-auto.pe-0
                  figure.fig-p1
                    img(src='@/assets/curso/tema1/img15.svg', style="width:50px" alt='').m-auto
                .col
                  h3 #[i Hardware] de red
        p(data-aos="fade-right") Cuando dos computadoras necesitan comunicarse, se pueden vincular a través de medios físicos, por lo regular el cable #[i Ethernet] o de forma inalámbrica con tecnologías como Wifi, #[i Bluetooth], #[i ZigBee], entre otras.
        .row
          .col-12.p-4.bg-c2
            .tarjeta.tarjeta--azul.py-3.px-4.px-lg-5(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.align-items-center.justify-content-center
                  .col-lg-5.order-2.order-lg-1
                    p.txt-c1 #[b #[i Hardware] de red]
                    p.text-white.mb-0 La mayoría de las computadoras de hoy en día pueden soportar cualquiera de este tipo de conexiones. A continuación, se muestra un ejemplo de conexión vía Ethernet entre dos equipos:
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    p.text-center.text-white #[b Ejemplo de conexión entre dos equipos o terminales]
                    figure
                      img(src='@/assets/curso/tema1/img5.png', style="width:550px", alt='Dos computadoras uno al lado del otro, con un cable de red conectando sus puertos Ethernet.').m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5.order-2.order-lg-1
                    p.txt-c1 #[b Ejemplo de conexión entre diez equipos o terminales]
                    p.text-white.mb-0 No se puede pensar que la red solo se limita a dos ordenadores, se pueden conectar tantos como se deseen, aunque con mayor complejidad. Por ejemplo, si se quieren conectar 10 computadoras, se necesitan 45 cables y unos nueve conectores por computador, como se alcanza a apreciar en la siguiente figura.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img6.png', style="width:350px", alt='Representación gráfica de conexión entre diez equipos o terminales.').m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5.order-2.order-lg-1
                    p.txt-c1 #[b Ejemplo de conexión de diez equipos con un enrutador]
                    p.text-white.mb-0 Por ejemplo, para que el terminal B reciba un mensaje desde el terminal A, este debe enviarlo primero al #[i router], quien a su vez lo remite al ordenador B asegurándose que dicho mensaje no sea entregado a otro ordenador.  Una vez incorporado un enrutador al sistema, la red de diez terminales solo requiere diez cables: un conector para cada ordenador y un enrutador con 10 conectores, como se aprecia en la siguiente gráfica.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img7.png', style="width:350px", alt='').m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5.order-2.order-lg-1
                    p.text-white.mb-0 Teniendo en cuenta la gráfica anterior, ¿qué sucede al conectar cientos, miles, millones de ordenadores entre sí? Por supuesto un solo enrutador no puede escalar tanto, pero, anteriormente se ha indicado que el enrutador es como un pequeño computador, entonces ¿qué impide conectar dos enrutadores a la vez?
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img8.png', style="width:350px", alt='').m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-9.order-2.order-lg-1
                    p.text-white El proceso de conexión entre los diversos terminales demuestra que puede ser un ejercicio muy complejo y engorroso, por lo tanto, con el fin de solucionar esta organización, cada ordenador en una red está conectado a una pequeña computadora especial llamada enrutador o #[i router] (en inglés).
                    p.text-white.mb-0 Este dispositivo cumple una función: tal como lo hace un señalizador en las estaciones del sistema integrado de transporte público, que  indican cuál ruta necesitas para llegar a un destino. De esta manera el #[i router] se encarga de asegurar que el mensaje enviado desde un computador o terminal emisor llegue al destino correcto. Una vez incorporado un enrutador al sistema, la red de diez terminales solo requiere diez cables: un conector para cada ordenador y un enrutador con 10 conectores, como se aprecia en la siguiente gráfica.
                  .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img9.png', style="width:350px", alt='').m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5.order-2.order-lg-1
                    p.text-white.mb-0 En ese sentido, estas conexiones entre terminales generan redes de datos para la transmisión como la recepción de información, por lo que es necesario caracterizar estas redes, las cuales son importantes para la comprensión del funcionamiento de un sistema web. Entre ellas se encuentran las redes de área local, una red de área metropolitana y una red de área amplia.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    p.text-center.text-white #[b Ejemplo de conexión de diez equipos con dos enrutadores]
                    figure
                      img(src='@/assets/curso/tema1/img10.png', style="width:350px", alt='').m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-4.order-2.order-lg-1
                    h5.txt-c1 Redes de área local LAN
                    p.text-white Generalmente llamadas LAN (#[i Local Area Networks]), son redes de naturaleza privada que operan dentro de un solo establecimiento, como una casa, oficina o fábrica. Las redes LAN se utilizan ampliamente para conectar computadoras personales y electrodomésticos con el fin de compartir recursos (por ejemplo, impresoras) e intercambiar información.
                    p.text-white.mb-0 A continuación, se presenta un ejemplo de esta red:
                  .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
                    p.text-center.text-white #[b Ejemplo de red de área local inalámbrica y cableada]
                    figure
                      img(src='@/assets/curso/tema1/img11.png', style="width:550px", alt='Ejemplo de una infraestructura mixta de red de área local (LAN) que combina conexiones inalámbricas y cableadas. Se ilustra la integración de dispositivos').m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-8.order-2.order-lg-1
                    p.text-white El diseño físico y lógico de la red llamado topología está basado en los enlaces de punto a punto comúnmente para redes alámbricas. El estándar IEEE 802.3, comúnmente conocido como Ethernet, es la manera más común de LAN alámbrica. La figura en su apartado b, muestra un ejemplo de topología de Ethernet conmutada. Cada computadora se comunica mediante el protocolo Ethernet y se conecta a una caja conocida como #[i switch] a través de un enlace de punto a punto.
                    p.text-white.mb-0 En ese sentido, un #[i switch] tiene varios puertos, cada uno de los cuales se puede conectar a una computadora. La función que cumple el #[i switch] es transmitir paquetes entre las computadoras conectadas a él, y utiliza la dirección en cada paquete para determinar a qué computadora se lo debe enviar.
                  .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img12.png', style="width:550px", alt='').m-auto
    Separador
    .row.mb-5
          .col-auto.bg-c12(data-aos="fade-down")
            .px-3.pb-0
              .row.align-items-end
                .col-auto.pe-0
                  figure.fig-p1
                    img(src='@/assets/curso/tema1/img15.svg', style="width:50px" alt='').m-auto
                .col
                  h3 Modelo de referencia TCP/IP
    p(data-aos="fade-down") Al igual que los humanos, es importante que todos los equipos de cómputo tengan un modo común de comunicarse entre ellos. Para la mayoría de los equipos actuales, este modo es TCP/IP. TCP/IP suele venir inmerso en los equipos y está automatizado en buena medida. No obstante, es necesario la comprensión del modelo TCP/IP, sobre todo en el caso de que vaya a configurar un equipo para conectarlo a otro sistema. (Fisher, 2021)
    .row.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-3
          .col-12.bg-c3
            .p-4
              p.mb-0 Así, este protocolo TCP/IP, cuyas siglas definen: #[i Transmission Control Protocol/Internet Protocol] (Protocolo de control de transmisión/Protocolo de Internet), se presenta como un conjunto de reglas estandarizadas que permiten a los equipos comunicarse en una red como Internet. La potencialidad de las máquinas está en su velocidad de transmisión y comunicación con otras, de hecho, una de las tendencias de esta cuarta revolución industrial es la interacción de ellas de manera inteligente, sobre todo en contexto de producción. Muchas de las cosas para las que utilizamos los equipos (enviar mensajes de correo electrónico, ver Netflix u obtener indicaciones para llegar a un sitio) dependen de la comunicación entre ellos. Pueden ser equipos de distintos fabricantes e incluso encontrarse en zonas geográficas diferentes. De esta manera las personas y plataformas #[i software] que los utilizan pueden hablar distintos lenguajes humanos e informáticos.
        p.mb-0 El #[i blog] de #[i Avast Academy], señala: “...Una interacción determinada puede darse entre dos sistemas informáticos o involucrar cientos de sistemas. Sin embargo, como sucede al pasar una carta o un paquete de mano en mano, cada transacción se produce entre solo dos equipos cada vez. Para que esto suceda, los dos equipos deben saber, por adelantado, cómo se espera que se comuniquen.
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img13.png', style="width:450px", alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-8.bg-c4(data-aos="fade-up")
        .p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img2.svg', style="width:100px", alt='').m-auto
            .col
              ul.lista-ul
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  | ¿Cómo inician la conversación?
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  | ¿A quién le toca comunicarse?
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  | ¿Cómo sabe un equipo si su mensaje se ha transmitido correctamente?
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  | ¿Cómo terminan la conversación?”. (Fisher, 2021)
    p.mb-5(data-aos="fade-right") De esta manera, es evidente que los equipos necesitan reglas, instrucciones o en su término técnico, protocolos para la comunicación y el comportamiento entre esas dos instancias.
    .row.bg-c6
      .col-12.px-5
        .row.align-items-center.mb-5
          .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
            p #[b Funcionamiento del modelo]
            p.mb-0 El funcionamiento de este protocolo radica en descomponer cada mensaje en paquetes. Porque el objetivo no es volver a enviar de nuevo y desde cero el mensaje completo, toda vez que haya un fallo. Así que estos paquetes se vuelven a ensamblar en el otro extremo. De hecho, cada paquete podría tomar una ruta diferente hasta el equipo de destino, toda vez sí la ruta deja de estar disponible o está muy congestionada. De manera adicional, TCP/IP divide las distintas tareas de comunicación en capas. Así, cada capa tiene una función diferente. Los datos pasan por cuatro capas independientes antes de recibirse en el otro extremo.
          .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema1/img14.png', style="width:450px", alt='').m-auto
        p(data-aos="fade-right") #[b Cuatro capas del modelo TCP/IP]
        p.mb-5(data-aos="fade-right") En la literatura, se encuentran un sinnúmero de definiciones alrededor de las capas de este modelo, entre las más importantes y haciendo un resumen para dar mayor claridad, se tienen:
        .row.mb-5
          .col-12.bg-c10
            .p-2.p-lg-4
              .row
                .col-12.bg-c11
                  .p-3.p-lg-4
                    .row
                      .col-lg-8
                        .row.align-items-center.mb-3
                          .col-md-auto.mb-4.mb-lg-0
                            figure
                              img(src='@/assets/curso/tema1/img9.svg', style="width:110px", alt='').m-auto
                          .col
                            p.text-white.mb-0 #[b Capa de enlace de datos]
                            p.text-white.mb-0 La capa de enlace de datos (igualmente denominada como capa de enlace, capa de interfaz de red o capa física) es la encargada de manejar las partes físicas del envío y recepción de datos mediante el cable #[i Ethernet], la tarjeta de interfaz de red, la red inalámbrica, el controlador del dispositivo en el equipo, entre otros.
                        .row.align-items-center.mb-3
                          .col-md-auto.mb-4.mb-lg-0
                            figure
                              img(src='@/assets/curso/tema1/img10.svg', style="width:110px", alt='').m-auto
                          .col
                            p.text-white.mb-0 #[b Capa de Internet]
                            p.text-white.mb-0 La capa de Internet (también denominada capa de red), es la capa encargada de controlar el movimiento (envío y recepción) de los paquetes alrededor de la red.
                        .row.align-items-center.mb-3
                          .col-md-auto.mb-4.mb-lg-0
                            figure
                              img(src='@/assets/curso/tema1/img11.svg', style="width:110px", alt='').m-auto
                          .col
                            p.text-white.mb-0 #[b Capa de transporte]
                            p.text-white.mb-0 La capa de transporte es la capa encargada que proporciona una conexión de datos fiable entre dos dispositivos. Divide los datos en paquetes, hace acuse de recibo de los paquetes que recibe del otro dispositivo y además se asegura de que el otro dispositivo haga el acuse de recibo pertinente de los paquetes que recibe a su vez.
                        .row.align-items-center
                          .col-md-auto.mb-4.mb-lg-0
                            figure
                              img(src='@/assets/curso/tema1/img12.svg', style="width:110px", alt='').m-auto
                          .col
                            p.text-white.mb-0 #[b Capa de aplicaciones]
                            p.text-white.mb-0 La capa de aplicaciones es el grupo de aplicaciones que requiere comunicación de red. Es con lo que el usuario o cliente suele interactuar, como el correo electrónico y la mensajería. Como la capa inferior es la encargada de gestionar los detalles de la comunicación, las aplicaciones no tienen que preocuparse por ello.
                      .col-lg-4.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/tema1/img13.svg', style="width:280px", alt='').m-auto
        p.mb-5(data-aos="fade-right") En la siguiente gráfica, se muestran las capas y sus respectivos protocolos.
        .row.justify-content-center
          .col-lg-10.mb-4(data-aos="fade-left")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 1]. Principales protocolos del Modelo TCP/IP por capas
            figure
              img(src='@/assets/curso/tema1/img4.svg', style="width:1050px", alt='Imagen que presenta las capas respectivos protocolos, en el modelo TCP/IP.').m-auto
              figcaption Nota. Tomado de Juncosa, 2020.
        Separador
        .row.mb-5
          .col-auto.bg-c12(data-aos="fade-down")
            .px-3.pb-0
              .row.align-items-end
                .col-auto.pe-0
                  figure.fig-p1
                    img(src='@/assets/curso/tema1/img15.svg', style="width:50px" alt='').m-auto
                .col
                  h3 Dirección IP
        .row.align-items-center
          .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
            p.mb-0 Para enviar un mensaje a una computadora, se debe especificar a cuál. Es por ello por lo que toda computadora conectada a una red cuenta con una dirección única que la identifica de manera lógica y jerárquica, llamada “dirección IP” o Protocolo de Internet (IP de sus siglas en inglés #[i Internet Protocol]). Esta dirección se compone por una serie de cuatro números separados por puntos, por ejemplo: 192.168.2.19. Para las computadoras es un identificador simple, pero los humanos van a tener dificultad a la hora de recordar y memorizar este tipo de dirección. De esta manera, con el propósito de convertir esta serie numérica en algo que podamos asociar con mayor facilidad a la dirección IP, se utiliza lo que hoy en día conocemos como nombre de dominio.
          .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema1/img15.png', style="width:450px", alt='').m-auto
    .row.bg-c6
      .col-12.px-5
        Separador
        .row.mb-5
          .col-auto.bg-c12(data-aos="fade-down")
            .px-3.pb-0
              .row.align-items-end
                .col-auto.pe-0
                  figure.fig-p1
                    img(src='@/assets/curso/tema1/img15.svg', style="width:50px" alt='').m-auto
                .col
                  h3 Sistema de Nombres de Dominio, DNS
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema1/img16.png', style="width:450px", alt='').m-auto
          .col-lg-8(data-aos="fade-left")
            p.mb-0 Son como una libreta de direcciones de sitios web. Cuando se escribe una dirección web en el navegador, el navegador busca los DNS antes de recuperar el sitio web. El navegador necesita averiguar en qué servidor vive el sitio web y así enviar los mensajes HTTP al lugar correcto (ver más abajo). Esto es como buscar la dirección de la tienda para que pueda llegar a ella. Por ejemplo, google.com es el nombre de dominio utilizado para sustituir la dirección IP 173.194.121.32. Así, usar un nombre de dominio es la manera más fácil para nosotros de identificar un ordenador a través de Internet.
        Separador
        .row.mb-5
          .col-auto.bg-c12(data-aos="fade-down")
            .px-3.pb-0
              .row.align-items-end
                .col-auto.pe-0
                  figure.fig-p1
                    img(src='@/assets/curso/tema1/img15.svg', style="width:50px" alt='').m-auto
                .col
                  h3 Protocolo HTTP
        .row.align-items-center
          .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
            p.mb-0 El Protocolo de Transferencia de Hipertexto es un protocolo de aplicación que define un idioma para que los #[b clientes y servidores] se puedan comunicar. Esto es como el idioma que utilizas para ordenar sus compras. De esta forma, es el nombre de un protocolo el cual nos permite realizar una petición de datos y recursos, como pueden ser documentos HTML. Es la base de cualquier intercambio de datos en la web, y un protocolo de estructura cliente-servidor, esto quiere decir que una petición de datos es iniciada por el elemento que recibirá los datos (el cliente), normalmente un navegador web.
          .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
            figure
              img(src='@/assets/curso/tema1/img5.svg',a, style="width:350px", alt='Dos computadoras uno al lado del otro, con un cable de red conectando sus puertos Ethernet.').m-auto
          .col-lg-4(data-aos="fade-left")
            .row
              .cajon-b
                p En ese orden de ideas, se han abordado conceptos sobre los componentes que hacen parte de la arquitectura de la Internet. Como se ha expuesto, Internet es una infraestructura técnica que permite que miles de millones de computadoras estén conectadas entre sí. Algunas, también llamadas servidores web que son capaces de enviar mensajes inteligibles a los navegadores. Por tanto, Internet es una infraestructura, mientras que la web es un servicio construido sobre dicha infraestructura. Se resalta que existen otros servicios soportados por Internet, como es el correo electrónico. (Moz://a, 2021)
        Separador
        #t_1_2
        .titulo-segundo.color-acento-contenido
          h2 1.2 Arquitectura web
        p.mb-5(data-aos="fade-right") Para entender el funcionamiento de un sistema, plataforma y aplicación web, es necesario conocer los conceptos y el comportamiento de tecnologías que están inmersas en esta arquitectura. Por lo que se detalla a continuación.
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")(data-aos="fade-left")
          .row(titulo="Arquitectura cliente/servidor")
            .col-12
              p Una aplicación web tiene una arquitectura simplificada, como lo es la arquitectura CLIENTE/SERVIDOR, en el que, por un lado, se encuentra al cliente que está constituido principalmente por un explorador web o web #[i browser], que será el encargado tanto de mostrar como de solicitar información o documentos a través de una red. Las computadoras conectadas a la web se llaman clientes y servidores. Un diagrama simplificado de cómo interactúan se vería de la siguiente forma:
              figure
                img(src='@/assets/curso/tema1/img6.svg', style="width:850px", alt='Representación visual de la arquitectura cliente/servidor, donde un dispositivo cliente se conectan a un servidor central. Se destaca la interacción bidireccional entre el cliente y servidor.').m-auto
          .row(titulo="Cliente web")
            .col-12
              p Es una aplicación ejecutable que por lo regular se encuentra previamente instalada en el dispositivo del usuario, permitiendo el acceso a Internet y siendo capaces de mostrar y solicitar documentos sobre una red, en ese sentido se infiere que es el responsable de la capa de presentación. 
              p Por tanto, los clientes web son dispositivos de los usuarios conectados a Internet (por ejemplo, tu ordenador conectado a la red Wi-Fi o el teléfono conectado a la red de telefonía móvil) y el #[i software] que se encuentra disponible y permite acceder a Internet en dichos dispositivos (normalmente, un navegador web como Firefox o Chrome).
              figure
                img(src='@/assets/curso/tema1/img7.svg', style="width:450px", alt='').m-auto
          .row(titulo="Servidor web")
            .col-12
              p En el otro lado de la arquitectura web se tiene al servidor web, cuya actividad más importante es la de atender las solicitudes de los clientes a través de los navegadores web. Es en esta instancia donde se lleva a cabo todo el procesamiento de las aplicaciones y la gestión de los datos. De manera adicional los servidores son computadores que almacenan páginas web, sitios o aplicaciones. 
              p Cuando un dispositivo cliente quiere acceder a una página web, una copia de la página web se descarga desde el servidor en el equipo cliente y se muestra en el navegador web del usuario. Básicamente, un servidor es una gran computadora que guarda y transmite datos vía Internet.
              figure
                img(src='@/assets/curso/tema1/img8.svg', style="width:450px", alt='').m-auto
      
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

<style lang="sass"></style>
