import { 
    obtenerTodosLosSuperHeroesController,  
    obtenerSuperHeroePorIdController, 
    buscarSuperheroesPorAtributoController,
    obtenerSuperHeroesMayoresDe30Controller,
  // nuevos endpoints
    insertSuperHeroesController,
    updateSuperHeroesController,
    eliminarSuperHeroesController,
    eliminarByNameSuperHeroesController 
  } from '../controllers/superheroesController.mjs';

  import express from 'express';
  
  console.log('Entro a la lista de los endpoinds');
  
  const router = express.Router();
  
  // correr con postman
  
  router.get('/super', obtenerTodosLosSuperHeroesController);
  router.get('/super/:id', obtenerSuperHeroePorIdController);
  router.get('/super/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
  router.get('/super/buscar/mayores30', obtenerSuperHeroesMayoresDe30Controller);
  
  //nuevos endpoint agregados del Sprint3
  console.log('Cargo los nuevos endpoinds');
  
  router.post('/alta', insertSuperHeroesController);  //ok
  router.put('/super/update/:id', updateSuperHeroesController);  // ok
  router.delete('/super/delete/:id', eliminarSuperHeroesController);  // ok
  router.delete('/super/deleteByName/:name', eliminarByNameSuperHeroesController);  // ok
  
  
  export default router;