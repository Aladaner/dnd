import { useEffect, useState } from 'react';
import './scrollToTop.css';

const ScrollToTopButton = () => {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const toogleVisibility = () => {
			if (window.pageYOffset > 300) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		};

		window.addEventListener('scroll', toogleVisibility);
		return () => window.removeEventListener('scroll', toogleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	if (!visible) return null;

	return (
		<button
			className="scroll-to-top"
			onClick={scrollToTop}
			aria-label="Scroll to top"
		>
			↑
		</button>
	);
};

export default ScrollToTopButton;
