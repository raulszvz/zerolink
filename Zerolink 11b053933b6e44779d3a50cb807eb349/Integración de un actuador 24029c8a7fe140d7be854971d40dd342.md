# Integración de un actuador

# Introducción

Controlar un pequeño servomotor de CC con una Raspberry Pi Zero WH es bastante fácil. Con un servomotor de CC, puede crear una variedad de dispositivos accionados mecánicamente, como animatrónicos de papel y accionadores lineales.

# Desarrollo

## Conceptos básicos del servomotor

Un servomotor de CC es un componente electromecánico que utiliza pulsos digitales para proporcionar una rotación de precisión. La construcción de un servomotor consiste en un motor de CC conectado a un servomecanismo. El servomecanismo permite la producción de movimiento a un nivel significativo de energía con respecto al ajuste de entrada.

Tal mecanismo permite lograr una rotación de precisión basada en la señal de retroalimentación interna. Un potenciómetro conectado mecánicamente al motor de CC mediante un mecanismo de engranajes proporciona la señal de retroalimentación interna. El potenciómetro produce una pequeña tensión proporcional. Una pequeña unidad de control electrónico lee este voltaje proporcional ajustando así el motor de CC a la posición de rotación correcta.

La señal de modulación de ancho de pulso (PWM) proporciona el ajuste de referencia para la posición angular del motor de CC.

![Integracio%CC%81n%20de%20un%20actuador%2024029c8a7fe140d7be854971d40dd342/Untitled.png](Integracio%CC%81n%20de%20un%20actuador%2024029c8a7fe140d7be854971d40dd342/Untitled.png)

Componentes internos (servomecanismo) de un servomotor CC tipico.

## Cableado de un servomotor al pi zero

Para construir un controlador de servomotor de CC simple, necesitará tres componentes físicos de hardware: un interruptor de botón táctil, un Pi Zero y un servomotor de CC pequeño. Además, necesita un componente de software, el código Python servo.py

![Integracio%CC%81n%20de%20un%20actuador%2024029c8a7fe140d7be854971d40dd342/Untitled%201.png](Integracio%CC%81n%20de%20un%20actuador%2024029c8a7fe140d7be854971d40dd342/Untitled%201.png)

Placa de pruebas sin soldadura para cablea un servomotor a un pi zero.

![Integracio%CC%81n%20de%20un%20actuador%2024029c8a7fe140d7be854971d40dd342/Untitled%202.png](Integracio%CC%81n%20de%20un%20actuador%2024029c8a7fe140d7be854971d40dd342/Untitled%202.png)

Diagrama esquemático del circuito del controlador de servomotor

## Código servo.py

El código Python [servo.py](http://servo.py) utiliza la biblioteca gpiozero para operar el servomotor cableado eléctricamente al Pi Zero. La biblioteca gpiozero está empaquetada con la distribución de Linux Pi Zero Raspbian Buster.

```python
from gpiozero import Button
from gpiozero import Servo
from time import sleep

servo = Servo(17)
button = Button(2)

while True:
	if button.is_pressed:
		print ("Botón presionado")
		servo.min()
		sleep(1.5)
		servo.mid()
		sleep(1.5)
		servo.max()
		sleep(1.5)
	else:
		print("Botón no presionado")
		sleep(0.5)
```

# Conclusión

Cuando presiona y mantiene presionado el interruptor de botón táctil, el servomotor de CC girará entre las posiciones angulares mínima, media y máxima. También verá el mensaje "Botón presionado" desplazándose hacia abajo en la pantalla del monitor.

Si el servomotor de no gira o los mensajes no se desplazan hacia abajo en la pantalla de su monitor, verifique el cableado eléctrico y el código Python. Después de encontrar y corregir el error, vuelva a ejecutar el código.

Como experimento, puede cambiar los valores de reposo () y tomar nota del comportamiento de rotación del servomotor de

# Referencias

[balena](https://www.balena.io/blog/)