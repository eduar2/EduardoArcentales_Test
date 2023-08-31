
# Test with NodeJS, NestJS, TypeScript, TypeORM, MySQL

El proyecto se conecta con una base de datos MySQL. Puede ser creada una BD que se tenga localmente, o en caso de no contar con el cliente, ejecutar el comando:
```
docker compose up -d
```
Para instalar las dependencias requeridas, ejecutar el comando:
```
npm install
```
Para ejecutar el proyecto, se puede ejecutar el comando 
```
npm start
```

### Tests 
Para ejecutar los tests ejecutar el comando:
`npm test`
*Pendiente añadir más tests

### Usar un cliente REST para probar los endpoints.

Una vez que el proyecto se esté ejecutando, se pueden probar los siguientes endpoints:

Organizaciones (todas las organizaciones):

GET  [http://localhost:3000/api/v1/organizations/](http://localhost:3000/api/v1/organizations/)




Obtener una organización específica:

GET  [http://localhost:3000/api/v1/organizations/1](http://localhost:3000/api/v1/organizations/1)


Crear una organización:

`{"name":"organization 4",
  "status": 1}`
  
POST  [http://localhost:3000/api/v1/organizations](http://localhost:3000/api/v1/organizations/1)



Editar una organización:

`{"name":"Organization edited",
"status":1}`

PATCH  [http://localhost:3000/api/v1/organizations/1](http://localhost:3000/api/v1/organizations/1)



Borrar una organización:

DELETE  [http://localhost:3000/api/v1/organizations/2](http://localhost:3000/api/v1/organizations/2)



Obtener los códigos de verificación de los repositorios:

GET  [http://localhost:3000/api/v1/repositories](http://localhost:3000/api/v1/repositories)




Obtener métricas de repositorios de una tribu (el parámetro corresponde al identificador de la tribu)

GET  [http://localhost:3000/api/v1/tribes/1/](http://localhost:3000/api/v1/tribes/1/)




Obtener métricas en formato csv

GET  [http://localhost:3000/api/v1/tribes/1/report](http://localhost:3000/api/v1/tribes/1/report)



Todos los endpoints se pueden probar desde Postman (se incluye la colección  ExerciseNodeJS.postman_collection.json que pude ser importada en Postman). También se puede probar desde la siguiente url: 

[http://localhost:3000/swagger](http://localhost:3000/swagger)
