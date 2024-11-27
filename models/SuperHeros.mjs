import mongoose from 'mongoose';



const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe : { type : String, requiered : true },
    nombreReal : { type : String, requiered : true },
    edad : { type : Number, min : 0 },
    planetaOrigen : { type : String, default : 'Desconcido' },
    debilidad : String,
    poderes : [ String ],
    aliados : [ String ],
    enemigos : [ String ],
    createdAt : { type : Date, default : Date.now},
}, { collection : 'Grupo-17'});

const SuperHero =  mongoose.model('SuperHero', superheroSchema);

export default SuperHero;