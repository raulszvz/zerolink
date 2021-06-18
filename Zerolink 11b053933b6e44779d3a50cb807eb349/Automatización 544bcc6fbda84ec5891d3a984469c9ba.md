# Automatización

# Introducción

WebThings Gateway es una distribución de software para puertas de enlace de hogares inteligentes que permite a los usuarios monitorear y controlar directamente su hogar inteligente a través de la web, sin intermediarios.

# Desarrollo

## Requerimientos

1. Una ****computadora de placa única raspberry pi zero y una fuente de alimentación (con una fuente de alimentación mínima de 2 A)
2. Una tarjeta microSD (al menos 8 GB, se recomienda clase 10)
3. Dongles wifi usb

## Configuración

### **1. Descargar imagen**

Primero descargue la última imagen de la puerta de enlace del [sitio web de Mozilla IoT](https://iot.mozilla.org/gateway/) .

### **2. Imagen Flash**

A continuación, deberá actualizar la imagen descargada en su tarjeta microSD. Hay [varios métodos](https://www.raspberrypi.org/documentation/installation/installing-images/) para hacer esto, pero recomendamos usar [Etcher](https://www.balena.io/etcher/) .

![https://d33wubrfki0l68.cloudfront.net/82980d55b9a33acc26df162f68da551324acab07/89192/images/etcher_screenshot.png](https://d33wubrfki0l68.cloudfront.net/82980d55b9a33acc26df162f68da551324acab07/89192/images/etcher_screenshot.png)

1. Grabador abierto
2. Inserte su tarjeta SD en un lector de tarjetas SD conectado a su computadora
3. Seleccione la imagen descargada como archivo de origen
4. Seleccione su tarjeta SD como destino
5. Haga clic en "¡Flash!"

Una vez que se complete el flasheo, retire la tarjeta microSD.

### **3. Arranque Raspberry Pi**

![https://d33wubrfki0l68.cloudfront.net/ea8d6d8cee768a82d840cfa5a49e16472cb051dd/b5f55/images/plug_in.png](https://d33wubrfki0l68.cloudfront.net/ea8d6d8cee768a82d840cfa5a49e16472cb051dd/b5f55/images/plug_in.png)

1. Inserte la tarjeta microSD flasheada en su Raspberry Pi
2. Conecte cualquier dongle USB
3. Conecte la fuente de alimentación para arrancar el Pi
4. Compruebe que los LED se iluminen: el rojo indica alimentación, el verde indica actividad
5. Espere unos minutos para que se inicie el software.

**Nota:** En el primer arranque, la Raspberry Pi puede tardar entre 2 y 3 minutos más en arrancar para encargarse de la configuración inicial.

### **4. Conecta Wi-Fi**

Es muy probable que su puerta de enlace se conecte a Internet y también se comunique con todos sus dispositivos a través de Wi-Fi, que debe configurarse a continuación.

Cuando la puerta de enlace se inicia, creará un punto de acceso Wi-Fi llamado " **WebThings Gateway XXXX** " (donde XXXX son cuatro dígitos de la dirección MAC de su Raspberry Pi). Utilice una computadora personal o un teléfono inteligente para buscar y conectarse a esa red inalámbrica.

![https://d33wubrfki0l68.cloudfront.net/85ddb585e74f0982333248e83c7c2e2e784ec393/b4f2e/images/wifi_ssid.png](https://d33wubrfki0l68.cloudfront.net/85ddb585e74f0982333248e83c7c2e2e784ec393/b4f2e/images/wifi_ssid.png)

Aparecerá una página de portal cautivo que muestra las redes Wi-Fi cercanas.

![https://d33wubrfki0l68.cloudfront.net/d5f1a5b7a189157a35f442042d55f80a5674d642/c3d4c/images/connect_wifi.png](https://d33wubrfki0l68.cloudfront.net/d5f1a5b7a189157a35f442042d55f80a5674d642/c3d4c/images/connect_wifi.png)

Seleccione la red deseada e ingrese la contraseña cuando se le solicite. La página "Conectando a WiFi ..." desaparecerá automáticamente.

**Notas:**

- Si está conectado a la red Wi-Fi “WebThings Gateway XXXX” pero no ve la pantalla de bienvenida, puede intentar escribir http://192.168.2.1 en la barra de direcciones de su navegador web para navegar manualmente a la página.
- Como alternativa al Wi-Fi, puede conectar la Raspberry Pi a su red doméstica usando un cable Ethernet e intentará obtener automáticamente una dirección IP de su enrutador. A continuación, puede iniciar la configuración inicial escribiendo "http: //gateway.local" en su navegador web.
- Si mueve la puerta de enlace a otra ubicación y ya no puede acceder a su red doméstica, volverá al modo de punto de acceso para que pueda conectarse y volver a configurar una red diferente.

### **5. Elija subdominio**

Una vez que haya conectado la Raspberry Pi a su red inalámbrica, debe asegurarse de que su computadora portátil / tableta / teléfono inteligente esté conectada a la misma red Wi-Fi y luego navegar a **http: //gateway.local** en su navegador web.

A continuación, se le dará la opción de registrar un subdominio gratuito para acceder de forma segura a su puerta de enlace a través de Internet utilizando un [servicio de tunelización seguro](https://github.com/WebThingsIO/registration_server/blob/master/doc/flow.md) proporcionado por Mozilla.

![https://d33wubrfki0l68.cloudfront.net/d20533bf08b5d3f25800c64d7d8aa3dd62cbe461/21c98/images/choose_subdomain.png](https://d33wubrfki0l68.cloudfront.net/d20533bf08b5d3f25800c64d7d8aa3dd62cbe461/21c98/images/choose_subdomain.png)

Ingrese su elección de subdominio y una dirección de correo electrónico en caso de que necesite recuperar su subdominio más adelante para reinstalarlo en una nueva puerta de enlace. Haga clic en "Crear" y espere unos momentos hasta que se complete el registro del subdominio. Intente cargar su subdominio en su teléfono inteligente o computadora cargando https://SUBDOMAIN.mozilla-iot.org (donde 'SUBDOMAIN' es el nombre de subdominio que ha elegido).

**Notas:**

- Puede optar por omitir este paso (ya sea para usar solo la puerta de enlace localmente en su red doméstica o configurar manualmente el DNS usted mismo), pero tenga en cuenta que actualmente, si omite este paso, tendrá que volver a flashear la puerta de enlace para registrarse un subdominio.
- Si http: //gateway.local no se carga (por ejemplo, en Android o Windows), puede buscar la dirección IP de la puerta de enlace en el enrutador de su hogar y usarla en su lugar (busque un nombre de host de "puerta de enlace" o una dirección MAC que comience con "b8: 27: eb".
- Si ni http: //gateway.local ni http: //

    se cargará en su navegador, verifique que su computadora esté definitivamente conectada a la misma red Wi-Fi a la que conectó la puerta de enlace.

- Si ha registrado previamente un subdominio que desea reutilizar, ingrese el subdominio y la dirección de correo electrónico que utilizó para registrarlo y siga las instrucciones en pantalla para volver a reclamarlo.

### **6. Cree una cuenta de usuario**

Una vez que haya registrado su subdominio, debería ser redirigido automáticamente al siguiente paso del proceso de configuración, que es crear su primera cuenta de usuario en la puerta de enlace. Así es como accederá a la puerta de enlace para descubrir, agregar, monitorear y administrar todos sus dispositivos conectados. Ingrese su nombre, dirección de correo electrónico y una contraseña y luego haga clic en "Siguiente".

![https://d33wubrfki0l68.cloudfront.net/f849b26d80ab65cb092d030a504dcfcd4613858c/ff30a/images/create_user_account.png](https://d33wubrfki0l68.cloudfront.net/f849b26d80ab65cb092d030a504dcfcd4613858c/ff30a/images/create_user_account.png)

# Conclusión

Una vez analizada la información y teniendo en cuenta el impacto de la tecnología en la vida moderna es posible ver que webthings es una de la plataformas mas interesantes que existen pues provee una gran capacidad tecnología en el montaje de hogares inteligentes pues basado en la filosofía de simplicidad que consideran los dispositivos apple es posible implementar y configurar periféricos con la mínima de instrucciones siendo algo intuitivo mas no asequible.

# Referencias

[Getting Started](https://iot.mozilla.org/docs/gateway-getting-started-guide.html)