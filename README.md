# support-fix-pc

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Jerarquia del Proyecto
  ./assets -- Parte estatica imagenes, logos,etc
  ./Components -- Template o logica reutilizable, utilizada en algunas vistas
  /Layouts --  Geometria(esqueleto) de la Barra de Navegacion
  /api -- Directorio para cargar todas las sesiones de profesores, desde el directorio publico
  credenent.tchers -- Script JSON que contiene credenciales de sesion de profesores, para pruebas
  /Profesor/composables: Script que carga todos los datos de la categoria de Profesor
  /Store: Directorio que carga el estado de sesión de el usuario corresp. mutaciones, metodos, de vuex
  /utils: Scripts con metodos utiles p/futura integracion BackEnd y scripts erroneos.
  ./index.js: Hoja de ruteo, implementa logica d seguridad de sesión, compuesta con permisos.