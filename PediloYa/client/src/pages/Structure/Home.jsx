
import { Typography, Grid, Card, CardContent, Container, Button } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import UserNavbar from '../Headers/UserNavbar';


const Home = () => {

	return (

		<div>

			<UserNavbar></UserNavbar>

			<Container sx={{ textAlign: 'center', mt: 5}}>

				<Typography variant='h4' gutterBottom>
					Hola. ¿Qué vas a pedir hoy?
				</Typography>

				<Grid container spacing={3} justifyContent='center' sx={{ mt: 3}}>

					{/* Restaurantes */}
					<Grid item xs={12} sm={6} md={3}>
						
						<Card sx={{ backgroundColor: '#fff8e1', textAlign: 'center' }}>
							<CardContent >
								<Button sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2px'}}>
									<FastfoodIcon color='primary' sx={{ fontSize: 50 }}></FastfoodIcon>
									<Typography variant="h6">Restaurantes</Typography>
								</Button>
							</CardContent>
						</Card>

					</Grid>

					{/* Mercados */ }
					<Grid item xs={12} sm={6} md={3}>
						
						<Card sx={{ backgroundColor: '#e0f7fa', textAlign: 'center' }}>
							<CardContent>
								<LocalGroceryStoreIcon color='primary' sx={{ fontSize: 50 }}></LocalGroceryStoreIcon>
								<Typography variant="h6">Mercados</Typography>
							</CardContent>
						</Card>

					</Grid>

				</Grid>

			</Container>

			{/* Footer */}
			<footer style={styles.footer}>

				<Typography variant="subtitle1">
                    Todo lo que necesitás, te lo llevamos!
                </Typography>

                <Typography variant="body2" color="textSecondary">
                    En PedidosYa podés dejar volar tu imaginación porque ahora todo lo que quieras lo llevamos directo desde tu cabeza a donde estés, en minutos!
                </Typography>

			</footer>

		</div>
	);
}

const styles = {

	footer: {
		position: 'absolute',
		bottom: 0, 
		padding: '20px', 
		backgroundColor: '#f5f5f5', 
		textAlign: 'center',
		width: '97%'
	}
}

export default Home;