# Postventa Login Widget

Web Component `<postventa-login>` que muestra un formulario de acceso
(email + contraseña). Valida en cliente y simula inicio de sesión.  
Emite un evento **onLogin** con `{ userId, email }`.

## Uso desde CDN

```html
<script type="module"
  src="https://cdn.jsdelivr.net/gh/USUARIO/postventa-login-widget/dist/postventa-login.js"></script>

<postventa-login></postventa-login>
```

### Escuchar el evento
```js
document.querySelector('postventa-login')
  .addEventListener('onLogin', e => console.log(e.detail));
```

## Integración en Vue (CDN)

1. Carga el script arriba.  
2. Vite config:

```ts
// vite.config.ts
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'postventa-login'
        }
      }
    })
  ]
})
```

Luego en tu `.vue`:

```vue
<template><postventa-login /></template>
```

## Estructura
```
postventa-login-widget/
├── dist/postventa-login.js
├── index.html
└── README.md
```
