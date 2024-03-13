#Anotaciones
no cambiar el layout principal(root layout)(recomendacion)

lrc : Crear snippet de layout

comando para instalar iconos : npm i @primer/octicons-react

usar siempre export * from : es para exportar todos los funtional components dentro de ese archivo 

App Router: Lo que se debe usar en Next13+

ctlr + espacio : aparece autocompletado de tailwind


Image with src "/images/dino.png" has either: agregar al Image: style={{ width: '120px', height: '120px' }} 

No olvidar agregar el directorio a tailwind.config.css

un component "use client" puede tener como hijos server components pero no importar server componentes, entonces el NEXTUI se puede usar tranuilamente 

 <[object Object]>: si me sale error por un componente externo como Nextui probar colocando "use client"  

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

