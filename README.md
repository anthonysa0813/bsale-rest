# Bsale Store

- aplicación de tienda virtual donde podrás visualizar los mejores productos del mercado de bebidas.

## Tecnologías usadas para el desarrollo:

### Cliente:

- Javascript
- HTML
- CSS

### Servidor:

- Javascript
- NodeJs
- Express
- Dotenv
- Mysql2
- cors

### URL DEPLOY BASE DE DATOS

- https://bsale-rest-production.up.railway.app/api/${endpoint}

### URL del proyecto en deploy (Netlify):

```bash
https://teal-meerkat-cb51b8.netlify.app/
```

## Repositorios:

- cliente: https://github.com/anthonysa0813/bsale-client-store
- Servidor: https://github.com/anthonysa0813/bsale-rest

## Documentación en Postman (Acerca de como usar las rutas a nivel del servidor)

- https://documenter.getpostman.com/view/9252275/2s847HNY3V

# Explicación del Proyecto

- Para este caso usé un patrón para crear mis Apis Rest.

```bash
Método + Ruta => Controlador => Response
```

# Rutas para Productos

## 1. Para obtener todos los productos

```bash
GET https://bsale-rest-production.up.railway.app/api/products
```

- Si estás corriendo el servidor localmente

```bash
GET http://localhost:5050/api/products
```

- Ejemplo de algunos datos.

```json
[
  {
    "id": 5,
    "name": "ENERGETICA MR BIG",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    "price": 1490,
    "discount": 20,
    "category": 1
  },
  {
    "id": 6,
    "name": "ENERGETICA RED BULL",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
    "price": 1490,
    "discount": 0,
    "category": 1
  },
  ...
]
```

## 2. Obtener los productos por categoría

```bash
GET https://bsale-rest-production.up.railway.app/api/products/${categoryId}
```

- Si deseas traer todos los productos por categoría, debes de pasarle el id de dicha categoría a consultar.

Ejemplo:

```bash
GET https://bsale-rest-production.up.railway.app/api/products/1
```

- En el ejemplo, pasé el id con valor "1", este es el id de una categoría, específicamente a "bebidas energéticcas. Entonces, estoy puedes consultar a la base de datos, sobre todos los productos que tengan relación a dicha categoría.
- Ejemplo de la respuesta (Response):

```json
[
  {
    "id": 5,
    "name": "ENERGETICA MR BIG",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    "price": 1490,
    "discount": 20,
    "category": 1
  },
  {
    "id": 6,
    "name": "ENERGETICA RED BULL",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
    "price": 1490,
    "discount": 0,
    "category": 1
  },
  ...
]
```

## 3. Obtener productos mediante un filtro

- La petición a esta URL, vamos a requerir una variable llamada name en la cual le pasaremos un valor.

```bash
GET https://bsale-rest-production.up.railway.app/api/products?name=PISCO
```

- En el ejemplo mostrado, le pasamos una query a nuestra ruta llamada "name" cuyo valor va a ser "PISCO", el valor de la query puede estar en minusculas, capitalize o Mayúsculas.

Ejemplo de la respuesta:

```json
[
  {
    "id": 8,
    "name": "PISCO ALTO DEL CARMEN 35º",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
    "price": 7990,
    "discount": 10,
    "category": 2
  },
  {
    "id": 9,
    "name": "PISCO ALTO DEL CARMEN 40º ",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto408581.jpg",
    "price": 5990,
    "discount": 0,
    "category": 2
  },
  ...
]
```

## CATEGORÍAS

## 1. Obtener todas las categorías

```bash
GET https://bsale-rest-production.up.railway.app/api/category
```

- Ejemplo de la respuesta de la petición.

```json
[
  {
    "id": 1,
    "name": "bebida energetica"
  },
  {
    "id": 2,
    "name": "pisco"
  },
  {
    "id": 3,
    "name": "ron"
  },
  {
    "id": 4,
    "name": "bebida"
  },
  {
    "id": 5,
    "name": "snack"
  },
  {
    "id": 6,
    "name": "cerveza"
  },
  {
    "id": 7,
    "name": "vodka"
  }
]
```

## Obtener una única Categoría

```bash
GET https://bsale-rest-production.up.railway.app/api/category/${idCategory}
```

- En ésta petición, debemos de pasarle un parámetro más al final dicho valor será el value de la categoría a buscar.

Ejemplo de la respuesta:

```json
[
  {
    "id": 1,
    "name": "bebida energetica"
  }
]
```
