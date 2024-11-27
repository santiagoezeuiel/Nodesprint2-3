import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superheroesRoutes from './routes/superHeroRoutes.mjs';

const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();

app.use('/api', superheroesRoutes);

app.use((req, res) => {
  res.status(404).send({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  console.log(`Servidor Carriendo en http://localhost:${PORT}`);
  console.log(`Ctrl+C para bajar servidor`);
});