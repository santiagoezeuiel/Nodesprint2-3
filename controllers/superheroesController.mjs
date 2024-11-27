import { 
    obtenerSuperHeroePorId, 
    obtenerTodosLosSuperHeroes, 
    buscarSuperHeroesPorAtributo, 
    obtenerSuperHeroesMayoresDe30, 
    insertSuperHero,
    updateSuperHeroes, 
    deleteSuperHeroes , 
    deleteByNameSuperHeroes 
  } from '../services/SuperHeroesService.mjs';
  
  import {
    renderizarSuperheroe, 
    renderizarListaSuperheroes 
  } from '../views/reponseView.mjs';
  
  
  export async function obtenerSuperHeroePorIdController(req, res){
    const { id } = req.params;
    const superheroe = await obtenerSuperHeroePorId(id);
    
    if(superheroe){
  
        res.send(renderizarSuperheroe(superheroe));
  
    }
    else{
        res.status(404).send({mensaje: "Superheroe no encontrado"});
    }
  }
  
  export async function obtenerTodosLosSuperHeroesController(req, res){
    const superheroes = await obtenerTodosLosSuperHeroes();
  
     // Renderiza y formatea la lista de superhéroes
    const listaRenderizada = renderizarListaSuperheroes(superheroes);
    // Envía la respuesta como JSON
    res.json(listaRenderizada);
  }
  
  export async function buscarSuperheroesPorAtributoController(req, res){
    const {atributo, valor} = req.params;
    const superheroes = await buscarSuperHeroesPorAtributo(atributo, valor);
  
    if(superheroes.length > 0){
        res.send(renderizarListaSuperheroes(superheroes));
    }
    else{
        res.status(404).send({mensaje: "No se encontraron Superheroes con ese atributo"});
    }
  }
  
  export async function obtenerSuperHeroesMayoresDe30Controller(req, res){
    //console.log(`Método: ${req.method}, Ruta: ${req.path}`);
    const superheroes = await obtenerSuperHeroesMayoresDe30();
    res.send(renderizarListaSuperheroes(superheroes));
  }
  
  export async function insertSuperHeroesController(req, res){  
    try {
        const superhero = await insertSuperHero(req, res);
        const renderizado = renderizarSuperheroe(superhero); 
        res.status(201).send(renderizado); 
  
    } catch (error) {
        console.error("Error en el controlador insertSuperHeroes:", error.message);
        res.status(500).send({ error: "Error al insertar el nuevo superheroe" });
    }
  }
  
  export async function updateSuperHeroesController(req, res){
    try {
        const superheroe = await updateSuperHeroes(req, res);
        if (!superheroe) {
            return res.status(404).send({ error: 'Superhéroe no encontrado' });
        }
        const superheroeRenderizado = renderizarSuperheroe(superheroe);
        res.status(200).send(superheroeRenderizado);
    } catch (error) {
        console.error("Error en el controlador:", error.message);
        res.status(500).send({ error: "Error al actualizar el superhéroe" });
    }
  }
  
  export async function eliminarSuperHeroesController(req, res){
    try {
        const superheroe = await deleteSuperHeroes(req, res);
        const superheroeRenderizado = renderizarSuperheroe(superheroe);
        res.status(200).send(superheroeRenderizado);
    } catch (error) {
        console.error("Error en el controlador:", error.message);
        res.status(500).send({ error: 'Error al eliminar el superhéroe' });
    }
  }
  
  export async function eliminarByNameSuperHeroesController(req, res) {
    try {
        const { name } = req.params;
  
        if (!name) {
          return res.status(400).send({ error: "El nombre del superhéroe es requerido." });
        }
  
        const superheroe = await deleteByNameSuperHeroes(name);
        const superheroeRenderizado = renderizarSuperheroe(superheroe); // Si esta función existe.
        res.status(200).send(superheroeRenderizado);
    } catch (error) {
        console.error("Error en el controlador:", error.message);
  
        if (error.message.includes("no encontrado")) {
            return res.status(404).send({ error: error.message });
        }
  
        res.status(500).send({ error: "Error al eliminar el superhéroe por su nombre (500)" });
    }
  }
  /*
  export async function eliminarByNameSuperHeroesController(req, res){
    try {
        const {name} = req.params;
        const superheroe = await deleteByNameSuperHeroes(name);
        const superheroeRenderizado = renderizarSuperheroe(superheroe);
        res.status(200).send(superheroeRenderizado);
    } catch (error) {
        console.error("Error en el controlador:", error.message);
        res.status(500).send({ error: 'Error al eliminar el superhéroe por su Nombre Satutus 500'});
    }
  }
    */