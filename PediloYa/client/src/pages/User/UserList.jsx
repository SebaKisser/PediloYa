
import {useEffect, useState} from "react";
import axios from "axios";
import { Typography, Button, TableContainer, Paper, TableHead, TableRow, TableCell, Table, TableBody} from "@mui/material";
import UserNavbar from "../Headers/UserNavbar";

const UserList = () => {
    const [usuarios, setUsuarios] = useState([]);

	const fetchUsuarios = async () => {
		try {
			const response = await axios.get("http://localhost:8000/api/users");
			const data = response.data;
			setUsuarios(data); // Guardamos los usuarios en el estado
		} catch (error) {
			console.error("Error al obtener los usuarios", error);
		}
	};


    // Obtener los usuarios cuando el componente se monta
    useEffect(() => {
        fetchUsuarios(); // Llamada a la API para obtener los usuarios		
    }, []);


	const handleDelete = async (userId) => {
		try {
			const response = await axios.delete(`http://localhost:8000/api/users/${userId}`);
			console.log('Usuario eliminado', response.data);
			fetchUsuarios();
		} catch (error) {
			console.error('Error al eliminar el usuario', error);
		}
	};


    return (
        <div>
			
			<UserNavbar></UserNavbar>

			<Typography variant='h4' component='h2' sx={{ mt: 4, mb: 2, textAlign: 'center'}}>
				Lista de Usuarios
			</Typography>

			<TableContainer component={Paper} sx={{ maxWidth: 800, margin: '0 auto'}}>
				
				<Table>

					<TableHead>
						<TableRow>
							<TableCell>Usuario</TableCell>
							<TableCell>Detalle</TableCell>
							<TableCell>Eliminar</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>

						{usuarios.map( (usuario, index) => (

							<TableRow key={index}>

								<TableCell>{usuario.nombre}</TableCell>

								<TableCell>
									<Button variant="outlined" color="primary">
										Ver usuario
									</Button>
								</TableCell>

								<TableCell>
									<Button variant='outlined' color="primary" onClick={() => handleDelete(usuario._id)}>
										Eliminar
									</Button>
								</TableCell>

							</TableRow>
						))}

					</TableBody>

				</Table>

			</TableContainer> 

		</div>
    );
};

export default UserList;
