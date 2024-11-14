import { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Typography, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Headers/Navbar';

const Login = () => {

	const [loginForm, setLoginForm] = useState( {email: '', password: ''});
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const handleChange =(e) => {
		setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		try {

			const response = await axios.post('/api/session', loginForm, { withCredentials: true });
			const data = response.data;
			const status = response.status;
			console.log(data, status);

			setErrors({});
			navigate('/home');  //Redirigimos a pagina Home
		}
		catch(error){
			if(error.response && error.response.data && error.response.data.errors){
				setErrors(error.response.data.errors || {});
			}
			console.log('Error:', error);
		}
	};


	return (

		<div>

			<Navbar></Navbar>
			
			<Box sx={{ width: '300px', margin: 'auto', paddingTop: '50px' }}>

				<Box sx={styles.loginContainer}>

					<Typography variant='h5' component='h1' sx={{fontWeight: 'bold'}}>
						Login
					</Typography>

				</Box>

				<Box sx={styles.outForm}>

					<form onSubmit={handleLogin} style={styles.formDisplay}>

						<TextField
							label='Email'
							type='email'
							name='email'
							placeholder='example@gmail.com'
							value={loginForm.email || ''}
							onChange={handleChange}
							error={errors.email ? true : false} 
							helperText={errors.email ? errors.email : ''}
						></TextField>

						<TextField
							label='Password'
							name='password'
							type='password'
							value={loginForm.password || ''}
							onChange={handleChange}
							error={errors.password ? true : false}
							helperText={errors.password ? errors.password : ''}
						></TextField>

						<Button type='submit' variant='contained' sx={styles.button}>
							Login
						</Button>

					</form>

					<Typography variant='body2' align='center' sx={{ marginTop: '15px'}}>
						Si no tiene una cuenta, registrese 
						<Link href='/' sx={{ color: '#ff3366', fontWeight: 'bold', marginLeft: '5px'}}>
							aquí
						</Link>
					</Typography>

				</Box>
			</Box>
		</div>
	);
};

const styles = {

	formDisplay: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: '20px'
	},

	loginContainer: {
		backgroundColor: '#ff3366',
		color: 'white',
		borderTopLeftRadius: '10px',
		borderTopRightRadius: '10px',
		padding: '20px',
		textAlign: 'center'
	},

	outForm: {
		backgroundColor: 'white',
		padding: '30px',
		borderBottomLeftRadius: '10px',
		borderBottomRightRadius: '10px',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
	},

	button: {
		backgroundColor: '#ff3366', 
		marginTop: '20px'
	}
}

export default Login;