import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';



function App() {
	return (
		<>
		<div className="background-image"></div>
		<Header />
		<Outlet />
		<Footer />
		</>
	);
};

export default App;
