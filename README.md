![EN](https://flagcdn.com/w20/gb.png) [English version](https://github.com/AlexLopEx03/Ajedrez/blob/main/README.en.md) of this readme

<div align="center">
  <h1>Ajedrez</h1>
</div>

Juego de ajedrez contra IA con dificultad regulable.

🌐 Web del proyecto: https://juegoajedrez.vercel.app

***Proyecto personal de código abierto por AlexLopEx03 bajo licencia AGPLv3.0*** 📜

---
<div align="center">
  
### Tecnologías utilizadas

| Vue | Vuetify |
|-----|---------|
| <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" width="80"/> | <img src="https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo.svg" width="80"/> |

</div>

> [!TIP]
>
> - **Vue**: Framework de frontend de JavaScript, con un enfoque progresivo y declarativo.
> 
> - **Vuetify**: Librería de componentes de UI para Vue, basada en Material Design.

> Otras librerías y dependencias:
> - Chess.js: Librería para el manejo de lógica interna de ajedrez, gestiona el estado de la partida y gran parte de las validaciones.
> - Pinia: Librería de Vue para el manejo de estados globales.
> - Vite: Herramienta de desarrollo y empaquetador web ultrarápido, creado por los autores de Vue.
> - Vite-plugin-pwa: Herramienta de Vite para facilitar la creación de Progressive Web Apps (PWA's).

---

> [!IMPORTANT]
> Este proyecto utiliza Stockfish como IA para controlar las piezas rivales. 
> 
> Stockfish es uno de los motores de ajedrez mas fuertes del mundo, desarrollado en C++ como proyecto de código abierto de forma comunitaria desde el año 2008 hasta ahora y sigue activo.
> 
> Enlace del [repositorio oficial de Stockfish](https://github.com/official-stockfish/Stockfish)

---

> [!NOTE]
> Para hacer uso de Stockfish en el navegador he empleado el proyecto de Stockfish.js, una tecnología hecha con WebAssembly que hace de puente entre el navegador web con JavaScript y el resultado del C++ compilado de Stockfish.
>
> Enlace del [repositorio de Stockfish.js](https://github.com/lichess-org/stockfish.js)

---

Aquí tienes un ejemplo de código para ejecutar Stockfish.js, que está envuelto en un Web Worker:

> <details>
> <summary>
>   ¿Qué es un web worker?
> </summary>
> Un Web Worker es una tecnología de JavaScript que permite ejecutar tareas en segundo plano en el navegador, de forma paralela al hilo principal de la web.
>
> Se usan principalmente para tareas de procesamiento intensivo, sin que afecten negativamente al rendimiento de la web ni bloqueen la interfaz de usuario.
> </details>

```Js
// Fragmento de JavaScript para usar el Web Worker de Stockfish.js

// Inicializar el Web Worker
const stockfish = new Worker('./stockfish/stockfish.js')


// Comunicarse con el Web Worker mediante mensajes
let dificultad = 8
stockfish.postMessage(`setoption name Skill Level value ${dificultad}`)


// El Web Worker podrá o no enviar respuestas según lo que procese

// Aquí recogeríamos los movimientos que nos envíe stockfish en sus mensajes
stockfish.onmessage = (event) => {
    if(event.data.startsWith('bestmove')){
        console.log(event.data) // -> devolvería 'bestmove a2a4' por ejemplo
    }
}
```
<br>

---

- ### Versión PWA disponible:

> Si tienes interés en probar el ajedrez fuera del navegador y sin conexión a internet, puedes descargar la versión PWA de la web.

---

#### Cualquier duda o comentario acerca del proyecto puedes dirigirte a la sección de Discussions.
