<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>

</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Authors

<p>
    <img
      alt="alejjb Github Avatar" 
      width="80" 
      src="https://github.com/alejjb.png?size=80"
    >
      Alejandro Jauregui
	<p>
    <img
      alt="firstguzman Github Avatar" 
      width="80" 
      src="https://github.com/firstguzman.png?size=80"
    >
        Cesar Guzman
	<p>
    <img
      alt="YkBastidas Github Avatar" 
      width="80" 
      src="https://github.com/YkBastidas.png?size=80"
    >
        Yorfrank Bastidas
    
## Routes
    
### GET:
    
#### /api-nest/employers

	Returns array of employer
	example: [{
    "id": 1,
    "name": "Citrus"
  },
    
  {
    "id": 2,
    "name": "Microsoft"
  },]

#### /api-nest/job-offers

	Returns array of job-offers with all its attributes
	example:[{
    "id": 1,
    "name": "Job Offer One",
    "description": "Test description",
    "available_vacans": 10,
    "date_begin": "2021-07-01",
    "date_end": "2021-08-01",
    "status": "Published",
    "gender": "M",
    "salary": 1900,
    "min_age": null,
    "max_age": null,
    "creador": {
      "id": 1,
      "name": {
        "props": {
          "value": "Citrus"
        }
      }
    }
  },]

#### api-nest/job-offers/employers/:employerId
    
	Returns array of job-offers with all its attributes given the id of an existing employer
	example:[ {
    "id": 1,
    "name": "Job Offer One",
    "description": "Test description",
    "available_vacans": 10,
    "date_begin": "2021-07-01",
    "date_end": "2021-08-01",
    "status": "Published",
    "gender": "M",
    "salary": 1900,
    "min_age": null,
    "max_age": null,
    "creador": {
      "id": 1,
      "name": {
        "props": {
          "value": "Citrus"
        }
      }
    }
  },]
    
### POST:
    
#### api-nest/job-offers/:employerId

	Creates a job-offers given the id of an existing employer, receives the job-offer data to be created as a body,
    returns the job-offer created
	example: {
    "id": 1,
    "name": "Job Offer One",
    "description": "Test description",
    "available_vacans": 10,
    "date_begin": "2021-07-01",
    "date_end": "2021-08-01",
    "status": "Published",
    "gender": "M",
    "salary": 1900,
    "min_age": null, //opcional
    "max_age": null,//opcional
    "creador": {
      "id": 1,
      "name": {
        "props": {
          "value": "Citrus"
        }
      }
    }
  }

### PUT:
    
#### /api-nest/job-offers/:jobOfferId
    
modifies the status of the job Offer with the received id from 'Hidden' to 'Published' and from 'Published' to 'Hidden',
    returns a string that gives the response to the request
