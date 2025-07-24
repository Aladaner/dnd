import './footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<p>
				© {new Date().getFullYear()} —{' '}
				<a
					href="https://github.com/Aladaner/dnd"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub репозиторий
				</a>
			</p>
		</footer>
	);
};

export default Footer;
