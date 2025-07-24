import Footer from './components/footer/Footer';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton';
import Home from './pages/Home';
import './styles/main.css';
function App() {
	return (
		<>
			<Home />
			<ScrollToTopButton />
			<Footer />
		</>
	);
}

export default App;
