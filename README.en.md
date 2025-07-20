![ES](https://flagcdn.com/w20/es.png) [Versión en Español](https://github.com/AlexLopEx03/Ajedrez/blob/main/README.md) de este readme

<div align="center">
  <h1>Chess</h1>
</div>

Chess game against an AI with adjustable difficulty.

🌐 Project website: https://juegoajedrez.vercel.app

***Personal open-source project by AlexLopEx03 under the AGPLv3.0 license*** 📜

---
<div align="center">
  
### Technologies used

| Vue | Vuetify |
|-----|---------|
| <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" width="80"/> | <img src="https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo.svg" width="80"/> |

</div>

> [!TIP]
>
> - **Vue**: A progressive and declarative JavaScript frontend framework.
> 
> - **Vuetify**: A UI component library for Vue based on Material Design.

> Other libraries and dependencies:
> - Chess.js: A library for handling internal chess logic, managing game state and most move validations.
> - Pinia: A Vue library for global state management.
> - Vite: An ultra-fast web development and build tool, created by the authors of Vue.
> - Vite-plugin-pwa: A Vite tool that simplifies the creation of Progressive Web Apps (PWAs).

---

> [!IMPORTANT]
> This project uses Stockfish as the AI engine controlling the opponent's pieces. 
> 
> Stockfish is one of the strongest chess engines in the world, developed in C++ as a community-driven open-source project since 2008 and still actively maintained.
> 
> Link to the [official Stockfish repository](https://github.com/official-stockfish/Stockfish)

---

> [!NOTE]
> To run Stockfish in the browser, I used the Stockfish.js project, a WebAssembly based technology, bridging the browser's JavaScript environment with the compiled C++ Stockfish engine.
>
> Link to the [Stockfish.js repository](https://github.com/lichess-org/stockfish.js)

---

Here's an example code snippet to run Stockfish.js, wrapped inside a Web Worker:

> <details>
> <summary>
>   What is a Web Worker?
> </summary>
> A Web Worker is a JavaScript feature that allows tasks to run in the background in the browser, parallel to the main web thread.
>
> They are mainly used for intensive processing without negatively impacting web performance or blocking the user interface. 
>
> </details>

```Js
// JavaScript snippet to use the Stockfish.js Web Worker

// Initialize the Web Worker
const stockfish = new Worker('./stockfish/stockfish.js')


// Communicate with the Web Worker via messages
let difficulty = 8
stockfish.postMessage(`setoption name Skill Level value ${difficulty}`)


// The Web Worker may or may not send responses depending on what it processes

// Here we handle moves sent by Stockfish via its messages
stockfish.onmessage = (event) => {
    if(event.data.startsWith('bestmove')){
        console.log(event.data) // -> for example 'bestmove a2a4'
    }
}
```
<br>

---

- ### PWA version available:

> If you want to try chess outside the browser and offline, you can download the PWA version of the website.

---

#### If you have any questions or comments about the project, you can direct them to the Discussions section.
