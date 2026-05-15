# Travel API - NestJS


## Documentación y README de durante el parcial

### Guía de ejecución
1. Debe clonar el repositorio:
```bash
git clone URL_DEL_REPOSITORIO
```
2. Debe Entrar a la carpeta del proyecto:
```bash
cd travel-api
```
3. Debe instalar dependencias:
```bash
npm install
```
4. Debe ejecutar la aplicación:
```bash
npm run start:dev
```
Y listo, la API queda corriendo en:
```txt
http://localhost:3000
```
Y asi mismo la base de datos SQLite se genera automaticamente al iniciar el proyecto

### Reporte de Cambios

En este parcial se hicieron cambios segun lo que se solicitaba, para la gestion de gastos se agrego el campo expenses en la entidad de TravelPlan usando un arreglo embebido con tipo simple-json. Cada vez que se agrega un gasto desde el endpoint travel-plans/:id/expenses, el sistema busca el plan existente, agrega el nuevo objeto al arreglo de gastos y luego guarda de nuevo el objeto actualizado en SQLite

------------------------------------


## Descripción General

Este proyecto consiste en una API REST desarrollada en NestJS para la gestión de planes de viaje. La aplicación permite crear, consultar y eliminar planes de viaje asociados a diferentes países.

El sistema implementa una arquitectura modular y utiliza una lógica de caché local para manejar la información de países. Antes de consumir la API externa RestCountries, el sistema verifica si el país ya existe en la base de datos local para evitar solicitudes innecesarias.

---

# Tecnologías Utilizadas

- NestJS
- TypeScript
- TypeORM
- SQLite
- Axios / HttpModule
- class-validator
- RestCountries API

---

# Instalación del Proyecto

## 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

## 2. Entrar al proyecto

```bash
cd travel-api
```

## 3. Instalar dependencias

```bash
npm install
```

## 4. Ejecutar la aplicación

```bash
npm run start:dev
```

La aplicación quedará disponible en:

```txt
http://localhost:3000
```

---

# Arquitectura del Proyecto

El proyecto está dividido en dos módulos principales:

## CountriesModule

Este módulo se encarga de manejar toda la lógica relacionada con los países.

Características:
- No expone endpoints públicos.
- Implementa lógica de caché local.
- Consulta la base de datos antes de consumir la API externa.
- Utiliza un Provider especializado para consumir RestCountries.

### Flujo de caché

1. El sistema recibe un código Alpha-3 del país.
2. Se busca el país en la base de datos local.
3. Si el país existe:
   - se reutiliza la información local.
4. Si el país no existe:
   - se consume la API RestCountries.
   - se almacena el país en SQLite.
   - se retorna la información obtenida.

Esto evita realizar llamadas repetidas a la API externa y mejora el rendimiento del sistema.

---

## TravelPlansModule

Este módulo expone los endpoints públicos de la aplicación para la gestión de planes de viaje.

Responsabilidades:
- Crear planes de viaje.
- Consultar planes registrados.
- Consultar un plan específico.
- Eliminar planes existentes.
- Comunicarse internamente con CountriesModule para validar y resolver países.

---

# Endpoints Disponibles

## Crear un plan de viaje

### Endpoint

```http
POST /travel-plans
```

### URL completa

```txt
http://localhost:3000/travel-plans
```

### Body JSON

```json
{
  "title": "Viaje a Colombia",
  "startDate": "2026-06-01",
  "endDate": "2026-06-10",
  "destinationCountryCode": "COL"
}
```

---

## Obtener todos los planes

### Endpoint

```http
GET /travel-plans
```

### URL completa

```txt
http://localhost:3000/travel-plans
```

---

## Obtener un plan por ID

### Endpoint

```http
GET /travel-plans/:id
```

### Ejemplo

```txt
http://localhost:3000/travel-plans/1
```

---

## Eliminar un plan

### Endpoint

```http
DELETE /travel-plans/:id
```

### Ejemplo

```txt
http://localhost:3000/travel-plans/1
```

---

# Validación de Datos

El proyecto utiliza DTOs y class-validator para validar las entradas del sistema.

Validaciones implementadas:
- Campos obligatorios.
- Validación de fechas.
- Validación del código Alpha-3 del país.

---

# Persistencia de Datos

La aplicación utiliza SQLite como base de datos local junto con TypeORM para la gestión de entidades y persistencia.

Las entidades principales son:
- Country
- TravelPlan

---

# API Externa Utilizada

El sistema consume información de países desde:

```txt
https://restcountries.com
```

---

# Autor

Proyecto desarrollado para el Pre-Parcial de Programación con Tecnologías Web.


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
