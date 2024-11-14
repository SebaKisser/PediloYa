import { useEffect, useState } from "react"
import UserNavbar from "../Headers/UserNavbar";


const Restaurantes = () => {

    const [restaurantes, setRestaurantes] = useState([]);

    const fetchRestaurantes = async () => {
        try {
            const response = await axios.get("/api/users");
			const data = response.data;
			setRestaurantes(data); // Guardamos los usuarios en el estado
        } catch (error) {
            console.error("Error al obtener los usuarios", error);
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
            
        </>
    )
}