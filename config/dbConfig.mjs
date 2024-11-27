import { url } from 'inspector';
import mongoose from 'mongoose';


const grupo = 'mongodb+srv://Grupo-17:grupo17@cursadanodejs.ls9ii.mongodb.net/Node.js';

/*export async function connectDB(){
    try{
        await mongoose.connect(grupo, {
            userNewUrlParser : true,
            useUnifiedTopology : true,
        })
        console.log('conexion exitosa a MongoDB');
    }
    catch (error) {
        console.error('Error al conectar a MongoDB: ', error);
        process.exit(1);
    }
}*/



/*const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://Grupo-17:grupo17@cursadanodejs.ls9ii.mongodb.net/Node.js', {
            useNewUrlParser: true, // Correcto
            useUnifiedTopology: true, // Opcional, pero recomendado
        });
        console.log(`MongoDB conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error al conectar a MongoDB: `, error);
        process.exit(1); // Salir si falla la conexión
    }
};

export default connectDB;*/

export const connectDB = async () => {
    try {
      const connection = await mongoose.connect('mongodb+srv://Grupo-17:grupo17@cursadanodejs.ls9ii.mongodb.net/Node-js', {
      });
      console.log('Conexión exitosa a MongoDB');
    } catch (error) {
      console.error('Error al conectar a MongoDB:', error);
      process.exit(1);
    }
  };
