import { useState } from "react";
import axios from 'axios';
import { Box, TextField, Typography, Button, Paper} from '@mui/material';
import { useNavigate } from "react-router-dom";
import Navbar from "../Headers/Navbar";

const initialState = {
	nombre: '',
	apellido: '',
	email: '',
	password: '',
	confirmPassword: ''
};

const Register = () => {

	const [form, setForm] = useState(initialState);

	const [errors, setErrors] = useState({});

	const navigate = useNavigate();

	const handleRegister = async (e) => {

		e.preventDefault();

		try {
			const response = await axios.post('http://localhost:8000/api/users', form);
			const data = response.data;
			console.log(data);
			setErrors({});
			setForm(initialState);
			navigate('/login');
		}
		catch(error){
			if (error.response && error.response.data) {
				setErrors(error.response.data.errors);
			}
		}
	};

	const handleChange =  (e) => {
		setForm({ ...form, [e.target.name]: e.target.value});
	}


	return (
		
		<div style={styles.container}>

			<Box sx={styles.header}>
				<Navbar></Navbar>
			</Box>

			<Paper elevation={3} sx={styles.formContainer}>

				<Box sx={styles.logoBox}>
					<Typography variant='h5' component='div' sx={styles.logoText}>
						PediloYa
					</Typography>
				</Box>

				<form onSubmit={handleRegister} style={styles.formDisplay}>

					<TextField
						label='Nombre'
						name='nombre'
						value={form.nombre}
						onChange={handleChange}
						error={errors.nombre}
						helperText={errors.nombre ? errors.nombre.message : ''}
					></TextField>

					<TextField
						label='Apellido'
						name='apellido'
						value={form.apellido}
						onChange={handleChange}
						error={errors.apellido}
						helperText={errors.apellido ? errors.apellido.message : ''}
					></TextField>

					<TextField
						label='Email'
						name='email'
						value={form.email}
						onChange={handleChange}
						error={errors.email}
						helperText={errors.email ? errors.email.message : ''}
					></TextField>

					<TextField
						label='Password'
						name='password'
						type='password'
						value={form.password}
						onChange={handleChange}
						error={errors.password}
						helperText={errors.password ? errors.password.message : ''}
					></TextField>

					<TextField
						label='Confirm Password'
						name='confirmPassword'
						type='password'
						value={form.confirmPassword}
						onChange={handleChange}
						error={errors.confirmPassword}
						helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
					></TextField>

					<Button type='submit' variant='contained' color='primary' sx={styles.submitButton}>
						Registrarse
					</Button>

				</form>
			</Paper>
		</div>
	);
}

const styles = {

	formDisplay: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: '20px',
	},

	container: {
		backgroundColor: '#ff3366',
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},

	header: {
		width: '100%',
		height: '200px',
		backgroundColor: '#ff3366',
	},

	formContainer: {
		width: '400px',
		padding: '30px',
		borderRadius: '8px',
		textAlign: 'center',
		backgroundColor: 'white',
	},

	logoBox: {
		backgroundColor: '#ff3366',
		padding: '15px 0',
		borderTopLeftRadius: '8px',
		borderTopRightRadius: '8px',
		marginBottom: '20px',
	},

	logoText: {
		color: 'white',
		fontWeight: 'bold',
	},

	submitButton: {
		backgroundColor: '#ff3366',
		color: 'white'
	}
}

export default Register;