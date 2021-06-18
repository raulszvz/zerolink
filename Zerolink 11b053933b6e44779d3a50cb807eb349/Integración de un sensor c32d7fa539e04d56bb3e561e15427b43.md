# Integración de un sensor

# Introducción

En este proyecto, vamos a construir una cámara de red diferente. Este proyecto de Raspberry Pi utiliza WebRTC (más sobre eso más adelante) para la comunicación entre la cámara y el navegador, y le permite acceder a una transmisión de video desde su dispositivo desde cualquier parte del mundo utilizando la función de URL pública de balenaCloud.

# Desarrollo

## Hardware

- Raspberry pi zero w
- Módulo de cámara compatible con RPi (módulo de cámara oficial recomendado v1, v2).

## Configurar la Raspberry Pi

Vamos a flashear una tarjeta SD con balenaOS a través de una descarga desde el panel de balenaCloud. Luego, podemos agregar el dispositivo para impulsar el proyecto y configurar las cosas de tal manera que se pueda actualizar fácilmente más adelante.

1. Registrarse en BalenaCloud
2. Crear una aplicación
3. Agregar un dispositivo y descargar el sistema operativo
4. Flashear la tarjeta SD e iniciar el dispositvo

[Variables](Integracio%CC%81n%20de%20un%20sensor%20c32d7fa539e04d56bb3e561e15427b43/Variables%2016184e225feb48aa850e3e9385b7cdbe.csv)

## Código

```python
#!/usr/bin/env python
from flask import Flask, render_template, Response
import picamera
import cv2
import socket
import io

app = Flask(__name__)
vc = cv2.VideoCapture(0)

@app.route('/')
def index():
    """Video streaming"""
    return render_template('index.html')

def gen():
    """Video streaming generator function."""
    while True:
        rval, frame = vc.read()
        cv2.imwrite('t.jpg', frame)
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + open('t.jpg', 'rb').read() + b'\r\n')

@app.route('/video_feed')
def video_feed():
    """Video streaming route. Put this in the src attribute of an img tag."""
    return Response(gen(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
        app.run(host='0.0.0.0', debug=True, threaded=True)
```

# Conclusión

La mayoría de los proyectos de cámara basados en Raspberry Pi utilizan MJPEG para transmitir "video", que es esencialmente una imagen JPEG sobrescrita por la siguiente imagen JPEG, y así sucesivamente.

Las transmisiones MJPEG generalmente se caracterizan por un FPS bajo y usan menos CPU y memoria, por eso son candidatos adecuados para la transmisión en dispositivos más débiles y de bajo consumo.

# Referencias

[Build a Raspberry Pi-based network camera using WebRTC](https://www.balena.io/blog/build-a-raspberry-pi-based-network-camera/)