# Zerolink

Area: Escolar
Estado: En proceso
Fin: May 31, 2021
Inicio: Apr 30, 2021
Participantes: Alejandra Perez Guerrero, Fernando Yael Ortega Guizar, Karla Valeria Perez Perez, Raúl Sánchez Vázquez, Rogelio Robledo Moreno
URL: https://www.notion.so/raulsan/Zerolink-45406ce4097a40dfa82f6c7c224d1176

El presente proyecto se desarrollo para servir como entrega de ambas materias.

El código del proyecto se encuentra en Github y se presenta en la sección repositorio.

El funcionamiento del proyecto se muestra mediante un video, el link de este se encuentra en la sección video.

# Introducción

El presente documento plantea el desarrollo de un proyecto conjunto de las materias de domótica y temas de ingeniería de software de tal forma que sea posible integrar los conocimientos adquiridos y potenciales de ambas materias.

Lo anterior se plantea en el entendido de generar una evaluación conjunta y robusta que enaltezca los principios rectores de las materias, posibilitando el alcanzar objetivos más haya de los planteados por el programa de las materias.

De forma particular se busca generar un proyecto que proponga el prototipo de un producto de consumo final enfocado en la satisfacción de necesidades domóticas cuyo interior este integrado por una arquitectura de microservicios. De igual forma se desarrollara un sistema basado en la microservicios y la nube que sirve de interfaz entre el usuario final y los dispositivos embebidos.

# Arquitectura

El dispositivo domótico esta basado en la tarjeta raspberry pi zero w, la cual fungirá como plataforma de control y comunicación. Esta posee características tales como:

- Dimensiones 66.0mm x 30.5mm x 5.0mm
- 1GHz, single-core CPU
- 512MB RAM
- Mini HDMI
- 2 Micro usb (datos y energia)
- 802.11 b/g/n wireless LAN
- Bluetooth 4.1
- CSI camera connector

![Zerolink%2011b053933b6e44779d3a50cb807eb349/zerolink-arq.png](Zerolink%2011b053933b6e44779d3a50cb807eb349/zerolink-arq.png)

Arquitectura física del dispositivo 

Una vez conocida la plataforma se debe detallar que no se utilizaran el total de los periféricos del dispositivo por lo cual se listan los elementos a utilizar y la forma en que se usaran.

1. Sistema operativo

    Puesto que se desea utilizar una arquitectura basada en microservicio de forma interna se opto por utilizar el SO Balena OS, el cual monta un kernel linux  y un gestor de contenedores.

    - El kernel controla el funcionamiento a nivel lógico gestionando los periféricos y respondiendo las solicitudes lógicas del gestor de contenedores.
    - El gestor de contenedores gestiona las aplicaciones, donde básicamente es posible diseñar aplicaciones como microservicios y el sistema los controla mediante docker compose

    Cabe destacar que a diferencia de otros sistemas Balena OS emplea muy pocos recursos, pues es posible montarlo en una tarjeta micro sd de como mínimo 4GB ocupando únicamente 1GB, dejando el resto de espacio para las aplicaciones.

2. Dongle wifi

    Entiéndase como un dispositivo wifi-usb externo el cual servirá como punto de acceso para los dispositivos a la raspberry pi.

3. Wifi integrado

    Dispositivo wifi interno el cual se conectara a al router central para proveer acceso a internet.

4. Cámara

    Cámara raspberry la cual provee imagenes o video en 720p, su conexión es nativa mediante el puesto CSI de las raspberry pi.

5. Bluetooth

    Radio bluetooth de baja energia con integracion nativa rasberry pi el cual facilita la conexión de dispositivos tales como smartphones, sistemas de sonido, balizas, etc.

# Aplicaciones

Una vez que se presento la arquitectura es posible presentar las aplicaciones que justifican la integración de ambas materias mediante el presente proyecto.

La plataforma integra componente de software y hardware y ha sido nombrada zerolink, definiéndose de la siguiente forma:

Zerolink es un dispositivo que combine una camara de seguridad en tiempo real dotada de reconocimiento facial e integraciones de aprendizaje automático que ademas funge como access point el cual al ser puesto en funcion junto con más dispositivos zerolink creara un red mesh que proveera de internet estable a toda la casa así como de seguridad.

Como se puede ver en la definición zerolink es un dispositivo que puede integrarse a las casas facilitando la seguridad y posibilitando la integración de dispositivos que aumenten la funciones originales de zerolink.

Por ejemplo será posible integrar dispositivos como focos, enchufes, electrodomesticos o un sinfin de sensores y actuadores, sin embargo, no hay que perder de vista que zerolink es un dispositivo domotico en si.

Y si a esto le agregamos que zerolink interna y externamente se basa en microservicios esto hace que la plataforma sea mas interesante.

## Arquitectura de las aplicaciones

![Zerolink%2011b053933b6e44779d3a50cb807eb349/zerolinl-app.png](Zerolink%2011b053933b6e44779d3a50cb807eb349/zerolinl-app.png)

Arquitectura lógica del dispositivo zerolink

1. Sistema operativos

    A. Aplicaciones

2. LAN

    A. Dispositivos móviles

3. WLAN

    A. Servidor

    B. Cliente

4. Cámara

    A. Objeto de captura

5. Bluetooth

    A. Dispositivos IoT

    - Arduino
    - Focos
    - Enchufes
    - Balizas

# Desarrollo

## Dispositivo

Al momento el dispositivo se encuentra construido en un 80%, esto ya que el dispositivo tiene dos elementos, por un lado la electrónica (la cual se refleja en le diagrama de [arquitectura](https://www.notion.so/Propuesta-Zerolink-1c5bcf28664e44c3a5741b5880326b41)) y por otro lado la estructura física que contendrá a los componentes electrónicos.

![Zerolink%2011b053933b6e44779d3a50cb807eb349/DB82307A-13F0-4DE5-B86B-B82DCC785193.jpeg](Zerolink%2011b053933b6e44779d3a50cb807eb349/DB82307A-13F0-4DE5-B86B-B82DCC785193.jpeg)

Estructura del circuito con componentes y enclosure rpi

![Zerolink%2011b053933b6e44779d3a50cb807eb349/4BABC84B-56B2-4EB4-AAAA-D842EE9CA579.jpeg](Zerolink%2011b053933b6e44779d3a50cb807eb349/4BABC84B-56B2-4EB4-AAAA-D842EE9CA579.jpeg)

Estructura general del circuito 

![Zerolink%2011b053933b6e44779d3a50cb807eb349/6DA2A165-F289-4D5E-B75C-8553C4AA63E7.jpeg](Zerolink%2011b053933b6e44779d3a50cb807eb349/6DA2A165-F289-4D5E-B75C-8553C4AA63E7.jpeg)

Camara RPI Sony de 5 mpx

- Ya se cuenta con la estructura que albergara al los componentes electrónicos, sin embargo, aún es necesario hacer adaptaciones para su correcto montaje.

![Zerolink%2011b053933b6e44779d3a50cb807eb349/DDCF79C3-42D6-4AC2-8DE3-7D7345AA38BE.jpeg](Zerolink%2011b053933b6e44779d3a50cb807eb349/DDCF79C3-42D6-4AC2-8DE3-7D7345AA38BE.jpeg)

Vista superior del enclosure del circuito 

![Zerolink%2011b053933b6e44779d3a50cb807eb349/AC1A6F5C-E93A-4A47-9C06-AD057F20BB0F.jpeg](Zerolink%2011b053933b6e44779d3a50cb807eb349/AC1A6F5C-E93A-4A47-9C06-AD057F20BB0F.jpeg)

Vista frontal del enclosure del circuito 

![Zerolink%2011b053933b6e44779d3a50cb807eb349/7C07BC9F-4EF7-4381-916B-6BB2EFFCA79C.jpeg](Zerolink%2011b053933b6e44779d3a50cb807eb349/7C07BC9F-4EF7-4381-916B-6BB2EFFCA79C.jpeg)

Vista isometrica del enclosure ensamblado 

## Sistema operativo

Al momento el sistema operativo ha sido instalado y configurado al 100%

![Zerolink%2011b053933b6e44779d3a50cb807eb349/Untitled.png](Zerolink%2011b053933b6e44779d3a50cb807eb349/Untitled.png)

Dashboard del sistema operativo

## Microservicios domóticos

Hasta el momento se tienen contempladas 4 microservicios domóticos los cuales puede variar de acuerdo a si el proyecto es o no en equipo o inclusive al número de integrantes de este.

### Microservicio 1: API de usuarios

Es una utilería destinada a la gestión de usuarios dentro de una red LAN de tal forma que una red domestica posea perfiles de uso donde se controlen accesos e inclusive un control parental.

La presente API puede estar implementada en cualquier framework web considerando como buenas opciones flask (python) o spring boot (java).

![Zerolink%2011b053933b6e44779d3a50cb807eb349/Untitled%201.png](Zerolink%2011b053933b6e44779d3a50cb807eb349/Untitled%201.png)

![Zerolink%2011b053933b6e44779d3a50cb807eb349/Untitled%202.png](Zerolink%2011b053933b6e44779d3a50cb807eb349/Untitled%202.png)

![Zerolink%2011b053933b6e44779d3a50cb807eb349/Untitled%203.png](Zerolink%2011b053933b6e44779d3a50cb807eb349/Untitled%203.png)

### Microservicio 2: Wifi Access Point

WiFi Access Point es una utilidad para extender dinámicamente una red cableada o inalámbrica existente. Para lograr esto, la utilidad utiliza el chip WiFi integrado para crear un punto de acceso al que puede conectar sus dispositivos. Para habilitar el acceso a Internet, puede conectar un cable Ethernet (modo AP) o utilizar una interfaz WiFi secundaria (mediante un dispositivo USB WiFi) para conectarse a una red habilitada para Internet.

El repetidor WiFi puede funcionar en los siguientes modos:

- Punto de acceso: amplíe una conexión Ethernet existente con una red de punto de acceso
- Repetidor: extiende una conexión inalámbrica existente con una red de punto de acceso. Requiere el uso de un dongle USB Wifi

### Microservicio 3: Cámara web RTC con inteligencia artificial

Este proyecto de Raspberry Pi utiliza WebRTC (más sobre eso más adelante) para la comunicación entre la cámara y el navegador, y le permite acceder a una transmisión de video desde su dispositivo desde cualquier parte del mundo utilizando la función de URL pública de balenaCloud.

```python
import io
import picamera
import logging
import socketserver
from threading import Condition
from http import server

PAGE="""\
<html>
<head>
<title>Raspberry Pi - Surveillance Camera</title>
</head>
<body>
<center><h1>Raspberry Pi - Surveillance Camera</h1></center>
<center><img src="stream.mjpg" width="640" height="480"></center>
</body>
</html>
"""

class StreamingOutput(object):
    def __init__(self):
        self.frame = None
        self.buffer = io.BytesIO()
        self.condition = Condition()

    def write(self, buf):
        if buf.startswith(b'\xff\xd8'):
            # New frame, copy the existing buffer's content and notify all
            # clients it's available
            self.buffer.truncate()
            with self.condition:
                self.frame = self.buffer.getvalue()
                self.condition.notify_all()
            self.buffer.seek(0)
        return self.buffer.write(buf)

class StreamingHandler(server.BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.send_response(301)
            self.send_header('Location', '/index.html')
            self.end_headers()
        elif self.path == '/index.html':
            content = PAGE.encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'text/html')
            self.send_header('Content-Length', len(content))
            self.end_headers()
            self.wfile.write(content)
        elif self.path == '/stream.mjpg':
            self.send_response(200)
            self.send_header('Age', 0)
            self.send_header('Cache-Control', 'no-cache, private')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Content-Type', 'multipart/x-mixed-replace; boundary=FRAME')
            self.end_headers()
            try:
                while True:
                    with output.condition:
                        output.condition.wait()
                        frame = output.frame
                    self.wfile.write(b'--FRAME\r\n')
                    self.send_header('Content-Type', 'image/jpeg')
                    self.send_header('Content-Length', len(frame))
                    self.end_headers()
                    self.wfile.write(frame)
                    self.wfile.write(b'\r\n')
            except Exception as e:
                logging.warning(
                    'Removed streaming client %s: %s',
                    self.client_address, str(e))
        else:
            self.send_error(404)
            self.end_headers()

class StreamingServer(socketserver.ThreadingMixIn, server.HTTPServer):
    allow_reuse_address = True
    daemon_threads = True

with picamera.PiCamera(resolution='640x480', framerate=24) as camera:
    output = StreamingOutput()
    #Uncomment the next line to change your Pi's Camera rotation (in degrees)
    #camera.rotation = 90
    camera.start_recording(output, format='mjpeg')
    try:
        address = ('', 8000)
        server = StreamingServer(address, StreamingHandler)
        server.serve_forever()
    finally:
        camera.stop_recording()
```

## Microservicios web

### Microservicio 1: Base de datos

Este servicio refiere a una base de datos o conjunto de bases de datos alojados en la nube. En este apartado se considera una diferenciación al tipo de base de datos necesaria para la función requerida.

Por ejemplo para datos de usuario o conjuntos enriquecidos se requiere Mongo DB, sin embargo, si los datos a almacenar provienen de sensores o dispositivos domóticos se utilizara Influx DB.

![Zerolink%2011b053933b6e44779d3a50cb807eb349/Untitled%204.png](Zerolink%2011b053933b6e44779d3a50cb807eb349/Untitled%204.png)

### Microservicio 2: Dashboard domótico

Este servicio se compone de un conjunto de microservicios los cuales serán componentes React JS o Gatsby JS para la presentación de datos y control de los nodos zerolink.

Además de que se considera la versión offline o PWA la cual facilitara el soporte de un frontend cuasi nativo.

![Zerolink%2011b053933b6e44779d3a50cb807eb349/Untitled%205.png](Zerolink%2011b053933b6e44779d3a50cb807eb349/Untitled%205.png)

### Microservicio 3: Frontend cámara RTC

Refiere al componente React JS necesario para presentar la visualización en tiempo real de las camaras en los nodos zerolink

![Zerolink%2011b053933b6e44779d3a50cb807eb349/Untitled%206.png](Zerolink%2011b053933b6e44779d3a50cb807eb349/Untitled%206.png)

# Video

A continuación se presenta la evidencia audiovisual del funcionamiento del proyecto.

[zerolink_funcionamiento](https://youtu.be/tpMSJjPWZbc)

# Repositorio

En la siguiente liga se encuentra accesible el código fuente, las configuraciones, diagramas e inclusive el presente documento.

[raulszvz/zerolink](https://github.com/raulszvz/zerolink)

# Conclusiones

Cuando se habla de IoT se piensa en dispositivos pequeños con baterias de larga duración y que hacen más facil la vida, sin embargo, cuando se habla de IoT mediante sistemas embedidos (como raspberry pi o arduino) es comun que se asocie con prototipos cuya funcionalidad queda legada a actividades recreativas.

Es por ello que se planteo el desarrollo de zerolink como un dispositivo que aunque tiene por base un sistema embedido posibilita el desarrollo de aplicaciones comerciales.

Por tanto, zerolink se cataloga como un dispositivo que favorece el intercambio de información y la seguridad de forma eficiente y a un bajo costo, compitiendo con desarrollo costosos con plataformas complejas. Ademas que este dispositivo cuenta con dos grandes funcionalidades lo que lo hace aun mejor, ya que se puede utilizar para mantener seguro un sitio, ya sea lugar de trabajo o en el mismo hogar por su sistema de reconocmiento facial con inteligencia artificial, y por otra parte el poder servir como red mesh que nos ampliara las posibilidades. 

Con esto se pudo ver que con ambas materias usadas a la par se pueden crear sin fin de proyectos, siendo este uno de ellos, ya que al optar por usar microservicios su implementación resulto ser mas fácil y rápida entonces obtuvimos un producto del cual se puede sacar provecho, y ayudara a mejorar los hogares en el ámbito de seguridad y conectividad. 

# Referencias

[Get started with Raspberry Pi 3 and Node.js - Balena Documentation](https://www.balena.io/docs/learn/getting-started/raspberrypi3/nodejs/)

[Two projects, one device: turn your Raspberry Pi into a multitool!](https://www.balena.io/blog/two-projects-one-device-turn-your-raspberry-pi-into-a-multitool/)

[Turn a Raspberry Pi into a Wi-Fi access point or repeater](https://www.balena.io/blog/turn-a-raspberry-pi-into-a-wi-fi-access-point-or-repeater/)

[Build a Raspberry Pi-based network camera using WebRTC](https://www.balena.io/blog/build-a-raspberry-pi-based-network-camera/)

[balenalabs-incubator/wifi-repeater](https://github.com/balenalabs-incubator/wifi-repeater)

[balena-io-examples/balena-python-hello-world](https://github.com/balena-io-examples/balena-python-hello-world)

[Video Streaming Raspberry Pi Camera | Random Nerd Tutorials](https://randomnerdtutorials.com/video-streaming-with-raspberry-pi-camera/)

[Instalar y configurar el servicio DNS dinámico Duck DNS con Docker](https://geekland.eu/instalar-y-configurar-duck-dns-con-docker/)

[Make Python API to access Mongo Atlas Database - GeeksforGeeks](https://www.geeksforgeeks.org/make-python-api-to-access-mongo-atlas-database/)

# Anexos

[Things as a Service](Zerolink%2011b053933b6e44779d3a50cb807eb349/Things%20as%20a%20Service%20f300e34091654058929d8a9019acbb8f.md)

[Integración de un actuador](Zerolink%2011b053933b6e44779d3a50cb807eb349/Integracio%CC%81n%20de%20un%20actuador%2024029c8a7fe140d7be854971d40dd342.md)

[Integración de un sensor](Zerolink%2011b053933b6e44779d3a50cb807eb349/Integracio%CC%81n%20de%20un%20sensor%20c32d7fa539e04d56bb3e561e15427b43.md)

[Automatización](Zerolink%2011b053933b6e44779d3a50cb807eb349/Automatizacio%CC%81n%20544bcc6fbda84ec5891d3a984469c9ba.md)

[Otras formas de interacción](Zerolink%2011b053933b6e44779d3a50cb807eb349/Otras%20formas%20de%20interaccio%CC%81n%20ddb026f77d824cd6af3564e7057f938d.md)