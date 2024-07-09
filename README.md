
## Correr en dev

1. Clonar el repositorio.
2. Crear una copia del ```.env.template``` y renombrarlo ```.env``` y cambiar las variables de entorno 
3. instalar dependencias ```npm install```
4. Levantar la base de datos ```docker compose up -d```

5. Instalar prisma ```npm install prisma --save-dev 
``` (creo que ya se guardó)```
6. Correr las migraciones de Prisma ```npx prisma migrate dev``` 
7. ejecutar seed ```npm run seed```
5. Correr el proyecto ```npm run dev```
8. Correr proyecto en otro puerto ```npm run dev -- -p 4000
```
//TODO relacion polimórfica para la imagenes


para ejecutar codigo typecript: npm i -D ts-node

