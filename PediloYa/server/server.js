import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import conectarDB from './config/mongoose.config.js';
import UserRoutes from './src/routes/UserRoutes.js';
import SessionRoutes from './src/routes/SessionRoutes.js';
import RestaurantesRoutes from './src/routes/RestaurantesRoutes.js'

dotenv.config();  //Variables de entorno
const app = express();  //Creamos nuestra instancia del servidor
const PORT = process.env.PORT; 

//MIDDLEWARES
app.use(express.json()); 
app.use(cookieParser());

app.use(cors(
	{
		origin: 'http://localhost:5173',
		credentials: true,
	}
));  //CONFIGURACION DE POLITICAS DE CORS

//RUTAS
app.use('/api/users', UserRoutes);
app.use('/api/session', SessionRoutes);
app.use('/api/restaurantes', RestaurantesRoutes)

conectarDB();

app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});