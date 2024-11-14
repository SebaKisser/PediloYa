
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Session/Register';
import Login from "./pages/Session/Login";
import UserList from "./pages/User/UserList";
import Home from "./pages/Structure/Home";


const App = () => {

	return (
		<BrowserRouter>

			<Routes>
				<Route path='/' element={<Register></Register>}></Route>
				<Route path='/login' element={<Login></Login>}></Route>
				<Route path='/users' element={<UserList></UserList>}></Route>
				<Route path='/home' element={<Home></Home>}></Route>
			</Routes>

		</BrowserRouter>
	);
}

export default App;
