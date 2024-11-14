import { useEffect, useState } from "react"
import UserNavbar from "../Headers/UserNavbar";
import {
    Typography,
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    TextField,
    Container,
    Box,
    Paper,
    IconButton,
  } from "@mui/material";
  import { Star, Search } from "@mui/icons-material";
  import axios from "axios";
  

const Restaurantes = () => {

    const [restaurantes, setRestaurantes] = useState([]);

    const fetchRestaurantes = async () => {
        try {
            const response = await axios.get("/api/restaurantes");
			const data = response.data;
			setRestaurantes(data); // Guardamos los usuarios en el estado
        } catch (error) {
            console.error("Error al obtener los restaurantes", error);
        }
    }

    useEffect(()=>{
        fetchRestaurantes();
    },[])

    const handleDelete = async (restauranteId) => {
		try {
			const response = await axios.delete(`/api/users/${restauranteId}`);
			console.log('Restaurante eliminado', response.data);
			fetchRestaurantes();
		} catch (error) {
			console.error('Error al eliminar el restaurante', error);
		}
	};

    return(
        <>
            <UserNavbar/>
            <Container sx={{ mt: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Lista de Restaurantes
                </Typography>

                {/* Barra de búsqueda */}
                <Box display="flex" justifyContent="center" mb={4}>
                    <TextField
                    variant="outlined"
                    placeholder="Buscar..."
                    InputProps={{
                        endAdornment: (
                        <IconButton>
                            <Search />
                        </IconButton>
                        ),
                    }}
                    sx={{ width: 400 }}
                    />
                </Box>

                <Grid container spacing={2}>
                    {restaurantes.map((restaurant, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card variant="outlined" sx={{ margin: "12px", padding: "12px" }}>
                                <Box display="flex">
                                    {/* Imagen del restaurante */}
                                    <CardMedia
                                        component="img"
                                        sx={{
                                        width: 120,
                                        height: "120px", // Tamaño de la imagen
                                        borderRadius: 5,
                                        objectFit: "cover", // Asegura que la imagen mantenga su aspecto
                                        }}
                                        image={restaurant.urlImg} // URL de la imagen desde la base de datos
                                        alt={restaurant.nombre} // Texto alternativo en caso de que la imagen falle
                                    />
                                    <CardContent sx={{ }}>
                                        <Box display="flex" justifyContent="space-between">
                                        <Box>
                                            <Typography variant="h6" gutterBottom>
                                                {restaurant.nombre}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {restaurant.deliveryTime} Min
                                            </Typography>
                                        </Box>
                                            <Box display="flex" alignItems="center">
                                                <Star color="primary" />
                                                <Typography variant="body1">{restaurant.valoracion}</Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default Restaurantes;