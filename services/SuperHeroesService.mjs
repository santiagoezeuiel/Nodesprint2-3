import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export async function obtenerSuperHeroePorId($id){
    return await SuperHeroRepository.obtenerId($id);
}

export async function obtenerTodosLosSuperHeroes() {
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperHeroesPorAtributo(atributo, valor){
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperHeroesMayoresDe30(){
    return await SuperHeroRepository.obtenerMayoresDe30();
}

//----------- nuevas funciones  ------------------------------------------------------- 
export async function insertSuperHero(req, res){
    return await SuperHeroRepository.insertSuperHero(req, res);
}

export async function updateSuperHeroes(req, res){
    try {
        return await SuperHeroRepository.updateSuperHeroe(req, res);

    } catch (error) {
        throw new Error("Error en el services al actualizar el Superheroe: " + error.message);
    }
}

export async function deleteSuperHeroes(req, res){
    try {
        return await SuperHeroRepository.eliminarSuperHeroe(req, res);
    } catch (error) {
        throw new Error("Error en el services al eliminar el Superheroe: " + error.message);
    }
}

export async function deleteByNameSuperHeroes(name){
    try {
        return await SuperHeroRepository.eliminarByNameSuperHeroe(name);
    } catch (error) {
        throw new Error("Error en el services al eliminar el Superheroe por su Nombre: " + error.message);
    }
}