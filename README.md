# Catstagram 🐱

## 🚀 Qué es esto
Este proyecto es básicamente un clon de Instagram hecho con **React**, pero en vez de fotos de personas usa fotos de gatos que saco de **The Cat API**.  
La idea era practicar cómo se arma una app con componentes, estados y consumo de APIs, y que se parezca lo más posible al diseño de Figma que nos dieron.

## 🎨 Diseño
Usé como referencia este diseño de Figma:  
[Instagram Web UI Figma](https://www.figma.com/community/file/1004033523744290376)  

Intenté copiar la estética: barra superior, barra lateral, perfil a la izquierda y el feed en el medio con las publicaciones.

## 🗂️ Organización del proyecto
Armé carpetas para separar todo:

- **Header.jsx** → la barra de arriba con buscador y botones.
- **Sidebar.jsx** → el menú lateral (Home, Explore, Reels, etc).
- **Feed.jsx** → muestra todas las publicaciones.
- **Post.jsx** → cada publicación individual.
- **Profile.jsx** → el perfil del usuario simulado.
- **ModalPost.jsx** → cuando clickeás un post se abre en grande.

También hice un archivo `catApi.js` para pedir las imágenes de gatos con Axios.

## ⚙️ Hooks que usé
- **useState**: para guardar las publicaciones y también cuál está seleccionada.
- **useEffect**: para que cuando se carga la página se haga la petición a la API.

## 📡 API
Usé **The Cat API** con la key que nos dieron. Pido 10 imágenes y a cada una le invento datos como usuario, caption, likes y comentarios.

## 🖼️ Cómo se ve un post
Cada post está rotado -3° porque era un requisito.  
Si hacés click en un post, se abre un modal con más info: imagen grande, usuario, caption, likes, comentarios y fecha.

## 👤 Perfil de usuario
El perfil es simulado, no hay login.  
Muestra:
- Nombre de usuario.
- Foto de perfil.
- Biografía corta.
- Cantidad de publicaciones (dinámico).
- Seguidores y seguidos.
- Botón de editar perfil.

## 📝 Qué aprendí
- Que **useEffect** sirve para ejecutar cosas al inicio, como pedir datos de una API.
- Que los **props** hacen que los componentes sean reutilizables (por ejemplo, `Post` recibe un objeto y lo muestra).
- Que separar todo en componentes hace que el código sea más ordenado.
- Que se puede simular datos (likes, comentarios) aunque vengan solo las imágenes de la API.

## 🚀 Cómo correrlo
1. Cloná el repo.
2. Instalá dependencias con `npm install`.
3. Corré la app con `npm start`.

Y listo, vas a ver un Instagram de gatos 😺
