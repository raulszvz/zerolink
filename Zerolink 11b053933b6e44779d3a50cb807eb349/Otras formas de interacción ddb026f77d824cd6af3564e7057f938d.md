# Otras formas de interacción

# Introducción

Para ayudar a depurar y desarrollar aplicaciones, balena proporciona un terminal basado en navegador y una herramienta de línea de comandos para facilitar el acceso SSH a sus dispositivos. Con estas herramientas, tiene acceso de consola a cualquiera de sus contenedores en ejecución, así como al sistema operativo host, lo que le permite probar pequeños fragmentos de código y verificar los registros del sistema en su dispositivo. También puede acceder a su dispositivo a través de un cliente SSH independiente.

# Desarrollo

## Terminal web

Para usar esta función, navegue hasta su aplicación y seleccione el dispositivo al que desea acceder. Verá una ventana de Terminal debajo de la ventana de Registros :

![Otras%20formas%20de%20interaccio%CC%81n%20ddb026f77d824cd6af3564e7057f938d/Untitled.png](Otras%20formas%20de%20interaccio%CC%81n%20ddb026f77d824cd6af3564e7057f938d/Untitled.png)

Si su dispositivo está en línea, seleccione un destino como el sistema operativo host o un servicio en ejecución, y haga clic en el botón azul *> _ Iniciar sesión de terminal* . Para iniciar una sesión de terminal para un servicio, debe asegurarse de que el contenedor de servicios se esté ejecutando. Si el código del contenedor falla o termina rápidamente, no es posible adjuntarle una consola.

Debería iniciarse una sesión de terminal en uno o dos segundos. Si desea una ventana más grande para el terminal, puede hacer clic en el botón *Expandir* en la esquina superior derecha.

## Balena SSH

Si prefiere trabajar desde la línea de comandos, puede utilizar balena sshpara conectarse a los contenedores de su aplicación y al sistema operativo host. Primero, deberá instalar la interfaz de línea de comandos (CLI) de balena . A continuación, debe tener una clave SSH configurada en su máquina de desarrollo y agregada al panel de balenaCloud . Una vez que esté configurado, ejecute lo siguiente en la terminal de su máquina de desarrollo:

```bash
balena ssh <device-uuid>
```

<device-uuid>es el identificador único del dispositivo al que desea acceder, que se puede encontrar a través del panel de control o en la salida del balena devicescomando CLI. De forma predeterminada, el acceso SSH se enruta al shell del sistema operativo del host. Sin embargo, puede usar SSH en un servicio especificando su nombre como parte del comando:

```bash
balena ssh <device-uuid> main
```

Esto también funciona en aplicaciones de contenedores múltiples; simplemente pase el nombre del servicio apropiado (como se define en docker-compose.yml) en lugar de main.

Cuando se usa un nombre de aplicación o UUID de dispositivo como se indicó anteriormente, `balena`ssh usa la VPN de balena para crear un túnel seguro al dispositivo y luego reenviar el tráfico SSH entre el dispositivo y su máquina de desarrollo.

Si se utiliza una dirección IP o un nombre de host .local (en lugar de un nombre de aplicación o UUID de dispositivo), `balena`ssh establece una conexión directa que no depende de la VPN de balena:

```bash
balena ssh 192.168.1.23
balena ssh <device-uuid>.local
```

Esto debería funcionar sin más configuración en el caso de dispositivos que ejecutan una imagen balenaOS de desarrollo , que permite el acceso SSH raíz sin contraseña (y por esta razón, nunca debería estar directamente expuesto a la Internet pública). En el caso de una imagen de producción de balenaOS, una clave SSH debe estar presente en el archivo config.json del dispositivo.

## Cliente SSH

Si prefiere utilizar un cliente SSH independiente para conectarse al dispositivo, el servidor SSH en un dispositivo escucha en el puerto TCP 22222. Si bien las imágenes de desarrollo tienen habilitado el acceso raíz sin contraseña, las imágenes de producción requieren que se agregue una clave SSH al config.jsonarchivo.

```bash
ssh -p 22222 root@<device_ip_address>
```

## Tunel Balena

Siempre se podrá acceder al servidor SSH del sistema operativo host en el puerto TCP a 22222 menos que se haya bloqueado a nivel de red. Para evitar esto, puede usar el balena tunnelcomando de la CLI de balena, que puede usarse para asignar puertos locales a puertos de escucha en el dispositivo. Por ejemplo, el siguiente comando asigna el puerto local 4321al puerto 22222 del dispositivo:

```bash
balena tunnel <device-uuid> -p 22222:4321
```

Luego, se puede acceder al dispositivo en el puerto a 4321través del balena sshcomando de la CLI de balena o del cliente SSH independiente:

```bash
balena ssh 127.0.0.1 -p 4321
```

```bash
ssh -p 4321 root@127.0.0.1
```

# Conclusión

Balena cloud es una plataforma que permite la interacción de múltiples dispositivos IoT, esto mediante su interfaz web, sin embargo, en la práctica resulta mas facil la utilización de interfaces de texto (CLI) ya que permite la automatización de procesos, es así como la solución de soporte SSH resulta una implementación eficiente y oportuna.

# Referencias