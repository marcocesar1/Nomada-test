# Nomada Software House

Con esta interfaz podrás subir la foto de tu actor favorito, la cual se encargará de averiguar su nombre y mostrar un pequeño resumen, así como algunas peliculas destacadas en las que ha participado.

## Requisitos

Necesitas tener las siguientes herramientas instaladas en tu computadora:

Node >= 14

npm >= 5.2

## Configuraciones 

Crear un archivo para almacenar las variables de entorno llamado **.env** puedes guiarte con el archivo **.env.example** ubicado en la raíz del proyecto, el nuevo archivo debe estar ubicado también en la misma ruta.

- REACT_APP_NOMADA_KEY=
- REACT_APP_MOVIEDB_KEY=

Agregar los valores correspondientes para las variables listadas.

**REACT_APP_NOMADA_KEY**: Para tener acceso a la API que nos ayuda a averiguar el nombre del actor a través de una imagen.

**REACT_APP_MOVIEDB_KEY**: Acceso a la API que nos da información complementaria del actor.

## Instalar dependencias

En el dicrectorio del proyecto ejecutar el siguiente comando

### `npm install`

este comando instalará todas las dependencias necesarias para ejecutar el proyecto.

## Ejecutar

Una vez instaladas todas las dependencias ejecuta el siguiente comando

### `npm start`

El cual va a correr la aplicación en modo de desarrollo.
Si todo marcha bien puedes abrir tu navegador en la siguiente ruta [http://localhost:3000](http://localhost:3000).

## Aprender Más

Si deseas profundizar mas conceptos sobre como trabajar con React puedes visitar la siguiente liga [React](https://reactjs.org/).
